// SPA fallback 拦截：当 robots.txt / sitemap.xml 被 fallback 到 index.html 时，
// 用 JS 动态替换内容，确保搜索引擎能获取正确的纯文本/XML 响应
(function() {
  const path = window.location.pathname;
  if (path === '/robots.txt') {
    document.documentElement.innerHTML = `User-agent: Baiduspider
Disallow: /admin/
Disallow: /api/
Allow: /

User-agent: Googlebot
Disallow: /admin/
Disallow: /api/
Allow: /

User-agent: *
Disallow: /admin/
Disallow: /api/
Allow: /

Sitemap: https://www.fenyai.com/sitemap.xml`;
    document.documentElement.style.display = 'block';
    document.documentElement.style.whiteSpace = 'pre-wrap';
    document.documentElement.style.fontFamily = 'monospace';
    return;
  }
  if (path === '/sitemap.xml') {
    document.documentElement.innerHTML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.fenyai.com/</loc><lastmod>2026-07-13</lastmod><changefreq>daily</changefreq><priority>1.0</priority></url>
  <url><loc>https://www.fenyai.com/products</loc><lastmod>2026-07-13</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.fenyai.com/products/jinqun</loc><lastmod>2026-07-13</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.fenyai.com/products/qimo</loc><lastmod>2026-07-13</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.fenyai.com/products/task</loc><lastmod>2026-07-13</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.fenyai.com/products/yinliu</loc><lastmod>2026-07-13</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.fenyai.com/products/data</loc><lastmod>2026-07-13</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.fenyai.com/ai-agent</loc><lastmod>2026-07-13</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.fenyai.com/scrm</loc><lastmod>2026-07-13</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.fenyai.com/live-code</loc><lastmod>2026-07-13</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.fenyai.com/growth</loc><lastmod>2026-07-13</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.fenyai.com/ai-call</loc><lastmod>2026-07-13</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.fenyai.com/solutions</loc><lastmod>2026-07-13</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.fenyai.com/solutions/finance</loc><lastmod>2026-07-13</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.fenyai.com/solutions/retail</loc><lastmod>2026-07-13</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.fenyai.com/solutions/ecommerce</loc><lastmod>2026-07-13</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.fenyai.com/solutions/education</loc><lastmod>2026-07-13</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.fenyai.com/solutions/active-outreach</loc><lastmod>2026-07-13</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.fenyai.com/solutions/sop</loc><lastmod>2026-07-13</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.fenyai.com/solutions/crack</loc><lastmod>2026-07-13</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.fenyai.com/solutions/archive</loc><lastmod>2026-07-13</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.fenyai.com/open-platform</loc><lastmod>2026-07-13</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.fenyai.com/open-platform/docs</loc><lastmod>2026-07-13</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.fenyai.com/open-platform/message-api</loc><lastmod>2026-07-13</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.fenyai.com/articles</loc><lastmod>2026-07-13</lastmod><changefreq>daily</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.fenyai.com/whitepaper</loc><lastmod>2026-07-13</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.fenyai.com/resources</loc><lastmod>2026-07-13</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.fenyai.com/pricing</loc><lastmod>2026-07-13</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.fenyai.com/contact</loc><lastmod>2026-07-13</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.fenyai.com/faq</loc><lastmod>2026-07-13</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.fenyai.com/compare</loc><lastmod>2026-07-13</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.fenyai.com/trial</loc><lastmod>2026-07-13</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.fenyai.com/solutions/ai-agent-integration</loc><lastmod>2026-07-13</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
</urlset>`;
    document.documentElement.style.display = 'block';
    document.documentElement.style.whiteSpace = 'pre-wrap';
    document.documentElement.style.fontFamily = 'monospace';
    return;
  }
})();

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </HelmetProvider>
  </React.StrictMode>
);
