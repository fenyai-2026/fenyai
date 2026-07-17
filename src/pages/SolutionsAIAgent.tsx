import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Bot,
  MessageSquare,
  Users,
  TrendingUp,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Cpu,
  Network,
  Target,
  BarChart3
} from 'lucide-react';
import SEOHelmet from '../components/SEOHelmet';
import { injectJSONLD } from '../utils/jsonld';
import ProductCrossLinks from '../components/ProductCrossLinks';

export default function SolutionsAIAgent() {
  useEffect(() => {
    // 注入 Service 结构化数据
    injectJSONLD({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'AI Agent 私域运营完整方案',
      description: 'AI 智能体 + 有机云消息通道，让 AI Agent 真正触达私域用户',
      provider: {
        '@type': 'Organization',
        name: '有机云',
        url: 'https://www.fenyai.com',
      },
      areaServed: 'CN',
      serviceType: 'AI 私域运营解决方案',
    }, 'ai-agent-solution');
  }, []);

  const painPoints = [
    { title: 'AI Agent 无法主动触达', desc: '您的 AI 智能体只能被动回复，无法主动向客户发送消息' },
    { title: '缺乏企微消息能力', desc: 'AI Agent 没有企业微信消息发送接口，无法与私域客户互动' },
    { title: '人工客服成本高', desc: '大量重复性咨询仍需人工处理，运营效率低下' },
    { title: '客户响应不及时', desc: '非工作时间客户咨询无人回复，流失率高' },
  ];

  const scenarios = [
    {
      icon: MessageSquare,
      title: 'AI 客服自动跟进',
      desc: 'AI Agent 处理完常见咨询后，自动推送跟进消息，提升客户满意度',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Target,
      title: 'AI 销售助手',
      desc: '识别意向客户后，自动发送产品资料、报价单，加速转化',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Users,
      title: 'AI 运营助手',
      desc: '定时批量触达私域客户，发送活动通知、优惠信息',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: TrendingUp,
      title: 'AI 数据分析',
      desc: '分析客户行为数据，自动生成个性化营销内容并推送',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const benefits = [
    { value: '80%', label: '常见咨询由 AI 处理' },
    { value: '70%', label: '人工客服量下降' },
    { value: '24/7', label: '全天候客户服务' },
    { value: '3x', label: '客户响应速度提升' },
  ];

  return (
    <>
      <SEOHelmet
        title="有机云AI Agent私域运营方案_AI智能体+企微消息通道"
        description="AI Agent 私域运营完整方案：AI 智能体 + 有机云消息通道，让您的 AI Agent 真正触达私域用户。支持 AI 客服、AI 销售、AI 运营等场景，助力企业降本增效。"
        keywords="AI Agent私域,AI智能体,企微消息通道,AI客服,AI销售助手,私域运营"
      />

      <main className="bg-slate-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
                  <Bot className="w-4 h-4 mr-2" />
                  AI + 私域运营新范式
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  AI Agent
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">私域运营</span>
                  <br />
                  完整解决方案
                </h1>
                
                <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
                  您的 AI 智能体负责思考和决策，有机云负责消息触达。
                  <span className="text-white font-semibold">AI Agent + 有机云消息通道</span>，
                  补齐私域运营的最后一块拼图，让 AI 真正触达每一位客户。
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/trial"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 group"
                  >
                    免费试用
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/open-platform/message-api"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/30 hover:-translate-y-0.5 backdrop-blur-sm"
                  >
                    查看消息通道 API
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                {/* Architecture Diagram */}
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <div className="space-y-6">
                    <div className="flex items-center justify-center">
                      <div className="bg-purple-500/20 rounded-xl p-4 border border-purple-500/30">
                        <Cpu className="w-8 h-8 text-purple-300" />
                        <span className="block text-center text-white text-sm mt-2">您的 AI Agent</span>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <ArrowRight className="w-6 h-6 text-white/50 rotate-90" />
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="bg-blue-500/20 rounded-xl p-4 border border-blue-500/30">
                        <Network className="w-8 h-8 text-blue-300" />
                        <span className="block text-center text-white text-sm mt-2">有机云消息通道</span>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <ArrowRight className="w-6 h-6 text-white/50 rotate-90" />
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="bg-green-500/20 rounded-xl p-3 border border-green-500/30">
                        <MessageSquare className="w-6 h-6 text-green-300" />
                        <span className="block text-center text-white text-xs mt-1">企业微信</span>
                      </div>
                      <div className="bg-green-500/20 rounded-xl p-3 border border-green-500/30">
                        <Users className="w-6 h-6 text-green-300" />
                        <span className="block text-center text-white text-xs mt-1">终端用户</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">您是否遇到这些问题？</h2>
              <p className="text-lg text-slate-600">AI Agent 很强大，但缺少触达用户的「最后一公里」</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start p-6 rounded-xl bg-slate-50 border border-slate-100"
                >
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-red-600 font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">{point.title}</h3>
                    <p className="text-slate-600 text-sm">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Scenarios */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">适用场景</h2>
              <p className="text-lg text-slate-600">AI Agent + 有机云消息通道，覆盖私域运营全场景</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {scenarios.map((scenario, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-6 rounded-2xl bg-white hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 border border-slate-100"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${scenario.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <scenario.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{scenario.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{scenario.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">客户案例效果</h2>
              <p className="text-lg text-purple-100">某保险公司接入 AI Agent + 有机云后的实际效果</p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <div className="text-4xl font-bold text-white mb-2">{benefit.value}</div>
                  <div className="text-purple-100 text-sm">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">接入流程</h2>
              <p className="text-lg text-slate-600">3 步完成 AI Agent 与有机云的对接</p>
            </motion.div>

            <div className="space-y-8">
              {[
                { step: '01', title: '注册有机云账号', desc: '在有机云官网注册账号，获取 API 密钥' },
                { step: '02', title: '配置 AI Agent', desc: '在您的 AI Agent 中集成有机云 SDK 或调用 RESTful API' },
                { step: '03', title: '开始发送消息', desc: 'AI Agent 通过有机云向企微客户发送消息，实时追踪送达状态' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg mr-6 flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 相关产品推荐 */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProductCrossLinks title="支持 AI Agent 私域运营的有机云产品" maxCount={4} />
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                让您的 AI Agent 真正触达用户
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                AI 智能体 + 有机云消息通道，补齐私域运营的最后一块拼图
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/trial"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 hover:-translate-y-0.5"
                >
                  立即开始
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-all duration-300 border border-slate-200 hover:border-slate-300 hover:-translate-y-0.5"
                >
                  联系销售
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
