import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Code, Zap, Shield, Server, ArrowRight, CheckCircle, Copy, Check,
  MessageSquare, Image, FileText, CreditCard, Bot, Cpu, Gauge,
  Rocket, Key, Webhook, Send, FileCheck, ChevronDown
} from 'lucide-react';
import DemoForm from '../components/DemoForm';
import { SITE } from '../config/site';

// 代码示例 - 多语言
const codeExamples = [
  {
    lang: 'curl',
    label: 'cURL',
    code: `curl -X POST https://api.fenyai.com/v1/messages/send \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "user_id_or_external_userid",
    "msgtype": "text",
    "text": { "content": "Hello from 有机云消息通道!" }
  }'`
  },
  {
    lang: 'python',
    label: 'Python',
    code: `import requests

resp = requests.post(
    "https://api.fenyai.com/v1/messages/send",
    headers={"Authorization": "Bearer YOUR_API_KEY"},
    json={
        "to": "user_id_or_external_userid",
        "msgtype": "text",
        "text": {"content": "Hello from 有机云消息通道!"}
    }
)
print(resp.json())`
  },
  {
    lang: 'node',
    label: 'Node.js',
    code: `import { Youjiyun } from '@youjiyun/sdk';

const client = new Youjiyun({ apiKey: 'YOUR_API_KEY' });

await client.messages.send({
  to: 'user_id_or_external_userid',
  msgtype: 'text',
  text: { content: 'Hello from 有机云消息通道!' }
});`
  },
  {
    lang: 'java',
    label: 'Java',
    code: `YoujiyunClient client = new YoujiyunClient("YOUR_API_KEY");

client.messages().send(Message.builder()
    .to("user_id_or_external_userid")
    .msgtype("text")
    .text(Text.builder().content("Hello!").build())
    .build());`
  },
];

// 消息类型
const messageTypes = [
  { icon: MessageSquare, name: '文本消息', desc: '纯文本、带@提及、表情' },
  { icon: Image, name: '图片消息', desc: 'JPG/PNG/GIF，支持高清' },
  { icon: CreditCard, name: '卡片消息', desc: '图文卡片、交互式卡片' },
  { icon: FileText, name: '文件消息', desc: 'PDF/Word/Excel 等文档' },
  { icon: Send, name: '小程序卡片', desc: '企微小程序消息推送' },
  { icon: Cpu, name: '语音消息', desc: '语音条、语音通知' },
];

// 性能数据
const performanceStats = [
  { value: '10万+', label: '每秒并发', icon: Zap },
  { value: '99.9%', label: '送达率', icon: CheckCircle },
  { value: '<100ms', label: '平均延迟', icon: Gauge },
  { value: '7x24', label: 'SLA 保障', icon: Shield },
];

// 接入流程
const onboardingSteps = [
  { icon: Rocket, title: '注册账号', desc: '5 分钟完成企业认证' },
  { icon: Key, title: '获取 API Key', desc: '控制台一键生成密钥' },
  { icon: Webhook, title: '配置 Webhook', desc: '设置消息回调地址' },
  { icon: Send, title: '发送消息', desc: '调用接口即可发送' },
  { icon: FileCheck, title: '正式上线', desc: '生产环境稳定运行' },
];

// AI Agent 框架集成
const aiIntegrations = [
  { name: 'Dify', desc: '开源 LLM 应用开发平台', status: '已支持' },
  { name: 'Coze', desc: '字节跳动 AI Bot 平台', status: '已支持' },
  { name: '百度千帆', desc: '百度大模型平台', status: '已支持' },
  { name: '阿里百炼', desc: '阿里云大模型平台', status: '已支持' },
  { name: 'LangChain', desc: 'LLM 应用框架', status: '已支持' },
  { name: '自定义 Agent', desc: '任意 HTTP 调用方', status: '已支持' },
];

// 定价方案
const pricingPlans = [
  {
    name: '开发版',
    price: '免费',
    unit: '',
    desc: '适合开发调试与功能验证',
    features: ['基础消息类型', '社区支持', 'API 文档', '沙箱环境'],
    cta: '立即开始',
    link: '/trial',
    highlight: false,
  },
  {
    name: '生产版',
    price: '按需定制',
    unit: '',
    desc: '适合中小团队生产使用',
    features: ['全消息类型', '99.9% SLA', '工单支持', 'Webhook 回调', '弹性扩容'],
    cta: '获取报价',
    link: '/contact',
    highlight: true,
  },
  {
    name: '企业版',
    price: '专属方案',
    unit: '',
    desc: '适合大规模企业与私有化部署',
    features: ['不限量', '私有化部署', '专属 SLA', '专属技术支持', '定制开发'],
    cta: '联系销售',
    link: '/contact',
    highlight: false,
  },
];

// FAQ
const faqs = [
  { q: '消息通道 API 的安全性如何保障？', a: '采用 HTTPS 加密传输，API Key 鉴权，支持 IP 白名单。通过 ISO27001 信息安全管理体系认证，数据传输与存储全程加密，符合金融行业合规要求。' },
  { q: '并发能力如何？能否扩容？', a: '消息通道支持万级并发，99.9% 送达率，延迟低于 100ms。系统支持弹性扩容，可应对突发流量高峰，保障业务稳定运行。' },
  { q: '支持哪些消息类型？', a: '支持文本、图片、图文卡片、文件、小程序卡片、语音等企微原生消息类型，覆盖 99% 的业务场景需求。' },
  { q: '如何保证消息送达率？', a: '采用多机房容灾部署，消息队列持久化，失败自动重试 3 次。99.9% SLA 保障，未送达消息可申请补偿。' },
  { q: '是否支持私有化部署？', a: '支持私有化部署，消息通道可部署在企业自有服务器或私有云，数据完全归企业所有，满足金融、政务等行业的合规要求。' },
];

function CodeBlock() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
      <div className="flex items-center justify-between bg-slate-800 px-4 py-2.5 border-b border-slate-700">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-400"></span>
          <span className="w-3 h-3 rounded-full bg-amber-400"></span>
          <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
        </div>
        <div className="flex gap-1 overflow-x-auto">
          {codeExamples.map((ex, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-3 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                activeTab === i ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {ex.label}
            </button>
          ))}
        </div>
        <button
          onClick={handleCopy}
          className="text-slate-400 hover:text-white transition-colors"
          title="复制代码"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <pre className="p-4 sm:p-6 overflow-x-auto text-sm text-slate-300 leading-relaxed">
        <code>{codeExamples[activeTab].code}</code>
      </pre>
    </div>
  );
}

export default function MessageChannel() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <Helmet>
        <title>有机云消息通道API_企微消息发送底层_3行代码接入AI Agent</title>
        <meta name="description" content="有机云消息通道API——企业微信消息发送底层基础设施。3行代码为AI Agent接入企微消息能力，万级并发，99.9%送达率，支持Dify/Coze/百度千帆/阿里百炼集成。" />
        <meta name="keywords" content="消息通道API,企微消息发送,企业微信API,AI Agent接入,消息推送接口,企微消息通道" />
        <link rel="canonical" href="https://www.fenyai.com/message-channel" />
        <meta property="og:title" content="消息通道API_企微消息发送底层" />
        <meta property="og:description" content="3行代码为AI Agent接入企微消息能力，万级并发，99.9%送达率" />
        <meta property="og:url" content="https://www.fenyai.com/message-channel" />
      </Helmet>
      <main className="bg-white pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden py-20 sm:py-28" aria-label="消息通道API">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-indigo-50"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 text-sm font-semibold mb-6">
                  <Code className="w-4 h-4 mr-2" />
                  消息通道基础设施 · 面向开发者
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                  你的 AI 智能体 +<br />
                  <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                    有机云消息通道
                  </span>
                  <br />
                  = 完整的智能运营方案
                </h1>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                  全国最好的企业微信消息发送底层。3 行代码完成对接，万级并发，99.9% 送达率，&lt;100ms 延迟。与 Dify/Coze/百度千帆/阿里百炼无缝集成。
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/trial"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:-translate-y-0.5 group"
                  >
                    免费获取 API Key
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/open-platform/docs"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-700 font-semibold rounded-xl hover:bg-purple-50 transition-all duration-300 border border-purple-200 hover:border-purple-300"
                  >
                    查看 API 文档
                  </Link>
                </div>

              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <CodeBlock />
                <p className="text-center text-sm text-slate-500 mt-4">
                  💡 3 行代码完成对接，无需自建消息底层
                </p>

                {/* 企微二维码 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-6 bg-white rounded-2xl p-5 shadow-xl shadow-purple-500/10 border border-purple-200/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 border border-emerald-200/50 overflow-hidden">
                      <img
                        src={SITE.wechatQr}
                        alt="有机云顾问企微二维码"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <span className="inline-block px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-bold rounded mb-1">有机云顾问</span>
                      <p className="text-slate-800 font-semibold text-sm">扫码加我，免费领《API接入指南》</p>
                      <p className="text-slate-500 text-xs mt-1">技术专家1对1答疑，快速完成接口对接</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 性能数据 */}
        <section className="py-16 bg-gradient-to-r from-purple-500 to-indigo-500" aria-label="性能数据">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {performanceStats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center text-white"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-white/80" />
                  <div className="text-3xl sm:text-4xl font-bold mb-1">{stat.value}</div>
                  <div className="text-purple-100 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 消息类型 */}
        <section className="py-24" aria-label="支持的消息类型">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                支持全量企微消息类型
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                覆盖 99% 业务场景，一种接口发送所有类型消息
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {messageTypes.map((type, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl hover:bg-purple-50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mb-3">
                    <type.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">{type.name}</h3>
                  <p className="text-xs text-slate-500">{type.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 接入流程 */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-purple-50" aria-label="接入流程">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                5 步接入，最快当天上线
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                从注册到上线，全程自助，无需技术对接
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {onboardingSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mb-4">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-xs font-bold text-purple-500 mb-1">步骤 {i + 1}</div>
                    <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-xs text-slate-500">{step.desc}</p>
                  </div>
                  {i < onboardingSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-purple-200"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Agent 集成 */}
        <section className="py-24" aria-label="AI Agent 框架集成">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-4">
                <Bot className="w-4 h-4" />
                主流 AI Agent 框架
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                与主流 AI Agent 框架无缝集成
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                无论你用哪个平台构建 AI 智能体，都能通过有机云消息通道触达企微客户
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {aiIntegrations.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center justify-between p-5 bg-white rounded-xl border border-slate-100 hover:border-purple-200 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">{item.name}</h3>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                    {item.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 定价 */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-purple-50" aria-label="定价方案">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                灵活方案，按需选择
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                从开发调试到生产部署，再到私有化定制，总有一款适合你
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {pricingPlans.map((plan, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative rounded-2xl p-8 border-2 transition-all ${
                    plan.highlight
                      ? 'border-purple-500 bg-white shadow-xl shadow-purple-500/10 scale-105'
                      : 'border-slate-200 bg-white hover:shadow-lg'
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs font-bold rounded-full">
                      推荐
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-sm text-slate-500 mb-4">{plan.desc}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-500 ml-1">{plan.unit}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-center text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={plan.link}
                    className={`inline-flex items-center justify-center w-full px-6 py-3 font-semibold rounded-xl transition-all duration-300 ${
                      plan.highlight
                        ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600 shadow-lg shadow-purple-500/25'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24" aria-label="常见问题">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">常见问题</h2>
              <p className="text-lg text-slate-600">关于消息通道 API 的疑问，这里都有答案</p>
            </motion.div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-slate-50 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-100 transition-colors"
                  >
                    <span className="font-semibold text-slate-900 pr-4">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      className="px-5 pb-5 text-slate-600 leading-relaxed text-sm"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 底部 CTA + 表单 */}
        <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-indigo-50" aria-label="立即接入">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                  现在就接入有机云消息通道
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  已有 AI 智能体？3 行代码完成对接。还在选型？我们的技术顾问帮你评估最佳接入方案。
                </p>
                <div className="space-y-3">
                  {['免费体验，零成本验证接入', '99.9% SLA 送达率保障', '支持私有化部署与弹性扩容'].map((item, i) => (
                    <div key={i} className="flex items-center text-slate-700">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <DemoForm
                  title="预约技术对接"
                  subtitle="技术顾问 10 分钟内联系您，协助 API 接入"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
