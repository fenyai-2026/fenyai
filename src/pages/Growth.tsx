import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Users, Share2, Gift, TrendingUp, ArrowRight, CheckCircle, Zap, Target, Award, Star } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: '任务宝裂变',
    desc: '设置裂变任务，客户邀请好友助力完成任务即可获得奖励。支持阶梯奖励、排行榜、实时进度，激发客户分享动力，实现病毒式传播。',
    highlights: ['阶梯奖励', '排行榜', '实时进度', '防刷机制']
  },
  {
    icon: Share2,
    title: '海报裂变',
    desc: '客户生成专属海报分享朋友圈，好友扫码添加即算邀请成功。支持自定义海报模板、数据统计、自动发奖，让老客带新客更简单。',
    highlights: ['专属海报', '自定义模板', '自动统计', '自动发奖']
  },
  {
    icon: Gift,
    title: '红包裂变',
    desc: '设置红包奖励，客户邀请好友添加企业微信即可领取红包。支持随机红包、固定红包、裂变红包，用红包激励客户主动分享。',
    highlights: ['随机红包', '裂变红包', '实时到账', '数据统计']
  },
  {
    icon: TrendingUp,
    title: '群裂变',
    desc: '客户邀请好友进群，达到指定人数即可解锁奖励。支持群满换群、自动审核、奖励发放，快速扩充私域社群规模。',
    highlights: ['群满换群', '自动审核', '奖励解锁', '群规模扩充']
  },
  {
    icon: Target,
    title: '精准裂变',
    desc: '基于客户标签、行为数据，精准筛选种子客户进行裂变。支持人群包筛选、A/B测试、效果追踪，提升裂变精准度和转化率。',
    highlights: ['标签筛选', '人群包', 'A/B测试', '效果追踪']
  },
  {
    icon: Zap,
    title: '自动化运营',
    desc: '裂变活动全流程自动化，从活动创建到奖励发放无需人工干预。支持定时启动、自动提醒、数据报表，大幅提升运营效率。',
    highlights: ['全流程自动', '定时启动', '自动提醒', '数据报表']
  }
];

const cases = [
  {
    industry: '保险行业',
    company: '某头部保险公司',
    activity: '邀请好友领保障',
    result: '3天裂变新增客户10万+，获客成本降低80%',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80'
  },
  {
    industry: '社群电商',
    company: '某社群团购平台',
    activity: '邀请进群领优惠券',
    result: '7天新增社群成员50万+，GMV增长300%',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80'
  },
  {
    industry: '教育培训',
    company: '某在线教育平台',
    activity: '邀请好友免费听课',
    result: '单月裂变新增学员5万+，转化率提升200%',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&q=80'
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "有机云裂变拓客系统",
  "description": "企业微信裂变拓客工具，支持任务宝、海报裂变、红包裂变、群裂变，实现私域流量快速增长",
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
      "name": "裂变拓客",
      "item": "https://www.fenyai.com/growth"
    }
  ]
};

export default function Growth() {
  return (
    <>
      <Helmet>
        <title>企微好友裂变怎么玩_企业微信裂变工具_有机云任务宝·红包裂变</title>
        <meta name="description" content="有机云企微好友裂变工具：任务宝、红包裂变、海报裂变一键发起，老客户带新客户，裂变系数可达1:5，获客成本降低60%。免费试用→" />
        <meta name="keywords" content="企微好友裂变,企业微信裂变,私域裂变,任务宝,海报裂变,红包裂变,群裂变,裂变工具" />
        <link rel="canonical" href="https://www.fenyai.com/growth" />
        <meta property="og:title" content="企微好友裂变怎么玩_企业微信裂变工具_有机云任务宝·红包裂变" />
        <meta property="og:description" content="有机云企微好友裂变工具：任务宝、红包裂变、海报裂变一键发起，老客户带新客户，裂变系数可达1:5，获客成本降低60%" />
        <meta property="og:url" content="https://www.fenyai.com/growth" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      <main className="bg-sky-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[80vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-900/10 via-sky-50 to-cyan-900/10"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 text-sm font-semibold mb-6">
                  <Share2 className="w-4 h-4 mr-2" />
                  私域流量增长引擎
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sky-900 leading-tight mb-6">
                  企业微信
                  <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">裂变拓客</span>
                  系统
                </h1>
                <p className="text-lg sm:text-xl text-sky-700/80 mb-8 leading-relaxed max-w-xl">
                  企业微信裂变工具，支持任务宝、海报裂变、红包裂变、群裂变，让老客带新客，实现私域流量病毒式增长，获客成本降低80%
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/trial"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-sky-500/25"
                  >
                    免费试用
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    to="/products"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-700 font-semibold rounded-xl hover:bg-sky-50 transition-all duration-300 border border-sky-200"
                  >
                    了解功能
                  </Link>
                </div>

                <div className="flex items-center space-x-6 mt-10">
                  <div className="flex items-center text-sky-600">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="text-sm">病毒式传播</span>
                  </div>
                  <div className="flex items-center text-sky-600">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="text-sm">低成本获客</span>
                  </div>
                  <div className="flex items-center text-sky-600">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="text-sm">自动化运营</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-sky-500/10 border border-sky-200/50 bg-white p-8">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center">
                        <Users className="w-8 h-8 text-sky-500" />
                      </div>
                      <ArrowRight className="w-6 h-6 text-sky-400" />
                      <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center">
                        <Users className="w-8 h-8 text-sky-500" />
                      </div>
                      <ArrowRight className="w-6 h-6 text-sky-400" />
                      <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center">
                        <Users className="w-8 h-8 text-sky-500" />
                      </div>
                    </div>
                    <p className="text-sky-700 font-medium text-lg">1人带来10人</p>
                    <p className="text-sky-500 text-sm mt-1">病毒式裂变增长</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24" aria-label="核心功能">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">
                裂变拓客六大核心功能
              </h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">
                覆盖企业微信裂变全场景，从任务设置到奖励发放，一站式解决私域裂变需求
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-sky-100"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-sky-900 mb-3">{feature.title}</h3>
                  <p className="text-sky-700/70 leading-relaxed mb-4">{feature.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.highlights.map((highlight, i) => (
                      <span key={i} className="px-3 py-1 bg-sky-50 text-sky-600 text-xs rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cases Section */}
        <section className="py-24 bg-white" aria-label="客户案例">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">
                裂变拓客成功案例
              </h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">
                保险、电商、教育等行业头部企业的私域裂变实战经验
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {cases.map((caseItem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-sky-50 rounded-2xl overflow-hidden"
                >
                  <img src={caseItem.image} alt={caseItem.company} className="w-full h-48 object-cover" loading="lazy" decoding="async" />
                  <div className="p-6">
                    <div className="text-sm text-sky-500 font-medium mb-1">{caseItem.industry}</div>
                    <h3 className="text-lg font-bold text-sky-900 mb-2">{caseItem.company}</h3>
                    <div className="text-sm text-sky-600 mb-2">活动：{caseItem.activity}</div>
                    <p className="text-sky-700/70 text-sm">{caseItem.result}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-sky-500 to-cyan-500" aria-label="立即行动">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                立即开启私域裂变增长
              </h2>
              <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">
                免费试用3天，专业顾问1对1指导，助您设计裂变活动方案
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/trial"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl hover:bg-sky-50 transition-all duration-300"
                >
                  立即咨询
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/live-code"
                  className="inline-flex items-center justify-center px-8 py-4 bg-sky-400/30 text-white font-semibold rounded-xl hover:bg-sky-400/40 transition-all duration-300 border border-white/30"
                >
                  了解活码引流
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
