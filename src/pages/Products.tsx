import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SEOHelmet from '../components/SEOHelmet';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, Filter, Users, ClipboardList, Database, Check, Star, HelpCircle } from 'lucide-react';

const products = [
  {
    icon: Box,
    title: '企微魔方',
    desc: '企业微信私域运营核心工具，一站式解决客户管理、营销触达、数据分析需求',
    features: ['聚合客服', '智能回复', '客户标签', '自动打标签', '批量群发', '数据报表'],
    color: 'from-[#0EA5E9] to-[#38BDF8]',
    users: '10万+企业使用',
    link: '/products/qimo',
    faq: [
      { q: '企微魔方和普通企业微信有什么不同？', a: '企微魔方在企业微信原生功能基础上，新增聚合客服（多号消息汇总到一个页面）、自动打标签（基于用户行为自动分层）、超级群发（更高频次触达）、智能回复（AI辅助快捷回复）等能力，是原生功能的10倍增强。' },
      { q: '一个账号可以管理多少个企微号？', a: '企微魔方支持在一个后台同时管理多个企业微信账号，无数量上限。聚合聊天功能将所有账号的消息汇总到一个界面，单个运营人员可同时高效处理多个账号的客户咨询。' }
    ]
  },
  {
    icon: Filter,
    title: '引流宝',
    desc: '多渠道引流拓客神器，支持活码、广告、裂变等多种引流方式',
    features: ['活码拓客', '渠道追踪', '裂变引流', '广告接入', '链接追踪', '自动分配'],
    color: 'from-[#38BDF8] to-[#0EA5E9]',
    users: '日均引流100万+',
    link: '/products/yinliu',
    faq: [
      { q: '引流宝的活码和普通活码有什么区别？', a: '引流宝活码支持渠道追踪、智能分配、A/B测试、数据看板四大增强能力。每个渠道独立追踪引流效果，按员工承接能力自动分配客户，支持同一位置投放多个版本活码测试转化率。' },
      { q: '引流宝支持哪些引流场景？', a: '支持线下物料（海报/传单/台卡）、线上广告（朋友圈/抖音/小红书）、公众号/视频号挂载、直播间引流、电商包裹卡等全场景。每个场景自动生成独立渠道码，数据独立统计。' }
    ]
  },
  {
    icon: Users,
    title: '进群宝',
    desc: '智能群管理工具，自动化建群、拉群、群运营全流程',
    features: ['自动建群', '口令入群', '批量邀请', '群标签', '入群欢迎', '群数据统计'],
    color: 'from-[#0EA5E9] to-[#38BDF8]',
    users: '管理500万+群',
    link: '/products/jinqun',
    faq: [
      { q: '进群宝怎么防广告和垃圾信息？', a: '支持新成员入群验证、关键词拦截、链接拦截、敏感词过滤四重防护。可自定义拦截规则，被拦截消息不展示给群成员，同时通知管理员审查。' },
      { q: '一个群最多容纳多少人？', a: '企业微信群上限500人（内部群2000人）。进群宝支持多群联动管理，可以将同一批客户分配到多个平行群，实现"群组矩阵"运营。' }
    ]
  },
  {
    icon: ClipboardList,
    title: '任务宝',
    desc: '裂变任务营销工具，助力私域快速增长',
    features: ['任务裂变', '奖励机制', '进度追踪', '自动审核', '多级分销', '防刷机制'],
    color: 'from-[#F97316] to-[#FB923C]',
    users: '裂变效率提升10倍',
    link: '/products/task',
    faq: [
      { q: '做一场裂变任务需要准备什么？', a: '① 裂变奖品（优惠券/实物/资料包等）；② 活动海报设计；③ 裂变规则设定（邀请人数/时间限制）；④ 有机云任务宝配置。最快1小时即可上线。' },
      { q: '裂变的防刷机制怎么保证？', a: '任务宝内置多重防刷：① 微信账号唯一性校验；② 邀请关系真实性检测；③ 异常行为识别（同一设备多号、秒级注册等）；④ 黑名单机制。确保裂变效果真实有效。' }
    ]
  },
  {
    icon: Database,
    title: '私域数据中台',
    desc: '统一数据管理分析平台，深度洞察私域运营数据',
    features: ['数据整合', '用户画像', '行为分析', '转化漏斗', 'ROI分析', '智能预警'],
    color: 'from-[#38BDF8] to-[#0EA5E9]',
    users: '数据准确率99.9%',
    link: '/products/data',
    faq: [
      { q: '数据中台能对接哪些数据源？', a: '支持对接企业微信、公众号、小程序、自有APP、电商平台（淘宝/京东/拼多多）、CRM系统、ERP系统等。通过API或数据导入方式整合多源数据，形成统一客户视图。' },
      { q: '数据安全如何保障？', a: '采用银行级数据加密技术，支持私有化部署，数据存储于企业自有服务器。通过ISO27001信息安全认证，确保客户数据绝对安全。' }
    ]
  },
];

// 产品功能对比矩阵
const comparisonMatrix = [
  { feature: '活码引流', magic: '✅', yinliu: '✅✅', jinqun: '—', task: '—', data: '—' },
  { feature: '聚合聊天', magic: '✅✅', yinliu: '—', jinqun: '—', task: '—', data: '—' },
  { feature: '自动打标签', magic: '✅✅', yinliu: '—', jinqun: '—', task: '—', data: '—' },
  { feature: '超级群发', magic: '✅✅', yinliu: '—', jinqun: '—', task: '—', data: '—' },
  { feature: '裂变任务', magic: '—', yinliu: '✅', jinqun: '—', task: '✅✅', data: '—' },
  { feature: '群管理', magic: '✅', yinliu: '—', jinqun: '✅✅', task: '—', data: '—' },
  { feature: '运营SOP', magic: '✅✅', yinliu: '—', jinqun: '✅', task: '✅', data: '—' },
  { feature: 'AI智能体', magic: '✅', yinliu: '—', jinqun: '—', task: '—', data: '—' },
  { feature: '数据分析', magic: '✅', yinliu: '✅', jinqun: '✅', task: '✅', data: '✅✅' },
];

// 客户成功案例 - 详细展示
const customerCases = [
  {
    company: '平安保险',
    industry: '保险金融',
    avatar: 'PA',
    painPoint: '客户转化率低，私域运营团队效率不高，难以精准触达客户',
    solution: '部署企微活码+AI外呼+客户管理系统，实现自动化客户分层和精准触达',
    result: '客户转化率提升300%',
    metrics: [
      { label: '私域客户', value: '50万+' },
      { label: '转化率提升', value: '300%' },
      { label: '团队精简', value: '60%' },
    ],
    quote: '接入有机云SCRM后，客户转化率从5%提升到15%，私域运营团队从20人缩减到8人。',
  },
  {
    company: '华润万家',
    industry: '连锁零售',
    avatar: 'HR',
    painPoint: '门店客流下滑，会员复购率低，线上线下数据无法打通',
    solution: '门店活码引流+会员运营SOP+数据分析，构建全渠道会员体系',
    result: '会员复购率提升150%',
    metrics: [
      { label: '会员复购率提升', value: '150%' },
      { label: '门店业绩提升', value: '80%' },
      { label: '月引流新客', value: '3万+' },
    ],
    quote: '一个月内通过企微活码引流3万+门店新客，会员复购率从23%提升到58%。',
  },
  {
    company: '云集微店',
    industry: '社群电商',
    avatar: 'YJ',
    painPoint: '获客成本高，用户增长缓慢，缺乏有效的裂变机制',
    solution: '裂变任务+超级群发+AI智能体，打造病毒式增长闭环',
    result: '社群GMV增长500%',
    metrics: [
      { label: '社群GMV增长', value: '300%' },
      { label: '获客成本降低', value: '70%' },
      { label: '单场裂变新增', value: '4万+' },
    ],
    quote: '单场裂变活动新增4万+企微好友，获客成本从十几万降到几乎零成本。',
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-[#F0F9FF]" itemScope itemType="https://schema.org/SoftwareApplication">
      <SEOHelmet
        title="有机云产品功能-企微魔方|引流宝|进群宝|SCRM工具"
        description="有机云SCRM产品功能：企微魔方聚合管理、引流宝活码拓客、进群宝智能群管、任务宝裂变涨粉。已服务10万+企业，免费试用→"
        keywords="企微魔方,引流宝,进群宝,任务宝,私域数据中台,企业微信SCRM工具"
        canonical="/products"
      />
      <meta itemProp="name" content="有机云 - 企业微信私域运营工具" />
      <meta itemProp="description" content="专注效果转化的私域营销工具，覆盖引流拓客、客户运营、营销触达、数据分析等全周期场景" />
      <meta itemProp="applicationCategory" content="BusinessApplication" />
      <meta itemProp="operatingSystem" content="Web" />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0C4A6E] via-[#0EA5E9] to-[#38BDF8] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              产品功能
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              覆盖私域运营全场景的专业工具矩阵，助力企业高效运营
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-[#0EA5E9]/10 relative overflow-hidden"
                itemScope
                itemType="https://schema.org/Product"
              >
                <meta itemProp="name" content={product.title} />
                <meta itemProp="description" content={product.desc} />
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${product.color}`}></div>
                <div className="flex items-start space-x-6">
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center flex-shrink-0`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    itemProp="image"
                  >
                    <product.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h2 className="text-2xl font-bold text-[#0C4A6E]" itemProp="name">{product.title}</h2>
                    </div>
                    <p className="text-[#0C4A6E]/70 mb-4 leading-relaxed" itemProp="description">{product.desc}</p>
                    <div className="flex items-center space-x-2 mb-4 text-sm text-[#F97316]" itemScope itemType="https://schema.org/AggregateRating">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-medium" itemProp="ratingValue">{product.users}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-[#0C4A6E]/80">
                          <Check className="w-4 h-4 text-[#0EA5E9] flex-shrink-0" />
                          <span itemProp="featureList">{feature}</span>
                        </div>
                      ))}
                    </div>
                    {/* FAQ Section */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-xs font-semibold text-[#0EA5E9] mb-2 flex items-center">
                        <HelpCircle className="w-3 h-3 mr-1" />
                        常见问题
                      </p>
                      {product.faq.map((item, faqIdx) => (
                        <details key={faqIdx} className="mb-2">
                          <summary className="text-sm text-[#0C4A6E] cursor-pointer hover:text-[#0EA5E9] flex items-start">
                            <span className="mr-1">›</span>
                            <span>{item.q}</span>
                          </summary>
                          <p className="text-xs text-[#0C4A6E]/70 mt-1 pl-4 leading-relaxed">{item.a}</p>
                        </details>
                      ))}
                    </div>
                    {/* 按钮组 */}
                    <div className="flex flex-wrap gap-3 mt-4">
                      <Link
                        to={product.link}
                        className="inline-flex items-center px-4 py-2 bg-sky-100 text-sky-700 font-semibold rounded-lg hover:bg-sky-200 transition-colors"
                      >
                        了解详情
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                      <Link
                        to="/trial"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-sky-600 hover:to-cyan-600 transition-all shadow-md"
                      >
                        免费试用
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 产品功能对比表格 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0C4A6E] mb-4">产品功能矩阵</h2>
            <p className="text-[#0C4A6E]/70">一目了然，选择适合您的工具组合</p>
          </motion.div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-[#0C4A6E] to-[#0EA5E9] text-white">
                  <th className="p-4 text-left font-semibold">核心能力</th>
                  <th className="p-4 text-center font-semibold">企微魔方</th>
                  <th className="p-4 text-center font-semibold">引流宝</th>
                  <th className="p-4 text-center font-semibold">进群宝</th>
                  <th className="p-4 text-center font-semibold">任务宝</th>
                  <th className="p-4 text-center font-semibold">数据中台</th>
                </tr>
              </thead>
              <tbody>
                {comparisonMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-4 font-medium text-[#0C4A6E]">{row.feature}</td>
                    <td className="p-4 text-center text-[#0EA5E9]">{row.magic}</td>
                    <td className="p-4 text-center text-[#0EA5E9]">{row.yinliu}</td>
                    <td className="p-4 text-center text-[#0EA5E9]">{row.jinqun}</td>
                    <td className="p-4 text-center text-[#0EA5E9]">{row.task}</td>
                    <td className="p-4 text-center text-[#0EA5E9]">{row.data}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">
            ✅ = 支持 | ✅✅ = 核心功能（该产品的主要强项）
          </p>
        </div>
      </section>

      {/* 客户成功案例 */}
      <section className="py-16 bg-[#F0F9FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0C4A6E] mb-4">客户成功案例</h2>
            <p className="text-[#0C4A6E]/70">已有10万+企业选择有机云，用数据说话</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {customerCases.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-[#0EA5E9]/10 shadow-lg hover:shadow-xl transition-all duration-300"
                itemScope
                itemType="https://schema.org/Review"
              >
                {/* 头部：公司信息 */}
                <div className="bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center font-bold text-lg">
                      {item.avatar}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg" itemProp="author">{item.company}</h3>
                      <span className="text-white/80 text-sm">{item.industry}</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mt-3" itemProp="reviewBody">{item.result}</div>
                </div>

                {/* 数据指标 */}
                <div className="p-4 bg-[#F0F9FF]">
                  <div className="grid grid-cols-3 gap-2">
                    {item.metrics.map((metric, i) => (
                      <div key={i} className="text-center p-2 bg-white rounded-lg">
                        <div className="text-lg font-bold text-[#0EA5E9]">{metric.value}</div>
                        <div className="text-xs text-[#0C4A6E]/60">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 痛点与方案 */}
                <div className="p-5 space-y-4">
                  <div>
                    <h4 className="text-xs font-semibold text-[#0EA5E9] uppercase tracking-wider mb-1">客户痛点</h4>
                    <p className="text-sm text-[#0C4A6E]/80 leading-relaxed">{item.painPoint}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#0EA5E9] uppercase tracking-wider mb-1">有机云方案</h4>
                    <p className="text-sm text-[#0C4A6E]/80 leading-relaxed">{item.solution}</p>
                  </div>
                  <div className="bg-[#F0F9FF] rounded-xl p-4 border-l-4 border-[#0EA5E9]">
                    <p className="text-sm text-[#0C4A6E] italic leading-relaxed">"{item.quote}"</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            需要定制方案？
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            联系我们的专家团队，获取专属私域运营解决方案
          </p>
          <Link
            to="/trial"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0EA5E9] font-semibold rounded-xl hover:bg-white/90 transition-all duration-200 shadow-lg"
          >
            立即咨询
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
