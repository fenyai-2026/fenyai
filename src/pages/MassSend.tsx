import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHelmet from '../components/SEOHelmet';
import RelatedArticlesByKeyword from '../components/RelatedArticlesByKeyword';
import { Send, Tag, Clock, Users, BarChart3, Shield, ArrowRight, Check } from 'lucide-react';

const features = [
  {
    icon: Send,
    title: '突破群发限制',
    desc: '突破企业微信单日群发次数上限，按客户标签分批次触达，消息送达率与打开率双提升。',
  },
  {
    icon: Tag,
    title: '标签精准群发',
    desc: '基于客户标签、人群包、消费行为智能分层，不同客户收到不同内容，告别一刀切群发。',
  },
  {
    icon: Clock,
    title: '定时群发',
    desc: '按客户活跃时段设定群发时间，黄金时段精准触达，凌晨不打扰，转化更高效。',
  },
  {
    icon: Users,
    title: '多账号统一群发',
    desc: '一个后台管理多个企业微信账号，批量向全量客户群发，运营效率提升 10 倍。',
  },
  {
    icon: BarChart3,
    title: '数据实时回流',
    desc: '群发后实时统计送达、打开、点击数据，自动生成转化漏斗，指导后续跟进策略。',
  },
  {
    icon: Shield,
    title: '防骚扰合规',
    desc: '内置频控与去重机制，避免重复触达同一客户，符合企业微信合规要求，降低投诉封号风险。',
  },
];

const compares = [
  { item: '单日群发次数', youjiyun: '突破上限·不限次', builtin: '受官方次数限制' },
  { item: '按标签精准分发', youjiyun: '支持标签/人群包', builtin: '仅全量群发' },
  { item: '定时发送', youjiyun: '按活跃时段定时', builtin: '仅即时发送' },
  { item: '多账号管理', youjiyun: '一个后台统管', builtin: '逐个账号操作' },
  { item: '数据回流', youjiyun: '送达/打开/点击报表', builtin: '无明细数据' },
];

const faqs = [
  {
    q: '企业微信超级群发是什么？',
    a: '超级群发是有机云在企业微信官方接口之上提供的营销触达能力，突破官方单日群发次数限制，支持标签群发、定时群发、多账号统一群发，让消息精准触达每一位客户。',
  },
  {
    q: '有机云超级群发真的不限次吗？',
    a: '有机云超级群发基于合规的官方接口与智能频控策略，可远超市面通用群发上限，按客户标签分批次触达，实际可视为「不限次」批量发送；同时内置去重与频控，避免骚扰客户导致封号。',
  },
  {
    q: '怎么给不同标签的客户发不同内容？',
    a: '在有机云后台创建群发任务时，选择目标客户标签或人群包（如「高意向」「已购」「沉睡客户」），为每个分组配置专属文案与素材，系统自动按标签分发，实现千人千面精准营销。',
  },
  {
    q: '群发会被客户投诉或封号吗？',
    a: '有机云超级群发内置频控与去重机制，同一客户不会被重复触达，且严格遵循企业微信合规规范。配合合理的发送频次与优质内容，投诉与封号风险极低。',
  },
  {
    q: '超级群发和企微自带群发有什么区别？',
    a: '企业微信自带群发每日次数有限、无法按标签精准分发、缺乏数据回流；有机云超级群发突破次数限制，支持标签/人群包精准群发、定时发送、多账号统一管理，并实时统计送达打开点击数据，是企微原生群发的全面增强版。',
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

export default function MassSend() {
  return (
    <>
      <SEOHelmet
        title="企业微信自动群发工具_有机云超级群发不限次·标签精准触达"
        description="有机云企业微信自动群发工具：超级群发不限次，按客户标签精准群发、定时发送、多账号统一管理，突破企微群发限制且防封，已服务10万+企业。免费试用→"
        keywords="企业微信自动群发,企业微信群发工具,超级群发,不限次群发,标签群发,定时群发,企微群发,营销触达"
        canonical="https://www.fenyai.com/mass-send"
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
                <Send className="w-4 h-4 mr-2" />
                营销触达
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sky-900 leading-tight mb-6">
                企业微信群发工具
                <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">超级群发不限次</span>
              </h1>
              <p className="text-lg sm:text-xl text-sky-700/80 mb-8 leading-relaxed max-w-2xl mx-auto">
                突破企业微信群发次数限制，标签精准群发、定时触达、多账号统一管理，让每一条营销消息都精准送达客户。
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
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">超级群发的核心能力</h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">
                从突破限制到精准触达，有机云让群发真正成为可度量、可优化的增长引擎
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

        {/* Compare Section */}
        <section className="py-24 bg-white" aria-label="对比企微自带群发">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">有机云超级群发 vs 企微自带群发</h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">同样的企微生态，触达效率却天差地别</p>
            </motion.div>

            <div className="bg-sky-50 rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-sky-500 text-white">
                      <th className="px-6 py-4 text-left font-semibold">能力项</th>
                      <th className="px-6 py-4 text-center font-semibold">有机云超级群发</th>
                      <th className="px-6 py-4 text-center font-semibold">企微自带群发</th>
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

        {/* FAQ Section */}
        <section className="py-24" aria-label="常见问题">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">关于超级群发的常见问题</h2>
              <p className="text-lg text-sky-700/70">企业微信群发工具的高频疑问，一次说清</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">立即体验超级群发不限次</h2>
              <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">
                免费试用 3 天，专属顾问 1 对 1 指导，让营销消息精准触达每一位客户
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
        <RelatedArticlesByKeyword keyword="超级群发" keywords={['群发', '超级群发', '批量群发', '触达', '群发助手']} title="延伸阅读：企业微信群发" />
      </main>
    </>
  );
}
