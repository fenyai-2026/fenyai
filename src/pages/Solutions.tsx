import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SEOHelmet from '../components/SEOHelmet';
import { ArrowRight, Building2, ShoppingCart, Store, Network, CheckCircle2, TrendingUp, Users, GraduationCap, Target, ClipboardList, Share2, Archive, HeartPulse } from 'lucide-react';
import ProductCrossLinks from '../components/ProductCrossLinks';

const solutions = [
  {
    id: 'finance',
    icon: Building2,
    title: '泛金融业',
    subtitle: '银行、保险、证券、基金',
    painPoints: ['客户获取成本高', '合规要求严格', '客户粘性低', '转化周期长'],
    features: ['合规话术库', '客户分层运营', '智能外呼', '数据安全加密'],
    case: {
      company: '某头部保险公司',
      result: '客户转化率提升 300%',
      users: '10万+',
    },
    color: 'from-sky-500 to-cyan-400',
    bgColor: 'bg-sky-50',
    link: '/solutions/finance',
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: '社群电商',
    subtitle: '社群团购、直播带货',
    painPoints: ['流量获取难', '复购率低', '社群活跃度下降', '订单管理混乱'],
    features: ['裂变拉新', '智能群发', '订单同步', '社群自动化'],
    case: {
      company: '某知名团购平台',
      result: '社群GMV增长 500%',
      users: '50万+',
    },
    color: 'from-orange-500 to-amber-400',
    bgColor: 'bg-orange-50',
    link: '/solutions/ecommerce',
  },
  {
    id: 'retail',
    icon: Store,
    title: '连锁零售',
    subtitle: '多门店统一管理',
    painPoints: ['门店数据分散', '会员运营困难', '线上线下割裂', '库存不同步'],
    features: ['多门店管理', '会员通', '导购赋能', '库存同步'],
    case: {
      company: '某连锁美妆品牌',
      result: '会员复购率提升 150%',
      users: '100万+',
    },
    color: 'from-violet-500 to-purple-400',
    bgColor: 'bg-violet-50',
    link: '/solutions/retail',
  },
  {
    id: 'distribution',
    icon: Network,
    title: '智慧分销',
    subtitle: '分销体系搭建',
    painPoints: ['分销商管理难', '佣金结算复杂', '业绩追踪困难', '层级混乱'],
    features: ['分销层级管理', '自动佣金结算', '业绩看板', '激励体系'],
    case: {
      company: '某健康产品品牌',
      result: '分销业绩增长 800%',
      users: '5万+',
    },
    color: 'from-emerald-500 to-teal-400',
    bgColor: 'bg-emerald-50',
    link: '/solutions/distribution',
  },
];

const scenarioSolutions = [
  {
    id: 'education',
    icon: GraduationCap,
    title: '在线教培',
    subtitle: '课程引流、学员管理',
    desc: '专为在线教育机构打造，提供课程引流、社群运营、学员管理、数据分析',
    color: 'from-blue-500 to-indigo-400',
    link: '/solutions/education',
  },
  {
    id: 'active-outreach',
    icon: Target,
    title: '主动拓客',
    subtitle: 'AI智能外呼、线索管理',
    desc: 'AI智能外呼+线索管理+客户画像，打造主动拓客私域运营闭环',
    color: 'from-rose-500 to-pink-400',
    link: '/solutions/active-outreach',
  },
  {
    id: 'sop',
    icon: ClipboardList,
    title: '营销SOP',
    subtitle: '标准化运营流程',
    desc: '让私域运营有章可循，标准化流程+自动化执行，运营效率提升10倍',
    color: 'from-amber-500 to-yellow-400',
    link: '/solutions/sop',
  },
  {
    id: 'crack',
    icon: Share2,
    title: '裂变任务',
    subtitle: '任务裂变、红包裂变',
    desc: '多样化裂变玩法，让每个用户都成为传播节点，实现低成本爆发式增长',
    color: 'from-green-500 to-emerald-400',
    link: '/solutions/crack',
  },
  {
    id: 'archive',
    icon: Archive,
    title: '会话存档',
    subtitle: '合规存档、智能质检',
    desc: '企业微信会话存档解决方案，满足金融医疗教育行业合规要求',
    color: 'from-slate-500 to-gray-400',
    link: '/solutions/archive',
  },
  {
    id: 'healthcare',
    icon: HeartPulse,
    title: '医疗健康',
    subtitle: '医疗机构、连锁诊所',
    desc: '专为医疗机构打造，提供企微活码获客、合规患者管理、随访SOP、AI健康咨询',
    color: 'from-teal-500 to-cyan-400',
    link: '/solutions/healthcare',
  },
];

export default function Solutions() {
  return (
    <>
      <SEOHelmet
        title="有机云解决方案_行业私域运营方案"
        description="泛金融业、社群电商、连锁零售、智慧分销等行业解决方案，助力企业快速搭建私域运营体系。"
        keywords="金融私域运营,电商私域方案,零售私域运营,分销私域方案"
        canonical="/solutions"
      />
    <div className="min-h-screen bg-[#F0F9FF]">
        <header className="bg-gradient-to-br from-[#0C4A6E] via-[#0EA5E9] to-[#38BDF8] py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                行业解决方案
              </h1>
              <p className="text-xl text-sky-100 max-w-2xl mx-auto">
                针对不同行业特点，提供专业的私域运营解决方案
              </p>
            </motion.div>
          </div>
        </header>

        <main>
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {solutions.map((solution, index) => (
                  <motion.article
                    key={solution.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-sky-100"
                    itemScope
                    itemType="https://schema.org/Service"
                  >
                    <div className="p-8">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <solution.icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-[#0C4A6E]" itemProp="name">{solution.title}</h2>
                          <p className="text-sky-600" itemProp="description">{solution.subtitle}</p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">行业痛点</h3>
                          <div className="flex flex-wrap gap-2">
                            {solution.painPoints.map((point, i) => (
                              <span key={i} className="px-3 py-1 bg-rose-50 text-rose-600 text-sm rounded-full border border-rose-100">
                                {point}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">核心功能</h3>
                          <div className="grid grid-cols-2 gap-2">
                            {solution.features.map((feature, i) => (
                              <div key={i} className="flex items-center space-x-2 text-slate-700">
                                <CheckCircle2 className="w-4 h-4 text-[#0EA5E9] flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className={`${solution.bgColor} rounded-xl p-4 border border-sky-100`}>
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-sm text-slate-500 mb-1">客户案例</div>
                              <div className="font-semibold text-[#0C4A6E]">{solution.case.company}</div>
                              <div className="text-[#F97316] font-bold flex items-center gap-1">
                                <TrendingUp className="w-4 h-4" />
                                {solution.case.result}
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm mb-1">
                                <Users className="w-5 h-5 text-[#0EA5E9]" />
                              </div>
                              <div className="text-xs text-slate-500">服务用户</div>
                              <div className="text-sm font-bold text-[#0C4A6E]">{solution.case.users}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Link
                        to={solution.link}
                        className="mt-6 inline-flex items-center text-[#0EA5E9] font-semibold hover:text-[#0284C7] group-hover:translate-x-1 transition-all"
                      >
                        了解详情
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          {/* 场景化解决方案 */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-[#0C4A6E] mb-4">
                  场景化解决方案
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  针对特定业务场景，提供专业的私域运营解决方案
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {scenarioSolutions.map((solution, index) => (
                  <motion.article
                    key={solution.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-sky-100"
                  >
                    <div className="p-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <solution.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-[#0C4A6E]">{solution.title}</h3>
                          <p className="text-sky-600 text-sm">{solution.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2">{solution.desc}</p>
                      <Link
                        to={solution.link}
                        className="inline-flex items-center text-[#0EA5E9] font-semibold hover:text-[#0284C7] group-hover:translate-x-1 transition-all"
                      >
                        了解详情
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          {/* 相关产品推荐 */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ProductCrossLinks title="支持以上解决方案的有机云产品" maxCount={5} />
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-[#0C4A6E] mb-4">
                需要定制化解决方案？
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                联系我们的专家团队，为您量身打造私域运营方案
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#F97316] to-orange-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg shadow-orange-500/25"
              >
                立即咨询
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
