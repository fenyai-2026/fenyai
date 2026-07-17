/**
 * 生成「历史死链 → 新页面」的静态跳转文件（软 301）。
 *
 * 背景：本站部署在 EdgeOne Pages，_redirects（Netlify 格式）与 functions 中间件均未生效，
 * 导致迁移前的老 URL（文章旧 UUID、*.html 页面）被搜索引擎收录后变成死链或跳首页。
 * 本脚本在 dist 下为每个老 URL 生成一个「渲染真实目标内容」的静态 HTML：
 *   - 页面类：直接写入目标路由的真实标题/描述/H1/正文（让百度爬虫不依赖 JS 即抓到正确内容）
 *   - 文章类：写入文章真实标题/摘要/分类
 *   - 统一：<link rel="canonical" href="目标"> 作为软 301 信号
 *            + <meta http-equiv="refresh"> + JS location.replace 兜底跳转
 *            + 顶部「已迁移」提示条与「点击前往新页面」链接（防跳转失败 + 提升体验）
 * 该脚本会在每次 SSG 构建时由 ssg.js 调用；也可单独运行（node scripts/gen-legacy-redirects.js）。
 */
const fs = require('fs');
const path = require('path');

const DIST = path.join(__dirname, '..', 'dist');
const BASE = 'https://www.fenyai.com';

// HTML 转义（标题/描述进 <title>/<meta>，防止注入破坏结构；因不可 require ssg.js，本地实现）
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// 与 ssg.js 中 articleUrl 保持一致的编码逻辑
function articleUrl(article) {
  const raw = article.slug || article.id;
  let enc = encodeURIComponent(raw);
  const MAX = 235;
  if (enc.length > MAX) {
    let cut = enc.lastIndexOf('%', MAX);
    if (cut < 0) cut = MAX;
    enc = enc.slice(0, cut) + '-' + String(article.id).slice(-4);
  }
  return 'article/' + enc;
}

// 与当前有效路由冲突的 slug 集合：生成 .html 跳转文件时若去掉 .html 后命中这些目录，
// EdgeOne 对 /xxx 的请求可能优先返回 /xxx.html 导致死循环或覆盖正常页面。
const RESERVED_ROUTES = new Set([
  'about', 'contact', 'products', 'solutions', 'pricing', 'articles', 'faq', 'trial',
  'ai-agent', 'ai-call', 'demo-showcase', 'scrm', 'live-code', 'mass-send', 'juhe-chat',
  'session-archive', 'weimo', 'sop', 'robot', 'cloud-phone', 'growth', 'whitepaper',
  'compare', 'open-platform', 'message-channel', 'resources',
]);

// 老页面 slug -> 新路由（仅含“确为老命名 / .html 后缀”的键，避免覆盖现有有效路由）
const PAGE_REDIRECTS = {
  // .html 后缀（老站点最常见死链形态）
  'aboutus.html': '/about',
  'about.html': '/about',
  'contactus.html': '/contact',
  'contact.html': '/contact',
  'products.html': '/products',
  'solutions.html': '/solutions',
  'pricing.html': '/pricing',
  'faq.html': '/faq',
  'articles.html': '/articles',
  'blog.html': '/articles',
  'scrm.html': '/scrm',
  'live-code.html': '/live-code',
  'mass-send.html': '/mass-send',
  'juhe-chat.html': '/juhe-chat',
  'session-archive.html': '/session-archive',
  'growth.html': '/growth',
  'ai-call.html': '/ai-call',
  'ai-agent.html': '/ai-agent',
  'open-platform.html': '/open-platform',
  'message-channel.html': '/message-channel',
  'resources.html': '/resources',
  'trial.html': '/trial',
  'weimo.html': '/weimo',
  'sop.html': '/sop',
  'robot.html': '/robot',
  'cloud-phone.html': '/cloud-phone',
  'demo-showcase.html': '/demo-showcase',
  'whitepaper.html': '/whitepaper',
  'compare.html': '/compare',
  'demo.html': '/demo-showcase',
  'drainage.html': '/growth',
  'joinus.html': '/about',
  // 老命名（无后缀），不与现有有效路由冲突
  'aboutus': '/about',
  'contactus': '/contact',
  'product': '/products',
  'solution': '/solutions',
  'price': '/pricing',
  'help': '/faq',
  'blog': '/articles',
  'news': '/articles',
  'livecode': '/live-code',
  'masssend': '/mass-send',
  'juhechat': '/juhe-chat',
  'sessionarchive': '/session-archive',
  'aicall': '/ai-call',
  'aiagent': '/ai-agent',
  'openplatform': '/open-platform',
  'messagechannel': '/message-channel',
  'cloudphone': '/cloud-phone',
  'white-paper': '/whitepaper',
  'showcase': '/demo-showcase',
  'drainage': '/growth',
  'joinus': '/about',
};

// 全站校验 meta（与 ssg.js generateHTML 保持一致，避免验证标签丢失）
const VERIFY_METAS = `
  <meta name="baidu-site-verification" content="codeva-DHMjhEQXnT" />
  <meta name="360-site-verification" content="368c63a6fb9755135cc510b8367d28c5" />
  <meta name="msvalidate.01" content="78DF27E53F72550D089DB668B4449793" />
  <meta name="sogou_site_verification" content="PSUcgYbLcF" />`;

// 渲染「真实内容 + 软 301」跳转页骨架。
// 入参：
//   title        —— 目标页真实 <title>
//   description  —— 目标页真实 meta description
//   h1          —— 正文 H1（缺省用 title 首段）
//   content      —— 预渲染正文 HTML（目标页真实内容，百度直接抓取）
//   canonical    —— 目标页权威 URL（软 301 信号）
//   ogImage     —— OG 分享图
//   target      —— 跳转目标（meta refresh + JS 兜底 + 提示条链接）
//   schemaType  —— 可选，注入对应 JSON-LD（页面用 WebPage，文章用 BlogPosting）
function renderRedirectPage({
  title, description, h1, content, canonical, ogImage, target, schemaType,
}) {
  const safeTitle = escapeHtml(title || '有机云');
  const safeDesc = escapeHtml(description || '');
  const safeH1 = escapeHtml(h1 || (title || '').split('_')[0] || '有机云');
  const safeContent = content || '';
  const safeOg = ogImage || 'https://www.fenyai.com/og-image.png';
  const safeTarget = escapeHtml(target || canonical || '/');
  const safeCanonical = escapeHtml(canonical || target || '/');

  // JSON-LD：软 301 场景下给目标页一个基础结构化描述，强化目标信号
  let jsonLd = '';
  const schema = schemaType === 'BlogPosting'
    ? {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        'headline': safeTitle,
        'description': safeDesc,
        'image': [safeOg],
        'author': { '@type': 'Organization', 'name': '有机云', 'url': 'https://www.fenyai.com' },
        'publisher': { '@type': 'Organization', 'name': '有机云', 'url': 'https://www.fenyai.com' },
      }
    : {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': safeTitle,
        'description': safeDesc,
        'url': safeCanonical,
      };
  jsonLd = '  <script type="application/ld+json">\n  ' + JSON.stringify(schema) + '\n  </script>';

  // 0 秒刷新 = 立即跳转；JS 兜底确保跳转执行
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
${VERIFY_METAS}
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${safeTitle}</title>
  <meta name="description" content="${safeDesc}">
  <meta name="keywords" content="企业微信SCRM,私域运营工具,客户管理系统,企业微信营销,私域流量">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${safeCanonical}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${safeCanonical}">
  <meta property="og:title" content="${safeTitle}">
  <meta property="og:description" content="${safeDesc}">
  <meta property="og:image" content="${safeOg}">
  <meta property="og:site_name" content="有机云">
  <meta property="og:locale" content="zh_CN">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="${safeCanonical}">
  <meta name="twitter:title" content="${safeTitle}">
  <meta name="twitter:description" content="${safeDesc}">
  <meta name="twitter:image" content="${safeOg}">
  <link rel="icon" type="image/png" href="/favicon.png">
  <meta http-equiv="refresh" content="0; url=${safeTarget}">
${jsonLd}
  <style>
    html, body { margin: 0; padding: 0; }
    .ssg-content {
      max-width: 1200px; margin: 0 auto; padding: 40px 20px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      color: #1a1a1a; line-height: 1.6;
    }
    .ssg-content h1 { font-size: 2.5rem; font-weight: 700; color: #0C4A6E; margin-bottom: 1rem; }
    .ssg-content h2 { font-size: 1.75rem; font-weight: 600; color: #0C4A6E; margin-top: 2rem; margin-bottom: 1rem; }
    .ssg-content h3 { font-size: 1.25rem; font-weight: 600; color: #0C4A6E; margin-top: 1.5rem; margin-bottom: 0.75rem; }
    .ssg-content p { font-size: 1.125rem; color: #4b5563; margin-bottom: 1.5rem; }
    .ssg-content ul { margin-bottom: 1.5rem; padding-left: 1.5rem; }
    .ssg-content li { margin-bottom: 0.5rem; color: #4b5563; }
    .ssg-content strong { color: #0C4A6E; }
    .ssg-content a { color: #0EA5E9; }
    .redirect-banner {
      position: sticky; top: 0; z-index: 10;
      background: #0EA5E9; color: #fff; text-align: center;
      padding: 10px 16px; font-size: 0.95rem;
    }
    .redirect-banner a { color: #fff; font-weight: 700; text-decoration: underline; }
  </style>
</head>
<body>
  <div class="redirect-banner">
    本页面已迁移至新地址，正在自动跳转… 若未跳转，请 <a href="${safeTarget}">点击前往新页面</a>
  </div>
  <article class="ssg-content">
    <h1>${safeH1}</h1>
    <p>${safeDesc}</p>
    ${safeContent}
  </article>
  <script>try{window.location.replace("${safeTarget}");}catch(e){window.location.href="${safeTarget}";}</script>
</body>
</html>`;
}

// Windows 长路径保护
function safeWrite(filePath, content) {
  let p = filePath;
  if (process.platform === 'win32' && p.charAt(1) === ':') {
    p = '\\\\?\\' + path.resolve(p);
  }
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content);
}

function loadArticles() {
  const candidates = [
    path.join(__dirname, '..', 'dist', 'articles.json'),
    path.join(__dirname, '..', 'public', 'articles.json'),
    path.join(__dirname, 'articles.local.json'),
    path.join(__dirname, '.article_cache.json'),
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) {
      try {
        const data = JSON.parse(fs.readFileSync(c, 'utf8'));
        const arr = Array.isArray(data) ? data : (data && data.articles) || [];
        if (arr.length) return { arr, src: c };
      } catch (e) { /* ignore */ }
    }
  }
  return { arr: [], src: null };
}

function generateLegacyRedirects(articles, routes) {
  if (!fs.existsSync(DIST)) fs.mkdirSync(DIST, { recursive: true });
  // routes 缺失时（standalone 运行）回退到共享数据源
  if (!routes || !Array.isArray(routes) || !routes.length) {
    try { routes = require('./ssg-routes'); } catch (e) { routes = []; }
  }
  const routeMap = new Map(routes.map(r => [r.path, r]));
  let count = 0;

  // 1) 文章旧 UUID -> slug：渲染文章真实标题/摘要的软跳转页
  const list = Array.isArray(articles) && articles.length ? articles : loadArticles().arr;
  for (const a of list) {
    const id = a && a.id;
    const slug = a && a.slug;
    if (!id || !slug) continue;
    // 仅当 id 是 UUID 形态且不等于 slug 时才需要跳转
    if (id === slug) continue;
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)) continue;
    const target = `${BASE}/${articleUrl(a)}`;
    const title = a.seo_title || a.title || '有机云私域运营干货';
    const description = (a.seo_description || a.summary || (a.content || '').replace(/<[^>]+>/g, '').trim().slice(0, 150) || '有机云私域运营干货').trim();
    const metaBits = [];
    if (a.category) metaBits.push(`<span>📂 ${escapeHtml(a.category)}</span>`);
    const metaHtml = metaBits.length ? `<div class="article-meta">${metaBits.join('')}</div>` : '';
    const content = `<h2>${escapeHtml(a.title || '')}</h2>${metaHtml}<p>${escapeHtml(description)}</p>`;
    safeWrite(
      path.join(DIST, 'article', id, 'index.html'),
      renderRedirectPage({
        title, description, h1: a.title, content, canonical: target, ogImage: BASE + '/og-image.png', target, schemaType: 'BlogPosting',
      })
    );
    count++;
  }

  // 2) 老页面 slug -> 新路由：渲染目标路由真实内容的软跳转页
  for (const [oldKey, newRoute] of Object.entries(PAGE_REDIRECTS)) {
    if (oldKey === 'index.html') continue; // 真实首页，禁止覆盖

    const target = `${BASE}${newRoute}`;
    const route = routeMap.get(newRoute) || {};
    const title = route.title || '有机云';
    const description = route.description || '';
    const h1 = route.h1 || (route.title || '').split('_')[0];
    const content = route.content || '';

    if (oldKey.endsWith('.html')) {
      const slugWithoutExt = oldKey.slice(0, -5);
      // 若该 .html 文件名与现有有效路由目录同名，EdgeOne 对 /slug 的请求可能优先返回 /slug.html，
      // 导致正常页面被覆盖甚至无限跳转；此类冲突老 URL 跳过不生成。
      if (RESERVED_ROUTES.has(slugWithoutExt)) {
        console.warn(`  跳过冲突老 URL（与现有路由同名）：${oldKey} → ${newRoute}`);
        continue;
      }
      safeWrite(
        path.join(DIST, oldKey),
        renderRedirectPage({ title, description, h1, content, canonical: target, ogImage: route.ogImage || (BASE + '/og-image.png'), target })
      );
    } else {
      safeWrite(
        path.join(DIST, oldKey, 'index.html'),
        renderRedirectPage({ title, description, h1, content, canonical: target, ogImage: route.ogImage || (BASE + '/og-image.png'), target })
      );
    }
    count++;
  }

  console.log(`✓ 生成历史死链「内容型软跳转」文件 ${count} 个（dist/ 下，部署后由 EdgeOne 静态返回，百度直接抓到真实内容）`);
  return count;
}

module.exports = { generateLegacyRedirects };

if (require.main === module) {
  const { arr, src } = loadArticles();
  console.log(`文章数据源：${src || '无'}（${arr.length} 篇）`);
  generateLegacyRedirects(arr);
}
