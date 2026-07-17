import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { HeartPulse, Shield, Users, TrendingUp, Award, ArrowRight, CheckCircle, BarChart3, Clock, Star } from 'lucide-react';
import DemoForm from '../components/DemoForm';
import { injectJSONLD } from '../utils/jsonld';
import { Breadcrumb } from '../components/Breadcrumb';

const painPoints = [
  {
    title: '患者获客难',
    desc: '传统获客渠道成本高，线上流量难以沉淀为可触达的患者资产',
    solution: '企微活码+内容引流，患者获客成本降低70%'
  },
  {
    title: '复诊留存低',
    desc: '就诊后缺乏持续关怀与随访，患者复诊率与依从性偏低',
    solution: '患者标签+随访SOP，复诊率提升2倍以上'
  },
  {
    title: '合规要求高',
    desc: '医疗行业患者隐私与数据安全要求严格，沟通需可追溯可审计',
    solution: '企业微信官方接口+会话存档，满足医疗合规要求'
  },
  {
    title: '咨询服务慢',
    desc: '健康咨询量大、问题重复度高，人工客服响应慢、人力成本高',
    solution: 'AI智能体+会话聚合，咨询响应效率提升10倍'
  }
];

const solutions = [
  {
    icon: Users,
    title: '企微活码获客',
    desc: '通过企微活码实现线上问诊、线下门诊、健康活动全渠道获客，自动分配专属健康顾问，沉淀可触达患者资产。支持渠道追踪与数据统计。',
    highlights: ['渠道活码', '自动分配', '数据统计', 'ROI分析']
  },
  {
    icon: Shield,
    title: '合规患者管理',
    desc: '基于企业微信官方接口，支持会话存档、敏感词监控、合规管理。满足医疗行业监管要求与患者隐私保护，沟通记录安全可追溯。',
    highlights: ['会话存档', '敏感词监控', '隐私保护', '数据安全']
  },
  {
    icon: TrendingUp,
    title: '精细化健康运营',
    desc: '通过患者标签、人群包、随访SOP实现精细化运营。自动触发复诊提醒、健康关怀与随访动作，提升患者依从性与复诊率。',
    highlights: ['患者标签', '随访SOP', '复诊提醒', '生命周期']
  },
  {
    icon: Award,
    title: 'AI智能健康咨询',
    desc: 'AI智能体7×24小时自动应答常见健康咨询，高意向患者自动转人工。大幅降低客服成本，提升患者咨询体验与满意度。',
    highlights: ['AI智能体', '自动回复', '意向筛选', '智能转接']
  }
];

const cases = [
  {
    company: '某连锁口腔机构',
    result: '3个月沉淀私域患者8万+，复诊率从20%提升到45%（提升125%），获客成本降低70%',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80'
  },
  {
    company: '某互联网医院',
    result: '部署健康顾问SOP+AI咨询，月均新增私域用户20万+，患者满意度提升60%，咨询响应效率提升10倍',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80'
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "有机云医疗健康私域运营方案",
  "description": "医疗机构企业微信私域运营解决方案，提供企微活码获客、合规患者管理、精细化健康运营、AI智能健康咨询",
  "brand": {
    "@type": "Brand",
    "name": "有机云"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "CNY"
  }
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "首页",
      "item": "https://www.fenyai.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "解决方案",
      "item": "https://www.fenyai.com/solutions"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "医疗健康",
      "item": "https://www.fenyai.com/solutions/healthcare"
    }
  ]
};

export default function SolutionsHealthcare() {
  useEffect(() => {
    injectJSONLD({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: '医疗健康私域运营解决方案 - 有机云',
      description: '为医疗机构、连锁诊所、互联网医院提供企微活码获客、合规患者管理、随访SOP、AI健康咨询等私域运营方案',
      provider: { '@type': 'Organization', name: '有机云', url: 'https://www.fenyai.com' },
      areaServed: 'CN',
      serviceType: '医疗健康私域运营解决方案',
    }, 'solution-healthcare');
  }, []);


  return (
    <>
      <Helmet>
        <title>有机云医疗健康私域运营_医疗机构企微SCRM解决方案_活码获客·合规管理·AI咨询</title>
        <meta name="description" content="有机云医疗健康私域运营方案，医疗机构企业微信私域运营解决方案，提供企微活码获客、合规患者管理、精细化健康运营、AI智能健康咨询，助力医疗机构提升复诊率与运营效率。免费试用→" />
        <meta name="keywords" content="医疗私域运营,医疗企业微信,医疗机构SCRM,企微活码,患者管理,医疗合规" />
        <link rel="canonical" href="https://www.fenyai.com/solutions/healthcare" />
        <meta property="og:title" content="医疗健康私域运营_医疗机构企微SCRM解决方案_活码获客·合规管理·AI咨询" />
        <meta property="og:description" content="有机云医疗健康私域运营方案，提供企微活码获客、合规患者管理、精细化健康运营、AI智能健康咨询" />
        <meta property="og:url" content="https://www.fenyai.com/solutions/healthcare" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      <main className="bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Breadcrumb />
        </div>
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[80vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-900/10 via-sky-50 to-cyan-900/10"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 text-sm font-semibold mb-6">
                  <HeartPulse className="w-4 h-4 mr-2" />
                  医疗健康专属方案
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sky-900 leading-tight mb-6">
                  医疗机构企业微信
                  <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">私域运营</span>
                  方案
                </h1>
                <p className="text-lg sm:text-xl text-sky-700/80 mb-8 leading-relaxed max-w-xl">
                  专为医疗机构、连锁诊所、互联网医院打造的企微SCRM私域运营解决方案，提供企微活码获客、合规患者管理、精细化健康运营、AI智能健康咨询，助力医疗机构提升复诊率与运营效率
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/trial"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-sky-500/25"
                  >
                    获取方案
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    to="/scrm"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-700 font-semibold rounded-xl hover:bg-sky-50 transition-all duration-300 border border-sky-200"
                  >
                    了解产品
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-sky-500/10 border border-sky-200/50">
                  <img
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80"
                    alt="医疗健康私域运营"
                    className="w-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-24 bg-white" aria-label="行业痛点">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">
                医疗健康行业私域运营四大痛点
              </h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">
                有机云医疗健康私域运营方案，针对性解决医疗机构私域运营难题
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-sky-50 rounded-2xl p-8"
                >
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

        {/* Solutions Section */}
        <section className="py-24" aria-label="解决方案">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">
                医疗健康私域运营四大解决方案
              </h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">
                覆盖获客、管理、运营、服务全链路，一站式解决医疗机构私域运营需求
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-sky-100"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center mb-6">
                    <solution.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-sky-900 mb-3">{solution.title}</h3>
                  <p className="text-sky-700/70 leading-relaxed mb-4">{solution.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.highlights.map((highlight, i) => (
                      <span key={i} className="px-3 py-1 bg-sky-50 text-sky-600 text-xs rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cases Section */}
        <section className="py-24 bg-white" aria-label="客户案例">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">
                医疗健康行业客户成功案例
              </h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">
                头部医疗机构的私域运营实战经验
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {cases.map((caseItem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-sky-50 rounded-2xl overflow-hidden"
                >
                  <img src={caseItem.image} alt={caseItem.company} className="w-full h-48 object-cover" />
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
        <section className="py-16 bg-white" aria-label="获取方案">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-sky-900 mb-4">获取专属私域运营方案</h2>
                <p className="text-sky-700/70 max-w-xl mx-auto">添加企业微信，资深顾问 1 对 1 为您定制医疗健康私域增长方案</p>
              </div>
              <DemoForm />
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
                获取医疗健康私域运营专属方案
              </h2>
              <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">
                免费试用3天，专业顾问1对1指导，助您搭建医疗机构私域运营体系
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
                  to="/solutions/archive"
                  className="inline-flex items-center justify-center px-8 py-4 bg-sky-400/30 text-white font-semibold rounded-xl hover:bg-sky-400/40 transition-all duration-300 border border-white/30"
                >
                  了解会话存档
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
