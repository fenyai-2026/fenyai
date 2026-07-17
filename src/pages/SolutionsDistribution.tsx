import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Network, Users, TrendingUp, Award, ArrowRight, CheckCircle, BarChart3, Gift, Target } from 'lucide-react';
import DemoForm from '../components/DemoForm';

const painPoints = [
  {
    title: '分销商管理难',
    desc: '分销商层级混乱，难以统一管理',
    solution: '分销层级管理+权限控制，分销商管理效率提升10倍'
  },
  {
    title: '佣金结算复杂',
    desc: '多级分销佣金计算繁琐，容易出错',
    solution: '自动佣金结算系统，佣金计算准确率99.9%'
  },
  {
    title: '业绩追踪困难',
    desc: '分销业绩数据分散，难以实时掌握',
    solution: '实时业绩看板，分销数据一目了然'
  },
  {
    title: '激励体系缺失',
    desc: '缺乏有效的分销商激励机制',
    solution: '多元化激励体系，分销商活跃度提升300%'
  }
];

const solutions = [
  {
    icon: Network,
    title: '分销层级管理',
    desc: '支持多级分销体系搭建，灵活设置分销层级和佣金比例。权限分级管理，确保分销体系健康运转。',
    highlights: ['多级分销', '权限控制', '层级管理', '佣金配置']
  },
  {
    icon: Gift,
    title: '自动佣金结算',
    desc: '系统自动计算多级分销佣金，支持多种结算方式。佣金明细清晰透明，分销商可随时查看收益。',
    highlights: ['自动计算', '多级佣金', '明细透明', '快速提现']
  },
  {
    icon: BarChart3,
    title: '业绩数据看板',
    desc: '实时展示分销业绩数据，包括销售额、订单量、新增分销商等关键指标。支持数据导出和深度分析。',
    highlights: ['实时数据', '多维度分析', '业绩排名', '数据导出']
  },
  {
    icon: Award,
    title: '分销商激励体系',
    desc: '完善的分销商激励机制，包括等级晋升、业绩奖励、排行榜等。激发分销商积极性，提升整体业绩。',
    highlights: ['等级晋升', '业绩奖励', '排行榜', '荣誉体系']
  }
];

const cases = [
  {
    company: '云集微店',
    result: '三级分销体系+自动佣金结算，3个月发展分销商5万+，分销业绩增长800%，月均销售额突破1000万',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80'
  },
  {
    company: '花生日记',
    result: '分销层级管理+激励体系，分销商活跃度提升300%，头部分销商月均收益超10万，平台GMV增长500%',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80'
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "有机云智慧分销私域运营方案",
  "description": "分销体系私域运营解决方案，提供分销层级管理、自动佣金结算、业绩看板、激励体系",
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
      "name": "智慧分销",
      "item": "https://www.fenyai.com/solutions/distribution"
    }
  ]
};

export default function SolutionsDistribution() {

  return (
    <>
      <Helmet>
        <title>有机云智慧分销私域运营方案</title>
        <meta name="description" content="分销体系私域运营解决方案，提供分销层级管理、自动佣金结算、业绩看板、激励体系，助力分销业绩增长800%" />
        <meta name="keywords" content="分销私域运营,分销管理系统,多级分销,佣金结算,分销方案" />
        <link rel="canonical" href="https://www.fenyai.com/solutions/distribution" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-sky-50 to-cyan-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0C4A6E] via-[#0EA5E9] to-[#38BDF8] py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
                <Network className="w-4 h-4 mr-2" />
                行业解决方案
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">智慧分销私域运营方案</h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                搭建多级分销体系，自动佣金结算，业绩数据看板，助力分销业绩增长800%
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
            <span className="text-sky-600">智慧分销</span>
          </nav>
        </div>

        {/* 痛点与解决方案 */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-sky-900 mb-4">行业痛点与解决方案</h2>
              <p className="text-sky-600">针对分销行业核心痛点，提供完整解决方案</p>
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
              <p className="text-sky-600">四大核心功能，打造完整分销体系</p>
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
              <p className="text-sky-600">真实客户数据，见证分销业绩增长</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
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
                    <Network className="w-16 h-16 text-white/80" />
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

        {/* 白皮书下载 */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-sky-900 mb-4">获取专属私域运营方案</h2>
                <p className="text-sky-700/70 max-w-xl mx-auto">添加企业微信，资深顾问 1 对 1 为您定制私域增长方案</p>
              </div>
              <DemoForm />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-sky-500 to-cyan-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">开启智慧分销增长</h2>
            <p className="text-white/90 mb-8">立即试用，体验完整分销体系功能</p>
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


