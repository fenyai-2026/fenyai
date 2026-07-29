import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import RelatedArticlesByKeyword from '../components/RelatedArticlesByKeyword';
import { Helmet } from 'react-helmet-async';
import { ClipboardList, Workflow, Clock, TrendingUp, CheckSquare, BarChart3, ArrowRight, CheckCircle, Star, Award } from 'lucide-react';
import DemoForm from '../components/DemoForm';

const painPoints = [
  {
    title: '运营不规范',
    desc: '缺乏标准化流程，各员工执行方式不一，客户体验参差不齐',
    solution: '标准化SOP流程，统一运营规范，提升客户体验'
  },
  {
    title: '执行不到位',
    desc: '人工执行容易遗漏，关键节点跟进不及时，转化率低',
    solution: '自动化执行引擎，定时触发任务，执行率100%'
  },
  {
    title: '效果难追踪',
    desc: '运营动作与结果无法关联，难以评估效果，无法优化',
    solution: '全流程数据追踪，效果可视化，持续优化迭代'
  },
  {
    title: '人员流动大',
    desc: '优秀员工离职带走经验，新人培训成本高，团队不稳定',
    solution: '知识沉淀系统，经验可复制，降低培训成本'
  }
];

const solutions = [
  {
    icon: ClipboardList,
    title: '标准化流程',
    desc: '将优秀运营经验沉淀为标准SOP流程，覆盖客户全生命周期。从获客、激活、转化到复购，每个环节都有标准动作。',
    highlights: ['流程模板', '生命周期', '标准动作', '最佳实践']
  },
  {
    icon: Workflow,
    title: '自动化执行',
    desc: '基于客户标签和行为自动触发运营动作，无需人工干预。支持定时发送、条件触发、智能分流。',
    highlights: ['自动触发', '定时任务', '条件分支', '智能分流']
  },
  {
    icon: BarChart3,
    title: '数据追踪',
    desc: '全流程数据埋点，实时监控SOP执行效果。转化率、响应率、完成率一目了然，数据驱动优化。',
    highlights: ['数据埋点', '实时监控', '转化分析', '效果评估']
  },
  {
    icon: Award,
    title: '知识沉淀',
    desc: '将优秀SOP沉淀为企业资产，支持版本管理、权限控制。新人快速上手，经验持续积累。',
    highlights: ['SOP库', '版本管理', '权限控制', '经验传承']
  }
];

const cases = [
  {
    company: '新东方教育',
    result: '标准化SOP覆盖50万+学员，SOP执行率从60%提升至98%，客户转化率提升150%，运营效率提升3倍',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&q=80'
  },
  {
    company: '招商银行',
    result: '理财客户运营SOP标准化，客户满意度提升40%，投诉率下降60%，单客户理财配置效率提升2倍',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80'
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "有机云营销SOP私域运营方案",
  "description": "营销SOP私域运营解决方案，提供标准化流程、自动化执行、数据追踪、知识沉淀",
  "brand": { "@type": "Brand", "name": "有机云" },
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "CNY" }
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://www.fenyai.com/" },
    { "@type": "ListItem", "position": 2, "name": "解决方案", "item": "https://www.fenyai.com/solutions" },
    { "@type": "ListItem", "position": 3, "name": "营销SOP", "item": "https://www.fenyai.com/solutions/sop" }
  ]
};

export default function SolutionsSOP() {

  return (
    <>
      <Helmet>
        <title>有机云营销SOP_私域运营自动化运营流程_标准化客户管理</title>
        <meta name="description" content="有机云营销SOP私域运营方案，提供标准化流程、自动化执行、数据追踪、知识沉淀，让私域运营有章可循，执行效率提升10倍。免费试用→" />
        <meta name="keywords" content="营销SOP,私域运营SOP,自动化运营,标准化流程,运营SOP工具" />
        <link rel="canonical" href="https://www.fenyai.com/solutions/sop" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      <main className="bg-sky-50">
        <section className="relative overflow-hidden min-h-[80vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-900/10 via-sky-50 to-cyan-900/10"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 text-sm font-semibold mb-6">
                  <ClipboardList className="w-4 h-4 mr-2" />
                  运营标准化方案
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sky-900 leading-tight mb-6">
                  营销SOP
                  <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">私域运营</span>
                  方案
                </h1>
                <p className="text-lg sm:text-xl text-sky-700/80 mb-8 leading-relaxed max-w-xl">
                  让私域运营有章可循，标准化流程+自动化执行，运营效率提升10倍，客户转化率提升150%
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/trial" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-sky-500/25">
                    获取方案<ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link to="/scrm" className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-700 font-semibold rounded-xl hover:bg-sky-50 transition-all duration-300 border border-sky-200">
                    了解产品
                  </Link>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-sky-500/10 border border-sky-200/50">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&fm=webp" alt="营销SOP私域运营" className="w-full" fetchPriority="high" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white" aria-label="行业痛点">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">私域运营四大痛点</h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">有机云营销SOP方案，针对性解决私域运营标准化难题</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {painPoints.map((point, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-sky-50 rounded-2xl p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-red-500 font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-sky-900 mb-2">{point.title}</h3>
                      <p className="text-sky-700/70 text-sm mb-3">{point.desc}</p>
                      <div className="flex items-center text-green-600 text-sm">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        <span>{point.solution}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24" aria-label="解决方案">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">营销SOP四大解决方案</h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">覆盖流程、执行、追踪、沉淀全链路，一站式解决私域运营标准化需求</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-sky-100">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center mb-6">
                    <solution.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-sky-900 mb-3">{solution.title}</h3>
                  <p className="text-sky-700/70 leading-relaxed mb-4">{solution.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.highlights.map((highlight, i) => (
                      <span key={i} className="px-3 py-1 bg-sky-50 text-sky-600 text-xs rounded-full">{highlight}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white" aria-label="客户案例">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">客户成功案例</h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">头部企业的SOP运营实战经验</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {cases.map((caseItem, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-sky-50 rounded-2xl overflow-hidden">
                  <img src={caseItem.image} alt={caseItem.company} className="w-full h-48 object-cover" loading="lazy" decoding="async" />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-sky-900 mb-2">{caseItem.company}</h3>
                    <p className="text-sky-700/70 text-sm">{caseItem.result}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 白皮书下载 */}
        <section className="py-24 bg-white" aria-label="白皮书下载">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-sky-900 mb-4">获取专属私域运营方案</h2>
                <p className="text-sky-700/70 max-w-xl mx-auto">添加企业微信，资深顾问 1 对 1 为您定制私域增长方案</p>
              </div>
              <DemoForm />
          </div>
        </section>

        <section className="py-24 bg-gradient-to-r from-sky-500 to-cyan-500" aria-label="立即行动">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">获取营销SOP私域运营专属方案</h2>
              <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">免费试用3天，专业顾问1对1指导，助您搭建标准化私域运营体系</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/trial" className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl hover:bg-sky-50 transition-all duration-300">
                  立即咨询<ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/solutions" className="inline-flex items-center justify-center px-8 py-4 bg-sky-400/30 text-white font-semibold rounded-xl hover:bg-sky-400/40 transition-all duration-300 border border-white/30">
                  更多方案
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        <RelatedArticlesByKeyword keyword="营销SOP" keywords={['SOP', '营销自动化', '客户SOP', '私域运营']} title="延伸阅读：营销SOP 私域运营" />
      </main>
    </>
  );
}


