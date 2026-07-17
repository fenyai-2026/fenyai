import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { SITE } from '../config/site';
import { useSiteLogo } from '../hooks/useSiteLogo';
import { useSiteFavicon } from '../hooks/useSiteFavicon';
import WeChatFloat from './WeChatFloat';
import FloatingCTA from './FloatingCTA';
import NewsTicker from './NewsTicker';

const navItems = [
  { path: '/', label: '首页' },
  { path: '/products', label: '产品功能' },
  { path: '/message-channel', label: '消息通道', badge: 'API' },
  { path: '/solutions', label: '解决方案' },
  { path: '/ai-agent', label: 'AI智能体' },
  { path: '/open-platform', label: '开放平台' },
  { path: '/articles', label: '文章资讯' },
  { path: '/pricing', label: '价格方案' },
  { path: '/contact', label: '联系我们' },
];

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { logoUrl, loading } = useSiteLogo();
  // useSiteFavicon 会在内部自动处理 favicon 的 DOM 更新
  useSiteFavicon();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F0F9FF]">
      {/* 顶部新闻公告栏 + 导航栏（一起 fixed 贴顶，避免重叠） */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <NewsTicker />
        <header
          className={`transition-all duration-300 ${
            scrolled
              ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-[#0EA5E9]/5'
              : 'bg-transparent'
          }`}
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center">
              <img
                key={logoUrl || 'default'}
                src={logoUrl || '/logo.png'}
                alt="有机云"
                className="h-10 w-auto"
                onError={(e) => {
                  // 如果加载失败，使用本地默认logo
                  (e.target as HTMLImageElement).src = '/logo.png';
                }}
              />
            </Link>

            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                    location.pathname === item.path
                      ? 'text-[#0EA5E9] bg-[#0EA5E9]/10'
                      : scrolled
                      ? 'text-slate-700 hover:text-[#0EA5E9] hover:bg-slate-50'
                      : 'text-[#1e293b] hover:text-[#0EA5E9] hover:bg-white/30'
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="ml-1 px-1.5 py-0.5 text-xs bg-blue-100 text-blue-700 rounded font-semibold">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/trial"
                className="px-5 py-2.5 bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] text-white text-sm font-medium rounded-xl hover:from-[#0284C7] hover:to-[#0EA5E9] transition-all duration-200 shadow-lg shadow-[#0EA5E9]/25"
              >
                免费注册
              </Link>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-[#1e293b] hover:bg-[#0EA5E9]/10' : 'text-white hover:bg-white/10'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-[#0EA5E9]/10"
            >
              <nav className="px-4 py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        location.pathname === item.path
                          ? 'text-[#0EA5E9] bg-[#0EA5E9]/10'
                          : 'text-[#1e293b] hover:bg-[#0EA5E9]/5'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <Link
                  to="/trial"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] text-white text-sm font-medium rounded-lg text-center mt-4"
                >
                  免费注册
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      </div>

      <main className="pt-[96px]">
        <Outlet />
      </main>

      <footer className="bg-[#1e293b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
              <img
                key={logoUrl || 'default'}
                src={logoUrl || '/logo.png'}
                alt="有机云"
                className="h-10 w-auto"
                onError={(e) => {
                  // 如果加载失败，使用本地默认logo
                  (e.target as HTMLImageElement).src = '/logo.png';
                }}
              />
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                专注企业私域流量自动化运营，是效果转化的私域营销专家，助力企业10倍提升运营效率。
              </p>
              <div className="pt-2">
                <p className="text-white/50 text-xs mb-2">扫码添加企业微信</p>
                <img
                  src={SITE.wechatQr}
                  alt="企业微信二维码"
                  className="w-24 h-24 rounded-lg bg-white p-1"
                />
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">产品功能</h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li><Link to="/message-channel" className="hover:text-[#38BDF8] transition-colors">有机云消息通道API</Link></li>
                <li><Link to="/scrm" className="hover:text-[#38BDF8] transition-colors">有机云SCRM</Link></li>
                <li><Link to="/live-code" className="hover:text-[#38BDF8] transition-colors">有机云活码</Link></li>
                <li><Link to="/growth" className="hover:text-[#38BDF8] transition-colors">有机云裂变拓客</Link></li>
                <li><Link to="/ai-call" className="hover:text-[#38BDF8] transition-colors">有机云AI外呼</Link></li>
                <li><Link to="/ai-agent" className="hover:text-[#38BDF8] transition-colors">有机云AI智能体</Link></li>
                <li><Link to="/products" className="hover:text-[#38BDF8] transition-colors">全部产品</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">解决方案</h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li><Link to="/solutions/finance" className="hover:text-[#38BDF8] transition-colors">泛金融业</Link></li>
                <li><Link to="/solutions/ecommerce" className="hover:text-[#38BDF8] transition-colors">社群电商</Link></li>
                <li><Link to="/solutions/retail" className="hover:text-[#38BDF8] transition-colors">连锁零售</Link></li>
                <li><Link to="/solutions/education" className="hover:text-[#38BDF8] transition-colors">在线教培</Link></li>
                <li><Link to="/solutions/active-outreach" className="hover:text-[#38BDF8] transition-colors">主动拓客</Link></li>
                <li><Link to="/solutions/sop" className="hover:text-[#38BDF8] transition-colors">营销SOP</Link></li>
                <li><Link to="/solutions/crack" className="hover:text-[#38BDF8] transition-colors">裂变任务</Link></li>
                <li><Link to="/solutions/archive" className="hover:text-[#38BDF8] transition-colors">有机云会话存档</Link></li>
                <li><Link to="/compare" className="hover:text-[#38BDF8] transition-colors">有机云SCRM对比</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">资源中心</h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li><Link to="/whitepaper" className="hover:text-[#38BDF8] transition-colors">免费白皮书</Link></li>
                <li><Link to="/resources" className="hover:text-[#38BDF8] transition-colors">资料下载</Link></li>
                <li><Link to="/open-platform" className="hover:text-[#38BDF8] transition-colors">OAuth授权</Link></li>
                <li><Link to="/open-platform" className="hover:text-[#38BDF8] transition-colors">API接口</Link></li>
                <li><Link to="/open-platform" className="hover:text-[#38BDF8] transition-colors">私有化部署</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">关于我们</h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li><Link to="/articles" className="hover:text-[#38BDF8] transition-colors">文章资讯</Link></li>
                <li><Link to="/faq" className="hover:text-[#38BDF8] transition-colors">常见问题</Link></li>
                <li><Link to="/trial" className="hover:text-[#38BDF8] transition-colors">联系我们</Link></li>
                <li className="flex items-start space-x-2">
                  <Phone className="w-4 h-4 text-[#38BDF8] mt-0.5" />
                  <div className="flex flex-col">
                    <span>133-1616-9107</span>
                    <span>189-9836-7461</span>
                  </div>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#38BDF8]" />
                  <span>广州市番禺区大学城青蓝街28号创智大厦3栋6楼</span>
                </li>
              </ul>
            </div>
          </div>

          {/* SEO关键词链接区 */}
          <div className="border-t border-white/10 mt-8 pt-6">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-white/40">
              <span className="text-white/60">热门搜索：</span>
              <Link to="/products" className="hover:text-[#38BDF8] transition-colors">有机云SCRM系统</Link>
              <span>|</span>
              <Link to="/live-code" className="hover:text-[#38BDF8] transition-colors">有机云活码引流</Link>
              <span>|</span>
              <Link to="/growth" className="hover:text-[#38BDF8] transition-colors">有机云超级群发</Link>
              <span>|</span>
              <Link to="/ai-agent" className="hover:text-[#38BDF8] transition-colors">有机云AI智能体客服</Link>
              <span>|</span>
              <Link to="/solutions/finance" className="hover:text-[#38BDF8] transition-colors">有机云金融私域运营</Link>
              <span>|</span>
              <Link to="/solutions/retail" className="hover:text-[#38BDF8] transition-colors">有机云零售私域运营</Link>
              <span>|</span>
              <Link to="/articles" className="hover:text-[#38BDF8] transition-colors">有机云私域运营干货</Link>
              <span>|</span>
              <Link to="/pricing" className="hover:text-[#38BDF8] transition-colors">有机云SCRM价格</Link>
            </div>
          </div>

          <div className="border-t border-white/10 mt-6 pt-8 text-center text-sm text-white/50">
            <p>© 2026 广州有机云计算有限责任公司 · 有机云SCRM. 保留所有权利.</p>
            <p className="mt-1 text-white/40">有机云 —— 企业微信SCRM私域运营工具 · 官网 <a href="https://www.fenyai.com/" className="hover:text-[#38BDF8] transition-colors">www.fenyai.com</a></p>
          </div>
        </div>
      </footer>

      {/* 微信扫码浮窗 */}
      <WeChatFloat />

      {/* 底部悬浮CTA */}
      <FloatingCTA />
    </div>
  );
}
