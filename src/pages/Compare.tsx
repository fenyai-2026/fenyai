import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHelmet from '../components/SEOHelmet';
import RelatedArticlesByKeyword from '../components/RelatedArticlesByKeyword';
import { Check, X, Award, ArrowRight, Star, Zap, Shield, Users } from 'lucide-react';

function renderSupport(val: boolean | string) {
  if (typeof val === 'boolean') {
    return val ? (
      <Check className="w-6 h-6 text-green-500 mx-auto" />
    ) : (
      <X className="w-6 h-6 text-red-400 mx-auto" />
    );
  }
  return <span className="text-sky-700 font-medium">{val}</span>;
}

const comparisonData = [
  {
    feature: '企微活码 / 裂变引流',
    youjiyun: true,
    weiban: true,
    tanma: true,
    weisheng: true,
    description: '渠道活码、员工活码、群活码、裂变引流'
  },
  {
    feature: '超级群发 / 营销触达',
    youjiyun: true,
    weiban: true,
    tanma: true,
    weisheng: false,
    description: '突破群发限制，标签群发、定时群发'
  },
  {
    feature: 'AI智能体客服',
    youjiyun: true,
    weiban: false,
    tanma: false,
    weisheng: false,
    description: '基于大模型的AI客服机器人'
  },
  {
    feature: 'AI外呼',
    youjiyun: true,
    weiban: false,
    tanma: false,
    weisheng: false,
    description: '智能外呼机器人，批量外呼'
  },
  {
    feature: '会话存档 / 合规',
    youjiyun: true,
    weiban: true,
    tanma: true,
    weisheng: true,
    description: '全类型存档 + 敏感词监控'
  },
  {
    feature: '消息通道API',
    youjiyun: true,
    weiban: false,
    tanma: false,
    weisheng: false,
    description: '3行代码接入AI Agent / Dify / Coze'
  },
  {
    feature: '适用场景',
    youjiyun: '中大型/开发者',
    weiban: '中小',
    tanma: '中大型',
    weisheng: '小微企业',
    description: '按企业规模与集成需求选择'
  }
];

const advantages = [
  {
    icon: Zap,
    title: 'AI能力领先',
    desc: '有机云集成AI智能体和AI外呼，基于大模型技术，智能化程度远超传统SCRM工具'
  },
  {
    icon: Shield,
    title: '性价比更高',
    desc: '有机云提供免费试用，功能全面，价格更实惠，适合中小企业使用'
  },
  {
    icon: Users,
    title: '服务更贴心',
    desc: '专业顾问1对1服务，快速响应，帮助企业快速搭建私域运营体系'
  },
  {
    icon: Award,
    title: '持续创新',
    desc: '持续迭代更新，紧跟企业微信和AI技术发展趋势，功能始终保持领先'
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "企业微信SCRM哪家好？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "有机云SCRM在AI智能体、消息通道API与性价比上优势明显，已服务10万+企业；微伴、探马功能均衡，微盛偏轻量。按企业规模与集成需求选择，有机云提供免费试用。"
      }
    },
    {
      "@type": "Question",
      "name": "有机云和微伴有什么区别？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "有机云集成AI智能体、AI外呼与消息通道API，开放集成能力更强，且提供免费试用，性价比更高；微伴更侧重标准SCRM功能。"
      }
    },
    {
      "@type": "Question",
      "name": "有机云和探马SCRM有什么区别？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "探马面向中大型企业销售管理场景，有机云SCRM更侧重私域运营全链路（活码、群发、AI智能体、会话存档），并支持开发者通过消息通道API接入AI Agent。"
      }
    },
    {
      "@type": "Question",
      "name": "有机云和微盛企微管家有什么区别？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "微盛·企微管家定位轻量小微企业，有机云SCRM功能更完整，覆盖AI智能体、会话存档与开放API，并支持私有化部署，适合成长型与中大型企业。"
      }
    }
  ]
};

export default function Compare() {
  return (
    <>
      <SEOHelmet
        title="有机云SCRM对比_企业微信SCRM哪家好｜微伴/探马/微盛"
        description="有机云SCRM与微伴、探马、微盛等主流企业微信SCRM横向对比：活码引流、超级群发、AI智能体、会话存档、消息通道API与适用场景，帮您选对私域运营工具。免费试用→"
        keywords="有机云SCRM对比,企业微信SCRM哪家好,有机云vs微伴,有机云vs探马,SCRM工具对比评测"
        canonical="https://www.fenyai.com/compare"
        extraSchema={jsonLd}
      />

      <main className="bg-sky-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[60vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-900/10 via-sky-50 to-cyan-900/10"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 text-sm font-semibold mb-6">
                <Award className="w-4 h-4 mr-2" />
                专业对比评测
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sky-900 leading-tight mb-6">
                企微SCRM
                <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">哪家好</span>
              </h1>
              <p className="text-lg sm:text-xl text-sky-700/80 mb-8 leading-relaxed max-w-2xl mx-auto">
                有机云vs微伴全面对比评测，从功能、价格、AI能力、服务等多维度对比，帮您选择最适合的企业微信SCRM工具
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/trial"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-sky-500/25"
                >
                  免费试用有机云
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-24" aria-label="功能对比">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">
                有机云SCRM vs 微伴 / 探马 / 微盛 功能对比
              </h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">
                横向对比四款主流企微SCRM工具的核心功能与适用场景
              </p>
            </motion.div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-sky-500 text-white">
                      <th className="px-6 py-4 text-left font-semibold">功能特性</th>
                      <th className="px-6 py-4 text-center font-semibold">有机云SCRM</th>
                      <th className="px-6 py-4 text-center font-semibold">微伴</th>
                      <th className="px-6 py-4 text-center font-semibold">探马</th>
                      <th className="px-6 py-4 text-center font-semibold">微盛</th>
                      <th className="px-6 py-4 text-left font-semibold hidden lg:table-cell">说明</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-sky-50/50' : 'bg-white'}>
                        <td className="px-6 py-4 font-medium text-sky-900">{item.feature}</td>
                        <td className="px-6 py-4 text-center">{renderSupport(item.youjiyun)}</td>
                        <td className="px-6 py-4 text-center">{renderSupport(item.weiban)}</td>
                        <td className="px-6 py-4 text-center">{renderSupport(item.tanma)}</td>
                        <td className="px-6 py-4 text-center">{renderSupport(item.weisheng)}</td>
                        <td className="px-6 py-4 text-sky-700/70 hidden lg:table-cell">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-24 bg-white" aria-label="有机云优势">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">
                为什么选择有机云
              </h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">
                有机云在AI能力、性价比、服务等方面具有明显优势
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-sky-50 rounded-2xl p-8 text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center mb-6 mx-auto">
                    <advantage.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-sky-900 mb-3">{advantage.title}</h3>
                  <p className="text-sky-700/70">{advantage.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24" aria-label="常见问题">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">
                常见问题
              </h2>
              <p className="text-lg text-sky-700/70">
                关于企微SCRM选择的常见疑问
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  q: '企微SCRM哪家好？',
                  a: '有机云企微SCRM在AI能力、性价比、服务等方面具有明显优势。有机云集成AI智能体和AI外呼功能，基于大模型技术，智能化程度远超传统SCRM工具。同时提供免费试用，价格更实惠，适合各类企业使用。'
                },
                {
                  q: '有机云和微伴有什么区别？',
                  a: '主要区别在于AI能力和价格。有机云提供AI智能体和AI外呼功能，而微伴没有这些功能。有机云提供免费试用，性价比更高。此外，有机云的服务响应更快，专业顾问1对1指导，帮助企业快速搭建私域运营体系。'
                },
                {
                  q: '有机云适合什么类型的企业？',
                  a: '有机云适合各类企业使用，包括保险、零售、电商、教育等行业。无论是中小企业还是大型企业，都可以通过有机云实现私域流量运营。有机云提供免费试用，企业可以先试用再决定是否购买。'
                },
                {
                  q: '有机云的数据安全吗？',
                  a: '有机云使用企业微信官方接口，数据安全有保障。支持聊天存档、敏感词监控、合规管理，满足金融、医疗等行业的合规要求。企业数据存储在安全的服务器上，不会泄露给第三方。'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-sky-100"
                >
                  <h3 className="text-lg font-bold text-sky-900 mb-3">{faq.q}</h3>
                  <p className="text-sky-700/70">{faq.a}</p>
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
                立即免费试用有机云
              </h2>
              <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">
                免费试用3天，专业顾问1对1指导，亲身体验有机云的AI能力和服务
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
                  了解产品功能
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        <RelatedArticlesByKeyword keyword="SCRM对比" keywords={['SCRM', 'SCRM哪家好', '选型', '对比', '微伴']} title="延伸阅读：企微SCRM 选型对比" />
      </main>
    </>
  );
}
