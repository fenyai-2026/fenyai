import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ShoppingCart, Users, TrendingUp, Gift, ArrowRight, CheckCircle, BarChart3, Zap } from 'lucide-react';
import { injectJSONLD } from '../utils/jsonld';
import { Breadcrumb } from '../components/Breadcrumb';
import ProductCrossLinks from '../components/ProductCrossLinks';
import DemoForm from '../components/DemoForm';

const painPoints = [
  {
    title: '流量获取难',
    desc: '公域流量成本越来越高，获客成本居高不下',
    solution: '企微活码+裂变拓客，获客成本降低70%'
  },
  {
    title: '复购率低',
    desc: '客户购买后流失率高，难以建立长期关系',
    solution: '客户管理系统+运营SOP，复购率提升180%'
  },
  {
    title: '社群活跃度下降',
    desc: '社群运营缺乏有效手段，用户参与度低',
    solution: '智能群管+AI互动，社群活跃度提升300%'
  },
  {
    title: '订单管理混乱',
    desc: '多平台订单数据分散，难以统一管理',
    solution: '数据中台+订单同步，订单管理效率提升5倍'
  }
];

const solutions = [
  {
    icon: Users,
    title: '企微活码获客',
    desc: '通过企微活码实现线上线下全渠道获客，自动分配客户给专属顾问，实现精准引流。支持渠道追踪、数据统计，优化获客策略。',
    highlights: ['渠道活码', '自动分配', '数据统计', 'ROI分析']
  },
  {
    icon: Gift,
    title: '裂变拉新',
    desc: '任务裂变、红包裂变、拼团裂变等多种玩法，让每个用户都成为传播节点。低成本获取高质量新客，实现病毒式增长。',
    highlights: ['任务裂变', '红包裂变', '拼团裂变', '病毒传播']
  },
  {
    icon: TrendingUp,
    title: '社群自动化',
    desc: '智能群管+AI互动+自动回复，7×24小时自动化运营。群满自动建新群，关键词自动回复，大幅提升运营效率。',
    highlights: ['智能群管', 'AI互动', '自动回复', '7×24运营']
  },
  {
    icon: BarChart3,
    title: '数据中台',
    desc: '多平台订单数据统一接入，客户画像精准分析。支持淘宝、京东、拼多多等电商平台数据同步，形成完整数据资产。',
    highlights: ['多平台打通', '订单同步', '客户关联', '数据分析']
  }
];

const cases = [
  {
    company: '云集微店',
    result: '裂变任务+超级群发+AI智能体，3个月沉淀私域客户200万+，社群GMV增长300%，获客成本降低70%，单场裂变新增4万+好友',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80'
  },
  {
    company: '完美日记',
    result: '私域数据中台+精细化运营+用户画像，私域客户LTV提升3倍，复购率提升180%，客户留存率提升200%',
    image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=600&q=80'
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "有机云社群电商私域运营方案",
  "description": "社群电商私域运营解决方案，提供企微活码获客、裂变拉新、社群自动化、数据中台",
  "brand": {
    "@type": "Brand",
    "name": "有机云"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "CNY"
  }
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "首页",
      "item": "https://www.fenyai.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "解决方案",
      "item": "https://www.fenyai.com/solutions"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "社群电商",
      "item": "https://www.fenyai.com/solutions/ecommerce"
    }
  ]
};

export default function SolutionsEcommerce() {
  useEffect(() => {
    injectJSONLD({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: '社群电商私域运营解决方案 - 有机云',
      description: '为电商企业提供裂变拉新、订单同步、复购提升等私域运营方案，助力社群电商增长',
      provider: { '@type': 'Organization', name: '有机云', url: 'https://www.fenyai.com' },
      areaServed: 'CN',
      serviceType: '社群电商私域运营解决方案',
    }, 'solution-ecommerce');
  }, []);

  return (
    <>
      <Helmet>
        <title>有机云社群电商私域运营方案</title>
        <meta name="description" content="社群电商私域运营解决方案，提供企微活码获客、裂变拉新、社群自动化、数据中台，助力电商企业实现私域增长。" />
        <meta name="keywords" content="电商私域运营,社群电商,私域流量,裂变拉新,企微SCRM" />
        <link rel="canonical" href="https://www.fenyai.com/solutions/ecommerce" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-sky-50 to-cyan-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Breadcrumb />
        </div>
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0C4A6E] via-[#0EA5E9] to-[#38BDF8] py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
                <ShoppingCart className="w-4 h-4 mr-2" />
                行业解决方案
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">社群电商私域运营方案</h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                企微活码+裂变拉新+社群自动化+数据中台，助力电商企业实现私域增长
              </p>
              <Link
                to="/trial"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl hover:bg-sky-50 transition-all shadow-lg"
              >
                免费试用
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 面包屑 */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm text-slate-600">
            <Link to="/" className="hover:text-sky-600">首页</Link>
            <span className="mx-2">/</span>
            <Link to="/solutions" className="hover:text-sky-600">解决方案</Link>
            <span className="mx-2">/</span>
            <span className="text-sky-600">社群电商</span>
          </nav>
        </div>

        {/* 痛点与解决方案 */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-sky-900 mb-4">行业痛点与解决方案</h2>
              <p className="text-sky-600">针对电商行业核心痛点，提供完整解决方案</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {painPoints.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-rose-500 font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-sky-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 text-sm mb-3">{item.desc}</p>
                      <div className="flex items-center gap-2 text-emerald-600 text-sm">
                        <CheckCircle className="w-4 h-4" />
                        <span>{item.solution}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 核心功能 */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-sky-900 mb-4">核心功能模块</h2>
              <p className="text-sky-600">四大核心功能，打造电商私域增长引擎</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-sky-900">{item.title}</h3>
                  </div>
                  <p className="text-slate-600 mb-4">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((h, i) => (
                      <span key={i} className="px-3 py-1 bg-white text-sky-600 text-sm rounded-full border border-sky-200">
                        {h}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 客户案例 */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-sky-900 mb-4">客户成功案例</h2>
              <p className="text-sky-600">真实客户数据，见证电商私域增长</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {cases.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg"
                >
                  <div className="h-40 bg-gradient-to-br from-sky-400 to-cyan-400 flex items-center justify-center">
                    <ShoppingCart className="w-16 h-16 text-white/80" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-sky-900 mb-2">{item.company}</h3>
                    <p className="text-slate-600 text-sm">{item.result}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 咨询入口：扫码添加企业微信 */}
        <section className="py-16 bg-gradient-to-br from-sky-50 to-cyan-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-sky-900 mb-4">获取专属私域运营方案</h2>
              <p className="text-sky-600">添加企业微信，资深顾问 1 对 1 为您定制电商私域增长方案</p>
            </div>
            <DemoForm />
          </div>
        </section>

        {/* 相关产品推荐 */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProductCrossLinks title="支持电商私域运营的有机云产品" maxCount={4} />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-sky-500 to-cyan-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">开启电商私域增长</h2>
            <p className="text-white/90 mb-8">立即试用，体验完整电商私域运营功能</p>
            <Link
              to="/trial"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl hover:bg-sky-50 transition-all shadow-lg"
            >
              免费试用
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
