import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHelmet from '../components/SEOHelmet';
import { HelpCircle, ArrowRight, MessageCircle, Phone, Mail } from 'lucide-react';

const faqs = [
  {
    category: '产品功能',
    questions: [
      {
        q: '有机云支持哪些企业微信功能？',
        a: '有机云支持企微活码（渠道活码、员工活码、群活码）、客户管理系统（客户标签、人群包、自动打标签）、超级群发（突破群发限制）、AI智能体（基于大模型的智能客服）、AI外呼（智能外呼机器人）、会话聚合（多账号会话管理）、裂变拓客（任务宝、海报裂变、红包裂变）等全链路私域运营功能。'
      },
      {
        q: '有机云的AI智能体有什么优势？',
        a: '有机云AI智能体基于先进的大语言模型，具备强大的语义理解和对话能力。支持多轮对话、意图识别、情感分析、知识库训练，7×24小时自动回复客户咨询，可替代80%的人工客服工作，大幅降低客服成本，提升客户服务体验。'
      },
      {
        q: '企微活码有什么作用？',
        a: '企微活码是企业微信私域引流的核心工具。渠道活码可以追踪不同渠道的引流效果；员工活码可以智能分配客户给不同员工；群活码可以群满自动换群，永不过期。通过企微活码，企业可以实现线上线下全渠道引流，快速沉淀私域流量。'
      },
      {
        q: '超级群发能突破什么限制？',
        a: '企业微信官方对每个员工每天群发次数有限制。有机云超级群发可以突破这一限制，支持标签群发、定时群发、朋友圈群发，让消息精准触达每一位目标客户，大幅提升营销触达效率。'
      }
    ]
  },
  {
    category: '使用问题',
    questions: [
      {
        q: '企业微信私域运营怎么做？',
        a: '企业微信私域运营主要包括四个步骤：1）引流获客：通过企微活码、裂变活动、AI外呼等方式获取客户；2）客户管理：通过客户标签、人群包进行客户分层；3）营销触达：通过超级群发、运营SOP进行精准营销；4）数据分析：通过数据报表分析运营效果，持续优化。有机云提供全链路工具，一站式解决私域运营需求。'
      },
      {
        q: '如何快速搭建私域运营体系？',
        a: '快速搭建私域运营体系需要：1）明确私域运营目标；2）选择合适的SCRM工具（如有机云）；3）设计引流方案（活码、裂变）；4）建立客户标签体系；5）制定运营SOP；6）培训团队使用工具。有机云提供专业顾问1对1指导，帮助企业快速搭建私域运营体系。'
      },
      {
        q: '私域流量和公域流量有什么区别？',
        a: '私域流量是企业可以自主触达、反复使用的客户资源，如企业微信好友、社群成员等。公域流量是平台流量，如淘宝、抖音的流量，需要付费获取且无法反复触达。私域流量的优势是获客成本低、可反复触达、转化率高、客户粘性高。'
      },
      {
        q: '如何提高私域客户转化率？',
        a: '提高私域客户转化率的方法：1）精细化客户分层，针对不同客户群体制定不同营销策略；2）建立客户信任，通过优质内容和服务建立关系；3）设计转化路径，从引流到转化形成闭环；4）使用AI智能体自动跟进高意向客户；5）通过数据分析持续优化转化策略。'
      }
    ]
  },
  {
    category: '价格服务',
    questions: [
      {
        q: '有机云如何收费？',
        a: '有机云提供免费试用，企业可以先试用再决定是否购买。正式版本根据功能模块和使用规模收费，具体价格可以咨询客服。相比同类产品，有机云性价比更高，功能更全面，特别适合中小企业使用。'
      },
      {
        q: '有机云提供免费试用吗？',
        a: '是的，有机云提供免费试用3天。试用期间可以使用全部功能，包括企微活码、客户管理、超级群发、AI智能体等。试用期间有专业顾问1对1指导，帮助企业快速上手。'
      },
      {
        q: '有机云的数据安全吗？',
        a: '有机云使用企业微信官方接口，数据安全有保障。支持聊天存档、敏感词监控、合规管理，满足金融、医疗等行业的合规要求。企业数据存储在安全的服务器上，采用加密传输和存储，不会泄露给第三方。'
      },
      {
        q: '有机云提供什么售后服务？',
        a: '有机云提供7×24小时在线客服支持，专业顾问1对1服务。包括：产品使用培训、运营方案设计、技术支持、问题解答等。企业在使用过程中遇到任何问题，都可以随时联系客服获得帮助。'
      }
    ]
  },
  {
    category: '行业方案',
    questions: [
      {
        q: '有机云适合什么行业？',
        a: '有机云适合各类行业使用，包括：1）泛金融业（保险、银行、证券）；2）连锁零售（门店、超市、餐饮）；3）社群电商（团购、直播带货）；4）教育培训；5）医疗健康；6）房地产等。针对不同行业特点，有机云提供专属的行业解决方案。'
      },
      {
        q: '保险行业如何做私域运营？',
        a: '保险行业私域运营的关键：1）通过企微活码获取潜在客户；2）建立客户标签体系，区分不同险种需求；3）使用AI智能体自动回复咨询，筛选高意向客户；4）通过运营SOP持续触达客户，建立信任；5）定期举办线上活动，提升客户粘性。有机云提供保险行业专属方案。'
      },
      {
        q: '连锁门店如何做私域运营？',
        a: '连锁门店私域运营的关键：1）为每个门店生成专属活码，放置于门店各处；2）顾客扫码自动添加门店专属导购；3）通过客户管理系统进行会员分层；4）通过超级群发推送门店活动、优惠券；5）打通线上线下数据，实现全渠道融合。有机云提供连锁门店专属方案。'
      },
      {
        q: '社群电商如何做私域运营？',
        a: '社群电商私域运营的关键：1）通过包裹卡引流，引导买家添加企业微信；2）建立社群，通过群活码管理社群；3）使用AI智能体自动回复咨询；4）通过超级群发推送团购活动；5）通过裂变活动实现老客带新客。有机云提供社群电商专属方案。'
      }
    ]
  }
];

// 将所有 FAQs 转换为 FAQPage JSON-LD 格式
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.flatMap(category =>
    category.questions.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  )
};

export default function Faq() {
  return (
    <>
      <SEOHelmet
        title="有机云常见问题FAQ_企业微信SCRM使用帮助与解答"
        description="有机云FAQ使用帮助中心：企业微信SCRM怎么用、活码怎么生成、会话存档怎么开通、AI智能体怎么用，涵盖产品功能、价格服务与各行业方案常见问题解答。"
        keywords="有机云FAQ,企业微信SCRM常见问题,企微活码怎么生成,会话存档怎么开通,AI智能体怎么用"
        canonical="https://www.fenyai.com/faq"
        extraSchema={jsonLd}
      />

      <main className="bg-sky-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[50vh] flex items-center">
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
                <HelpCircle className="w-4 h-4 mr-2" />
                常见问题
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sky-900 leading-tight mb-6">
                企业微信SCRM
                <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">使用常见问题</span>
              </h1>
              <p className="text-lg sm:text-xl text-sky-700/80 mb-8 leading-relaxed max-w-2xl mx-auto">
                有机云FAQ使用帮助中心，涵盖产品功能、使用问题、价格服务、行业方案等方面，帮您快速找到企微SCRM使用解答
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24" aria-label="常见问题">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {faqs.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-2xl font-bold text-sky-900 mb-8 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center text-sm mr-3">
                    {categoryIndex + 1}
                  </span>
                  {category.category}
                </h2>
                <div className="space-y-6">
                  {category.questions.map((faq, faqIndex) => (
                    <motion.div
                      key={faqIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: faqIndex * 0.1 }}
                      className="bg-white rounded-2xl p-6 shadow-sm border border-sky-100"
                    >
                      <h3 className="text-lg font-bold text-sky-900 mb-3">{faq.q}</h3>
                      <p className="text-sky-700/70 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-white" aria-label="联系我们">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-sky-900 mb-4">
                还有其他问题？
              </h2>
              <p className="text-lg text-sky-700/70">
                我们的专业顾问随时为您解答
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-sky-50 rounded-2xl p-6 text-center"
              >
                <MessageCircle className="w-10 h-10 text-sky-500 mx-auto mb-4" />
                <h3 className="font-bold text-sky-900 mb-2">在线咨询</h3>
                <p className="text-sky-700/70 text-sm">7×24小时在线客服</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-sky-50 rounded-2xl p-6 text-center"
              >
                <Phone className="w-10 h-10 text-sky-500 mx-auto mb-4" />
                <h3 className="font-bold text-sky-900 mb-2">电话咨询</h3>
                <p className="text-sky-700/70 text-sm">133-1616-9107</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-sky-50 rounded-2xl p-6 text-center"
              >
                <Mail className="w-10 h-10 text-sky-500 mx-auto mb-4" />
                <h3 className="font-bold text-sky-900 mb-2">邮件咨询</h3>
                <p className="text-sky-700/70 text-sm">374183167@qq.com</p>
              </motion.div>
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
                立即开启企业微信私域运营
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
                  to="/scrm"
                  className="inline-flex items-center justify-center px-8 py-4 bg-sky-400/30 text-white font-semibold rounded-xl hover:bg-sky-400/40 transition-all duration-300 border border-white/30"
                >
                  了解产品功能
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
