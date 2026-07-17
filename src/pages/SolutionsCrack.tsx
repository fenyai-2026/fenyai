import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Share2, Gift, Users, TrendingUp, Target, BarChart3, ArrowRight, CheckCircle, Star, Award } from 'lucide-react';
import DemoForm from '../components/DemoForm';

const painPoints = [
  {
    title: '裂变难',
    desc: '传统裂变方式效果差，用户分享意愿低',
    solution: '多样化裂变玩法，分享率提升300%'
  },
  {
    title: '参与度低',
    desc: '活动参与人数少，传播范围有限',
    solution: '游戏化裂变机制，参与率提升200%'
  },
  {
    title: '奖励发放慢',
    desc: '人工审核发放效率低，用户体验差',
    solution: '自动化奖励发放，秒级到账'
  },
  {
    title: '效果难评估',
    desc: '裂变数据分散，难以追踪转化效果',
    solution: '全链路数据追踪，ROI清晰可见'
  }
];

const solutions = [
  {
    icon: Share2,
    title: '任务裂变',
    desc: '设置分享任务，用户完成任务即可获得奖励。支持多级裂变，让每个用户都成为传播节点。',
    highlights: ['多级裂变', '任务追踪', '自动奖励', '病毒传播']
  },
  {
    icon: Gift,
    title: '红包裂变',
    desc: '红包裂变玩法，用户分享红包给好友，双方均可获得奖励。刺激用户主动分享传播。',
    highlights: ['红包裂变', '双向奖励', '实时到账', '裂变追踪']
  },
  {
    icon: Users,
    title: '拼团裂变',
    desc: '拼团裂变模式，用户邀请好友拼团享受优惠。利用社交关系快速裂变获客。',
    highlights: ['拼团玩法', '社交裂变', '优惠激励', '成团提醒']
  },
  {
    icon: TrendingUp,
    title: '分销裂变',
    desc: '分销裂变体系，用户成为分销员，分享商品赚取佣金。构建裂变分销网络。',
    highlights: ['分销体系', '佣金激励', '层级管理', '收益追踪']
  }
];

const cases = [
  {
    company: '云集微店',
    result: '任务裂变+红包裂变，1个月裂变获客10万+，获客成本降低60%，ROI提升400%，单场活动新增4万+好友',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80'
  },
  {
    company: '完美日记',
    result: '拼团裂变+分销裂变，活动期间GMV增长500%，新客获取成本降低70%，复购率提升180%',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80'
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "有机云裂变任务私域运营方案",
  "description": "裂变任务私域运营解决方案，提供任务裂变、红包裂变、拼团裂变、分销裂变",
  "brand": { "@type": "Brand", "name": "有机云" },
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "CNY" }
};

export default function SolutionsCrack() {

  return (
    <>
      <Helmet>
        <title>有机云裂变任务私域运营_企微裂变解决方案_任务·红包·拼团·分销</title>
        <meta name="description" content="有机云裂变任务私域运营方案，提供任务裂变、红包裂变、拼团裂变、分销裂变四大玩法，助力企业低成本获客。免费试用→" />
        <link rel="canonical" href="https://www.fenyai.com/solutions/crack" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main className="bg-sky-50">
        <section className="relative overflow-hidden min-h-[80vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-900/10 via-sky-50 to-cyan-900/10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 text-sm font-semibold mb-6">
                  <Target className="w-4 h-4 mr-2" />
                  裂变增长专属方案
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sky-900 leading-tight mb-6">
                  裂变任务<span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">私域运营</span>方案
                </h1>
                <p className="text-lg sm:text-xl text-sky-700/80 mb-8 leading-relaxed max-w-xl">
                  多样化裂变玩法，任务裂变、红包裂变、拼团裂变、分销裂变，让每个用户都成为传播节点，实现低成本爆发式增长
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
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="裂变任务私域运营" className="w-full" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white" aria-label="行业痛点">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">裂变任务私域运营四大痛点</h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">有机云裂变任务私域运营方案，针对性解决裂变增长难题</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">裂变任务私域运营四大解决方案</h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">多样化裂变玩法，让每个用户都成为传播节点</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">裂变增长客户成功案例</h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">头部企业的裂变增长实战经验</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {cases.map((caseItem, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-sky-50 rounded-2xl overflow-hidden">
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">获取裂变任务私域运营专属方案</h2>
              <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">免费试用3天，专业顾问1对1指导，助您搭建裂变增长体系</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/trial" className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl hover:bg-sky-50 transition-all duration-300">
                  立即咨询<ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}


