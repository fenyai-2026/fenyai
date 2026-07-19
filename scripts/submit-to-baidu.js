const fs = require('fs');
const path = require('path');

// 从 sitemap.xml 中提取所有URL
function extractUrlsFromSitemap(sitemapPath) {
  const content = fs.readFileSync(sitemapPath, 'utf-8');
  const urlRegex = /<loc>(.*?)<\/loc>/g;
  const urls = [];
  let match;
  
  while ((match = urlRegex.exec(content)) !== null) {
    urls.push(match[1]);
  }
  
  return urls;
}

// 从 dist 目录生成URL列表
function generateUrlsFromDist(distDir) {
  const urls = [];
  const baseUrl = 'https://www.fenyai.com';
  
  function walkDir(dir, relativePath = '') {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // 跳过 assets 目录
        if (file === 'assets') continue;
        
        // 如果是目录且有 index.html，添加该路径
        const indexPath = path.join(filePath, 'index.html');
        if (fs.existsSync(indexPath)) {
          const routePath = relativePath ? `/${relativePath}/${file}` : `/${file}`;
          urls.push(`${baseUrl}${routePath}`);
        }
        
        // 递归处理子目录
        walkDir(filePath, relativePath ? `${relativePath}/${file}` : file);
      }
    }
  }
  
  walkDir(distDir);
  
  // 添加首页
  urls.unshift(baseUrl);
  
  return [...new Set(urls)]; // 去重
}

async function submitToBaidu(urls) {
  // 限制每日配额为10条
  const DAILY_QUOTA = 10;
  const urlsToSubmit = urls.slice(0, DAILY_QUOTA);

  console.log(`⚠️  每日配额限制: ${DAILY_QUOTA} 条`);
  console.log(`准备提交前 ${urlsToSubmit.length} 条高优先级URL到百度...\n`);

  // 分批提交，每批最多10条
  const batchSize = 10;
  const batches = [];

  for (let i = 0; i < urlsToSubmit.length; i += batchSize) {
    batches.push(urlsToSubmit.slice(i, i + batchSize));
  }

  console.log(`共分为 ${batches.length} 批次提交\n`);
  
  const results = [];
  
  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    console.log(`[${i + 1}/${batches.length}] 提交第 ${i + 1} 批 (${batch.length} 条URL)...`);
    
    try {
      // 调用 Edge Function
      const response = await fetch('https://nzvgai6r8knh.functions.meoo.host/baidu-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ urls: batch }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        console.log(`  ✓ 成功提交 ${result.submittedCount} 条，剩余配额: ${result.remainQuota}`);
        results.push(result);
      } else {
        console.log(`  ✗ 失败: ${result.error} - ${result.detail}`);
      }
      
      // 避免请求过快，等待1秒
      if (i < batches.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    } catch (error) {
      console.log(`  ✗ 请求失败: ${error.message}`);
    }
  }
  
  console.log('\n========================================');
  console.log('提交完成！');
  console.log(`总共提交: ${urls.length} 条URL`);
  console.log(`成功批次: ${results.filter(r => r.success).length}/${batches.length}`);
  console.log('========================================\n');
  
  return results;
}

// 定义URL优先级（越高越重要）- 使用 www.fenyai.com 域名
const URL_PRIORITY = {
  // P0 - 核心页面（最高优先级）
  'https://www.fenyai.com/': 100,
  'https://www.fenyai.com/products': 95,
  'https://www.fenyai.com/solutions': 95,
  'https://www.fenyai.com/scrm': 90,
  'https://www.fenyai.com/pricing': 90,
  'https://www.fenyai.com/contact': 85,

  // P1 - 重要产品页
  'https://www.fenyai.com/products/qimo': 85,
  'https://www.fenyai.com/products/yinliu': 85,
  'https://www.fenyai.com/products/jinqun': 85,
  'https://www.fenyai.com/products/task': 80,
  'https://www.fenyai.com/products/data': 80,

  // P1 - 重要解决方案
  'https://www.fenyai.com/solutions/finance': 80,
  'https://www.fenyai.com/solutions/retail': 80,
  'https://www.fenyai.com/solutions/ecommerce': 80,
  'https://www.fenyai.com/solutions/education': 80,

  // P2 - SEO独立落地页
  'https://www.fenyai.com/live-code': 75,
  'https://www.fenyai.com/growth': 75,
  'https://www.fenyai.com/ai-call': 75,
  'https://www.fenyai.com/ai-agent': 75,
  'https://www.fenyai.com/message-channel': 75,

  // P2 - 开放平台
  'https://www.fenyai.com/open-platform': 70,
  'https://www.fenyai.com/open-platform/docs': 65,
  'https://www.fenyai.com/open-platform/message-api': 65,

  // P3 - 其他解决方案
  'https://www.fenyai.com/solutions/active-outreach': 60,
  'https://www.fenyai.com/solutions/sop': 60,
  'https://www.fenyai.com/solutions/crack': 60,
  'https://www.fenyai.com/solutions/archive': 60,
  'https://www.fenyai.com/solutions/distribution': 60,
  'https://www.fenyai.com/solutions/ai-agent-integration': 60,

  // P3 - 资源与帮助
  'https://www.fenyai.com/resources': 55,
  'https://www.fenyai.com/articles': 55,
  'https://www.fenyai.com/faq': 50,
  'https://www.fenyai.com/compare': 50,
  'https://www.fenyai.com/demo-showcase': 50,
  'https://www.fenyai.com/whitepaper': 45,
  'https://www.fenyai.com/trial': 45,
};

async function main() {
  const distDir = path.join(__dirname, '..', 'dist');
  const sitemapPath = path.join(distDir, 'sitemap.xml');

  let urls = [];

  // 优先使用 sitemap.xml
  if (fs.existsSync(sitemapPath)) {
    console.log('从 sitemap.xml 提取URL...\n');
    urls = extractUrlsFromSitemap(sitemapPath);
    console.log(`找到 ${urls.length} 条URL\n`);
  } else {
    // 备用方案：从 dist 目录生成
    console.log('sitemap.xml 不存在，从 dist 目录生成URL...\n');
    urls = generateUrlsFromDist(distDir);
    console.log(`生成 ${urls.length} 条URL\n`);
  }

  if (urls.length === 0) {
    console.error('未找到任何URL，请检查 dist 目录或 sitemap.xml');
    process.exit(1);
  }

  // 按优先级排序
  console.log('按优先级排序URL...\n');
  urls.sort((a, b) => {
    const priorityA = URL_PRIORITY[a] || 0;
    const priorityB = URL_PRIORITY[b] || 0;
    return priorityB - priorityA; // 降序排列
  });

  // 显示优先级分布
  const highPriority = urls.filter(u => URL_PRIORITY[u] >= 80).length;
  const mediumPriority = urls.filter(u => URL_PRIORITY[u] >= 50 && URL_PRIORITY[u] < 80).length;
  const lowPriority = urls.filter(u => URL_PRIORITY[u] < 50 && URL_PRIORITY[u] > 0).length;
  const noPriority = urls.filter(u => !URL_PRIORITY[u]).length;

  console.log('URL优先级分布:');
  console.log(`  🔴 高优先级 (≥80): ${highPriority} 条`);
  console.log(`  🟡 中优先级 (50-79): ${mediumPriority} 条`);
  console.log(`  🟢 低优先级 (<50): ${lowPriority} 条`);
  console.log(`  ⚪ 未设置优先级: ${noPriority} 条`);
  console.log(`  总计: ${urls.length} 条\n`);

  // 显示将要提交的URL
  const DAILY_QUOTA = 10;
  const urlsToSubmit = urls.slice(0, DAILY_QUOTA);

  console.log('⚠️  每日配额限制: 10条，仅提交最高优先级的URL\n');
  console.log('本次将提交的URL:');
  urlsToSubmit.forEach((url, i) => {
    const priority = URL_PRIORITY[url] || 0;
    const level = priority >= 80 ? '🔴' : priority >= 50 ? '🟡' : '🟢';
    console.log(`  ${i + 1}. ${level} ${url} (优先级: ${priority})`);
  });
  console.log(`\n剩余 ${urls.length - DAILY_QUOTA} 条URL将在后续批次提交\n`);

  await submitToBaidu(urls);
}

main().catch(console.error);
