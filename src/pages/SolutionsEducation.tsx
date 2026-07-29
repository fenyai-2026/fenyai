import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BookOpen, GraduationCap, Users, TrendingUp, Target, Clock, Award, BarChart3, ArrowRight, CheckCircle, Star } from 'lucide-react';
import DemoForm from '../components/DemoForm';
import { injectJSONLD } from '../utils/jsonld';
import { Breadcrumb } from '../components/Breadcrumb';

const painPoints = [
  {
    title: '获客成本高',
    desc: '在线教育流量成本持续攀升，获客成本高达数百元',
    solution: '企微活码+裂变拓客，获客成本降低70%'
  },
  {
    title: '续费率低',
    desc: '学员完课率低，续费转化困难，客户生命周期短',
    solution: '学员分层运营+自动化跟进，续费率提升150%'
  },
  {
    title: '服务效率低',
    desc: '学员咨询量大，人工回复效率低，服务体验差',
    solution: 'AI智能客服+自动回复，服务效率提升10倍'
  },
  {
    title: '数据孤岛',
    desc: '各平台数据分散，难以形成完整学员画像',
    solution: '统一数据中台，打通全渠道学员数据'
  }
];

const solutions = [
  {
    icon: BookOpen,
    title: '课程引流转化',
    desc: '通过企微活码、渠道活码将公域流量导入私域。支持试听课预约、课程推荐、优惠券发放，实现从引流到转化的闭环。',
    highlights: ['渠道活码', '试听课预约', '智能推荐', '转化追踪']
  },
  {
    icon: Users,
    title: '学员社群运营',
    desc: '建立学员学习社群，通过打卡、作业、答疑等互动提升活跃度。AI智能体自动答疑，降低运营成本。',
    highlights: ['学习社群', '打卡互动', 'AI答疑', '作业管理']
  },
  {
    icon: Target,
    title: '精细化学员管理',
    desc: '基于学员学习进度、课程偏好、消费能力进行分层标签管理。自动化运营SOP实现千人千面的精准触达。',
    highlights: ['学员标签', '学习进度', '分层运营', '自动SOP']
  },
  {
    icon: BarChart3,
    title: '数据驱动决策',
    desc: '全链路数据追踪，从获客、转化、学习到续费的全流程数据分析。实时数据看板助力科学决策。',
    highlights: ['转化漏斗', '学习数据', '续费分析', '实时看板']
  }
];

const cases = [
  {
    company: '新东方教育',
    result: '活码引流+运营SOP+会话聚合，学员转化率提升200%，续费率提升120%，退费率下降42%，1人可管理50个群',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&q=80'
  },
  {
    company: '猿辅导',
    result: 'AI智能体+客户分层+超级群发，月均新增学员15万+，课程转化率提升250%，客户响应时间缩短80%',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80'
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "有机云在线教培私域运营方案",
  "description": "在线教培私域运营解决方案，提供课程引流、社群运营、学员管理、数据分析",
  "brand": { "@type": "Brand", "name": "有机云" },
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "CNY" }
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://www.fenyai.com/" },
    { "@type": "ListItem", "position": 2, "name": "解决方案", "item": "https://www.fenyai.com/solutions" },
    { "@type": "ListItem", "position": 3, "name": "在线教培", "item": "https://www.fenyai.com/solutions/education" }
  ]
};

export default function SolutionsEducation() {
  useEffect(() => {
    injectJSONLD({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: '在线教培私域运营解决方案 - 有机云',
      description: '为教育培训机构提供学员续费、社群管理、退费率降低等私域运营方案',
      provider: { '@type': 'Organization', name: '有机云', url: 'https://www.fenyai.com' },
      areaServed: 'CN',
      serviceType: '在线教培私域运营解决方案',
    }, 'solution-education');
  }, []);


  return (
    <>
      <Helmet>
        <title>有机云在线教培私域运营_教育行业企微SCRM解决方案_课程引流·学员管理</title>
        <meta name="description" content="有机云在线教培私域运营方案，教育行业企微SCRM解决方案，提供课程引流、社群运营、学员管理、数据分析，助力教培机构提升续费率。免费试用→" />
        <meta name="keywords" content="在线教培私域运营,教育SCRM,课程引流,学员管理,教培私域,企微教育" />
        <link rel="canonical" href="https://www.fenyai.com/solutions/education" />
        <meta property="og:title" content="在线教培私域运营_教育行业企微SCRM解决方案" />
        <meta property="og:description" content="有机云在线教培私域运营方案，提供课程引流、社群运营、学员管理、数据分析" />
        <meta property="og:url" content="https://www.fenyai.com/solutions/education" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      <main className="bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Breadcrumb />
        </div>
        <section className="relative overflow-hidden min-h-[80vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-900/10 via-sky-50 to-cyan-900/10"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 text-sm font-semibold mb-6">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  教培行业专属方案
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sky-900 leading-tight mb-6">
                  在线教培
                  <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">私域运营</span>
                  方案
                </h1>
                <p className="text-lg sm:text-xl text-sky-700/80 mb-8 leading-relaxed max-w-xl">
                  专为在线教育机构打造的企微SCRM私域运营解决方案，提供课程引流、社群运营、学员管理、数据分析，助力教培机构提升续费率
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
                  <img src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80" alt="在线教培私域运营" className="w-full" fetchPriority="high" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white" aria-label="行业痛点">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">在线教培私域运营四大痛点</h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">有机云在线教培私域运营方案，针对性解决教育行业私域运营难题</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">在线教培私域运营四大解决方案</h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">覆盖引流、运营、管理、数据全链路，一站式解决在线教培私域运营需求</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">教培行业客户成功案例</h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">头部教培机构的私域运营实战经验</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">获取在线教培私域运营专属方案</h2>
              <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">免费试用3天，专业顾问1对1指导，助您搭建教培私域运营体系</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/trial" className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl hover:bg-sky-50 transition-all duration-300">
                  立即咨询<ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/whitepaper" className="inline-flex items-center justify-center px-8 py-4 bg-sky-400/30 text-white font-semibold rounded-xl hover:bg-sky-400/40 transition-all duration-300 border border-white/30">
                  下载白皮书
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}


