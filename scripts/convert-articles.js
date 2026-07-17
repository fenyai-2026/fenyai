const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const CSV_PATH = process.argv[2] || 'scripts/articles-export.csv';
const OUTPUT_PATH = process.argv[3] || 'public/articles.json';

function parseTags(val) {
  if (!val) return [];
  try {
    const arr = JSON.parse(val);
    if (Array.isArray(arr)) return arr;
  } catch (_) {}
  return String(val).split(/[,，]/).map(s => s.trim()).filter(Boolean);
}

function parseIntOrZero(val) {
  const n = parseInt(val, 10);
  return Number.isNaN(n) ? 0 : n;
}

function main() {
  const fullCsvPath = path.resolve(CSV_PATH);
  const fullOutputPath = path.resolve(OUTPUT_PATH);

  if (!fs.existsSync(fullCsvPath)) {
    console.error(`❌ CSV 文件不存在: ${fullCsvPath}`);
    process.exit(1);
  }

  const workbook = XLSX.readFile(fullCsvPath, { type: 'file', raw: true });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const rows = XLSX.utils.sheet_to_json(sheet, { defval: '' });

  const articles = rows.map(row => ({
    id: String(row.id || ''),
    title: String(row.title || ''),
    content: String(row.content || ''),
    summary: String(row.summary || '').trim(),
    cover_image: String(row.cover_image || '').trim() || null,
    source_url: String(row.source_url || '').trim() || null,
    source_type: String(row.source_type || '').trim() || null,
    status: String(row.status || 'published').trim() || 'published',
    view_count: parseIntOrZero(row.view_count),
    created_at: String(row.created_at || '').trim() || null,
    updated_at: String(row.updated_at || '').trim() || null,
    published_at: String(row.published_at || '').trim() || null,
    slug: String(row.slug || '').trim() || null,
    category: String(row.category || '').trim() || '未分类',
    tags: parseTags(row.tags),
    seo_title: String(row.seo_title || '').trim() || null,
    seo_description: String(row.seo_description || '').trim() || null,
    seo_keywords: String(row.seo_keywords || '').trim() || null,
    scheduled_at: String(row.scheduled_at || '').trim() || null,
  })).filter(a => a.id && a.title && a.status === 'published');

  articles.sort((a, b) => new Date(b.published_at || 0) - new Date(a.published_at || 0));

  const outputDir = path.dirname(fullOutputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  fs.writeFileSync(fullOutputPath, JSON.stringify(articles, null, 2), 'utf-8');
  console.log(`✅ 已生成 ${fullOutputPath}，共 ${articles.length} 篇已发布文章`);
}

main();
