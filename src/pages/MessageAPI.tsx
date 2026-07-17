import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  Activity, 
  Code, 
  Server, 
  CheckCircle, 
  ArrowRight, 
  MessageSquare,
  Users,
  Clock,
  RefreshCw,
  FileText,
  ChevronRight
} from 'lucide-react';
import SEOHelmet from '../components/SEOHelmet';
import { injectJSONLD } from '../utils/jsonld';

export default function MessageAPI() {
  useEffect(() => {
    // 注入 Product 结构化数据
    injectJSONLD({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: '有机云企微消息通道 API',
      description: '全国领先的企业微信消息发送底层能力，支持文本/图片/卡片/小程序，99.9% 送达率，万级/秒并发',
      brand: { '@type': 'Brand', name: '有机云' },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'CNY',
        availability: 'https://schema.org/InStock',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '500',
      },
    }, 'message-api-product');
  }, []);

  const features = [
    {
      icon: MessageSquare,
      title: '全消息类型支持',
      desc: '文本、图片、语音、视频、文件、图文、小程序卡片、位置等全类型消息',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Zap,
      title: '万级并发能力',
      desc: '支持万级/秒消息发送，弹性扩容，应对突发流量无压力',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Activity,
      title: '送达率实时监控',
      desc: '实时追踪每条消息的送达状态，失败自动重试，确保 99.9% 送达率',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Shield,
      title: '官方接口 100% 兼容',
      desc: '完全遵循企业微信官方 API 规范，无缝对接现有系统，零改造成本',
      color: 'from-purple-500 to-indigo-500',
    },
  ];

  const integrations = [
    { name: 'Dify', desc: 'AI 应用开发平台', icon: '🤖' },
    { name: 'Coze', desc: '字节跳动 AI Bot 平台', icon: '🧠' },
    { name: '自研 Agent', desc: 'RESTful API 直接对接', icon: '⚙️' },
    { name: 'LangChain', desc: 'LLM 应用框架', icon: '🔗' },
  ];

  return (
    <>
      <SEOHelmet
        title="有机云消息通道API_让 AI Agent 真正触达用户"
        description="有机云提供全国领先的企业微信消息发送底层能力，支持文本/图片/卡片/小程序，99.9% 送达率，万级/秒并发。3 行代码完成接入，让您的 AI Agent 真正触达用户。"
        keywords="企微消息API,企业微信消息通道,AI Agent消息,私域消息发送,企微API接口"
      />

      <main className="bg-slate-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                  企业微信官方合作伙伴
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  企业微信
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">消息通道 API</span>
                  <br />
                  让 AI Agent 真正触达用户
                </h1>
                
                <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
                  有机云提供全国领先的企业微信消息发送底层能力，支持文本/图片/卡片/小程序，
                  <span className="text-white font-semibold">99.9% 送达率</span>，
                  <span className="text-white font-semibold">万级/秒并发</span>。
                  3 行代码完成接入，让您的 AI Agent 真正触达用户。
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/trial"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 group"
                  >
                    免费试用
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="#api-docs"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/30 hover:-translate-y-0.5 backdrop-blur-sm"
                  >
                    查看 API 文档
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-slate-800/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700 shadow-2xl">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-slate-400 text-sm ml-2">API Request</span>
                  </div>
                  <pre className="text-sm text-slate-300 overflow-x-auto">
                    <code>{`curl -X POST https://api.fenyai.com/v1/message/send \\
  -H "Authorization: Bearer $TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "touser": "openid",
    "msgtype": "text",
    "text": {
      "content": "Hello from AI Agent!"
    }
  }'`}</code>
                  </pre>
                  <div className="mt-4 pt-4 border-t border-slate-700 flex items-center justify-between">
                    <span className="text-green-400 text-sm flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      200 OK • 12ms
                    </span>
                    <span className="text-slate-500 text-xs">Response Time</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">核心能力</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                专为 AI Agent 设计的企业级消息通道，稳定、高效、易用
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-6 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Guide */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                  与主流 AI Agent 框架
                  <span className="text-blue-600">无缝对接</span>
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  无论您使用 Dify、Coze 还是自研 Agent，都可以通过简单的 API 调用
                  接入有机云消息通道，让您的 AI 智能体具备企微消息发送能力。
                </p>
                
                <div className="space-y-4">
                  {integrations.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center p-4 rounded-xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
                    >
                      <span className="text-2xl mr-4">{item.icon}</span>
                      <div>
                        <h4 className="font-semibold text-slate-900">{item.name}</h4>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-400 ml-auto" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900 rounded-2xl p-6 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-slate-400 text-sm">Python SDK 示例</span>
                  <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">python</span>
                </div>
                <pre className="text-sm text-slate-300 overflow-x-auto">
                  <code>{`from fenyai import MessageClient

client = MessageClient(api_key="your_api_key")

# 发送文本消息
response = client.send_message(
    touser="openid",
    msgtype="text",
    content="Hello from AI Agent!"
)

print(f"Message sent: {response.msg_id}")`}</code>
                </pre>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SLA & Stability */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">SLA 与稳定性保障</h2>
              <p className="text-lg text-slate-600">企业级服务标准，为您的业务保驾护航</p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { value: '99.9%', label: '系统可用性', icon: Server },
                { value: '<50ms', label: '平均响应时间', icon: Clock },
                { value: '100%', label: '送达回执', icon: CheckCircle },
                { value: '自动', label: '失败重试机制', icon: RefreshCw },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-slate-50"
                >
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Testimonial */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Users className="w-12 h-12 text-white/80 mx-auto mb-6" />
              <blockquote className="text-2xl sm:text-3xl text-white font-medium leading-relaxed mb-6">
                "通过有机云消息通道 API，我们的 AI Agent 每天稳定发送 50 万条消息，
                送达率 99.7%，0 封号记录"
              </blockquote>
              <cite className="text-blue-100 not-italic">— 某头部 AI 客服厂商技术负责人</cite>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">常见问题</h2>
            </motion.div>

            <div className="space-y-4">
              {[
                { q: '会触发企业微信风控吗？', a: '有机云严格遵守企业微信官方 API 规范，在官方允许的频率和规则范围内发送消息。我们提供智能限流和频率控制功能，确保您的消息发送安全合规。' },
                { q: '支持个人微信吗？', a: '目前仅支持企业微信消息发送。企业微信是腾讯官方认可的企业通讯工具，具有更高的安全性和稳定性。' },
                { q: '如何申请 API 密钥？', a: '注册有机云账号后，在控制台「开放平台」页面即可创建 API 密钥。新用户赠送 1000 条免费消息额度，用于测试和体验。' },
                { q: '支持哪些消息类型？', a: '支持文本、图片、语音、视频、文件、图文、小程序卡片、位置等所有企业微信支持的消息类型。' },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-slate-100"
                >
                  <h3 className="font-semibold text-slate-900 mb-2 flex items-start">
                    <span className="text-blue-600 mr-2">Q:</span>
                    {faq.q}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed pl-6">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                准备好让您的 AI Agent 触达用户了吗？
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                立即接入有机云消息通道 API，3 行代码完成对接
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/trial"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
                >
                  立即申请 API 接入
                </Link>
                <a
                  href="#api-docs"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-all duration-300 border border-slate-200 hover:border-slate-300 hover:-translate-y-0.5"
                >
                  查看完整文档
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
