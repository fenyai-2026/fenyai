import React from 'react';
import { Navigate, useLocation, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, Search, ArrowRight } from 'lucide-react';

/**
 * SPA 兜底路由（path="*"）。
 *
 * 根因修复：本站部署在 EdgeOne Pages，对没有对应静态文件的路径会 fallback 到
 * SPA 空壳 index.html。此前 App.tsx 缺少 catch-all 路由，BrowserRouter 匹配不到
 * 任何 <Route> 时 <Routes> 渲染为空 → #root 为空 → 纯白屏（如历史死链 solution_ec.html
 * 在 CDN/浏览器缓存命中旧空壳时）。
 *
 * 处理策略：
 *   1) 命中历史死链映射（含 *.html 与老命名）→ 客户端 301 语义跳转到新路由；
 *   2) 其余未知路径 → 展示带导航的 404 页，绝不白屏。
 *
 * 映射表与 scripts/gen-legacy-redirects.js 的 PAGE_REDIRECTS 保持一致。
 */
const LEGACY_MAP: Record<string, string> = {
  '/aboutus.html': '/about',
  '/about.html': '/about',
  '/contactus.html': '/contact',
  '/contact.html': '/contact',
  '/products.html': '/products',
  '/solutions.html': '/solutions',
  '/pricing.html': '/pricing',
  '/faq.html': '/faq',
  '/articles.html': '/articles',
  '/blog.html': '/articles',
  '/scrm.html': '/scrm',
  '/live-code.html': '/live-code',
  '/mass-send.html': '/mass-send',
  '/juhe-chat.html': '/juhe-chat',
  '/session-archive.html': '/session-archive',
  '/growth.html': '/growth',
  '/ai-call.html': '/ai-call',
  '/ai-agent.html': '/ai-agent',
  '/open-platform.html': '/open-platform',
  '/message-channel.html': '/message-channel',
  '/resources.html': '/resources',
  '/trial.html': '/trial',
  '/weimo.html': '/weimo',
  '/sop.html': '/sop',
  '/robot.html': '/robot',
  '/cloud-phone.html': '/cloud-phone',
  '/demo-showcase.html': '/demo-showcase',
  '/whitepaper.html': '/whitepaper',
  '/compare.html': '/compare',
  '/demo.html': '/demo-showcase',
  '/drainage.html': '/growth',
  '/joinus.html': '/about',
  '/solution_ec.html': '/solutions/ecommerce',
  // 老命名（无后缀）
  '/aboutus': '/about',
  '/contactus': '/contact',
  '/product': '/products',
  '/solution': '/solutions',
  '/price': '/pricing',
  '/help': '/faq',
  '/blog': '/articles',
  '/news': '/articles',
  '/livecode': '/live-code',
  '/masssend': '/mass-send',
  '/juhechat': '/juhe-chat',
  '/sessionarchive': '/session-archive',
  '/aicall': '/ai-call',
  '/aiagent': '/ai-agent',
  '/openplatform': '/open-platform',
  '/messagechannel': '/message-channel',
  '/cloudphone': '/cloud-phone',
  '/white-paper': '/whitepaper',
  '/showcase': '/demo-showcase',
  '/drainage': '/growth',
  '/joinus': '/about',
  '/index.html': '/',
};

const POPULAR_LINKS = [
  { to: '/products', label: '产品功能' },
  { to: '/solutions', label: '解决方案' },
  { to: '/pricing', label: '价格方案' },
  { to: '/articles', label: '干货文章' },
  { to: '/trial', label: '免费试用' },
  { to: '/contact', label: '联系我们' },
];

export default function NotFound() {
  const location = useLocation();
  const target = LEGACY_MAP[location.pathname.toLowerCase()];

  if (target) {
    return <Navigate to={target} replace />;
  }

  return (
    <>
      <Helmet>
        <title>页面未找到 - 有机云</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <main className="min-h-screen bg-gradient-to-br from-sky-50 to-cyan-50 flex items-center justify-center px-4 py-20">
        <div className="max-w-xl w-full text-center">
          <div className="text-7xl font-black text-sky-500 mb-4">404</div>
          <h1 className="text-2xl font-bold text-slate-900 mb-3">页面走丢了</h1>
          <p className="text-slate-600 mb-8">
            抱歉，你访问的页面不存在或已迁移。你可以返回首页，或前往下面的常用页面。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-sky-500 text-white rounded-xl hover:bg-sky-600 transition-colors"
            >
              <Home className="w-4 h-4 mr-2" />
              返回首页
            </Link>
            <Link
              to="/articles"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-sky-600 border border-sky-200 rounded-xl hover:bg-sky-50 transition-colors"
            >
              <Search className="w-4 h-4 mr-2" />
              浏览文章
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {POPULAR_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="inline-flex items-center text-sm text-slate-700 bg-white px-4 py-2 rounded-full border border-slate-200 hover:border-sky-300 hover:text-sky-600 transition-colors"
              >
                {l.label}
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
