import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHelmet from '../components/SEOHelmet';
import RelatedArticlesByKeyword from '../components/RelatedArticlesByKeyword';
import { Smartphone, Shield, Wifi, Layers, ArrowRight, Check } from 'lucide-react';

const features = [
  { icon: Smartphone, title: '多账号群控', desc: '一个控制台批量操作多个企微号，统一发圈、群发、养号，效率倍增。' },
  { icon: Shield, title: '设备隔离', desc: '每个账号独立云端环境，降低设备关联导致的封号风险。' },
  { icon: Wifi, title: '不掉线', desc: '7×24小时云端在线，告别本地手机断电、断网、封号焦虑。' },
  { icon: Layers, title: '合规管理', desc: '操作日志可追溯，配合会话存档满足审计与合规要求。' },
  { icon: Check, title: '弹性扩容', desc: '业务增长时按需开通更多云手机实例，随用随开。' },
];

const scenes = [
  { t: '私域规模化', d: '需要同时运营大量企微号的中大型团队，统一群控降本增效。' },
  { t: '矩阵运营', d: '多品牌/多门店账号统一群控，矩阵协同不掉链。' },
  { t: '养号矩阵', d: '新号培育与日常活跃维护，云端环境安全稳定。' },
];

const faqs = [
  { q: '云手机是什么？', a: '云手机是云端运行的虚拟设备，把多个企业微信账号运行在隔离的云端环境中，实现安全群控与批量管理，降低设备关联封号风险。' },
  { q: '云手机群控会封号吗？', a: '每个账号独立云端环境实现设备隔离，配合合规操作与频控建议，可显著降低关联封号风险。' },
  { q: '云手机适合什么场景？', a: '适合需要同时运营大量企微号的中大型团队、多品牌矩阵运营、以及新号养号维护等私域规模化场景。' },
  { q: '云手机和聚合聊天怎么配合？', a: '云手机负责云端多账号群控与养号，聚合聊天负责统一接待客户会话，两者结合形成"云端群控+统一接待"闭环。' },
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

export default function CloudPhone() {
  return (
    <>
      <SEOHelmet
        title="云手机_群控_企业微信_有机云SCRM"
        description="有机云云手机——企业微信多账号安全群控，设备隔离防封号，批量运营不掉线，合规管理海量企微号，适配私域规模化运营。"
        keywords="云手机,群控,企业微信群控,多账号管理,防封号,私域规模化"
        canonical="https://www.fenyai.com/cloud-phone"
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
                <Smartphone className="w-4 h-4 mr-2" />
                云端群控
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sky-900 leading-tight mb-6">
                有机云云手机
                <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">多账号安全群控</span>
              </h1>
              <p className="text-lg sm:text-xl text-sky-700/80 mb-8 leading-relaxed max-w-2xl mx-auto">
                设备隔离防封号，批量运营不掉线，合规管理海量企微号，适配私域规模化运营。
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
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">云手机的核心能力</h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">为私域规模化而生的安全群控底座</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">云手机适用场景</h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">从单号到矩阵，运营规模无忧</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">关于云手机的常见问题</h2>
              <p className="text-lg text-sky-700/70">企业微信安全群控的高频疑问，一次说清</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">立即体验云手机群控</h2>
              <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">免费试用3天，专属顾问1对1指导，安全运营海量企微号</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/trial" className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl hover:bg-sky-50 transition-all duration-300">
                  立即咨询
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/juhe-chat" className="inline-flex items-center justify-center px-8 py-4 bg-sky-400/30 text-white font-semibold rounded-xl hover:bg-sky-400/40 transition-all duration-300 border border-white/30">
                  了解聚合聊天
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <RelatedArticlesByKeyword keyword="云手机" keywords={['云手机', '群控', '私域', '手机']} title="延伸阅读：云手机群控" />
      </main>
    </>
  );
}
