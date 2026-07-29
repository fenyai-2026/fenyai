import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import RelatedArticlesByKeyword from '../components/RelatedArticlesByKeyword';
import { Helmet } from 'react-helmet-async';
import { Phone, Target, Users, Zap, MessageCircle, BarChart3, ArrowRight, CheckCircle, Star, Award } from 'lucide-react';
import DemoForm from '../components/DemoForm';

const painPoints = [
  {
    title: '获客渠道单一',
    desc: '依赖传统渠道获客，成本高且效果差，难以规模化',
    solution: '智能外呼+多渠道拓客，获客效率提升5倍'
  },
  {
    title: '线索转化低',
    desc: '大量线索无法有效跟进，转化率低，资源浪费严重',
    solution: '智能线索评分+自动分配，转化率提升300%'
  },
  {
    title: '跟进效率低',
    desc: '人工跟进效率低，客户响应慢，容易错失商机',
    solution: 'AI智能外呼+自动跟进，跟进效率提升10倍'
  },
  {
    title: '客户管理乱',
    desc: '客户信息分散，难以形成统一画像，无法精准营销',
    solution: '企微SCRM系统，统一客户管理，精准触达'
  }
];

const solutions = [
  {
    icon: Phone,
    title: 'AI智能外呼',
    desc: '基于AI技术的智能外呼系统，自动筛选意向客户，支持话术自定义、通话记录自动保存，大幅提升拓客效率。',
    highlights: ['AI语音识别', '话术自定义', '自动记录', '意向分级']
  },
  {
    icon: Target,
    title: '智能线索管理',
    desc: '多渠道线索自动汇聚，智能评分分级，自动分配给合适销售，确保每条线索都能得到及时跟进。',
    highlights: ['线索汇聚', '智能评分', '自动分配', '跟进提醒']
  },
  {
    icon: Users,
    title: '客户画像构建',
    desc: '整合多维度数据，自动构建客户画像，帮助销售快速了解客户需求，实现精准沟通和转化。',
    highlights: ['多源数据', '自动画像', '需求分析', '精准推荐']
  },
  {
    icon: Zap,
    title: '自动化营销',
    desc: '基于客户行为和标签，自动触发营销动作，实现千人千面的精准营销，提升客户转化率。',
    highlights: ['行为触发', '标签营销', '自动触达', '效果追踪']
  }
];

const cases = [
  {
    company: '平安保险AI外呼',
    result: 'AI智能外呼+线索管理+客户画像，AI外呼日均触达50万+客户，意向客户筛选效率提升10倍，转化率提升300%',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80'
  },
  {
    company: '链家房产',
    result: 'AI外呼+活码引流+客户管理，月均新增意向客户5万+，带看率提升180%，成交转化率提升120%',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80'
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "有机云主动拓客私域运营方案",
  "description": "主动拓客私域运营解决方案，提供AI智能外呼、线索管理、客户画像、自动化营销",
  "brand": { "@type": "Brand", "name": "有机云" },
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "CNY" }
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://www.fenyai.com/" },
    { "@type": "ListItem", "position": 2, "name": "解决方案", "item": "https://www.fenyai.com/solutions" },
    { "@type": "ListItem", "position": 3, "name": "主动拓客", "item": "https://www.fenyai.com/solutions/active-outreach" }
  ]
};

export default function SolutionsActiveOutreach() {

  return (
    <>
      <Helmet>
        <title>有机云主动拓客_私域运营AI智能外呼解决方案_线索管理·客户画像</title>
        <meta name="description" content="有机云主动拓客私域运营方案，AI智能外呼解决方案，提供智能外呼、线索管理、客户画像、自动化营销，助力企业获客效率提升5倍。免费试用→" />
        <meta name="keywords" content="主动拓客,AI外呼,智能外呼,线索管理,客户画像,拓客系统" />
        <link rel="canonical" href="https://www.fenyai.com/solutions/active-outreach" />
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
                  <Target className="w-4 h-4 mr-2" />
                  主动拓客专属方案
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sky-900 leading-tight mb-6">
                  主动拓客
                  <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">私域运营</span>
                  方案
                </h1>
                <p className="text-lg sm:text-xl text-sky-700/80 mb-8 leading-relaxed max-w-xl">
                  AI智能外呼+线索管理+客户画像，打造主动拓客私域运营闭环，获客效率提升5倍，转化率提升300%
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/trial" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-sky-500/25">
                    获取方案<ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link to="/ai-call" className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-700 font-semibold rounded-xl hover:bg-sky-50 transition-all duration-300 border border-sky-200">
                    了解AI外呼
                  </Link>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-sky-500/10 border border-sky-200/50">
                  <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80" alt="主动拓客私域运营" className="w-full" fetchPriority="high" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white" aria-label="行业痛点">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">主动拓客四大痛点</h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">有机云主动拓客方案，针对性解决企业获客难题</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">主动拓客四大解决方案</h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">覆盖获客、跟进、管理、营销全链路</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">主动拓客客户成功案例</h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">头部企业的拓客实战经验</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">获取主动拓客专属方案</h2>
              <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">免费试用3天，专业顾问1对1指导，助您搭建主动拓客体系</p>
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
        <RelatedArticlesByKeyword keyword="主动拓客" keywords={['群发', '超级群发', '主动拓客', '外呼', '拓客']} title="延伸阅读：主动拓客与群发" />
      </main>
    </>
  );
}


