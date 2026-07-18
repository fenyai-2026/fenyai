// 主动提交「会话存档」相关词页到百度，加速收录。
// 通过 Meoo Edge Function 代理提交（避免本地直连百度中文乱码 / 跨域问题）。
// 百度每日配额仅 10 条；本脚本仅提交 7 个会话存档相关 /topic/ URL，占用 7 条配额。
// 用法（在本机、有网络的环境下执行）：
//   node scripts/submit-session-archive-pages.js
const fs = require('fs');
const path = require('path');

const EDGE_FN = 'https://nzvgai6r8knh.functions.meoo.host/baidu-submit';
// 精确匹配 7 个会话存档相关词页（不发其他词页，节省每日配额）
const SESSION_RE = /(session-archive|wecom-session-qc)/;

function extractSessionArchiveUrls(sitemapPath) {
  const content = fs.readFileSync(sitemapPath, 'utf-8');
  const urls = [];
  const re = /<loc>(.*?)<\/loc>/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    if (m[1].includes('/topic/') && SESSION_RE.test(m[1])) urls.push(m[1]);
  }
  return urls;
}

async function main() {
  const sitemap = path.join(__dirname, '..', 'public', 'sitemap.xml');
  const all = extractSessionArchiveUrls(sitemap);
  if (!all.length) {
    console.error('未在 public/sitemap.xml 中找到会话存档相关 /topic/ URL，请先运行 node scripts/ssg.js 生成。');
    process.exit(1);
  }
  console.log(`共 ${all.length} 个会话存档词页，本次提交全部 ${all.length} 个（百度每日配额 10 条）：`);
  all.forEach((u, i) => console.log(`  ${i + 1}. ${u}`));

  try {
    const res = await fetch(EDGE_FN, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ urls: all }),
    });
    const json = await res.json();
    if (json.success) {
      console.log(`✓ 提交成功 ${json.submittedCount} 条，剩余配额 ${json.remainQuota}`);
    } else {
      console.log(`✗ 失败：${json.error} - ${json.detail}`);
    }
  } catch (e) {
    console.log(`✗ 请求失败（请确认本机有网络）：${e.message}`);
    process.exit(2);
  }
}

main();
