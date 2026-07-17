import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Code, Shield, Server, ArrowRight, CheckCircle, Zap, Lock, Globe, Database,
  MessageSquare, Users, Tags, BarChart3, FileText, Download, Wifi, Send,
  Bot, Building2, Smartphone, ChevronDown, ChevronUp, Copy, ExternalLink
} from 'lucide-react';

// ==================== 数据定义 ====================

const apiProducts = [
  {
    id: 'scrm',
    icon: Building2,
    title: '企微 SCRM API',
    subtitle: '企业微信客户管理接口',
    desc: '基于企业微信官方能力，提供客户管理、消息发送、朋友圈、会话存档、数据统计等 30+ 接口，助力企业构建私域运营系统。',
    protocol: 'HTTP REST',
    auth: 'OAuth2.0 / AppKey',
    color: 'from-blue-500 to-sky-500',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    categories: [
      { name: '授权认证', count: 2, apis: ['获取 access_token', '刷新 access_token'] },
      { name: '客户管理', count: 6, apis: ['获取客户列表', '获取客户详情', '客户标签管理', '客户跟进记录', '客户群列表', '客户群详情'] },
      { name: '消息发送', count: 4, apis: ['发送单聊消息', '发送群聊消息', '群发消息', '欢迎语配置'] },
      { name: '朋友圈', count: 3, apis: ['获取朋友圈列表', '发布朋友圈', '朋友圈互动数据'] },
      { name: '会话存档', count: 3, apis: ['获取聊天记录', '消息内容解析', '敏感词监控'] },
      { name: '员工管理', count: 4, apis: ['获取员工列表', '员工详情', '部门信息', '员工活码'] },
      { name: '数据统计', count: 5, apis: ['客户数据', '消息数据', '群数据', '员工绩效', '渠道分析'] },
    ]
  },
  {
    id: 'robot',
    icon: Bot,
    title: '微信机器人 API',
    subtitle: '个人微信自动化接口',
    desc: '提供 HTTP + WebSocket 双协议支持，实现机器人管理、好友/群管理、标签体系、消息群发、实时消息推送与发送等能力。',
    protocol: 'HTTP + WebSocket',
    auth: 'AccessKey / Token',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    textColor: 'text-green-600',
    categories: [
      { name: '认证授权', count: 1, apis: ['登录授权 /robotapi/client/auth'] },
      { name: '机器人管理', count: 2, apis: ['获取机器人列表 /robotapi/robot/list', '机器人配置 /robotapi/robot/config/get'] },
      { name: '联系人管理', count: 3, apis: ['好友列表查询 /robotapi/friend/list', '群列表查询 /robotapi/group/list', '群成员列表 /robotapi/group/members'] },
      { name: '标签体系', count: 6, apis: ['新增标签', '打标签', '标签列表查询', '机器人标签查询', '按标签搜索', '删除标签'] },
      { name: '消息能力', count: 2, apis: ['消息群发 /robotapi/msg/batch/send', '好友验证回复配置'] },
      { name: 'WebSocket 实时通信', count: 7, apis: ['建立连接', '心跳包', '消息订阅', '联系人变更推送', '文本消息推送', '文本/图片消息发送', '退出群聊'] },
    ]
  },
  {
    id: 'channel',
    icon: Send,
    title: '消息通道 API',
    subtitle: '企微消息下发服务',
    desc: '高可用企业微信消息下发通道，支持单发/群发/定时发送，99.9% SLA 保障，日均处理百万级消息。',
    protocol: 'HTTP REST',
    auth: 'API Key',
    color: 'from-purple-500 to-indigo-500',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600',
    categories: [
      { name: '消息发送', count: 4, apis: ['发送文本消息', '发送图片消息', '发送链接消息', '发送小程序卡片'] },
      { name: '批量操作', count: 3, apis: ['批量群发', '定时发送', '发送状态查询'] },
      { name: '模板管理', count: 3, apis: ['创建消息模板', '模板列表', '模板变量替换'] },
    ]
  }
];

const codeExamples = {
  scrm: {
    language: 'JavaScript',
    code: `// 获取企微客户列表
const response = await fetch(
  'https://api.fenyai.com/scrm/api/customers',
  {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
      'Content-Type': 'application/json'
    },
    params: { page: 1, limit: 50 }
  }
);

const { data } = await response.json();
console.log(data.customers);`
  },
  robot: {
    language: 'JavaScript',
    code: `// WebSocket 连接微信机器人
const ws = new WebSocket(
  'wss://www.yjiyun.com/chat?name=YOUR_KEY&token=YOUR_TOKEN'
);

// 监听实时消息
ws.onmessage = (event) => {
  const msg = JSON.parse(event.data);
  if (msg.type === 'chat.message') {
    console.log('收到消息:', msg.content);
    // 自动回复
    ws.send(JSON.stringify({
      type: 'robot.text.send',
      robotKey: msg.robotKey,
      friends: [msg.senderWxid],
      content: '您好，已收到您的消息',
      messageId: Date.now().toString(),
      token: 'YOUR_TOKEN'
    }));
  }
};`
  },
  channel: {
    language: 'JavaScript',
    code: `// 通过消息通道发送企微消息
const response = await fetch(
  'https://api.fenyai.com/channel/v1/messages/send',
  {
    method: 'POST',
    headers: {
      'X-API-Key': 'YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      to: 'user_wxid',
      msg_type: 'text',
      content: { text: '您好，这是一条测试消息' }
    })
  }
);

const result = await response.json();
console.log(result.message_id);`
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "有机云开放平台",
  "description": "提供企微SCRM API、微信机器人API、消息通道API三大开放能力，支持HTTP REST和WebSocket双协议，助力企业快速集成私域运营能力",
  "brand": { "@type": "Brand", "name": "有机云" },
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "CNY" }
};

// ==================== 子组件 ====================

function CodeBlock({ code, language }: { code: string; language: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-xl overflow-hidden bg-slate-900 border border-slate-700">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
        <span className="text-xs text-slate-400 font-mono">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center space-x-1 text-xs text-slate-400 hover:text-white transition-colors"
        >
          {copied ? <CheckCircle className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? '已复制' : '复制'}</span>
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono text-slate-300 leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function APICategoryCard({ category, textColor }: { category: typeof apiProducts[0]['categories'][0]; textColor: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
      >
        <div className="flex items-center space-x-3">
          <span className={`font-semibold text-sm ${textColor}`}>{category.name}</span>
          <span className="text-xs text-slate-500 bg-white px-2 py-0.5 rounded-full border">{category.count} 个接口</span>
        </div>
        {expanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="px-4 py-3 space-y-2 bg-white">
              {category.apis.map((api, i) => (
                <li key={i} className="flex items-center text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-3 flex-shrink-0"></span>
                  <code className="font-mono text-xs">{api}</code>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ==================== 主组件 ====================

export default function OpenPlatform() {
  const [activeProduct, setActiveProduct] = useState<string>('scrm');
  const activeData = apiProducts.find(p => p.id === activeProduct)!;

  return (
    <>
      <Helmet>
        <title>有机云开放平台_企微SCRM API_微信机器人API_消息通道API</title>
        <meta name="description" content="有机云开放平台提供企微SCRM API、微信机器人API、消息通道API三大开放能力。支持HTTP REST和WebSocket双协议，30+接口覆盖客户管理、消息发送、实时通信等场景。" />
        <meta name="keywords" content="开放平台,企微API,微信机器人API,消息通道API,SCRM API,WebSocket,私域API,企业微信接口" />
        <link rel="canonical" href="https://www.fenyai.com/open-platform" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main className="bg-slate-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(56,189,248,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(16,185,129,0.3) 0%, transparent 50%)' }}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-500/20 border border-sky-500/30 text-sky-300 text-sm font-medium mb-6">
                  <Code className="w-4 h-4 mr-2" />
                  开发者中心 v2.0
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  有机云
                  <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">开放平台</span>
                </h1>

                <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                  三大 API 体系，覆盖企微 SCRM、微信机器人、消息通道全场景。
                  <br className="hidden sm:block" />
                  HTTP REST + WebSocket 双协议，助力企业快速集成私域运营能力。
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-sky-500/25"
                  >
                    申请接入
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    to="/open-platform/docs"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 backdrop-blur-sm"
                  >
                    <FileText className="mr-2 w-5 h-5" />
                    查看完整 API 文档
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              {[
                { value: '30+', label: 'API 接口' },
                { value: '3', label: 'API 体系' },
                { value: '99.9%', label: 'SLA 保障' },
                { value: '2', label: '通信协议' },
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Three API Products */}
        <section className="py-20" aria-label="API产品体系">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">三大 API 产品体系</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                根据业务场景选择合适的 API 体系，快速构建私域运营能力
              </p>
            </motion.div>

            {/* Product Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {apiProducts.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setActiveProduct(product.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeProduct === product.id
                      ? `bg-gradient-to-r ${product.color} text-white shadow-lg`
                      : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                  }`}
                >
                  <product.icon className="w-5 h-5" />
                  <span>{product.title}</span>
                </button>
              ))}
            </div>

            {/* Active Product Detail */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-2 gap-8"
              >
                {/* Left: Info & Categories */}
                <div className="space-y-6">
                  <div className={`rounded-2xl p-8 ${activeData.bgColor} border border-slate-100`}>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${activeData.color} flex items-center justify-center`}>
                        <activeData.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">{activeData.title}</h3>
                        <p className="text-sm text-slate-500">{activeData.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-slate-700 leading-relaxed mb-6">{activeData.desc}</p>
                    <div className="flex flex-wrap gap-3">
                      <span className={`px-3 py-1.5 rounded-lg text-xs font-medium ${activeData.bgColor} ${activeData.textColor} border border-current/20`}>
                        {activeData.protocol}
                      </span>
                      <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 text-slate-600">
                        认证: {activeData.auth}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">接口分类</h4>
                    {activeData.categories.map((cat, i) => (
                      <APICategoryCard key={i} category={cat} textColor={activeData.textColor} />
                    ))}
                  </div>
                </div>

                {/* Right: Code Example */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">快速开始</h4>
                    <CodeBlock
                      code={codeExamples[activeProduct as keyof typeof codeExamples].code}
                      language={codeExamples[activeProduct as keyof typeof codeExamples].language}
                    />
                  </div>

                  {/* Quick Links */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-4">相关资源</h4>
                    <div className="space-y-3">
                      <Link
                        to="/open-platform/docs"
                        className="flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-sky-50 transition-colors group"
                      >
                        <div className="flex items-center space-x-3">
                          <FileText className="w-5 h-5 text-slate-400 group-hover:text-sky-500" />
                          <span className="text-sm font-medium text-slate-700 group-hover:text-sky-700">完整 API 参考文档</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-sky-500" />
                      </Link>
                      <Link
                        to="/open-platform/message-api"
                        className="flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-sky-50 transition-colors group"
                      >
                        <div className="flex items-center space-x-3">
                          <Send className="w-5 h-5 text-slate-400 group-hover:text-sky-500" />
                          <span className="text-sm font-medium text-slate-700 group-hover:text-sky-700">消息通道 API 详解</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-sky-500" />
                      </Link>
                      <Link
                        to="/solutions/ai-agent-integration"
                        className="flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-sky-50 transition-colors group"
                      >
                        <div className="flex items-center space-x-3">
                          <Bot className="w-5 h-5 text-slate-400 group-hover:text-sky-500" />
                          <span className="text-sm font-medium text-slate-700 group-hover:text-sky-700">AI Agent 集成方案</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-sky-500" />
                      </Link>
                    </div>
                  </div>

                  {/* WebSocket Highlight for Robot API */}
                  {activeProduct === 'robot' && (
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                      <div className="flex items-center space-x-3 mb-3">
                        <Wifi className="w-6 h-6 text-green-600" />
                        <h4 className="font-bold text-green-900">WebSocket 实时通信</h4>
                      </div>
                      <p className="text-sm text-green-800/80 mb-4">
                        微信机器人 API 支持 WebSocket 长连接，实现消息实时推送、联系人变更通知等能力。建议客户端具备断开重连机制（推荐间隔 10 秒），心跳间隔 30 秒。
                      </p>
                      <div className="bg-slate-900 rounded-lg p-3">
                        <code className="text-xs text-green-300 font-mono">
                          wss://www.yjiyun.com/chat?name={'{accessKey}'}&token={'{token}'}
                        </code>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Platform Capabilities */}
        <section className="py-20 bg-white" aria-label="平台能力">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">平台核心能力</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                企业级开放平台，安全、稳定、高性能
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: '安全保障', desc: 'HTTPS 加密传输，Token 签名验证，IP 白名单，完善的权限管理体系', color: 'from-blue-500 to-sky-500' },
                { icon: Zap, title: '高性能', desc: '99.9% SLA 保障，日均处理百万级请求，毫秒级响应延迟', color: 'from-amber-500 to-orange-500' },
                { icon: Globe, title: '多协议支持', desc: 'HTTP REST + WebSocket 双协议，满足不同场景的通信需求', color: 'from-green-500 to-emerald-500' },
                { icon: Server, title: '私有化部署', desc: '支持私有化部署方案，数据完全自主可控，满足合规要求', color: 'from-purple-500 to-indigo-500' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Process */}
        <section className="py-20 bg-slate-50" aria-label="接入流程">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">接入流程</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                简单四步，快速接入有机云开放平台
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: '申请接入', desc: '提交企业信息，说明业务场景，申请开放平台权限', icon: FileText },
                { step: '02', title: '获取凭证', desc: '审核通过后获取 AccessKey / AppSecret，配置安全策略', icon: Lock },
                { step: '03', title: '开发对接', desc: '参照 API 文档和代码示例进行系统对接，技术支持全程协助', icon: Code },
                { step: '04', title: '上线运营', desc: '完成联调测试后正式上线，享受持续的技术支持和版本更新', icon: CheckCircle },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative text-center"
                >
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-sky-200 to-sky-100 -z-0"></div>
                  )}
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-sky-500/20">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div className="text-xs font-bold text-sky-500 mb-1">{item.step}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-sky-600 to-cyan-600" aria-label="立即行动">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                开始接入有机云开放平台
              </h2>
              <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">
                专业团队 1 对 1 技术支持，助您快速完成系统对接
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl hover:bg-sky-50 transition-all duration-300 shadow-lg"
                >
                  申请接入
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/open-platform/docs"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  查看 API 文档
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
