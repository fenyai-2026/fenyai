import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHelmet from '../components/SEOHelmet';
import RelatedArticlesByKeyword from '../components/RelatedArticlesByKeyword';
import { Bot, MessageSquare, Clock, UserCheck, ArrowRight, Check } from 'lucide-react';

const features = [
  { icon: MessageSquare, title: '关键词自动回复', desc: '命中关键词即触发对应话术，秒级响应，再也不漏掉高频咨询。' },
  { icon: Bot, title: '意图识别', desc: '结合 AI 智能体理解语义，不只是死板的关键词匹配，答得更准。' },
  { icon: Clock, title: '7×24小时值守', desc: '夜间与节假日也能接待，商机不眠，客户随时有人回应。' },
  { icon: UserCheck, title: '智能转人工', desc: '高意向或复杂问题自动转接人工，并带上全文上下文无缝衔接。' },
  { icon: Check, title: '数据看板', desc: '统计命中率、转人工率、常见问题 TOP，反哺知识库持续进化。' },
];

const scenes = [
  { t: '售前咨询', d: '自动回答价格、功能、开通方式等高频问题，释放售前人力。' },
  { t: '售后指引', d: '自动推送操作教程与使用指南，常见困惑自助解决。' },
  { t: '活动期间', d: '大促/直播期间承接海量重复咨询，峰值不掉链。' },
];

const faqs = [
  { q: '企微机器人能做什么？', a: '基于规则与AI自动应答客户消息，识别关键词或意图自动回复标准答案，复杂场景一键转人工，7×24小时值守不漏商机。' },
  { q: '企微机器人支持关键词自动回复吗？', a: '支持，命中关键词即触发对应话术秒级响应；同时结合AI智能体做意图识别，不只是死板匹配。' },
  { q: '企微机器人能代替人工吗？', a: '可承担大部分重复咨询，高意向或复杂问题自动转人工并带上全文上下文，让人力聚焦高价值会话。' },
  { q: '企微机器人和AI智能体有什么区别？', a: '机器人偏规则与关键词自动回复，AI智能体偏多轮语义对话与知识库训练，两者可搭配升级为智能客服。' },
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

export default function Robot() {
  return (
    <>
      <SEOHelmet
        title="企微机器人_关键词自动回复_有机云SCRM"
        description="有机云企微机器人——关键词自动回复、智能问答、7×24小时值守，把重复咨询交给机器人，人工只处理高价值会话，客服效率倍增。"
        keywords="企微机器人,关键词自动回复,企业微信机器人,智能客服,AI自动回复"
        canonical="https://www.fenyai.com/robot"
        extraSchema={jsonLd}
      />

      <main className="bg-sky-50">
        <section className="relative overflow-hidden min-h-[60vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-900/10 via-sky-50 to-cyan-900/10"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 text-sm font-semibold mb-6">
                <Bot className="w-4 h-4 mr-2" />
                智能自动回复
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sky-900 leading-tight mb-6">
                有机云企微机器人
                <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">关键词自动回复</span>
              </h1>
              <p className="text-lg sm:text-xl text-sky-700/80 mb-8 leading-relaxed max-w-2xl mx-auto">
                7×24小时值守，把重复咨询交给机器人，人工只处理高价值会话，客服效率倍增。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/trial" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-sky-500/25">
                  免费试用有机云
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24" aria-label="核心能力">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">企微机器人的核心能力</h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">从规则回复到智能应答，让人力聚焦高价值会话</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((f, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="bg-white rounded-2xl p-8 shadow-sm border border-sky-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center mb-6">
                    <f.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-sky-900 mb-3">{f.title}</h3>
                  <p className="text-sky-700/70 leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white" aria-label="适用场景">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">企微机器人适用场景</h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">让重复咨询自动闭环，峰值也稳稳接住</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {scenes.map((s, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-sky-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-sky-900 mb-3">{s.t}</h3>
                  <p className="text-sky-700/70 leading-relaxed">{s.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24" aria-label="常见问题">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">关于企微机器人的常见问题</h2>
              <p className="text-lg text-sky-700/70">企业微信自动回复的高频疑问，一次说清</p>
            </motion.div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="bg-white rounded-2xl p-6 shadow-sm border border-sky-100">
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

        <section className="py-24 bg-gradient-to-r from-sky-500 to-cyan-500" aria-label="立即行动">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">立即体验企微机器人</h2>
              <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">免费试用3天，专属顾问1对1指导，把重复咨询交给机器人</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/trial" className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl hover:bg-sky-50 transition-all duration-300">
                  立即咨询
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/ai-agent" className="inline-flex items-center justify-center px-8 py-4 bg-sky-400/30 text-white font-semibold rounded-xl hover:bg-sky-400/40 transition-all duration-300 border border-white/30">
                  了解AI智能体
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <RelatedArticlesByKeyword keyword="企微机器人" keywords={['机器人', '自动回复', '关键词回复', '企微机器人', 'AI']} title="延伸阅读：企微机器人自动回复" />
      </main>
    </>
  );
}
