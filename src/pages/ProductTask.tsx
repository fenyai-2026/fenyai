import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList, Check, Gift, Users, TrendingUp, Shield, Zap } from 'lucide-react';
import { injectJSONLD } from '../utils/jsonld';
import ProductCrossLinks from '../components/ProductCrossLinks';

const features = [
  { icon: Gift, title: '任务裂变', desc: '邀请好友完成任务，自动发放奖励' },
  { icon: Users, title: '奖励机制', desc: '支持优惠券、实物、资料包等多种奖励' },
  { icon: TrendingUp, title: '进度追踪', desc: '实时查看任务完成进度和效果' },
  { icon: Zap, title: '自动审核', desc: '系统自动审核，减少人工干预' },
  { icon: Users, title: '多级分销', desc: '支持二级分销，裂变层级更深' },
  { icon: Shield, title: '防刷机制', desc: '多重防刷，确保裂变效果真实' },
];

const scenarios = [
  { title: '新客增长', desc: '老客带新客，快速扩大私域流量池', result: '单场新增4万+好友' },
  { title: '活动推广', desc: '活动裂变传播，提升品牌曝光', result: '曝光量提升500%' },
  { title: '课程分销', desc: '知识付费课程，分销裂变获客', result: '获客成本降低70%' },
];

const pricing = [
  { name: '专业版', price: '1980', unit: '元/坐席/年', features: ['任务创建', '基础奖励', '进度查看', '多级分销', '高级防刷', '无限活动', '数据分析'] },
  { name: '旗舰版', price: '2980', unit: '元/坐席/年', features: ['全部企业版功能', '专属客户经理', '优先技术支持', '定制化培训', 'SLA保障'], popular: true },
  { name: '企业版', price: '定制', unit: '按需报价', features: ['全部旗舰版功能', '私有化部署', '定制开发', '专属客服'] },
];

export default function ProductTask() {
  useEffect(() => {
    injectJSONLD({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: '任务宝 - 有机云',
      description: '裂变任务营销工具，支持任务裂变、奖励机制、多级分销、防刷机制',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, iOS, Android',
      offers: { '@type': 'Offer', price: '1980', priceCurrency: 'CNY' },
      featureList: '任务裂变, 奖励机制, 进度追踪, 自动审核, 多级分销, 防刷机制',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '10000',
        bestRating: '5',
        worstRating: '1'
      },
      publisher: {
        '@type': 'Organization',
        name: '有机云',
        url: 'https://www.fenyai.com'
      }
    }, 'product-task');
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 to-cyan-50">
      <Helmet>
        <title>有机云任务宝_裂变任务营销工具</title>
        <meta name="description" content="任务宝是有机云SCRM裂变工具，支持任务裂变、奖励机制、多级分销、防刷机制，裂变效率提升10倍，助力私域快速增长。" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0C4A6E] via-[#0EA5E9] to-[#38BDF8] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
              <ClipboardList className="w-4 h-4 mr-2" />
              裂变增长
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">任务宝</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">裂变任务营销工具，助力私域快速增长</p>
            <Link to="/trial" className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl hover:bg-sky-50 transition-all shadow-lg">免费试用<ArrowRight className="ml-2 w-5 h-5" /></Link>
          </motion.div>
        </div>
      </section>

      {/* 截图 */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-sky-500 to-cyan-500 p-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-white/30"></div>
                <div className="w-3 h-3 rounded-full bg-white/30"></div>
                <div className="w-3 h-3 rounded-full bg-white/30"></div>
              </div>
            </div>
            <div className="p-8 bg-slate-50">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-sm font-semibold text-sky-900 mb-4">裂变活动</div>
                  <div className="bg-gradient-to-br from-sky-100 to-cyan-100 rounded-xl p-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-sky-900 mb-2">邀请3位好友</div>
                      <div className="text-sm text-sky-600 mb-3">即可获得价值99元优惠券</div>
                      <div className="inline-flex items-center px-4 py-2 bg-sky-500 text-white text-sm rounded-full">立即参与</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-sm font-semibold text-sky-900 mb-4">活动数据</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-sky-50 rounded-lg">
                      <div className="text-xl font-bold text-sky-600">12,580</div>
                      <div className="text-xs text-slate-500">参与人数</div>
                    </div>
                    <div className="text-center p-3 bg-emerald-50 rounded-lg">
                      <div className="text-xl font-bold text-emerald-600">4,320</div>
                      <div className="text-xs text-slate-500">新增好友</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 功能 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sky-900 mb-4">核心功能</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="p-6 bg-sky-50 rounded-2xl hover:shadow-lg transition-all">
                <feature.icon className="w-10 h-10 text-sky-500 mb-4" />
                <h3 className="text-lg font-bold text-sky-900 mb-2">{feature.title}</h3>
                <p className="text-sky-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 场景 */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sky-900 mb-4">使用场景</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {scenarios.map((scenario, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-sky-900 mb-2">{scenario.title}</h3>
                <p className="text-sky-600 text-sm mb-4">{scenario.desc}</p>
                <div className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">{scenario.result}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 价格 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sky-900 mb-4">价格方案</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((plan, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className={`rounded-2xl p-6 ${plan.popular ? 'bg-gradient-to-br from-sky-500 to-cyan-500 text-white shadow-xl' : 'bg-sky-50 text-sky-900'}`}>
                <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-sm ml-1">{plan.unit}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm"><Check className="w-4 h-4 mr-2 flex-shrink-0" />{feature}</li>
                  ))}
                </ul>
                <Link to="/trial" className={`block w-full text-center py-3 rounded-xl font-semibold transition-all ${plan.popular ? 'bg-white text-sky-600 hover:bg-sky-50' : 'bg-sky-500 text-white hover:bg-sky-600'}`}>免费试用</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 相关产品推荐 */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductCrossLinks currentProduct="task" title="更多有机云产品" maxCount={4} />
      </div>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-sky-500 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">立即开启裂变增长</h2>
          <Link to="/trial" className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl hover:bg-sky-50 transition-all shadow-lg">免费试用<ArrowRight className="ml-2 w-5 h-5" /></Link>
        </div>
      </section>
    </main>
  );
}
