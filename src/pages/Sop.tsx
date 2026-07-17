import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHelmet from '../components/SEOHelmet';
import RelatedArticlesByKeyword from '../components/RelatedArticlesByKeyword';
import { Workflow, Users, RefreshCw, Clock, ArrowRight, Check } from 'lucide-react';

const scenes = [
  { icon: Users, title: '新客欢迎', desc: '添加好友自动发送品牌介绍与福利，第一时间建立信任，告别冷启动。' },
  { icon: RefreshCw, title: '社群培育', desc: '按入群天数自动推送干货与活动，持续激活沉默用户，提升社群活跃。' },
  { icon: Clock, title: '复购唤醒', desc: '到期/沉睡客户自动触发优惠券与专属话术，把流失风险消灭在萌芽。' },
  { icon: Workflow, title: '流失召回', desc: '长期未互动客户自动进入召回流程，多触达方式重新建立连接。' },
];

const steps = [
  { n: '1', t: '定义阶段', d: '梳理客户从引流到转化的关键节点，明确每个节点目标。' },
  { n: '2', t: '编写话术', d: '为每个节点准备标准话术与素材，保证品牌调性统一。' },
  { n: '3', t: '设置触发', d: '按标签/时间/行为配置自动执行规则，让 SOP 自动跑起来。' },
  { n: '4', t: '上线监控', d: '查看 SOP 执行率与转化，持续迭代优化流程。' },
];

const faqs = [
  { q: '企微SOP是什么？', a: '企微SOP是把客户运营动作标准化的能力，系统按预设时间轴自动发送欢迎语、推送内容、触发回访，把跟进流程固化下来，不依赖个人经验。' },
  { q: '企微SOP和群发有什么区别？', a: '群发是一次性把消息发给一批人；SOP是按客户所处阶段在正确时间发正确内容，基于标签与行为触发，千人千面，更适合培育转化。' },
  { q: '企微SOP有哪些典型场景？', a: '新客欢迎、社群培育、复购唤醒、流失召回等，把从引流到转化的全流程沉淀为标准动作自动执行。' },
  { q: '企微SOP怎么配置？', a: '梳理客户关键节点、编写各阶段话术、设置标签/时间/行为触发规则，上线后查看执行率与转化持续迭代，有机云提供行业模板开箱即用。' },
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

export default function Sop() {
  return (
    <>
      <SEOHelmet
        title="企微SOP_营销自动化SOP_有机云SCRM"
        description="有机云企微SOP：把客户从引流、培育到转化的全流程沉淀为标准动作，自动定时执行，告别人工重复运营，让私域运营可复制、可度量。"
        keywords="企微SOP,营销自动化SOP,客户运营SOP,私域运营流程,企业微信SOP"
        canonical="https://www.fenyai.com/sop"
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
                <Workflow className="w-4 h-4 mr-2" />
                营销自动化
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sky-900 leading-tight mb-6">
                有机云企微SOP
                <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">营销自动化客户运营</span>
              </h1>
              <p className="text-lg sm:text-xl text-sky-700/80 mb-8 leading-relaxed max-w-2xl mx-auto">
                把客户从引流、培育到转化的全流程沉淀为标准动作，自动定时执行，告别人工重复运营。
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

        <section className="py-24" aria-label="典型SOP场景">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">典型 SOP 场景</h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">把重复运营动作交给系统，让人力聚焦高价值客户</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {scenes.map((s, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="bg-white rounded-2xl p-8 shadow-sm border border-sky-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center mb-6">
                    <s.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-sky-900 mb-3">{s.title}</h3>
                  <p className="text-sky-700/70 leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white" aria-label="配置步骤">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">四步配置企微SOP</h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">开箱即用的行业模板，最快当天上线</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((st, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="bg-sky-50 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 text-white font-bold flex items-center justify-center mx-auto mb-4">{st.n}</div>
                  <h3 className="text-lg font-bold text-sky-900 mb-2">{st.t}</h3>
                  <p className="text-sky-700/70 text-sm leading-relaxed">{st.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24" aria-label="常见问题">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">关于企微SOP的常见问题</h2>
              <p className="text-lg text-sky-700/70">营销自动化运营的高频疑问，一次说清</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">立即体验企微SOP自动化</h2>
              <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">免费试用3天，专属顾问1对1指导，让私域运营标准化可复制</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/trial" className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl hover:bg-sky-50 transition-all duration-300">
                  立即咨询
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/solutions/sop" className="inline-flex items-center justify-center px-8 py-4 bg-sky-400/30 text-white font-semibold rounded-xl hover:bg-sky-400/40 transition-all duration-300 border border-white/30">
                  查看行业模板
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <RelatedArticlesByKeyword keyword="企微SOP" keywords={['SOP', '营销自动化', '客户SOP', '私域运营', '社群']} title="延伸阅读：企微SOP 营销自动化" />
      </main>
    </>
  );
}
