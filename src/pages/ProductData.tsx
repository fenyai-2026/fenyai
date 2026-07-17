import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, Check, PieChart, Users, TrendingUp, Bell, Shield } from 'lucide-react';
import { injectJSONLD } from '../utils/jsonld';
import ProductCrossLinks from '../components/ProductCrossLinks';

const features = [
  { icon: Database, title: '数据整合', desc: '多源数据统一接入，形成完整数据资产' },
  { icon: Users, title: '用户画像', desc: '360度客户画像，精准洞察用户需求' },
  { icon: TrendingUp, title: '行为分析', desc: '深度分析用户行为路径和转化漏斗' },
  { icon: PieChart, title: '转化漏斗', desc: '全链路转化分析，定位流失节点' },
  { icon: TrendingUp, title: 'ROI分析', desc: '精准计算投入产出比，优化投放策略' },
  { icon: Bell, title: '智能预警', desc: '关键指标异常自动预警，及时响应' },
];

const scenarios = [
  { title: '运营决策', desc: '数据驱动运营策略制定，提升决策效率', result: '决策效率提升3倍' },
  { title: '精准营销', desc: '基于用户画像的精准营销，提升转化', result: '转化率提升200%' },
  { title: '风险预警', desc: '客户流失预警，及时挽回高价值客户', result: '流失率降低50%' },
];

const pricing = [
  { name: '专业版', price: '1980', unit: '元/坐席/年', features: ['数据整合', '基础报表', '用户画像', '行为分析', '转化漏斗', 'ROI分析'] },
  { name: '旗舰版', price: '2980', unit: '元/坐席/年', features: ['全部专业版功能', '专属客户经理', '优先技术支持', '定制化培训', 'SLA保障'], popular: true },
  { name: '企业版', price: '定制', unit: '按需报价', features: ['全部旗舰版功能', '私有化部署', '定制开发', '专属客服'] },
];

export default function ProductData() {
  useEffect(() => {
    injectJSONLD({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: '私域数据中台 - 有机云',
      description: '统一数据管理分析平台，提供数据整合、用户画像、行为分析、转化漏斗、ROI分析',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, iOS, Android',
      offers: { '@type': 'Offer', price: '1980', priceCurrency: 'CNY' },
      featureList: '数据整合, 用户画像, 行为分析, 转化漏斗, ROI分析, 智能预警',
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
    }, 'product-data');
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 to-cyan-50">
      <Helmet>
        <title>有机云私域数据中台_统一数据管理分析平台</title>
        <meta name="description" content="私域数据中台是有机云SCRM数据产品，提供数据整合、用户画像、行为分析、转化漏斗、ROI分析，数据准确率99.9%，深度洞察私域运营数据。" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0C4A6E] via-[#0EA5E9] to-[#38BDF8] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
              <Database className="w-4 h-4 mr-2" />
              数据驱动
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">私域数据中台</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">统一数据管理分析平台，深度洞察私域运营数据</p>
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
                  <div className="text-sm font-semibold text-sky-900 mb-4">数据概览</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-sky-50 rounded-lg text-center">
                      <div className="text-xl font-bold text-sky-600">50万+</div>
                      <div className="text-xs text-slate-500">私域客户</div>
                    </div>
                    <div className="p-3 bg-emerald-50 rounded-lg text-center">
                      <div className="text-xl font-bold text-emerald-600">15%</div>
                      <div className="text-xs text-slate-500">转化率</div>
                    </div>
                    <div className="p-3 bg-amber-50 rounded-lg text-center">
                      <div className="text-xl font-bold text-amber-600">¥128</div>
                      <div className="text-xs text-slate-500">客单价</div>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg text-center">
                      <div className="text-xl font-bold text-purple-600">3.2</div>
                      <div className="text-xs text-slate-500">复购次数</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-sm font-semibold text-sky-900 mb-4">转化漏斗</div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-500 w-12">访问</span>
                      <div className="flex-1 bg-slate-100 rounded-full h-4">
                        <div className="bg-sky-500 h-4 rounded-full" style={{width: '100%'}}></div>
                      </div>
                      <span className="text-xs font-medium w-12 text-right">100%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-500 w-12">加微</span>
                      <div className="flex-1 bg-slate-100 rounded-full h-4">
                        <div className="bg-sky-400 h-4 rounded-full" style={{width: '45%'}}></div>
                      </div>
                      <span className="text-xs font-medium w-12 text-right">45%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-500 w-12">成交</span>
                      <div className="flex-1 bg-slate-100 rounded-full h-4">
                        <div className="bg-sky-300 h-4 rounded-full" style={{width: '15%'}}></div>
                      </div>
                      <span className="text-xs font-medium w-12 text-right">15%</span>
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
        <ProductCrossLinks currentProduct="data" title="更多有机云产品" maxCount={4} />
      </div>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-sky-500 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">立即体验数据中台</h2>
          <Link to="/trial" className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl hover:bg-sky-50 transition-all shadow-lg">免费试用<ArrowRight className="ml-2 w-5 h-5" /></Link>
        </div>
      </section>
    </main>
  );
}
