import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import RelatedArticlesByKeyword from '../components/RelatedArticlesByKeyword';
import { Helmet } from 'react-helmet-async';
import { Users, MessageCircle, Target, Zap, BarChart3, Shield, ArrowRight, CheckCircle, Building2, Award, Clock, Star } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: '企微活码引流',
    desc: '智能活码系统，支持渠道活码、员工活码、群活码，自动分配客户，实现精准引流拓客。支持批量生成、数据统计、渠道分析，让每一次扫码都能沉淀私域流量。',
    highlights: ['渠道活码追踪', '自动分配客户', '扫码数据统计', '无限码量生成']
  },
  {
    icon: MessageCircle,
    title: '客户管理系统',
    desc: '企业微信SCRM客户管理系统，支持客户标签、自动打标签、人群包管理、客户画像。通过精细化客户分层，实现千人千面的精准运营，提升客户转化率。',
    highlights: ['智能标签体系', '客户画像分析', '人群包管理', '生命周期管理']
  },
  {
    icon: Target,
    title: '超级群发触达',
    desc: '突破企业微信群发限制，支持超级群发、定时群发、标签群发、朋友圈群发。配合运营SOP，实现自动化营销触达，让消息精准触达每一位目标客户。',
    highlights: ['突破群发限制', '定时群发任务', '标签精准筛选', '朋友圈群发']
  },
  {
    icon: Zap,
    title: 'AI智能体客服',
    desc: '基于大模型的AI智能体，7×24小时智能值守。支持知识库训练、多轮对话、意图识别，自动回复常见问题，大幅降低人工成本，提升客户服务体验。',
    highlights: ['大模型驱动', '知识库训练', '多轮对话', '7×24小时值守']
  },
  {
    icon: BarChart3,
    title: '会话聚合转接',
    desc: '多账号会话聚合，一个界面管理所有客户对话。支持智能分配、会话转接、快捷回复、聊天记录存档。让客服团队协作更高效，客户响应更及时。',
    highlights: ['多账号聚合', '智能分配转接', '快捷回复库', '聊天记录存档']
  },
  {
    icon: Shield,
    title: '数据安全合规',
    desc: '企业微信官方接口，数据安全有保障。支持敏感词监控、聊天存档、合规管理，满足金融、医疗等行业的合规要求，让私域运营更安心。',
    highlights: ['官方接口授权', '敏感词监控', '聊天存档', '合规管理']
  }
];

const cases = [
  {
    industry: '保险行业',
    company: '某头部保险公司',
    result: '3个月沉淀私域客户50万+，客户转化率提升300%',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80'
  },
  {
    industry: '连锁零售',
    company: '某知名连锁品牌',
    result: '门店私域运营效率提升10倍，复购率提升45%',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80'
  },
  {
    industry: '社群电商',
    company: '某社群团购平台',
    result: '日均群发触达100万+用户，GMV增长200%',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&q=80'
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "有机云企微SCRM系统",
  "description": "企业微信SCRM私域流量运营工具，提供活码引流、客户管理、超级群发、AI智能体、会话聚合等全链路功能",
  "brand": {
    "@type": "Brand",
    "name": "有机云"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "CNY",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "100000"
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
      "name": "企微SCRM",
      "item": "https://www.fenyai.com/scrm"
    }
  ]
};

export default function Scrm() {
  return (
    <>
      <Helmet>
        <title>有机云SCRM_企业微信私域管理系统_活码引流·客户管理·超级群发</title>
        <meta name="description" content="有机云企微SCRM是企业微信官方合作伙伴，提供企微活码引流、客户管理系统、超级群发、AI智能体、会话聚合转接等全链路私域运营工具，已服务10万+企业。免费试用→" />
        <meta name="keywords" content="企微SCRM,企业微信SCRM,私域管理系统,企微活码,客户管理系统,超级群发,SCRM工具" />
        <link rel="canonical" href="https://www.fenyai.com/scrm" />
        <meta property="og:title" content="企微SCRM_企业微信私域管理系统_活码引流·客户管理·超级群发" />
        <meta property="og:description" content="有机云企微SCRM提供企微活码引流、客户管理系统、超级群发、AI智能体等全链路私域运营工具" />
        <meta property="og:url" content="https://www.fenyai.com/scrm" />
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
                  <Award className="w-4 h-4 mr-2" />
                  企业微信官方合作伙伴
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sky-900 leading-tight mb-6">
                  企微SCRM
                  <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">私域管理系统</span>
                </h1>
                <p className="text-lg sm:text-xl text-sky-700/80 mb-8 leading-relaxed max-w-xl">
                  专注企业微信私域流量运营，提供企微活码引流、客户管理系统、超级群发、AI智能体、会话聚合转接等全链路SCRM工具，助力企业10倍提升私域运营效率
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
                    to="/pricing"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-700 font-semibold rounded-xl hover:bg-sky-50 transition-all duration-300 border border-sky-200"
                  >
                    查看价格
                  </Link>
                </div>

                <div className="flex items-center space-x-6 mt-10">
                  <div className="flex items-center text-sky-600">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="text-sm">10万+企业信赖</span>
                  </div>
                  <div className="flex items-center text-sky-600">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="text-sm">官方接口授权</span>
                  </div>
                  <div className="flex items-center text-sky-600">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="text-sm">7×24小时服务</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-sky-500/10 border border-sky-200/50">
                  <img
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                    alt="企微SCRM系统界面"
                    className="w-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24" aria-label="核心功能">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">
                企微SCRM六大核心功能
              </h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">
                覆盖私域运营全链路，从引流到转化，从运营到管理，一站式解决企业微信私域运营需求
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
                10万+企业的私域运营选择
              </h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">
                保险、零售、电商、教育等行业头部企业都在使用的企微SCRM系统
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
                  <img src={caseItem.image} alt={caseItem.company} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="text-sm text-sky-500 font-medium mb-2">{caseItem.industry}</div>
                    <h3 className="text-lg font-bold text-sky-900 mb-2">{caseItem.company}</h3>
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
                立即开启您的企微SCRM私域运营之旅
              </h2>
              <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">
                免费试用3天，专业顾问1对1指导，助您快速搭建私域运营体系
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
        <RelatedArticlesByKeyword keyword="企微SCRM" keywords={['SCRM', '私域', '私域运营', '客户管理']} title="延伸阅读：企业微信SCRM" />
      </main>
    </>
  );
}
