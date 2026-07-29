import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHelmetProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  // JSON-LD Schema 相关属性
  schemaType?: 'Organization' | 'WebSite' | 'WebPage' | 'SoftwareApplication' | 'Article';
  schemaData?: Record<string, any>;
  // 页面级附加 Schema（如 FAQPage / Product），在基础 3 块之后追加
  extraSchema?: Record<string, any>;
}

const defaultSEO = {
  title: '有机云 - 企业微信SCRM私域运营工具｜活码/AI智能体/会话存档',
  description: '有机云（www.fenyai.com）是广州有机云计算有限责任公司旗下的企业微信官方合作伙伴，专注企业微信SCRM私域运营，提供活码拓客、AI智能体、会话存档、超级群发等全链路工具，已服务10万+企业。',
  keywords: '有机云,企业微信,私域流量,私域运营,SCRM,客户管理,营销自动化,企微活码,AI智能体',
  ogImage: 'https://www.fenyai.com/og-image.png',
};

// 默认的 Organization Schema（增强版，含品牌实体 + EEAT 权威信号）
const defaultOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "有机云",
  "legalName": "广州有机云计算有限责任公司",
  "alternateName": "有机云SCRM",
  "url": "https://www.fenyai.com/",
  "logo": "https://www.fenyai.com/logo.png",
  "image": "https://www.fenyai.com/og-image.png",
  "description": "有机云是广州有机云计算有限责任公司旗下的企业微信SCRM私域运营工具，覆盖活码拓客、AI智能体、会话存档、超级群发等全链路场景，已服务10万+企业。",
  "sameAs": ["https://aiqicha.baidu.com/company_basic_18714988634245", "https://www.qcc.com/firm/5a6e2c8eb6edbb8466d997a9e1c3bfaf.html", "https://pitchhub.36kr.com/project/1894981971746048"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "番禺区大学城青蓝街28号创智大厦3栋6楼",
    "addressLocality": "广州市",
    "addressRegion": "广东省",
    "postalCode": "511400",
    "addressCountry": "CN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+86-133-1616-9107",
    "contactType": "sales",
    "email": "374183167@qq.com",
    "areaServed": "CN",
    "availableLanguage": ["zh-CN"]
  },
  "brand": { "@type": "Brand", "name": "有机云" },
  "foundingDate": "2020",
  "slogan": "让私域运营更简单",
  "knowsAbout": ["企业微信SCRM", "私域运营", "AI智能体", "会话存档", "活码引流", "超级群发", "消息通道API", "客户标签管理", "数据分析", "私有化部署"],
  "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 50, "maxValue": 100 }
};

// 默认的 WebSite Schema（全站恒定输出，含 potentialAction SearchAction + sameAs EEAT 信号）
const defaultWebSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "有机云SCRM",
  "url": "https://www.fenyai.com",
  "description": "企业微信SCRM私域流量自动化运营工具",
  "sameAs": ["https://aiqicha.baidu.com/company_basic_18714988634245", "https://www.qcc.com/firm/5a6e2c8eb6edbb8466d997a9e1c3bfaf.html", "https://pitchhub.36kr.com/project/1894981971746048"],
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.fenyai.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// 面包屑分段标签（与 ssg.js 保持一致，自动推导 BreadcrumbList）
const SEGMENT_LABELS: Record<string, string> = {
  'products': '产品功能',
  'qimo': '企微魔方',
  'yinliu': '引流宝',
  'jinqun': '进群宝',
  'task': '任务宝',
  'data': '私域数据中台',
  'solutions': '解决方案',
  'finance': '金融私域运营',
  'retail': '连锁门店私域运营',
  'ecommerce': '社群电商私域运营',
  'education': '在线教培私域运营',
  'active-outreach': '主动拓客',
  'sop': '营销SOP',
  'crack': '裂变任务私域运营',
  'archive': '会话存档',
  'distribution': '智慧分销',
  'ai-agent-integration': 'AI Agent集成',
  'scrm': 'SCRM系统',
  'live-code': '活码引流',
  'growth': '裂变拓客',
  'ai-call': 'AI外呼',
  'ai-agent': 'AI智能体',
  'open-platform': '开放平台',
  'message-channel': '消息通道API',
  'docs': 'API文档',
  'message-api': '消息通道API',
  'resources': '资源中心',
  'pricing': '价格方案',
  'contact': '联系我们',
  'articles': '文章资讯',
  'article': '文章',
  'demo-showcase': '产品演示',
  'whitepaper': '白皮书',
  'compare': 'SCRM对比',
  'mass-send': '超级群发',
  'juhe-chat': '聚合聊天',
  'session-archive': '会话存档',
  'faq': '常见问题',
  'trial': '免费试用',
  'about': '关于我们',
};

// 由路径自动推导 BreadcrumbList 结构化数据
function buildBreadcrumbSchema(path: string) {
  const itemListElement: any[] = [
    { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://www.fenyai.com/" }
  ];
  if (path && path !== '/') {
    const segments = path.split('/').filter(Boolean);
    let acc = '';
    segments.forEach((seg, i) => {
      acc += '/' + seg;
      itemListElement.push({
        "@type": "ListItem",
        "position": i + 2,
        "name": SEGMENT_LABELS[seg] || seg,
        "item": "https://www.fenyai.com" + acc
      });
    });
  }
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElement
  };
}

export default function SEOHelmet({
  title = defaultSEO.title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  canonical = 'https://www.fenyai.com/',
  ogTitle,
  ogDescription,
  ogImage = defaultSEO.ogImage,
  ogUrl,
  ogType = 'website',
  schemaType = 'Organization',
  schemaData,
  extraSchema,
}: SEOHelmetProps) {
  const fullTitle = title.includes('有机云') ? title : `${title} - 有机云`;
  const fullOgTitle = ogTitle || fullTitle;
  const fullOgDescription = ogDescription || description;
  const fullOgUrl = ogUrl || canonical;

  // 构建 JSON-LD Schema：全站恒定输出 Organization + WebSite + BreadcrumbList
  // Organization Schema（默认，可被 schemaData 覆盖）
  const orgJson = schemaData
    ? JSON.stringify({ "@context": "https://schema.org", "@type": schemaType, ...schemaData })
    : JSON.stringify(defaultOrganizationSchema);

  // WebSite Schema（全站恒定输出，含 SearchAction + sameAs）
  const webSiteJson = JSON.stringify(defaultWebSiteSchema);

  // 页面级附加 Schema（如 FAQPage / Product）
  const extraJson = extraSchema ? JSON.stringify(extraSchema) : null;

  // 全站注入 BreadcrumbList（GEO 强信号），由 canonical 路径推导
  let breadcrumbPath = canonical;
  if (breadcrumbPath.startsWith('http')) {
    try { breadcrumbPath = new URL(breadcrumbPath).pathname; } catch (e) { /* ignore */ }
  }
  const breadcrumbSchemaJson = JSON.stringify(buildBreadcrumbSchema(breadcrumbPath));

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullOgUrl} />
      <meta property="og:title" content={fullOgTitle} />
      <meta property="og:description" content={fullOgDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogTitle || title} />
      <meta property="og:site_name" content="有机云" />
      <meta property="og:locale" content="zh_CN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullOgUrl} />
      <meta name="twitter:title" content={fullOgTitle} />
      <meta name="twitter:description" content={fullOgDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Search Engine Verification */}
      <meta name="baidu-site-verification" content="codeva-DHMjhEQXnT" />
      <meta name="360-site-verification" content="368c63a6fb9755135cc510b8367d28c5" />
      <meta name="msvalidate.01" content="78DF27E53F72550D089DB668B4449793" />
      <meta name="sogou_site_verification" content="PSUcgYbLcF" />

      {/* JSON-LD Structured Data: Organization + WebSite + BreadcrumbList (全站恒定) */}
      <script type="application/ld+json">{orgJson}</script>
      <script type="application/ld+json">{webSiteJson}</script>
      <script type="application/ld+json">{breadcrumbSchemaJson}</script>
      {extraJson && <script type="application/ld+json">{extraJson}</script>}
    </Helmet>
  );
}
