import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { injectJSONLD } from '../utils/jsonld';

const PATH_NAMES: Record<string, string> = {
  '/': '首页',
  '/products': '产品功能',
  '/products/jinqun': '进群宝',
  '/products/qimo': '企微群魔方',
  '/products/task': '任务宝',
  '/products/yinliu': '引流宝',
  '/products/data': '数据报表',
  '/solutions': '解决方案',
  '/solutions/finance': '泛金融业',
  '/solutions/ecommerce': '社群电商',
  '/solutions/retail': '连锁零售',
  '/solutions/education': '在线教培',
  '/solutions/active-outreach': '主动拓客',
  '/solutions/sop': '营销SOP',
  '/solutions/crack': '裂变任务',
  '/solutions/archive': '会话存档',
  '/ai-agent': 'AI智能体',
  '/open-platform': '开放平台',
  '/open-platform/docs': 'API文档',
  '/open-platform/message-api': '消息通道API',
  '/solutions/ai-agent-integration': 'AI Agent集成',
  '/articles': '文章资讯',
  '/pricing': '价格方案',
  '/contact': '联系我们',
  '/trial': '免费试用',
  '/faq': '常见问题',
  '/whitepaper': '白皮书',
  '/resources': '资源中心',
  '/scrm': '企微SCRM',
  '/live-code': '企微活码',
  '/growth': '裂变拓客',
  '/ai-call': 'AI外呼',
};

export function Breadcrumb() {
  const location = useLocation();
  const segments = location.pathname.split('/').filter(Boolean);

  // 如果是首页，不显示面包屑
  if (location.pathname === '/') {
    return null;
  }

  const crumbs = segments.map((seg, i) => {
    const path = '/' + segments.slice(0, i + 1).join('/');
    return { name: PATH_NAMES[path] || seg, path };
  });

  // 注入 BreadcrumbList JSON-LD
  useEffect(() => {
    const schemaId = injectJSONLD({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首页', item: 'https://www.fenyai.com/' },
        ...crumbs.map((c, i) => ({
          '@type': 'ListItem',
          position: i + 2,
          name: c.name,
          item: `https://www.fenyai.com${c.path}`,
        })),
      ],
    }, 'breadcrumb');

    return () => {
      // 清理旧的 schema
      document.querySelectorAll('script[type="application/ld+json"]').forEach((el) => {
        if ((el as HTMLElement).dataset.schema === schemaId) el.remove();
      });
    };
  }, [location.pathname]);

  return (
    <nav className="text-sm text-slate-500 py-3" aria-label="面包屑">
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link to="/" className="hover:text-[#0EA5E9] transition-colors">首页</Link>
        </li>
        {crumbs.map((c) => (
          <li key={c.path} className="flex items-center gap-1">
            <span className="text-slate-400">/</span>
            <Link to={c.path} className="hover:text-[#0EA5E9] transition-colors">{c.name}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
