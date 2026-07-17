import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHelmet from '../components/SEOHelmet';
import RelatedArticlesByKeyword from '../components/RelatedArticlesByKeyword';
import { Boxes, Layers, Share2, MessageSquare, Archive, Bot, ArrowRight, Check } from 'lucide-react';

const modules = [
  { icon: Share2, title: '活码拓客', desc: '渠道活码、员工活码、群活码全渠道引流获客与智能分流，沉淀私域流量。' },
  { icon: Layers, title: '超级群发', desc: '突破企微群发限制，按标签分批次精准触达，消息送达率与打开率双提升。' },
  { icon: Bot, title: '客户SOP', desc: '把运营流程沉淀为标准动作，自动定时执行，告别依赖个人经验的重复运营。' },
  { icon: MessageSquare, title: '聚合聊天', desc: '多账号会话统一收件箱，一个工作台接待全量客户，复杂问题一键转人工。' },
  { icon: Archive, title: '会话存档', desc: '文字/图片/语音/文件全类型合规留存，敏感词监控与审计追溯，满足监管。' },
  { icon: Bot, title: 'AI智能体', desc: '基于大模型的智能客服，7×24小时自动回复，可承担约80%常见咨询。' },
];

const compares = [
  { item: '能力覆盖', youjiyun: '活码+群发+SOP+聚合+存档+AI 全模块打通', builtin: '多为零散单点工具' },
  { item: '数据闭环', youjiyun: '模块间标签/行为数据互通统一看板', builtin: '系统孤岛数据不流通' },
  { item: '上手成本', youjiyun: '一个后台统一管理', builtin: '多系统切换培训重' },
];

const faqs = [
  { q: '企微魔方是什么？', a: '有机云企微魔方是一站式企业微信私域营销云，把活码拓客、超级群发、客户SOP、聚合聊天、会话存档、AI智能体等模块统一装进一个后台，跑通获客—运营—转化全链路。' },
  { q: '企微魔方包含哪些模块？', a: '包含活码拓客、超级群发、客户SOP、聚合聊天、会话存档、AI智能体六大核心模块，模块间数据打通，形成运营闭环。' },
  { q: '企微魔方和其他SCRM有什么区别？', a: '多数SCRM只解决单点能力，有机云企微魔方强调模块打通：活码引流自动打标签、标签触发SOP、SOP过程AI应答、关键节点人工接管，全程数据回流统一看板。' },
  { q: '企微魔方怎么开通？', a: '注册有机云账号并绑定企业微信，按业务需要开通对应模块，设置活码、标签与SOP，1个工作日内即可上线，支持免费试用。' },
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

export default function Weimo() {
  return (
    <>
      <SEOHelmet
        title="企微魔方_一站式私域营销云_有机云SCRM"
        description="有机云企微魔方，一站式企业微信私域营销云：活码拓客、超级群发、客户SOP、聚合聊天、会话存档、AI智能体全模块打通，一个后台管完私域全链路。"
        keywords="企微魔方,私域营销云,企业微信SCRM,活码拓客,超级群发,客户SOP,聚合聊天"
        canonical="https://www.fenyai.com/weimo"
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
                <Boxes className="w-4 h-4 mr-2" />
                一站式私域营销云
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sky-900 leading-tight mb-6">
                有机云企微魔方
                <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">一站式私域营销云</span>
              </h1>
              <p className="text-lg sm:text-xl text-sky-700/80 mb-8 leading-relaxed max-w-2xl mx-auto">
                活码拓客、超级群发、客户SOP、聚合聊天、会话存档、AI智能体全模块打通，一个后台跑通私域全链路。
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

        <section className="py-24" aria-label="核心模块">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">企微魔方的核心模块</h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">六大模块数据互通，形成获客—运营—转化闭环</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map((m, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="bg-white rounded-2xl p-8 shadow-sm border border-sky-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center mb-6">
                    <m.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-sky-900 mb-3">{m.title}</h3>
                  <p className="text-sky-700/70 leading-relaxed">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white" aria-label="与其他SCRM对比">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">有机云企微魔方 vs 零散单点工具</h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">同样的企微生态，运营效率却天差地别</p>
            </motion.div>
            <div className="bg-sky-50 rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-sky-500 text-white">
                      <th className="px-6 py-4 text-left font-semibold">对比维度</th>
                      <th className="px-6 py-4 text-center font-semibold">有机云企微魔方</th>
                      <th className="px-6 py-4 text-center font-semibold">零散单点工具</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compares.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-sky-50/50'}>
                        <td className="px-6 py-4 font-medium text-sky-900">{row.item}</td>
                        <td className="px-6 py-4 text-center text-sky-700 font-medium">{row.youjiyun}</td>
                        <td className="px-6 py-4 text-center text-slate-400">{row.builtin}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24" aria-label="常见问题">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">关于企微魔方的常见问题</h2>
              <p className="text-lg text-sky-700/70">企业微信私域营销云的高频疑问，一次说清</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">立即体验企微魔方全模块</h2>
              <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">免费试用3天，专属顾问1对1指导，一个后台跑通私域全链路</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/trial" className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl hover:bg-sky-50 transition-all duration-300">
                  立即咨询
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/scrm" className="inline-flex items-center justify-center px-8 py-4 bg-sky-400/30 text-white font-semibold rounded-xl hover:bg-sky-400/40 transition-all duration-300 border border-white/30">
                  了解产品功能
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <RelatedArticlesByKeyword keyword="企微魔方" keywords={['魔方', '企微魔方', 'SCRM', '私域', '私域营销']} title="延伸阅读：企微魔方与私域运营" />
      </main>
    </>
  );
}
