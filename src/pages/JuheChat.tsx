import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHelmet from '../components/SEOHelmet';
import RelatedArticlesByKeyword from '../components/RelatedArticlesByKeyword';
import { Layers, MessageSquare, Zap, Users, BarChart3, Shield, ArrowRight, Check } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: '多账号聚合',
    desc: '多个企业微信账号聚合到一个工作台，客服无需频繁切换账号，所有客户会话集中在一个收件箱。',
  },
  {
    icon: MessageSquare,
    title: '统一收件箱',
    desc: '来自不同账号、不同渠道的客户消息实时汇总，按优先级智能排序，杜绝漏接漏回。',
  },
  {
    icon: Zap,
    title: '快捷回复',
    desc: '内置企业话术库与快捷短语，一键发送常见答复，新人也能秒回专业话术，响应速度翻倍。',
  },
  {
    icon: Users,
    title: '会话转接',
    desc: '复杂问题一键转接对应专家或上级，附带上全文上下文，客户无需重复描述问题。',
  },
  {
    icon: BarChart3,
    title: '会话侧边栏',
    desc: '聊天窗口侧边实时展示客户画像、标签、历史订单与跟进记录，客服沟通更有针对性。',
  },
  {
    icon: Shield,
    title: '服务质检',
    desc: '自动抽检会话内容，监控敏感词与违规用语，生成服务质量报表，保障服务合规。',
  },
];

const scenarios = [
  {
    title: '多客服团队协作',
    desc: '数十个企微号、多个客服同时在线，所有客户消息聚合到一个工作台，主管统一分配与督办，协作不再靠口头喊。',
  },
  {
    title: '销售过程管理',
    desc: '侧边栏实时展示客户标签与历史跟进，销售接手即知客户背景，对话更专业，转化更顺畅。',
  },
  {
    title: '售后统一接待',
    desc: '售后问题在统一收件箱集中处理，复杂工单一键转接专家，服务过程全程留痕可追溯。',
  },
];

const faqs = [
  {
    q: '企业微信聚合聊天是什么？',
    a: '有机云聚合聊天将多个企业微信账号的客户会话聚合到统一工作台，客服在一个界面接待所有账号的客户，无需反复切换，大幅提升接待效率。',
  },
  {
    q: '聚合聊天支持多少个账号同时登录？',
    a: '有机云聚合聊天支持数十个企业微信账号同时在线聚合，具体数量可按企业规模灵活扩容，满足中大型客服团队的多账号管理需求。',
  },
  {
    q: '员工离职客户怎么继承？',
    a: '员工离职或调岗时，管理员可一键将客户会话与关系批量继承给接替同事，客户不流失，会话历史完整保留。',
  },
  {
    q: '聚合聊天会影响客户体验吗？',
    a: '不会。对客户而言，对话体验与单独添加企业微信完全一致；企业侧则获得统一的接待与质检能力，客户感知无差异。',
  },
  {
    q: '怎么把散落的客户会话统一管理？',
    a: '将分散在各员工企微号上的客户，通过有机云聚合聊天统一接入同一工作台，配合客户标签与侧边栏画像，实现全公司客户会话的集中管理与协同服务。',
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

export default function JuheChat() {
  return (
    <>
      <SEOHelmet
        title="企业微信聚合聊天_多账号统一管理"
        description="有机云企业微信聚合聊天——多账号统一收件箱，客服在一个后台接待多个企微号客户，支持快捷回复、会话转接、服务质检，提升客服效率。免费试用→"
        keywords="企业微信聚合聊天,多账号统一管理,聚合客服,会话聚合,客服工作台,企业微信多开"
        canonical="https://www.fenyai.com/juhe-chat"
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
                <Layers className="w-4 h-4 mr-2" />
                客服协同
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sky-900 leading-tight mb-6">
                企业微信聚合聊天
                <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">多账号统一管理</span>
              </h1>
              <p className="text-lg sm:text-xl text-sky-700/80 mb-8 leading-relaxed max-w-2xl mx-auto">
                多个企微号、多位客服，客户消息聚合到一个工作台，接待效率与服务质量同步拉满。
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

        {/* Features Section */}
        <section className="py-24" aria-label="核心能力">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">聚合聊天的核心能力</h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">
                一个工作台，统管全公司企微客户会话，让协同服务成为可能
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

        {/* Scenario Section */}
        <section className="py-24 bg-white" aria-label="适用场景">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">典型应用场景</h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">多账号统一管理，解决协同服务的真实痛点</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {scenarios.map((sc, index) => (
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
                  <h3 className="text-xl font-bold text-sky-900 mb-3">{sc.title}</h3>
                  <p className="text-sky-700/70 leading-relaxed">{sc.desc}</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">关于聚合聊天的常见问题</h2>
              <p className="text-lg text-sky-700/70">多账号统一管理的核心疑问，一次说清</p>
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
                    <Check className="w-5 h-5 text-sky-500 mr-2 mt-1 flex-shrink-0" />
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">立即统一你的企微客服</h2>
              <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">
                免费试用 3 天，专属顾问 1 对 1 指导，把散落的客户会话管到一个工作台
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
        <RelatedArticlesByKeyword keyword="聚合聊天" keywords={['聚合聊天', '聚合', '统一接待', '多账号']} title="延伸阅读：聚合聊天" />
      </main>
    </>
  );
}
