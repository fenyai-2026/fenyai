// 主动提交「词页（/topic/*.html）」到百度，加速收录。
// 通过 Meoo Edge Function 代理提交（避免本地直连百度中文乱码 / 跨域问题）。
// 百度每日配额仅 10 条，本脚本每次运行只提交前 10 个 /topic/ URL。
// 用法（在本机、有网络的环境下执行）：
//   node scripts/submit-topic-pages.js
const fs = require('fs');
const path = require('path');

const EDGE_FN = 'https://nzvgai6r8knh.functions.meoo.host/baidu-submit';
const DAILY_QUOTA = 10;

function extractTopicUrls(sitemapPath) {
  const content = fs.readFileSync(sitemapPath, 'utf-8');
  const urls = [];
  const re = /<loc>(.*?)<\/loc>/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    if (m[1].includes('/topic/')) urls.push(m[1]);
  }
  return urls;
}

async function main() {
  const sitemap = path.join(__dirname, '..', 'public', 'sitemap.xml');
  const all = extractTopicUrls(sitemap);
  if (!all.length) {
    console.error('未在 public/sitemap.xml 中找到 /topic/ URL，请先运行 node scripts/ssg.js 生成。');
    process.exit(1);
  }
  const batch = all.slice(0, DAILY_QUOTA);
  console.log(`共 ${all.length} 个词页，本次提交前 ${batch.length} 个（百度每日配额 ${DAILY_QUOTA} 条）：`);
  batch.forEach((u, i) => console.log(`  ${i + 1}. ${u}`));

  try {
    const res = await fetch(EDGE_FN, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ urls: batch }),
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
