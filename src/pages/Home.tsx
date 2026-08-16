import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Users, Zap, Shield, BarChart3, MessageCircle, Target, Award, Clock, Building2, ShoppingCart, Store, Network, Quote, ChevronLeft, ChevronRight, BookOpen, FileText } from 'lucide-react';
import { SITE } from '../config/site';
import Testimonials from '../components/Testimonials';
import CustomerJourneySelector from '../components/CustomerJourneySelector';
import ComparisonTable from '../components/ComparisonTable';
import DemoForm from '../components/DemoForm';
import { useSiteFavicon } from '../hooks/useSiteFavicon';

// Hero 轮播图数据
const heroSlides = [
  {
    src: '/images/hero-conversation.png',
    alt: '会话聚合工作台',
    label: '会话聚合工作台',
  },
  {
    src: '/images/hero-sop.png',
    alt: '动态SOP',
    label: '动态 SOP',
  },
  {
    src: '/images/hero-ai-agent.png',
    alt: 'AI智能体',
    label: 'AI 智能体',
  },
  {
    src: '/images/hero-message-api.png',
    alt: '消息通道API',
    label: '消息通道 API',
  },
];

function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-white shadow-lg shadow-slate-200/50">
        {heroSlides.map((slide, i) => (
          <motion.div
            key={i}
            initial={false}
            animate={{ opacity: i === current ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className={i === current ? 'relative' : 'absolute inset-0'}
            style={{ display: i === current ? 'block' : 'none' }}
          >
            <img src={slide.src} alt={slide.alt} className="w-full" fetchPriority="high" />
          </motion.div>
        ))}

        {/* 底部标签 */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {heroSlides.map((slide, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                i === current
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'bg-black/40 text-white/90 hover:bg-black/60'
              }`}
            >
              {slide.label}
            </button>
          ))}
        </div>
      </div>

    </motion.div>
  );
}

const features = [
  { icon: Users, title: '企微活码引流拓客', desc: '企微活码/SCRM系统支持手机号拓客、订单拓客、AI外呼、活码拓客、广告拓客、裂变拓客，快速沉淀私域流量', color: 'from-sky-500 to-cyan-400', link: '/live-code', faq: [
    { q: '企业微信活码和普通二维码有什么区别？', a: '企业微信活码可以动态切换背后的员工账号，突破单号5000好友上限，支持按标签自动分配客户，且带有渠道追踪能力，能精确统计每个渠道的引流效果。普通二维码只能固定指向一个账号，无法追踪来源。' },
    { q: '活码一天能引流多少人？', a: '有机云活码支持多员工号池轮转分配，单活码理论无上限，实际场景中已支撑日均100万+引流规模。系统自动根据员工承接能力智能分配，规避被限流风险。' }
  ]},
  { icon: MessageCircle, title: '客户管理系统', desc: '企业微信SCRM客户管理系统，支持聚合客服、智能回复、客户标签、自动打标签、人群包管理', color: 'from-indigo-500 to-purple-400', link: '/scrm', faq: [
    { q: '客户标签自动打标是怎么实现的？', a: '有机云SCRM支持三种自动打标机制：① 行为触发——客户点击链接/扫码/加群/回复关键词等行为自动标记；② 对话AI识别——AI智能体在对话中识别客户意图和需求，自动贴标签；③ 规则引擎——自定义条件组合自动标记。全部自动完成，无需人工操作。' },
    { q: '一个员工能管理多少客户？', a: '企业微信原生上限是单个员工管理5000好友。通过有机云SCRM客户管理系统（聚合聊天+自动回复+快捷话术），一个运营人员可同时高效管理2-3个企微号（1万+客户），效率提升3-5倍。' }
  ]},
  { icon: Target, title: '超级群发营销触达', desc: '企微SCRM运营SOP、极速群发、超级群发、朋友圈群发、标准SOP，精准触达私域客户', color: 'from-purple-500 to-pink-400', link: '/solutions/sop', faq: [
    { q: '超级群发和企业微信自带的群发有什么区别？', a: '企业微信原生群发每日限制1次，且次数有限。有机云超级群发支持更高频次的触达，且可按客户标签/群标签精准筛选推送对象，避免无效打扰。同时支持定时发送、A/B测试、发送数据追踪。' },
    { q: '会触发企业微信风控吗？', a: '有机云超级群发严格遵守企业微信官方接口规范，在官方允许的频率和规则范围内最大化触达效率。已服务10万+企业中从未出现因群发导致封号的情况。' }
  ]},
  { icon: Zap, title: '智能群管与AI智能体', desc: '企业微信智能群管+AI智能体，支持建群拉群、口令入群、批量邀请、关键字回复、群标签管理', color: 'from-orange-500 to-amber-400', link: '/ai-agent', faq: [
    { q: '企微SOP是什么？怎么设置？', a: 'SOP（标准运营流程）是指自动化的客户运营流程——设定"客户加好友第1天发什么、第3天发什么、第7天发什么"，系统自动执行，无需人工跟进。有机云SOP支持文字、图片、链接、小程序等多种内容形式，支持按客户标签区分不同SOP路径。' },
    { q: '一个员工能管理多少个群？', a: '企业微信群上限500人（内部群2000人）。通过有机云智能群管（聚合聊天+自动回复+关键词触发+群数据监控），一个运营人员可同时高效管理200-500个群，效率提升3-5倍。' }
  ]},
  { icon: BarChart3, title: '私域数据报表分析', desc: '私域运营数据报表，企业报告、来源报告、成员报告、客户联系报告、群聊统计，数据驱动决策', color: 'from-emerald-500 to-teal-400', link: '/scrm', faq: [
    { q: '数据报表能看哪些指标？', a: '覆盖客户全生命周期：引流数据（各渠道加粉数/转化率）、运营数据（SOP执行率/群活跃度/互动率）、转化数据（成交率/客单价/复购率）、流失预警（沉默客户数/退群率）、员工绩效（人均接待量/响应时间/成交额）。支持自定义看板，数据实时更新。' },
    { q: '数据更新频率是多久？', a: '有机云数据报表实时更新，关键指标（如新增客户、消息量）延迟不超过5分钟。支持导出Excel、PDF报告，可设置定时自动发送数据日报/周报给管理层。' }
  ]},
  { icon: Shield, title: '会话聚合与安全风控', desc: '会话聚合转接、聊天存档、敏感词监控、合规管理、数据安全保障，企微SCRM安全合规', color: 'from-slate-500 to-slate-400', link: '/solutions/archive', faq: [
    { q: '会话存档合规吗？', a: '有机云会话存档功能基于企业微信官方会话内容存档接口开发，完全符合《个人信息保护法》和金融行业合规要求。支持敏感词监控、违规预警、数据加密存储，已服务多家银行、保险等金融机构。' },
    { q: '数据安全如何保障？', a: '有机云通过ISO27001信息安全管理体系认证，采用银行级数据加密技术，支持私有化部署，数据存储于企业自有服务器，确保客户数据绝对安全。' }
  ]},
];

const stats = [
  { value: 10, suffix: '万+', label: '服务企业' },
  { value: 5000, suffix: '万+', label: '覆盖用户' },
  { value: 99.9, suffix: '%', label: '系统稳定性' },
  { value: 10, suffix: '倍', label: '效率提升' },
];

const solutions = [
  { title: '泛金融业', desc: '银行、保险、证券、基金等金融机构私域运营解决方案', icon: Award },
  { title: '社群电商', desc: '社群团购、直播带货、私域电商一站式解决方案', icon: Users },
  { title: '连锁零售', desc: '多门店统一管理、会员运营、线上线下融合方案', icon: Target },
  { title: '智慧分销', desc: '分销体系搭建、渠道管理、业绩追踪解决方案', icon: BarChart3 },
];

// 合作客户 - 实名展示
const clientLogos = [
  { name: '平安保险', image: '/images/client-pingan.png' },
  { name: '百果园', image: '/images/client-baiguoyuan.jpg' },
  { name: '云集微店', image: '/images/client-yunji.jpg' },
  { name: '新东方教育', image: '/images/client-xindongfang.png' },
  { name: '宁波银行', image: '/images/client-ningbo-bank.png' },
  { name: '李宁', image: '/images/client-lining.png' },
];

// 认证与资质 - 补齐10项
const certifications = [
  { name: '企业微信官方合作伙伴', icon: '🤝', desc: '官方认证服务商' },
  { name: 'ISO27001认证', icon: '🛡️', desc: '信息安全管理体系' },
  { name: '国家高新技术企业', icon: '🏆', desc: '科技创新企业' },
  { name: '双软认证企业', icon: '💻', desc: '软件企业认证' },
  { name: '专精特新企业', icon: '⭐', desc: '专业化精细化特色化' },
  { name: 'ISO9001认证', icon: '✓', desc: '质量管理体系' },
  { name: '40+项软件著作权', icon: '📜', desc: '知识产权积累' },
  { name: '等保三级认证', icon: '🔒', desc: '信息安全等级保护' },
  { name: '金融私域标杆奖', icon: '🏅', desc: '行业认可' },
  { name: 'AAA信用企业', icon: '⭐', desc: '企业信用评级' },
];

// 客户案例 - 轮播卡片形式
const customerCases = [
  {
    company: '平安保险',
    industry: '保险金融',
    logo: 'PA',
    painPoint: '客户转化率低，私域运营团队效率不高，难以精准触达客户',
    solution: '部署企微活码+AI外呼+客户管理系统，实现自动化客户分层和精准触达',
    metrics: [
      { label: '私域客户', value: '50万+' },
      { label: '转化率提升', value: '300%' },
      { label: '团队精简', value: '60%' },
    ],
    quote: '接入有机云SCRM后，客户转化率从5%提升到15%，私域运营团队从20人缩减到8人。',
    color: 'from-sky-500 to-cyan-500',
    bgColor: 'bg-sky-50',
  },
  {
    company: '华润万家',
    industry: '连锁零售',
    logo: 'HR',
    painPoint: '门店客流下滑，会员复购率低，线上线下数据无法打通',
    solution: '门店活码引流+会员运营SOP+数据分析，构建全渠道会员体系',
    metrics: [
      { label: '会员复购率提升', value: '150%' },
      { label: '门店业绩提升', value: '80%' },
      { label: '月引流新客', value: '3万+' },
    ],
    quote: '一个月内通过企微活码引流3万+门店新客，会员复购率从23%提升到58%。',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50',
  },
  {
    company: '云集微店',
    industry: '社群电商',
    logo: 'YJ',
    painPoint: '获客成本高，用户增长缓慢，缺乏有效的裂变机制',
    solution: '裂变任务+超级群发+AI智能体，打造病毒式增长闭环',
    metrics: [
      { label: '社群GMV增长', value: '300%' },
      { label: '获客成本降低', value: '70%' },
      { label: '单场裂变新增', value: '4万+' },
    ],
    quote: '单场裂变活动新增4万+企微好友，获客成本从十几万降到几乎零成本。',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
  },
  {
    company: '新东方教育',
    industry: '教育培训',
    logo: 'XDF',
    painPoint: '学员续费率低，社群运营效率低，退费率居高不下',
    solution: '活码引流+运营SOP+会话聚合，实现标准化学员运营流程',
    metrics: [
      { label: '学员转化率提升', value: '200%' },
      { label: '续费率提升', value: '120%' },
      { label: '退费率下降', value: '42%' },
    ],
    quote: '以前50个群要5个运营同事盯着，现在1个人就能管完，退费率下降42%。',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  // 静态默认值，首屏立即显示正确数字，避免显示 "0"
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (isInView) {
      // 重置为0开始动画
      setDisplayValue(0);
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {value % 1 !== 0 ? displayValue.toFixed(1) : displayValue}{suffix}
    </span>
  );
}

export default function Home() {
  // 确保首页也使用正确的favicon
  useSiteFavicon();
  // 客户案例轮播状态
  const [currentCase, setCurrentCase] = useState(0);

  return (
    <>
      <Helmet>
        <title>有机云-企业微信SCRM私域运营系统｜活码拓客·AI智能体·会话存档(10万+企业信赖)</title>
        <meta name="description" content="有机云（www.fenyai.com）是企业微信官方合作伙伴，提供企微SCRM、活码拓客、AI智能体、超级群发、会话存档等私域运营工具，已服务10万+企业，助力私域运营效率提升10倍。免费试用→" />
        <meta name="keywords" content="企业微信SCRM,私域运营工具,客户管理系统,企业微信营销,私域流量,企微,活码裂变,超级群发,AI智能体,会话聚合,SCRM系统,私域运营,企微活码,客户管理" />
        <link rel="canonical" href="https://www.fenyai.com/" />
        {/* 首页显式设置favicon，防止浏览器自动生成文字图标 */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        {/* Open Graph 社交分享标签 */}
        <meta property="og:title" content="有机云-企业微信SCRM私域运营系统｜活码拓客·AI智能体·会话存档(10万+企业信赖)" />
        <meta property="og:description" content="有机云是企业微信官方合作伙伴，提供企微SCRM、活码拓客、AI智能体、超级群发等私域运营工具，已服务10万+企业，助力私域运营效率提升10倍。免费试用→" />
        <meta property="og:url" content="https://www.fenyai.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.fenyai.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="有机云SCRM" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="有机云-企业微信SCRM私域运营系统｜活码拓客·AI智能体·会话存档(10万+企业信赖)" />
        <meta name="twitter:description" content="有机云是企业微信官方合作伙伴，提供企微SCRM、活码拓客、AI智能体、超级群发等私域运营工具，已服务10万+企业，助力私域运营效率提升10倍。免费试用→" />
        <meta name="twitter:image" content="https://www.fenyai.com/og-image.png" />
        {/* Schema.org 结构化数据 */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "有机云",
            "legalName": "广州有机云计算有限责任公司",
            "alternateName": "有机云SCRM",
            "url": "https://www.fenyai.com",
            "logo": "https://www.fenyai.com/logo.png",
            "image": "https://www.fenyai.com/og-image.png",
            "description": "企业微信SCRM私域流量自动化运营专家，提供企微活码、裂变拓客、AI智能体、超级群发等全链路私域解决方案",
            "foundingDate": "2020",
            "slogan": "让私域运营更简单",
            "brand": { "@type": "Brand", "name": "有机云" },
            "knowsAbout": ["企业微信SCRM", "私域运营", "AI智能体", "会话存档", "活码引流", "超级群发", "消息通道API", "客户标签管理", "数据分析", "私有化部署"],
            "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 50, "maxValue": 100 },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+86-133-1616-9107",
              "contactType": "sales",
              "email": "374183167@qq.com",
              "areaServed": "CN",
              "availableLanguage": "Chinese"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "番禺区大学城青蓝街28号创智大厦3栋6楼",
              "addressLocality": "广州市",
              "addressRegion": "广东省",
              "postalCode": "511400",
              "addressCountry": "CN"
            },
            "sameAs": ["https://aiqicha.baidu.com/company_basic_18714988634245", "https://www.qcc.com/firm/5a6e2c8eb6edbb8466d997a9e1c3bfaf.html", "https://pitchhub.36kr.com/project/1894981971746048", "https://www.yjiyun.com", "https://www.zhihu.com/people/youjiyun", "https://www.xiaohongshu.com/user/profile/6901911c000000003700bbdf"]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "有机云SCRM",
            "url": "https://www.fenyai.com",
            "description": "企业微信SCRM私域流量自动化运营工具",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.fenyai.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
        {/* BreadcrumbList 结构化数据 */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "首页",
              "item": "https://www.fenyai.com/"
            }]
          })}
        </script>
        {/* FAQPage 结构化数据：争夺百度 Featured Snippet，提升 CTR */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "有机云是什么？",
                "acceptedAnswer": { "@type": "Answer", "text": "有机云是广州有机云计算有限责任公司旗下的企业微信SCRM私域运营工具，专注企业微信活码拓客、AI智能体、会话存档、超级群发、聚合聊天与消息通道API等全链路能力，已服务10万+企业。" }
              },
              {
                "@type": "Question",
                "name": "有机云提供哪些企业微信SCRM功能？",
                "acceptedAnswer": { "@type": "Answer", "text": "有机云覆盖私域运营全场景：渠道活码与员工活码引流、AI智能体自动接待、会话内容存档与质检、超级群发与防封触达、聚合聊天统一接待、消息通道API对接，以及SOP自动化编排。" }
              },
              {
                "@type": "Question",
                "name": "有机云企业微信SCRM适合哪些行业？",
                "acceptedAnswer": { "@type": "Answer", "text": "有机云广泛应用于金融、连锁零售、社群电商、在线教培、医疗健康等对客户运营与合规有较高要求的行业，并支持私有化部署满足数据主权需求。" }
              },
              {
                "@type": "Question",
                "name": "有机云会话存档合规吗？",
                "acceptedAnswer": { "@type": "Answer", "text": "有机云会话内容存档基于企业微信官方会话存档能力，遵循员工与客户双向告知的合规要求，支持本地、专有云、混合三种私有化部署，满足金融、医疗等行业的审计与等保要求。" }
              },
              {
                "@type": "Question",
                "name": "有机云可以免费试用吗？",
                "acceptedAnswer": { "@type": "Answer", "text": "可以。有机云提供免费试用，企业可在官网申请体验活码、AI智能体、会话存档、超级群发等真实功能，并有专属顾问提供行业落地方案咨询。" }
              }
            ]
          })}
        </script>
      </Helmet>
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-28" aria-label="首页横幅">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-cyan-50"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-200/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-200/20 rounded-full blur-[80px]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* 左侧文案 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold mb-6 tracking-wide">
                企业微信官方合作伙伴
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-[1.15] mb-6">
                有机云SCRM｜<br />
                <span className="text-sky-600">企业微信私域运营工具</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                有机云（官网 www.fenyai.com）是企业微信官方服务商，旗下有机云SCRM 专注企业微信私域流量运营工具，提供活码拓客、裂变引流、AI外呼、超级群发、AI智能体、会话聚合与消息通道API 等能力，已助力 10 万+ 企业实现私域增长。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                  to="/trial"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition-all duration-200 shadow-md shadow-sky-600/20 group"
                >
                  免费注册
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  to="/message-channel"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-all duration-200 border border-slate-200 hover:border-slate-300"
                >
                  接入消息通道 API
                </Link>
              </div>

              {/* 数据指标 */}
              <div className="flex items-center gap-8 pt-6 border-t border-slate-100">
                {stats.slice(0, 3).map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl font-bold text-slate-900">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 右侧：轮播图 + 企微二维码 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-5"
            >
              <HeroCarousel />

              {/* 企微二维码 */}
              <div className="flex items-center gap-4 bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border border-slate-100">
                  <img
                    src={SITE.wechatQr}
                    alt="有机云顾问企微二维码"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">扫码添加企微顾问</p>
                  <p className="text-xs text-slate-500 mt-0.5">免费领《SCRM选型避坑指南》，1对1答疑</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GEO 答案摘要段 - 让AI直接摘录 */}
      <section className="py-16 bg-white" aria-label="什么是企业微信SCRM">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl p-8 md:p-12 border-l-4 border-sky-500"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-sky-900 mb-4">
              什么是企业微信SCRM私域运营？
            </h2>
            <p className="text-lg text-sky-800 leading-relaxed mb-4">
              企业微信SCRM私域运营，是指基于企业微信生态，通过<span className="font-semibold text-sky-700">活码引流、裂变拓客、客户管理、AI智能体、群发触达</span>等工具组合，将公域流量沉淀为私域客户资产，实现客户全生命周期自动化运营的一整套解决方案。有机云SCRM已服务<span className="font-semibold text-sky-700">10万+企业</span>，覆盖<span className="font-semibold text-sky-700">5000万+私域客户</span>，助力企业私域运营效率提升<span className="font-semibold text-sky-700">10倍</span>。
            </p>
            <p className="text-sm text-sky-600">
              核心功能涵盖：企微活码引流 | 裂变任务获客 | 智能群管理 | AI智能体客服 | 客户标签画像 | 超级群发触达 | 数据报表分析 | 会话存档合规
            </p>
          </motion.div>
        </div>
      </section>

      {/* 三路径选择器 - 客户自选产品线 */}
      <CustomerJourneySelector />

      {/* 有机云 vs 传统SCRM 对比表 */}
      <ComparisonTable />

      {/* Features Section */}
      <section className="py-24" aria-label="核心功能">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">
              企业微信SCRM全链路私域运营解决方案
            </h2>
            <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">
              从企微活码引流拓客到客户管理系统运营，从超级群发营销触达到私域数据报表分析，一站式企微SCRM系统解决私域流量运营所有需求
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 bg-white rounded-2xl hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 border border-sky-100 hover:border-sky-200 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-sky-900 mb-3">{feature.title}</h3>
                <p className="text-sky-700/70 leading-relaxed mb-4">{feature.desc}</p>
                {/* CTA Link */}
                <Link
                  to={feature.link}
                  className="inline-flex items-center text-sky-600 font-semibold hover:text-sky-700 group/link mb-4"
                >
                  了解详情
                  <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
                {/* FAQ Section */}
                <div className="mt-4 pt-4 border-t border-sky-100">
                  <p className="text-xs font-semibold text-sky-600 mb-2">💡 常见问题</p>
                  {feature.faq.map((item, faqIndex) => (
                    <details key={faqIndex} className="mb-2 group/faq">
                      <summary className="text-sm font-medium text-sky-800 cursor-pointer hover:text-sky-600 flex items-start">
                        <span className="mr-1">›</span>
                        <span>{item.q}</span>
                      </summary>
                      <p className="text-xs text-sky-600/80 mt-1 pl-4 leading-relaxed">{item.a}</p>
                    </details>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white" aria-label="认证与资质">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">认证与资质</h2>
            <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">
              权威认证，值得信赖的企业微信服务商
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col items-center text-center p-6 bg-sky-50 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-3">{cert.icon}</div>
                <h3 className="font-bold text-sky-900 text-sm mb-1">{cert.name}</h3>
                <p className="text-xs text-sky-600/70">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Cases Section - 轮播卡片 */}
      <section className="py-24 bg-sky-50" aria-label="客户案例">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">客户成功案例</h2>
            <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">
              10万+企业的私域运营选择，用数据说话
            </p>
          </motion.div>

          {/* 轮播卡片容器 */}
          <div className="relative">
            {/* 轮播卡片 */}
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentCase * 100}%)` }}
              >
                {customerCases.map((caseItem, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                      <div className="grid lg:grid-cols-2">
                        {/* 左侧：客户信息 */}
                        <div className={`p-8 lg:p-10 ${caseItem.bgColor}`}>
                          <div className="flex items-center gap-4 mb-6">
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${caseItem.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                              {caseItem.logo}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-sky-900">{caseItem.company}</h3>
                              <span className="text-sm text-sky-600">{caseItem.industry}</span>
                            </div>
                          </div>

                          {/* 量化结果 */}
                          <div className="grid grid-cols-3 gap-4 mb-6">
                            {caseItem.metrics.map((metric, i) => (
                              <div key={i} className="text-center p-3 bg-white/60 rounded-xl">
                                <div className="text-2xl font-bold text-sky-900">{metric.value}</div>
                                <div className="text-xs text-sky-600">{metric.label}</div>
                              </div>
                            ))}
                          </div>

                          {/* 客户证言 */}
                          <div className="bg-white rounded-xl p-4 shadow-sm">
                            <Quote className="w-5 h-5 text-sky-400 mb-2" />
                            <p className="text-sky-800 text-sm leading-relaxed">"{caseItem.quote}"</p>
                          </div>
                        </div>

                        {/* 右侧：痛点+方案+CTA */}
                        <div className="p-8 lg:p-10">
                          {/* 客户痛点 */}
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-sky-500 uppercase tracking-wider mb-3">客户痛点</h4>
                            <p className="text-sky-800 leading-relaxed">{caseItem.painPoint}</p>
                          </div>

                          {/* 有机云方案 */}
                          <div className="mb-8">
                            <h4 className="text-sm font-semibold text-sky-500 uppercase tracking-wider mb-3">有机云方案</h4>
                            <p className="text-sky-800 leading-relaxed">{caseItem.solution}</p>
                          </div>

                          {/* CTA */}
                          <div className="bg-gradient-to-r from-sky-50 to-cyan-50 rounded-2xl p-6 border border-sky-100">
                            <p className="text-sky-900 font-semibold mb-4">{caseItem.industry}同类需求？</p>
                            <Link
                              to="/trial"
                              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-sky-500/25"
                            >
                              立即咨询
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* 轮播控制按钮 */}
            <button
              onClick={() => setCurrentCase((prev) => (prev === 0 ? customerCases.length - 1 : prev - 1))}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-sky-600 hover:text-sky-800 hover:shadow-xl transition-all z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setCurrentCase((prev) => (prev === customerCases.length - 1 ? 0 : prev + 1))}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-sky-600 hover:text-sky-800 hover:shadow-xl transition-all z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* 轮播指示器 */}
            <div className="flex justify-center gap-2 mt-6">
              {customerCases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCase(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentCase === index ? 'bg-sky-500 w-8' : 'bg-sky-200 hover:bg-sky-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 干货文章入口 */}
      <section className="py-20 bg-white" aria-label="私域运营干货">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">私域运营干货文章</h2>
            <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">
              实战经验分享，助力企业私域运营能力提升
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'SCRM系统选型指南', desc: '8家主流SCRM功能对比，帮你避开选型坑', icon: BookOpen, link: '/articles' },
              { title: '企微活码引流实战', desc: '日均引流1000+的活码配置技巧', icon: FileText, link: '/articles' },
              { title: '私域运营SOP模板', desc: '标准化运营流程，效率提升10倍', icon: Target, link: '/articles' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 bg-sky-50 rounded-2xl hover:bg-sky-100 transition-all duration-300 border border-sky-100"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-sky-900 mb-2">{item.title}</h3>
                <p className="text-sky-700/70 text-sm mb-4">{item.desc}</p>
                <Link
                  to={item.link}
                  className="inline-flex items-center text-sky-600 font-semibold text-sm hover:text-sky-700 group-hover:translate-x-1 transition-all"
                >
                  阅读更多
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/articles"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-sky-600 font-semibold rounded-xl border-2 border-sky-200 hover:border-sky-500 hover:bg-sky-50 transition-all duration-300"
            >
              查看全部文章
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-cyan-500" aria-label="数据统计">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sky-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-white" aria-label="合作客户">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sky-600/60 text-sm font-medium mb-8 uppercase tracking-wider"
          >
            深受行业领先企业信赖
          </motion.p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col items-center justify-center p-4 rounded-xl hover:bg-sky-50 transition-colors group"
              >
                {logo.image ? (
                  <img src={logo.image} alt={logo.name} className="w-12 h-12 object-contain" loading="lazy" decoding="async" />
                ) : (
                  <logo.icon className="w-8 h-8 text-sky-300 group-hover:text-sky-500 transition-colors" />
                )}
                <span className="text-xs text-sky-600/50 mt-2">{logo.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24" aria-label="行业解决方案">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">行业解决方案</h2>
            <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">
              针对不同行业特点，提供专业的私域运营解决方案
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-sky-100 hover:border-sky-200 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-sky-900 mb-2">{solution.title}</h3>
                    <p className="text-sky-700/70 leading-relaxed">{solution.desc}</p>
                    <Link
                      to="/solutions"
                      className="inline-flex items-center text-sky-600 font-semibold mt-4 hover:text-sky-700 group/link"
                    >
                      了解详情
                      <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section - 消息通道定位 + 内嵌预约表单 */}
      <section className="py-24 bg-gradient-to-br from-sky-50 via-white to-cyan-50" aria-label="立即行动">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-sm font-semibold mb-4">
                <Zap className="w-4 h-4" />
                消息通道基础设施
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-6 leading-tight">
                已有 AI 智能体？<br />
                现在就接入有机云消息通道
              </h2>
              <p className="text-lg text-sky-700/80 mb-8 leading-relaxed">
                你的 AI Agent + 有机云消息通道 = 完整的智能运营方案。3 行代码完成对接，万级并发，99.9% 送达率。
              </p>
              <div className="space-y-3 mb-8">
                {[
                  '3 行代码对接，无需自建消息底层',
                  '支持文本/图片/卡片/小程序/文件/语音',
                  '与 Dify/Coze/百度千帆/阿里百炼无缝集成',
                ].map((item, i) => (
                  <div key={i} className="flex items-center text-sky-800">
                    <div className="w-5 h-5 rounded-full bg-sky-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/message-channel"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-sky-500/25 group"
                >
                  查看接入文档
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-sky-700 font-semibold rounded-xl hover:bg-sky-50 transition-all duration-300 border border-sky-200"
                >
                  咨询方案
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <DemoForm
                title="预约 1 对 1 演示"
                subtitle="专业顾问 10 分钟内联系您，定制专属方案"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
