import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, Mic, Brain, BarChart3, Clock, Shield, ArrowRight, CheckCircle, Zap, Target, Award } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: '大模型驱动',
    desc: '基于先进的大语言模型，AI外呼机器人具备强大的语义理解和对话能力。支持多轮对话、意图识别、情感分析，让外呼更智能、更自然。',
    highlights: ['大模型底座', '多轮对话', '意图识别', '情感分析']
  },
  {
    icon: Mic,
    title: '真人语音',
    desc: '采用先进的语音合成技术，AI外呼声音自然流畅，接近真人。支持多种音色选择、语速调节、情感表达，提升客户接听体验。',
    highlights: ['语音合成', '多音色选择', '语速调节', '情感表达']
  },
  {
    icon: Phone,
    title: '智能外呼',
    desc: '支持批量外呼、定时外呼、预测式外呼。AI自动筛选意向客户，高意向客户自动转人工，大幅提升外呼效率和转化率。',
    highlights: ['批量外呼', '预测式外呼', '意向筛选', '自动转人工']
  },
  {
    icon: BarChart3,
    title: '数据分析',
    desc: '实时统计外呼数据，包括接通率、通话时长、意向度等核心指标。支持通话录音、转文字、数据分析，优化外呼策略。',
    highlights: ['实时统计', '通话录音', '语音转文字', '数据报表']
  },
  {
    icon: Clock,
    title: '7×24小时',
    desc: 'AI外呼机器人全天候工作，无需休息。支持设置外呼时段、频率控制、防骚扰机制，确保合规高效的外呼服务。',
    highlights: ['全天候工作', '时段设置', '频率控制', '防骚扰']
  },
  {
    icon: Shield,
    title: '安全合规',
    desc: '严格遵守通信法规，支持黑名单过滤、投诉管理、合规质检。企业微信官方接口，数据安全有保障，让外呼更安心。',
    highlights: ['黑名单过滤', '投诉管理', '合规质检', '数据安全']
  }
];

const scenarios = [
  {
    title: '客户回访',
    desc: '自动回访新老客户，收集满意度反馈，挖掘二次销售机会。AI外呼可替代80%的人工回访工作，大幅降低客服成本。',
    icon: Phone
  },
  {
    title: '活动通知',
    desc: '自动通知客户参与促销活动、新品上线、会员权益等。AI外呼触达率高，信息传达准确，提升活动参与率。',
    icon: Zap
  },
  {
    title: '意向筛选',
    desc: '批量外呼潜在客户，AI自动识别高意向客户并标记。销售人员专注跟进高意向客户，销售效率提升10倍。',
    icon: Target
  },
  {
    title: '预约提醒',
    desc: '自动提醒客户预约到店、课程上课、服务到期等。减少客户遗忘，提升到店率和续费率。',
    icon: Clock
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "有机云AI外呼系统",
  "description": "AI外呼系统，基于大模型的智能外呼机器人，支持批量外呼、意向筛选、数据分析",
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
      "name": "AI外呼",
      "item": "https://www.fenyai.com/ai-call"
    }
  ]
};

export default function AiCall() {
  return (
    <>
      <Helmet>
        <title>有机云AI外呼_智能外呼系统_AI外呼机器人_批量外呼·意向筛选</title>
        <meta name="description" content="有机云AI外呼系统，基于大模型的智能外呼机器人，支持批量外呼、意向筛选、数据分析，7×24小时自动工作，外呼效率提升10倍。免费试用→" />
        <meta name="keywords" content="AI外呼,智能外呼,AI外呼机器人,批量外呼,外呼系统,智能外呼系统,电话外呼" />
        <link rel="canonical" href="https://www.fenyai.com/ai-call" />
        <meta property="og:title" content="AI外呼_智能外呼系统_AI外呼机器人_批量外呼·意向筛选" />
        <meta property="og:description" content="有机云AI外呼系统，基于大模型的智能外呼机器人，支持批量外呼、意向筛选、数据分析" />
        <meta property="og:url" content="https://www.fenyai.com/ai-call" />
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
                  <Brain className="w-4 h-4 mr-2" />
                  大模型驱动
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sky-900 leading-tight mb-6">
                  AI外呼
                  <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">智能外呼</span>
                  系统
                </h1>
                <p className="text-lg sm:text-xl text-sky-700/80 mb-8 leading-relaxed max-w-xl">
                  基于大模型的AI外呼机器人，支持批量外呼、意向筛选、数据分析，7×24小时自动工作，外呼效率提升10倍，人工成本降低80%
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
                    <span className="text-sm">大模型驱动</span>
                  </div>
                  <div className="flex items-center text-sky-600">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="text-sm">真人语音</span>
                  </div>
                  <div className="flex items-center text-sky-600">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="text-sm">7×24小时</span>
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
                    <div className="w-32 h-32 bg-gradient-to-br from-sky-100 to-cyan-100 rounded-full flex items-center justify-center mb-4">
                      <div className="relative">
                        <Phone className="w-12 h-12 text-sky-500" />
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    <p className="text-sky-700 font-medium text-lg">AI外呼机器人工作中</p>
                    <p className="text-sky-500 text-sm mt-1">7×24小时自动外呼</p>
                    <div className="mt-4 flex items-center space-x-2 text-sm text-sky-600">
                      <Clock className="w-4 h-4" />
                      <span>今日已外呼 10,000+ 通</span>
                    </div>
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
                AI外呼六大核心功能
              </h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">
                基于大模型的智能外呼系统，从语音合成到数据分析，一站式解决AI外呼需求
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
                AI外呼四大应用场景
              </h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">
                覆盖企业外呼全场景，让AI外呼成为您的智能销售助手
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
                立即开启AI智能外呼
              </h2>
              <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">
                免费试用3天，专业顾问1对1指导，助您搭建AI外呼体系
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
                  to="/scrm"
                  className="inline-flex items-center justify-center px-8 py-4 bg-sky-400/30 text-white font-semibold rounded-xl hover:bg-sky-400/40 transition-all duration-300 border border-white/30"
                >
                  了解企微SCRM
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
