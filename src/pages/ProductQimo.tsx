import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, Check, Users, MessageCircle, BarChart3, Zap, Shield } from 'lucide-react';
import { injectJSONLD } from '../utils/jsonld';
import ProductCrossLinks from '../components/ProductCrossLinks';

const features = [
  { icon: Users, title: '聚合客服', desc: '多企微号消息汇总到一个页面，单人可同时管理多个账号' },
  { icon: MessageCircle, title: '智能回复', desc: 'AI辅助快捷回复，支持关键词自动回复，提升响应速度' },
  { icon: Zap, title: '自动打标签', desc: '基于用户行为自动分层，精准客户画像' },
  { icon: BarChart3, title: '超级群发', desc: '更高频次触达，支持定时发送、A/B测试' },
  { icon: Shield, title: '会话存档', desc: '合规存档聊天记录，敏感词监控预警' },
  { icon: Box, title: '客户管理', desc: '完整的客户生命周期管理，从获客到转化' },
];

const scenarios = [
  { title: '保险行业', desc: '客户咨询量大，需要快速响应和精准分层', result: '响应时间缩短80%' },
  { title: '电商零售', desc: '多店铺多客服，需要统一管理和数据打通', result: '客服效率提升3倍' },
  { title: '教育培训', desc: '学员咨询周期长，需要持续跟进和转化', result: '转化率提升200%' },
];

const pricing = [
  { name: '专业版', price: '1980', unit: '元/坐席/年', features: ['聚合客服', '智能回复', '自动打标签', '超级群发', '会话存档', '数据分析'] },
  { name: '旗舰版', price: '2980', unit: '元/坐席/年', features: ['全部专业版功能', '专属客户经理', '优先技术支持', '定制化培训', 'SLA保障'], popular: true },
  { name: '企业版', price: '定制', unit: '按需报价', features: ['全部旗舰版功能', '私有化部署', '定制开发', '专属客服', 'API接口'] },
];

export default function ProductQimo() {
  useEffect(() => {
    injectJSONLD({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: '企微魔方 - 有机云',
      description: '企业微信私域运营核心工具，提供聚合客服、智能回复、自动打标签、超级群发等功能',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, iOS, Android',
      offers: { '@type': 'Offer', price: '1980', priceCurrency: 'CNY' },
      featureList: '聚合客服, 智能回复, 自动打标签, 超级群发, 会话存档, 客户管理',
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
    }, 'product-qimo');
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 to-cyan-50">
      <Helmet>
        <title>有机云企微魔方_企业微信私域运营核心工具</title>
        <meta name="description" content="企微魔方是有机云SCRM核心产品，提供聚合客服、智能回复、自动打标签、超级群发等功能，10万+企业使用，助力私域运营效率提升10倍。" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0C4A6E] via-[#0EA5E9] to-[#38BDF8] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
              <Box className="w-4 h-4 mr-2" />
              有机云核心产品
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">企微魔方</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              企业微信私域运营核心工具，一站式解决客户管理、营销触达、数据分析需求
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/trial"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl hover:bg-sky-50 transition-all shadow-lg"
              >
                免费试用
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <span className="text-white/80 text-sm flex items-center justify-center">
                10万+企业正在使用
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 产品截图区 */}
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
                  <div className="text-sm font-semibold text-sky-900 mb-3">聚合客服</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 p-2 bg-sky-50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-sky-200"></div>
                      <div className="flex-1 text-xs text-sky-700">客户咨询消息...</div>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-white rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-emerald-200"></div>
                      <div className="flex-1 text-xs text-slate-600">新客户添加...</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-sm font-semibold text-sky-900 mb-3">客户标签</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-sky-100 text-sky-700 text-xs rounded">高意向</span>
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded">已成交</span>
                    <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded">待跟进</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-sm font-semibold text-sky-900 mb-3">数据报表</div>
                  <div className="h-16 bg-gradient-to-t from-sky-100 to-transparent rounded-lg flex items-end justify-around p-2">
                    <div className="w-4 h-8 bg-sky-400 rounded"></div>
                    <div className="w-4 h-12 bg-sky-500 rounded"></div>
                    <div className="w-4 h-10 bg-sky-400 rounded"></div>
                    <div className="w-4 h-14 bg-sky-600 rounded"></div>
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
            <p className="text-sky-600">企业微信原生功能的10倍增强</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-sky-50 rounded-2xl hover:shadow-lg transition-all"
              >
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
            <p className="text-sky-600">覆盖各行业私域运营需求</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {scenarios.map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-bold text-sky-900 mb-2">{scenario.title}</h3>
                <p className="text-sky-600 text-sm mb-4">{scenario.desc}</p>
                <div className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">
                  {scenario.result}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 价格方案 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sky-900 mb-4">价格方案</h2>
            <p className="text-sky-600">灵活定价，满足不同规模企业需求</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl p-6 ${plan.popular ? 'bg-gradient-to-br from-sky-500 to-cyan-500 text-white shadow-xl' : 'bg-sky-50 text-sky-900'}`}
              >
                <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-sm ml-1">{plan.unit}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <Check className="w-4 h-4 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/trial"
                  className={`block w-full text-center py-3 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? 'bg-white text-sky-600 hover:bg-sky-50'
                      : 'bg-sky-500 text-white hover:bg-sky-600'
                  }`}
                >
                  免费试用
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 相关产品推荐 */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductCrossLinks currentProduct="qimo" title="更多有机云产品" maxCount={4} />
      </div>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-sky-500 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">立即体验企微魔方</h2>
          <p className="text-sky-100 mb-8">3天免费试用，专业顾问1对1指导</p>
          <Link
            to="/trial"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl hover:bg-sky-50 transition-all shadow-lg"
          >
            免费试用
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
