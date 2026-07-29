import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import RelatedArticlesByKeyword from '../components/RelatedArticlesByKeyword';
import { Helmet } from 'react-helmet-async';
import { Archive, Shield, Search, AlertTriangle, FileText, BarChart3, ArrowRight, CheckCircle, Star, Award } from 'lucide-react';
import DemoForm from '../components/DemoForm';

const painPoints = [
  {
    title: '合规风险',
    desc: '企业微信聊天记录未存档，面临监管合规风险',
    solution: '会话存档系统，满足金融监管合规要求'
  },
  {
    title: '服务质量难监控',
    desc: '无法了解员工与客户的沟通质量，服务问题难发现',
    solution: '智能质检系统，自动分析服务质量'
  },
  {
    title: '客户纠纷难处理',
    desc: '发生纠纷时无法追溯聊天记录，责任难界定',
    solution: '完整会话存档，快速追溯纠纷原因'
  },
  {
    title: '数据安全隐患',
    desc: '敏感信息泄露风险高，数据安全难保障',
    solution: '数据加密+权限管控，保障数据安全'
  }
];

const solutions = [
  {
    icon: Archive,
    title: '合规存档',
    desc: '企业微信会话内容实时存档，支持文字、图片、语音、视频等多种消息类型。满足金融、医疗等行业的合规监管要求。',
    highlights: ['实时存档', '多消息类型', '合规监管', '快速检索']
  },
  {
    icon: Search,
    title: '智能质检',
    desc: '基于AI的智能质检系统，自动分析员工与客户的沟通内容，识别服务质量问题，提升客户满意度。',
    highlights: ['AI质检', '自动分析', '质量评分', '问题识别']
  },
  {
    icon: AlertTriangle,
    title: '风险预警',
    desc: '实时监控敏感词、违规行为，自动触发风险预警。支持自定义风险规则，帮助企业及时防范风险。',
    highlights: ['敏感词监控', '违规检测', '实时预警', '自定义规则']
  },
  {
    icon: Shield,
    title: '数据安全',
    desc: '企业级数据加密存储，细粒度权限管控，操作日志审计。确保会话数据安全，防止信息泄露。',
    highlights: ['数据加密', '权限管控', '操作审计', '安全合规']
  }
];

const cases = [
  {
    company: '平安保险',
    result: '会话存档覆盖率100%，合规检查通过率提升90%，客户投诉处理效率提升3倍，满足金融监管要求',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80'
  },
  {
    company: '好大夫在线',
    result: '医患沟通记录完整存档，纠纷处理时间缩短70%，患者满意度提升40%，医疗纠纷率下降50%',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80'
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "有机云会话存档私域运营方案",
  "description": "会话存档私域运营解决方案，提供合规存档、智能质检、风险预警、数据安全",
  "brand": { "@type": "Brand", "name": "有机云" },
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "CNY" }
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://www.fenyai.com/" },
    { "@type": "ListItem", "position": 2, "name": "解决方案", "item": "https://www.fenyai.com/solutions" },
    { "@type": "ListItem", "position": 3, "name": "会话存档", "item": "https://www.fenyai.com/solutions/archive" }
  ]
};

export default function SolutionsArchive() {

  return (
    <>
      <Helmet>
        <title>有机云会话存档_企业微信会话存档解决方案_合规·质检·安全</title>
        <meta name="description" content="有机云会话存档私域运营方案，企业微信会话存档解决方案，提供合规存档、智能质检、风险预警、数据安全，满足金融医疗教育行业合规要求。免费试用→" />
        <meta name="keywords" content="会话存档,企业微信存档,合规存档,智能质检,风险预警,数据安全" />
        <link rel="canonical" href="https://www.fenyai.com/solutions/archive" />
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
                  <Archive className="w-4 h-4 mr-2" />
                  合规安全专属方案
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sky-900 leading-tight mb-6">
                  会话存档
                  <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">私域运营</span>
                  方案
                </h1>
                <p className="text-lg sm:text-xl text-sky-700/80 mb-8 leading-relaxed max-w-xl">
                  企业微信会话存档解决方案，提供合规存档、智能质检、风险预警、数据安全，满足金融医疗教育行业合规要求
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
                  <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80&fm=webp" alt="会话存档私域运营" className="w-full" fetchPriority="high" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white" aria-label="行业痛点">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">会话存档私域运营四大痛点</h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">有机云会话存档私域运营方案，针对性解决企业合规与安全难题</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">会话存档私域运营四大解决方案</h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">覆盖存档、质检、预警、安全全链路，一站式解决企业合规需求</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">会话存档客户成功案例</h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">头部企业的会话存档实战经验</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">获取会话存档私域运营专属方案</h2>
              <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">免费试用3天，专业顾问1对1指导，助您搭建合规安全的会话存档体系</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/trial" className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl hover:bg-sky-50 transition-all duration-300">
                  立即咨询<ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/solutions/finance" className="inline-flex items-center justify-center px-8 py-4 bg-sky-400/30 text-white font-semibold rounded-xl hover:bg-sky-400/40 transition-all duration-300 border border-white/30">
                  了解金融方案
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        <RelatedArticlesByKeyword keyword="会话存档" keywords={['会话存档', '存档', '合规', '会话']} title="延伸阅读：企业微信会话存档" />
      </main>
    </>
  );
}


