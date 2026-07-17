import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter, Check, QrCode, Share2, TrendingUp, Users, Target } from 'lucide-react';
import { injectJSONLD } from '../utils/jsonld';
import ProductCrossLinks from '../components/ProductCrossLinks';

const features = [
  { icon: QrCode, title: '活码拓客', desc: '动态活码，智能分配，渠道追踪' },
  { icon: Target, title: '渠道追踪', desc: '每个渠道独立统计，精准ROI分析' },
  { icon: Share2, title: '裂变引流', desc: '老客带新客，病毒式增长' },
  { icon: TrendingUp, title: '广告接入', desc: '朋友圈、抖音、小红书全渠道' },
  { icon: Users, title: '自动分配', desc: '按员工承接能力智能分配' },
  { icon: Filter, title: '链接追踪', desc: '短链接追踪，数据一目了然' },
];

const scenarios = [
  { title: '线下门店', desc: '海报、台卡、包裹卡引流到店', result: '日均引流1000+' },
  { title: '线上广告', desc: '朋友圈广告、抖音投放引流', result: '获客成本降低70%' },
  { title: '直播带货', desc: '直播间挂载活码，实时引流', result: '单场引流1万+' },
];

const pricing = [
  { name: '专业版', price: '1980', unit: '元/坐席/年', features: ['活码创建', '基础统计', '5个渠道', '裂变任务', '无限渠道', 'API接口', '高级分析'] },
  { name: '旗舰版', price: '2980', unit: '元/坐席/年', features: ['全部企业版功能', '专属客户经理', '优先技术支持', '定制化培训', 'SLA保障'], popular: true },
  { name: '企业版', price: '定制', unit: '按需报价', features: ['全部专业功能', '私有化部署', '定制开发', '专属客服'] },
];

export default function ProductYinliu() {
  useEffect(() => {
    injectJSONLD({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: '引流宝 - 有机云',
      description: '多渠道引流拓客工具，支持活码拓客、渠道追踪、裂变引流、广告接入',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, iOS, Android',
      offers: { '@type': 'Offer', price: '1980', priceCurrency: 'CNY' },
      featureList: '活码拓客, 渠道追踪, 裂变引流, 广告接入, 自动分配, 链接追踪',
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
    }, 'product-yinliu');
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 to-cyan-50">
      <Helmet>
        <title>有机云引流宝_多渠道引流拓客神器</title>
        <meta name="description" content="引流宝是有机云SCRM引流工具，支持活码拓客、渠道追踪、裂变引流、广告接入，日均引流100万+，助力企业快速沉淀私域流量。" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0C4A6E] via-[#0EA5E9] to-[#38BDF8] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
              <Filter className="w-4 h-4 mr-2" />
              引流拓客神器
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">引流宝</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              多渠道引流拓客神器，支持活码、广告、裂变等多种引流方式
            </p>
            <Link to="/trial" className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl hover:bg-sky-50 transition-all shadow-lg">
              免费试用<ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 产品截图 */}
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
                  <div className="text-sm font-semibold text-sky-900 mb-4">活码管理</div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="aspect-square bg-sky-100 rounded-lg flex items-center justify-center">
                      <QrCode className="w-8 h-8 text-sky-500" />
                    </div>
                    <div className="aspect-square bg-emerald-100 rounded-lg flex items-center justify-center">
                      <QrCode className="w-8 h-8 text-emerald-500" />
                    </div>
                    <div className="aspect-square bg-amber-100 rounded-lg flex items-center justify-center">
                      <QrCode className="w-8 h-8 text-amber-500" />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-sm font-semibold text-sky-900 mb-4">渠道数据</div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">朋友圈广告</span>
                      <span className="text-sm font-semibold text-sky-600">12,580</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-sky-500 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">抖音投放</span>
                      <span className="text-sm font-semibold text-emerald-600">8,320</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full" style={{width: '50%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心功能 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sky-900 mb-4">核心功能</h2>
            <p className="text-sky-600">全渠道引流，数据可追踪</p>
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

      {/* 使用场景 */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sky-900 mb-4">使用场景</h2>
            <p className="text-sky-600">覆盖线上线下全渠道</p>
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
        <ProductCrossLinks currentProduct="yinliu" title="更多有机云产品" maxCount={4} />
      </div>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-sky-500 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">立即开启引流增长</h2>
          <Link to="/trial" className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl hover:bg-sky-50 transition-all shadow-lg">免费试用<ArrowRight className="ml-2 w-5 h-5" /></Link>
        </div>
      </section>
    </main>
  );
}
