import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Check, MessageCircle, Shield, Zap, BarChart3, Bell } from 'lucide-react';
import { injectJSONLD } from '../utils/jsonld';
import ProductCrossLinks from '../components/ProductCrossLinks';

const features = [
  { icon: Users, title: '自动建群', desc: '群满自动建新群，永不过期' },
  { icon: MessageCircle, title: '口令入群', desc: '关键词触发，自动拉群' },
  { icon: Zap, title: '批量邀请', desc: '一键批量邀请客户入群' },
  { icon: Shield, title: '群防广告', desc: '新成员验证，关键词拦截' },
  { icon: Bell, title: '入群欢迎', desc: '自动发送欢迎语和群规' },
  { icon: BarChart3, title: '群数据统计', desc: '群活跃度、退群率分析' },
];

const scenarios = [
  { title: '社群团购', desc: '快速组建团购群，自动化运营', result: '群活跃度提升200%' },
  { title: '课程班级', desc: '学员分班管理，标准化运营', result: '管理效率提升5倍' },
  { title: '会员社群', desc: 'VIP会员专属群，精细化服务', result: '会员续费率提升80%' },
];

const pricing = [
  { name: '专业版', price: '1980', unit: '元/坐席/年', features: ['全部基础功能', '口令入群', '防广告', '无限群', '高级分析'] },
  { name: '旗舰版', price: '2980', unit: '元/坐席/年', features: ['全部企业版功能', '专属客户经理', '优先技术支持', '定制化培训', 'SLA保障'], popular: true },
  { name: '企业版', price: '定制', unit: '按需报价', features: ['全部专业功能', '私有化部署', '定制开发', '专属客服'] },
];

export default function ProductJinqun() {
  useEffect(() => {
    injectJSONLD({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: '进群宝 - 有机云',
      description: '智能群管理工具，支持自动建群、口令入群、批量邀请、群防广告，管理500万+群',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, iOS, Android',
      offers: { '@type': 'Offer', price: '1980', priceCurrency: 'CNY' },
      featureList: '自动建群, 口令入群, 批量邀请, 群防广告, 入群欢迎, 群数据统计',
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
    }, 'product-jinqun');
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 to-cyan-50">
      <Helmet>
        <title>有机云进群宝_智能群管理工具</title>
        <meta name="description" content="进群宝是有机云SCRM群管理工具，支持自动建群、口令入群、批量邀请、群防广告，管理500万+群，助力企业高效运营社群。" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0C4A6E] via-[#0EA5E9] to-[#38BDF8] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              智能群管
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">进群宝</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">智能群管理工具，自动化建群、拉群、群运营全流程</p>
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
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-sm font-semibold text-sky-900 mb-3">群列表</div>
                  <div className="space-y-2">
                    <div className="p-2 bg-sky-50 rounded-lg text-xs text-sky-700">团购群A (498/500)</div>
                    <div className="p-2 bg-emerald-50 rounded-lg text-xs text-emerald-700">团购群B (312/500)</div>
                    <div className="p-2 bg-amber-50 rounded-lg text-xs text-amber-700">VIP会员群 (156/500)</div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-sm font-semibold text-sky-900 mb-3">群设置</div>
                  <div className="space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2"><Check className="w-3 h-3 text-emerald-500" />入群欢迎</div>
                    <div className="flex items-center gap-2"><Check className="w-3 h-3 text-emerald-500" />防广告</div>
                    <div className="flex items-center gap-2"><Check className="w-3 h-3 text-emerald-500" />自动踢人</div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-sm font-semibold text-sky-900 mb-3">群数据</div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-sky-600">85%</div>
                    <div className="text-xs text-slate-500">活跃度</div>
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
        <ProductCrossLinks currentProduct="jinqun" title="更多有机云产品" maxCount={4} />
      </div>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-sky-500 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">立即体验进群宝</h2>
          <Link to="/trial" className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl hover:bg-sky-50 transition-all shadow-lg">免费试用<ArrowRight className="ml-2 w-5 h-5" /></Link>
        </div>
      </section>
    </main>
  );
}
