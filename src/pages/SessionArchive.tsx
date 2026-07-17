import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHelmet from '../components/SEOHelmet';
import RelatedArticlesByKeyword from '../components/RelatedArticlesByKeyword';
import { Shield, CheckCircle, MessageSquare, Users, BarChart3, Zap, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: '合规全类型存档',
    desc: '基于企业微信官方会话存档接口，文字、图片、语音、文件全类型会话合规留存，满足金融监管要求。',
  },
  {
    icon: CheckCircle,
    title: '三步快速开通',
    desc: '企业微信后台开启存档权限、购买存档席位、有机云后台配置策略，专属顾问全程 1 对 1 指导。',
  },
  {
    icon: MessageSquare,
    title: '敏感词监控',
    desc: '实时监测违规用语、承诺返现、私下交易等敏感词，触发即预警并留存证据，防范合规风险。',
  },
  {
    icon: Users,
    title: '离职客户继承',
    desc: '员工离职后其客户会话与关系一键继承，历史聊天记录完整保留，客户资产不随人员流动流失。',
  },
  {
    icon: BarChart3,
    title: '会话审计回放',
    desc: '按部门、员工、时间多维度检索回放会话，支持关键词定位，纠纷处理与内控审计有据可查。',
  },
  {
    icon: Zap,
    title: 'API 灵活对接',
    desc: '提供标准会话存档 API，与企业自有 CRM、风控、质检系统打通，会话数据灵活流转复用。',
  },
];

const steps = [
  {
    title: '开启存档权限',
    desc: '登录企业微信管理后台，在「会话内容存档」中开启功能并购买所需存档席位。',
  },
  {
    title: '授权有机云',
    desc: '将有机云配置为企业可信服务商并授权会话存档范围，系统自动拉取合规的会话数据。',
  },
  {
    title: '配置策略上线',
    desc: '在有机云后台设置存档范围、敏感词库与预警规则，专属顾问协助，通常 1 个工作日内即可上线。',
  },
];

const faqs = [
  {
    q: '企业微信会话存档怎么开通？',
    a: '开通只需三步：① 在企业微信管理后台「会话内容存档」开启并购买存档席位；② 将有机云配置为企业可信服务商并授权；③ 在有机云后台设置存档范围与敏感词策略。有机云提供专属顾问 1 对 1 指导，通常 1 个工作日内即可上线。',
  },
  {
    q: '会话存档需要员工同意吗？合规吗？',
    a: '根据企业微信规范，开通会话存档需在企业微信后台向员工告知并签署存档须知，员工确认后方可存档，全程符合《个人信息保护法》与企业合规要求。',
  },
  {
    q: '会话存档能保存多久？',
    a: '会话存档数据按企业配置的留存策略保存，支持长期留存与随时检索回放；具体留存时长可在有机云后台按合规需要设定。',
  },
  {
    q: '敏感词监控能做什么？',
    a: '可自定义敏感词库（如违规承诺、私下交易、竞品导流），系统实时扫描会话内容，命中即向管理员预警并固化证据，帮助企业在纠纷前及时干预。',
  },
  {
    q: '会话存档数据存在哪里安全吗？',
    a: '会话数据经企业微信官方接口加密传输与存储，有机云提供加密落盘与细粒度权限管控，仅授权人员可检索，全程审计留痕，数据安全合规。',
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

export default function SessionArchive() {
  return (
    <>
      <SEOHelmet
        title="企业微信会话存档系统_有机云SCRM合规存档·敏感词监控·API对接"
        description="有机云企业微信会话存档系统：文字/图片/语音/文件全类型合规留存，敏感词实时监控，离职继承不流失，支持 API 对接与私有化部署，已服务10万+企业。免费试用→"
        keywords="企业微信会话存档,会话存档怎么开通,企微会话存档,聊天记录存档,敏感词监控,合规存档"
        canonical="https://www.fenyai.com/session-archive"
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
                <Shield className="w-4 h-4 mr-2" />
                合规存档
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sky-900 leading-tight mb-6">
                企业微信会话存档
                <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">怎么开通</span>
              </h1>
              <p className="text-lg sm:text-xl text-sky-700/80 mb-8 leading-relaxed max-w-2xl mx-auto">
                三步开通合规会话存档，全类型留存、敏感词监控、离职继承与 API 对接，满足金融等行业强监管要求。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/trial"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-sky-500/25"
                >
                  免费咨询开通
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24" aria-label="核心能力">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">会话存档的核心能力</h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">
                从合规留存到风险预警，让每一次客户对话都可管、可查、可控
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-sky-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-sky-900 mb-3">{feature.title}</h3>
                  <p className="text-sky-700/70 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-24 bg-white" aria-label="开通三步">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">企业微信会话存档怎么开通（三步）</h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">专属顾问全程指导，最快 1 个工作日上线</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-sky-50 rounded-2xl p-8"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-500 text-white flex items-center justify-center font-bold text-xl mb-5">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-sky-900 mb-3">{step.title}</h3>
                  <p className="text-sky-700/70 leading-relaxed">{step.desc}</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">关于会话存档的常见问题</h2>
              <p className="text-lg text-sky-700/70">企业微信会话存档怎么开通，一次说清</p>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-sky-100"
                >
                  <h3 className="text-lg font-bold text-sky-900 mb-3 flex items-start">
                    <Shield className="w-5 h-5 text-sky-500 mr-2 mt-1 flex-shrink-0" />
                    {faq.q}
                  </h3>
                  <p className="text-sky-700/70 leading-relaxed pl-7">{faq.a}</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">立即开通合规会话存档</h2>
              <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">
                免费咨询，专属顾问 1 对 1 指导开通，满足金融等行业的强合规要求
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
        <RelatedArticlesByKeyword keyword="会话存档" keywords={['会话存档', '存档', '合规', '会话']} title="延伸阅读：企业微信会话存档" />
      </main>
    </>
  );
}
