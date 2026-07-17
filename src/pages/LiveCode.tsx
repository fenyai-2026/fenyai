import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHelmet from '../components/SEOHelmet';
import RelatedArticlesByKeyword from '../components/RelatedArticlesByKeyword';
import { QrCode, Users, BarChart3, Shield, ArrowRight, CheckCircle, Zap, Target, Clock, Award } from 'lucide-react';

const features = [
  {
    icon: QrCode,
    title: '渠道活码',
    desc: '为不同渠道生成专属活码，自动统计各渠道扫码数据，精准分析引流效果，优化投放策略。支持线上线下全渠道覆盖。',
    highlights: ['渠道追踪', '数据统计', '效果分析', '无限生成']
  },
  {
    icon: Users,
    title: '员工活码',
    desc: '智能分配客户给不同员工，支持顺序分配、随机分配、权重分配。自动统计员工业绩，实现公平透明的客户分配机制。',
    highlights: ['智能分配', '业绩统计', '负载均衡', '自动上下线']
  },
  {
    icon: Target,
    title: '群活码',
    desc: '群满自动换群，永不过期。支持多群轮换、群满提醒、自动建群。解决微信群二维码7天过期、200人上限的难题。',
    highlights: ['自动换群', '永不过期', '多群轮换', '智能扩容']
  },
  {
    icon: BarChart3,
    title: '数据报表',
    desc: '实时统计扫码数据、添加客户数、转化率等核心指标。支持按时间、渠道、员工多维度分析，数据驱动运营决策。',
    highlights: ['实时统计', '多维分析', '数据导出', '趋势图表']
  },
  {
    icon: Shield,
    title: '安全合规',
    desc: '企业微信官方接口，数据安全有保障。支持防刷机制、异常监控、合规管理，确保活码使用安全合规。',
    highlights: ['官方接口', '防刷机制', '异常监控', '合规保障']
  },
  {
    icon: Zap,
    title: '批量生成',
    desc: '支持批量生成活码，一次创建千个渠道码。支持模板导入、批量导出、API对接，大幅提升运营效率。',
    highlights: ['批量创建', '模板导入', 'API对接', '一键导出']
  }
];

const scenarios = [
  {
    title: '线下门店引流',
    desc: '在门店海报、展架、收银台放置企微活码，顾客扫码即可添加企业微信，自动分配给门店导购，实现线下流量线上沉淀。',
    icon: Target
  },
  {
    title: '线上广告投放',
    desc: '在抖音、朋友圈、百度等广告渠道投放企微活码，追踪各渠道引流效果，优化投放策略，提升广告ROI。',
    icon: Zap
  },
  {
    title: '包裹卡引流',
    desc: '在电商包裹中放置企微活码卡片，引导买家添加企业微信，沉淀私域流量，提升复购率和客户LTV。',
    icon: Users
  },
  {
    title: '活动裂变引流',
    desc: '通过企微活码开展裂变活动，老客带新客，实现私域流量快速增长，降低获客成本。',
    icon: Award
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "有机云企微活码系统",
  "description": "企业微信活码引流工具，支持渠道活码、员工活码、群活码，自动分配客户，数据统计分析",
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

export default function LiveCode() {
  return (
    <>
      <SEOHelmet
        title="企业微信活码怎么生成_有机云活码引流工具_渠道活码·员工活码·群活码"
        description="企业微信活码怎么生成？有机云企微活码系统支持渠道活码、员工活码、群活码，自动分配客户、数据统计分析，助力企业快速沉淀私域流量。免费试用→"
        keywords="企业微信活码怎么生成,企微活码,企业微信活码,活码引流,渠道活码,员工活码,群活码"
        canonical="https://www.fenyai.com/live-code"
        extraSchema={jsonLd}
      />

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
                  <QrCode className="w-4 h-4 mr-2" />
                  企业微信官方接口
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sky-900 leading-tight mb-6">
                  企微活码
                  <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">引流拓客</span>
                  神器
                </h1>
                <p className="text-lg sm:text-xl text-sky-700/80 mb-8 leading-relaxed max-w-xl">
                  企业微信活码引流工具，支持渠道活码、员工活码、群活码，智能分配客户，自动数据统计，让每一次扫码都能沉淀私域流量
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
                    <span className="text-sm">渠道追踪</span>
                  </div>
                  <div className="flex items-center text-sky-600">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="text-sm">智能分配</span>
                  </div>
                  <div className="flex items-center text-sky-600">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="text-sm">数据统计</span>
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
                    <div className="w-48 h-48 bg-sky-100 rounded-xl flex items-center justify-center mb-4">
                      <QrCode className="w-24 h-24 text-sky-500" />
                    </div>
                    <p className="text-sky-700 font-medium">扫码添加企业微信</p>
                    <p className="text-sky-500 text-sm mt-1">自动分配专属顾问</p>
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
                企微活码六大核心功能
              </h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">
                覆盖企业微信活码引流全场景，从生成到分配，从统计到分析，一站式解决活码运营需求
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

        {/* Scenarios Section */}
        <section className="py-24 bg-white" aria-label="应用场景">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">
                企微活码四大应用场景
              </h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">
                线上线下全渠道覆盖，让企微活码成为您的私域流量入口
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {scenarios.map((scenario, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-sky-50 rounded-2xl p-8"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <scenario.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-sky-900 mb-2">{scenario.title}</h3>
                      <p className="text-sky-700/70 leading-relaxed">{scenario.desc}</p>
                    </div>
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
                立即开启企微活码引流
              </h2>
              <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">
                免费试用3天，专业顾问1对1指导，助您快速搭建活码引流体系
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
                  to="/growth"
                  className="inline-flex items-center justify-center px-8 py-4 bg-sky-400/30 text-white font-semibold rounded-xl hover:bg-sky-400/40 transition-all duration-300 border border-white/30"
                >
                  了解裂变拓客
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        <RelatedArticlesByKeyword keyword="企微活码" keywords={['活码', '引流', '渠道活码', '加粉', '企微活码']} title="延伸阅读：企业微信活码" />
      </main>
    </>
  );
}
