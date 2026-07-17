import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Star, Users, ChevronDown, HelpCircle, Zap, Shield, Clock, RefreshCw } from 'lucide-react';
import SEOHelmet from '../components/SEOHelmet';

const plans = [
  {
    name: '专业版',
    subtitle: '适合中小团队快速启动',
    price: '1980',
    priceUnit: '元/坐席/年',
    features: [
      '群/客户管理',
      '裂变活动',
      '自动拓客',
      '防封防护',
      '活码数量150个',
      '月扫码量20万次',
      'AI智能客服基础版',
      '基础数据分析',
    ],
    color: 'from-sky-500 to-cyan-400',
    bgColor: 'bg-sky-50',
  },
  {
    name: '旗舰版',
    subtitle: '适合大型企业全面运营',
    price: '2980',
    priceUnit: '元/坐席/年',
    features: [
      '群/客户管理',
      '裂变活动',
      '自动拓客',
      '防封防护',
      '活码数量200个',
      '月扫码量30万次',
      '会话监控与风控',
      '聊天增强',
      'AI智能客服高级版',
      '高级报表与API对接',
      '专属客户成功经理',
    ],
    popular: true,
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-50',
  },
  {
    name: '企业定制版',
    subtitle: '超大规模个性化需求',
    price: '定制',
    priceUnit: '联系顾问获取报价',
    features: [
      '群/客户管理',
      '裂变活动',
      '自动拓客',
      '防封防护定制',
      '活码数量定制',
      '月扫码量定制',
      '会话监控与风控',
      '聊天增强',
      '自定义公众号',
      '自定义活码域名',
      '自定义裂变海报域名',
      '私有部署',
      '专属技术团队支持',
    ],
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-50',
  },
];

const socialProof = [
  { number: '10,000+', label: '企业客户选择' },
  { number: '99.9%', label: '客户满意度' },
  { number: '24/7', label: '技术支持' },
];

const faqs = [
  {
    question: '免费试用包含哪些功能？',
    answer: '免费试用3天包含旗舰版全部功能，包括AI智能客服、企微SCRM、营销自动化等核心能力。试用期间有专属顾问1对1指导，无需绑定信用卡，到期后自动停止，不会扣费。',
    icon: Zap,
  },
  {
    question: '价格是如何计算的？',
    answer: '按坐席数计费，专业版1980元/坐席/年，旗舰版2980元/坐席/年。坐席指使用系统的企业员工账号，可按需增减。年付享9折优惠，多年合作可享更多折扣。',
    icon: HelpCircle,
  },
  {
    question: '部署需要多长时间？',
    answer: '标准版即开即用，注册后10分钟即可开始使用。企业定制版根据需求复杂度，通常1-2周完成部署。我们提供全程技术支持，确保平稳上线。',
    icon: Clock,
  },
  {
    question: '是否支持续费升级？',
    answer: '支持随时升级。升级时按剩余时长折算差价，无需重新购买。例如：专业版使用6个月后升级旗舰版，只需补差价990元/坐席即可使用剩余6个月。',
    icon: RefreshCw,
  },
  {
    question: '如何获取技术支持？',
    answer: '专业版提供在线客服支持（工作日9:00-18:00），旗舰版提供7×24小时专属客户成功经理+技术热线。企业定制版配备专属技术团队，响应时间<30分钟。',
    icon: Users,
  },
  {
    question: '数据安全如何保障？',
    answer: '采用银行级数据加密，通过ISO27001信息安全认证。数据存储于阿里云/腾讯云，支持异地备份。企业定制版支持私有部署，数据完全自主可控。',
    icon: Shield,
  },
  {
    question: '是否支持API对接？',
    answer: '旗舰版和企业定制版开放完整API接口，支持与ERP、CRM、OA等内部系统对接。提供详细API文档和技术支持，平均对接周期3-5个工作日。',
    icon: Zap,
  },
];

const purchaseGuideSteps = [
  { step: 1, title: '需求评估', desc: '根据团队规模和业务需求选择合适版本' },
  { step: 2, title: '免费试用', desc: '申请3天免费试用，体验全部功能' },
  { step: 3, title: '内部审批', desc: '下载购买攻略，提交采购申请' },
  { step: 4, title: '签约付款', desc: '签订合同，支持对公转账/在线支付' },
  { step: 5, title: '开通使用', desc: '专属顾问协助配置，快速上线' },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-slate-100 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 px-2 text-left hover:bg-slate-50 transition-colors rounded-lg"
      >
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0EA5E9] to-[#38BDF8] flex items-center justify-center flex-shrink-0">
            <faq.icon className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-[#0C4A6E]">{faq.question}</span>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-5 px-2 pl-14">
              <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Pricing() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#F0F9FF]">
      <SEOHelmet
        title="有机云价格方案_SCRM私域运营工具定价_专业版1980元/坐席/年_免费试用3天"
        description="有机云提供透明定价：专业版1980元/坐席/年，旗舰版2980元/坐席/年。免费试用3天，7天无理由退款，10,000+企业客户选择。"
        keywords="有机云价格,企微SCRM价格,私域运营工具价格,企业微信营销价格,SCRM定价"
        canonical="/pricing"
      />

      <header className="py-20 bg-gradient-to-br from-[#0C4A6E] via-[#0EA5E9] to-[#38BDF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full text-white/90 text-sm mb-6">
              <Zap className="w-4 h-4" />
              <span>免费试用3天 · 7天无理由退款</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              透明定价，按需选择
            </h1>
            <p className="text-lg text-sky-100 max-w-2xl mx-auto">
              专业版1980元/坐席/年起，旗舰版2980元/坐席/年，企业定制版按需报价
            </p>
          </motion.div>
        </div>
      </header>

      {/* Social Proof Bar */}
      <section className="py-8 bg-white border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-12">
            {socialProof.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-[#0EA5E9]">{item.number}</div>
                <div className="text-sm text-slate-500">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                  plan.popular ? 'ring-2 ring-orange-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-center py-2 text-sm font-medium flex items-center justify-center gap-1"
                  >
                    <Star className="w-4 h-4" />
                    最受欢迎
                  </motion.div>
                )}
                <div className={`p-8 ${plan.popular ? 'pt-14' : ''}`}>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6`}>
                    <span className="text-white font-bold text-xl">{plan.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0C4A6E] mb-1">{plan.name}</h3>
                  <p className="text-slate-500 text-sm mb-4">{plan.subtitle}</p>
                  <div className="flex items-baseline mb-2">
                    {plan.price === '定制' ? (
                      <span className="text-3xl font-bold text-[#0C4A6E]">{plan.price}</span>
                    ) : (
                      <>
                        <span className="text-sm text-slate-400 mr-1">¥</span>
                        <span className="text-4xl font-bold text-[#0C4A6E]">{plan.price}</span>
                      </>
                    )}
                  </div>
                  <p className="text-sm text-slate-500 mb-6">{plan.priceUnit}</p>
                  
                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <Link
                      to="/trial"
                      className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-200 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600 shadow-lg shadow-orange-500/25'
                          : 'bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] text-white hover:from-[#0C4A6E] hover:to-[#0EA5E9] shadow-lg shadow-sky-500/25'
                      }`}
                    >
                      免费试用3天
                    </Link>
                    <Link
                      to="/contact"
                      className="block w-full text-center py-3 rounded-xl font-semibold border-2 border-slate-200 text-slate-600 hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-all duration-200"
                    >
                      立即咨询
                    </Link>
                  </div>
                </div>
                <div className="px-8 pb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center mr-3 flex-shrink-0`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0C4A6E] mb-4">常见问题</h2>
            <p className="text-slate-600">关于价格、试用、部署的常见问题解答</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openFAQ === index}
                onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Purchase Guide Section */}
      <section className="py-16 bg-gradient-to-br from-[#0C4A6E] to-[#0EA5E9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">购买攻略</h2>
            <p className="text-sky-100">5步完成采购，降低沟通成本，快速推进业务落地</p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4 mb-12">
            {purchaseGuideSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold">{step.step}</span>
                </div>
                <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                <p className="text-white/70 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/trial"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0EA5E9] font-semibold rounded-xl hover:bg-white/90 transition-all duration-200 shadow-lg"
              >
                <Zap className="w-5 h-5 mr-2" />
                免费试用3天
              </Link>
              <a
                href="/whitepaper"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white border border-white/30 font-semibold rounded-xl hover:bg-white/20 transition-all duration-200"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                查看完整购买攻略
              </a>
            </div>
            <p className="text-white/60 text-sm mt-4">
              已有 10,000+ 企业选择我们 · 99.9% 客户满意度
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
