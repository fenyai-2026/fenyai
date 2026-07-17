import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHelmet from '../components/SEOHelmet';
import RelatedArticlesByKeyword from '../components/RelatedArticlesByKeyword';
import { requestLLMStream } from '../services/meooAI';
import {
  Bot, Clock, Wallet, BookOpen, RefreshCw, Globe, LayoutDashboard,
  MessageSquare, Brain, Workflow, ClipboardCheck, Smile, BarChart3,
  ShoppingCart, Building2, Users, Headphones, Sparkles, Zap, Shield, ArrowRight,
  TrendingUp, Cpu, LineChart, Send, X, Play, Calendar, QrCode, MessageCircle
} from 'lucide-react';

const advantages = [
  { icon: Clock, title: '全天智能响应', desc: '7×24小时全天候值守，同时承载海量客户咨询，秒级响应' },
  { icon: Wallet, title: '大幅降低运营成本', desc: '一次搭建长期复用，大幅缩减人工客服编制' },
  { icon: BookOpen, title: '专业标准化答复', desc: '依托企业专属知识库精准匹配问答，输出话术统一专业' },
  { icon: RefreshCw, title: '知识库灵活更新', desc: '支持后台实时维护更新知识库内容，AI即时掌握最新信息' },
];

const panoramas = [
  { icon: Globe, title: '全渠道统一接入', desc: '支持官网、小程序、社群等多渠道统一接入' },
  { icon: LayoutDashboard, title: '智能客服SaaS工作台', desc: 'AI与人工协同办公，智能辅助接待' },
  { icon: MessageSquare, title: '全场景业务服务能力', desc: '完整覆盖售前、售中、售后全链路' },
];

const capabilities = [
  { icon: Brain, title: '智能多轮对话流', desc: '强上下文记忆、用户意图精准识别', faq: { q: 'AI智能体的多轮对话和人机对话有什么不同？', a: '传统聊天机器人基于关键词匹配+固定流程，一旦用户的问题偏离预设路线就会"答非所问"。有机云AI智能体基于大模型理解用户意图，支持上下文记忆和追问，即使客户中途切换话题也能准确衔接。同时支持"AI优先+人工兜底"模式——AI无法解决时自动转接人工，且人工接手后AI继续学习优化。' } },
  { icon: BookOpen, title: '企业专属知识库', desc: '私有化专属训练，贴合企业品牌口径', faq: { q: '知识库需要准备多少数据？训练要多久？', a: '最低只需50条FAQ即可启动（约5000字），最佳效果需要200-500条（覆盖80%+客户常见问题）。知识库支持Word/PDF/Excel/网页链接批量导入，首次导入+训练约1-2个工作日。后续新增内容实时更新，无需重新训练。有机云提供行业模板知识库，金融/零售/教育等行业开箱即用。' } },
  { icon: Workflow, title: '业务工作流自动化', desc: '自动完成客户标签分层、工单智能提单', faq: { q: '工作流自动化能实现什么场景？', a: '典型场景包括：① 自动打标签——客户聊到特定话题自动标记（如"对理财感兴趣"）；② 自动发资料——客户问了某产品后自动推送产品手册；③ 自动创建工单——售后类问题自动生成工单并分配给对应部门；④ 自动触发营销——满足特定条件后自动推送优惠券或活动通知。全部无需人工干预。' } },
  { icon: ClipboardCheck, title: '对话智能质检', desc: '自动质检打分、会话内容智能摘要', faq: { q: '智能质检能检测哪些问题？', a: '可自动检测：① 客服回复是否及时（超时预警）；② 话术是否规范（敏感词/违规用语检测）；③ 客户情绪是否被妥善处理；④ 是否遗漏客户关键问题；⑤ 服务流程是否完整。质检结果自动生成报告，帮助管理者快速发现问题并改进。' } },
  { icon: Smile, title: '用户情绪智能洞察', desc: '实时识别客户情绪波动，自动触发预警', faq: { q: 'AI能识别哪些情绪？准确率有多高？', a: '可识别正面（满意、期待、感谢）、中性（询问、确认）、负面（不满、焦虑、愤怒）三大类共9种细分情绪。基于对话上下文综合判断，情绪识别准确率达90%+。当检测到负面情绪时，系统自动触发安抚话术或升级转人工。' } },
  { icon: BarChart3, title: '客户VOC舆情分析', desc: '智能梳理客户反馈，为运营策略提供依据', faq: { q: 'VOC分析能输出什么报告？', a: '自动分析客户咨询和反馈，输出：① 高频问题TOP10（发现产品/服务痛点）；② 客户满意度趋势（追踪服务质量变化）；③ 竞品提及分析（了解客户对比情况）；④ 需求热点分布（指导产品优化方向）。数据每日更新，支持导出详细报告。' } },
];

const templates = [
  { icon: ShoppingCart, title: '电商智能客服模板', desc: '适配零售电商场景，全流程自动承接', demoScript: [
    { role: 'user', content: '这件衣服有M码吗？' },
    { role: 'ai', content: '您好！这款T恤有M码的，目前库存充足。M码适合身高165-170cm，体重55-65kg的体型。需要我为您推荐搭配吗？' },
    { role: 'user', content: '多少钱？有优惠吗？' },
    { role: 'ai', content: '这款T恤原价199元，现在店铺活动满200减30，您还可以领取新客专享券再减20元，到手价仅需149元！今天下单还赠送运费险~' }
  ]},
  { icon: Building2, title: '通用企业服务模板', desc: '适配全行业商务咨询，零配置快速上线', demoScript: [
    { role: 'user', content: '你们公司主要做什么业务？' },
    { role: 'ai', content: '您好！我们是有机云，专注于企业微信私域运营解决方案。核心产品包括：企微SCRM系统、AI智能客服、营销自动化、会话存档等，已服务超过10万家企业客户。' },
    { role: 'user', content: '怎么收费？' },
    { role: 'ai', content: '我们提供灵活的套餐选择：专业版1980元/坐席/年，旗舰版2980元/坐席/年。支持按坐席数订阅，无隐藏费用。现在申请可免费试用3天，我为您安排专属顾问详细介绍？' }
  ]},
  { icon: Users, title: '售前获客智能模板', desc: '聚焦线索获取与需求挖掘，提升转化效率', demoScript: [
    { role: 'user', content: '想了解你们的产品' },
    { role: 'ai', content: '非常感谢您的关注！为了给您推荐最合适的方案，我想先了解一下：您目前主要使用什么渠道获客？每月大概有多少客户咨询量呢？' },
    { role: 'user', content: '主要用微信，每天大概50个咨询' },
    { role: 'ai', content: '明白了！每天50个咨询，如果人工回复确实压力不小。我们的AI智能体可以自动承接80%以上的常见问题，比如价格咨询、功能介绍、使用教程等。您方便留个电话吗？我安排顾问为您演示实际效果。' }
  ]},
  { icon: Headphones, title: '售后运维智能模板', desc: '专注售后问题处理，7×24小时不间断', demoScript: [
    { role: 'user', content: '我的订单怎么还没发货？' },
    { role: 'ai', content: '非常抱歉给您带来不便！我来帮您查询一下。请问您的订单号是多少？或者您下单时用的手机号也可以。' },
    { role: 'user', content: '13800138000' },
    { role: 'ai', content: '已查到您的订单！订单号20250625001，由于仓库爆单导致延迟发货，预计明天发出。为表歉意，我们已为您申请加急发货，并赠送20元无门槛优惠券。优惠券已发放到您的账户，请注意查收！' }
  ]},
];

// 交互式Demo对话数据 - 基于用户输入的智能回复
const demoResponses: Record<string, string> = {
  '价格': '我们提供两种套餐：\n\n💎 **专业版**：1980元/坐席/年\n适合中小团队，包含AI智能客服、企微SCRM、基础数据分析\n\n🏆 **旗舰版**：2980元/坐席/年\n适合大型企业，增加AI外呼、高级报表、API对接、专属客服\n\n现在申请可免费试用3天，无需绑定信用卡。',
  '收费': '我们提供两种套餐：\n\n💎 **专业版**：1980元/坐席/年\n适合中小团队，包含AI智能客服、企微SCRM、基础数据分析\n\n🏆 **旗舰版**：2980元/坐席/年\n适合大型企业，增加AI外呼、高级报表、API对接、专属客服\n\n现在申请可免费试用3天，无需绑定信用卡。',
  '多少钱': '我们提供两种套餐：\n\n💎 **专业版**：1980元/坐席/年\n🏆 **旗舰版**：2980元/坐席/年\n\n现在申请可免费试用3天！',
  '咨询': '我们的AI智能体支持**无限并发**！\n\n✅ 单AI坐席可同时接待1000+客户\n✅ 7×24小时不间断服务\n✅ 平均响应时间<1秒\n✅ 可自动处理80%以上的常见问题',
  '接待': '我们的AI智能体支持**无限并发**！\n\n✅ 单AI坐席可同时接待1000+客户\n✅ 7×24小时不间断服务\n✅ 平均响应时间<1秒\n✅ 可自动处理80%以上的常见问题',
  '并发': '我们的AI智能体支持**无限并发**！\n\n✅ 单AI坐席可同时接待1000+客户\n✅ 7×24小时不间断服务\n✅ 平均响应时间<1秒',
  '试用': '超简单！只需3步：\n\n1️⃣ 点击【免费试用】填写企业信息\n2️⃣ 专属顾问1对1开通账号（约10分钟）\n3️⃣ 导入您的知识库，即可开始体验\n\n试用期间包含完整功能，还有专业顾问全程指导。',
  '体验': '超简单！只需3步：\n\n1️⃣ 点击【免费试用】填写企业信息\n2️⃣ 专属顾问1对1开通账号（约10分钟）\n3️⃣ 导入您的知识库，即可开始体验',
  '功能': '有机云AI智能体的核心功能包括：\n\n🤖 智能多轮对话\n📚 企业专属知识库\n⚡ 工作流自动化\n📊 对话智能质检\n😊 用户情绪洞察\n📈 VOC舆情分析\n\n支持全渠道接入：企业微信、官网、小程序等',
  '知识库': '知识库训练很简单：\n\n📄 支持Word/PDF/Excel/网页链接批量导入\n⏱️ 首次导入+训练约1-2个工作日\n🔄 后续新增内容实时更新\n📦 提供金融/零售/教育等行业模板\n\n最低只需50条FAQ即可启动！',
  '你好': '您好！我是有机云AI智能客服助手，有什么可以帮助您的吗？😊',
  '您好': '您好！我是有机云AI智能客服助手，有什么可以帮助您的吗？😊',
  'hi': 'Hello! 我是有机云AI智能客服助手，很高兴为您服务！😊',
  'hello': 'Hello! 我是有机云AI智能客服助手，很高兴为您服务！😊',
};

const defaultResponse = '感谢您的咨询！我是有机云AI智能客服助手，可以帮您了解：\n\n• 产品价格与套餐\n• AI智能体功能介绍\n• 免费试用申请\n• 知识库训练\n• 接待能力说明\n\n请问您想了解哪方面的信息呢？';

const workspaceFeatures = [
  '智能推荐回复，人工一键快捷发送',
  '智能工单提单，业务流程自动流转',
  '全程AI服务质检，实时监控服务质量',
  '会话智能总结，自动提炼客户核心诉求',
  '用户情绪实时分析，提前预警潜在客诉',
  '全渠道数据统一沉淀，业务全链路可视化',
];

// AI vs 人工对比数据
const comparisonData = [
  { metric: '7x24小时服务', manual: '需3班轮倒', ai: '无需轮班', improvement: '100%覆盖' },
  { metric: '并发接待量', manual: '1-3人/客服', ai: '1000+人同时', improvement: '300倍+' },
  { metric: '首次响应时间', manual: '30秒-3分钟', ai: '<1秒', improvement: '90%+提速' },
  { metric: '人力成本', manual: '8-15万/人/年', ai: '1-3万/年', improvement: '降低70%+' },
  { metric: '知识更新速度', manual: '培训2-4周', ai: '实时更新', improvement: '即刻生效' },
  { metric: '服务质量一致性', manual: '因人而异', ai: '100%一致', improvement: '零偏差' },
];

// 权威引用
const authorityQuotes = [
  { quote: '到2027年，使用AI智能体的企业客服运营成本将平均降低45%。', source: 'Gartner, 2025年AI应用趋势报告', bgColor: 'bg-blue-50', borderColor: 'border-blue-200' },
  { quote: 'AI智能客服的客户满意度在金融行业已达到人工客服的92%。', source: '麦肯锡, 2025年全球AI应用调研', bgColor: 'bg-emerald-50', borderColor: 'border-emerald-200' },
  { quote: '75%的企业将在2027年前引入AI智能体作为客户服务的第一触点。', source: 'IDC, 2025年中国AI市场预测', bgColor: 'bg-amber-50', borderColor: 'border-amber-200' },
];

// 交互式Demo组件 - 接入真实大模型的交互式对话
function InteractiveDemo() {
  const [messages, setMessages] = useState<{role: string; content: string}[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [showTyping, setShowTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, showTyping]);

  // 自动聚焦输入框
  useEffect(() => {
    if (hasStarted) {
      inputRef.current?.focus();
    }
  }, [hasStarted, messages]);

  const startDemo = () => {
    setHasStarted(true);
    // AI 先打招呼
    setShowTyping(true);
    setTimeout(() => {
      setShowTyping(false);
      setMessages([{ role: 'ai', content: '您好！我是有机云AI智能客服助手，有什么可以帮助您的吗？😊' }]);
    }, 1000);
  };

  const handleSend = async () => {
    if (!inputValue.trim() || isStreaming) return;

    const userMessage = inputValue.trim();
    setInputValue('');

    // 添加用户消息
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    // AI 正在输入
    setShowTyping(true);
    setIsStreaming(true);

    // 构建对话历史
    const chatMessages = [
      {
        role: 'system' as const,
        content: '你是有机云AI智能客服助手，专门帮助企业了解AI智能体产品。请用专业、友好的语气回答用户关于产品功能、价格、试用、知识库等方面的问题。回答要简洁明了，突出产品优势。'
      },
      ...messages.map(m => ({
        role: m.role === 'ai' ? 'assistant' as const : 'user' as const,
        content: m.content
      })),
      { role: 'user' as const, content: userMessage }
    ];

    // 创建 abort controller
    abortControllerRef.current = new AbortController();

    try {
      let aiResponse = '';

      await requestLLMStream(
        chatMessages,
        (chunk) => {
          aiResponse += chunk;
          // 更新最后一条AI消息（流式更新）
          setMessages(prev => {
            const newMessages = [...prev];
            const lastMsg = newMessages[newMessages.length - 1];
            if (lastMsg && lastMsg.role === 'ai') {
              lastMsg.content = aiResponse;
            } else {
              newMessages.push({ role: 'ai', content: aiResponse });
            }
            return newMessages;
          });
          setShowTyping(false);
        },
        { signal: abortControllerRef.current.signal }
      );
    } catch (err) {
      if ((err as Error).name !== 'AbortError') {
        console.error('AI请求失败:', err);
        setMessages(prev => [...prev, {
          role: 'ai',
          content: '抱歉，服务暂时不可用，请稍后重试。您也可以点击下方的"免费试用"按钮联系我们的顾问。'
        }]);
      }
    } finally {
      setIsStreaming(false);
      setShowTyping(false);
      abortControllerRef.current = null;
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const resetDemo = () => {
    // 取消正在进行的请求
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    setHasStarted(false);
    setMessages([]);
    setInputValue('');
    setShowTyping(false);
    setIsStreaming(false);
  };

  // 快捷输入建议
  const quickSuggestions = ['价格多少？', '怎么试用？', '有什么功能？', '知识库怎么训练？'];

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
      {/* 聊天头部 */}
      <div className="bg-gradient-to-r from-[#0C4A6E] to-[#0EA5E9] p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="font-semibold text-white">有机云AI智能体</p>
            <p className="text-xs text-white/70">在线</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {!hasStarted ? (
            <button onClick={startDemo} className="flex items-center space-x-1 px-4 py-2 bg-white/20 rounded-lg text-white hover:bg-white/30 transition-colors">
              <Play className="w-4 h-4" />
              <span className="text-sm">开始体验</span>
            </button>
          ) : (
            <button onClick={resetDemo} className="flex items-center space-x-1 px-4 py-2 bg-white/20 rounded-lg text-white hover:bg-white/30 transition-colors">
              <RefreshCw className="w-4 h-4" />
              <span className="text-sm">重新开始</span>
            </button>
          )}
        </div>
      </div>

      {/* 聊天内容 */}
      <div className="h-80 overflow-y-auto p-4 bg-gray-50">
        {!hasStarted && messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-gray-400">
            <Bot className="w-16 h-16 mb-4 text-[#0EA5E9]/30" />
            <p className="text-sm">点击"开始体验"与AI智能体对话</p>
            <p className="text-xs mt-2">体验真实的多轮对话能力</p>
          </div>
        )}

        <AnimatePresence>
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`flex mb-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'ai' && (
                <div className="w-8 h-8 bg-gradient-to-br from-[#0EA5E9] to-[#38BDF8] rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
              )}
              <div className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                msg.role === 'user'
                  ? 'bg-[#0EA5E9] text-white rounded-br-none'
                  : 'bg-white shadow-sm border border-gray-100 rounded-bl-none'
              }`}>
                <div className={msg.role === 'ai' ? 'text-gray-700 whitespace-pre-wrap' : ''}>
                  {msg.content}
                </div>
              </div>
              {msg.role === 'user' && (
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center ml-2 flex-shrink-0">
                  <Users className="w-4 h-4 text-white" />
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {showTyping && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center space-x-2 text-gray-400 text-sm">
            <div className="w-8 h-8 bg-gradient-to-br from-[#0EA5E9] to-[#38BDF8] rounded-full flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100 flex items-center space-x-1">
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* 快捷输入建议 */}
      {hasStarted && messages.length > 0 && messages.length < 3 && (
        <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
          <p className="text-xs text-gray-400 mb-2">试试这些：</p>
          <div className="flex flex-wrap gap-2">
            {quickSuggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => {
                  setInputValue(suggestion);
                  inputRef.current?.focus();
                }}
                className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs text-gray-600 hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 输入框 */}
      <div className="p-4 border-t border-gray-100 bg-white">
        <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2">
          <input
            ref={inputRef}
            type="text"
            placeholder={hasStarted ? "输入消息，按Enter发送..." : "点击上方按钮开始体验"}
            className="flex-1 bg-transparent outline-none text-sm text-gray-700"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={!hasStarted || showTyping}
          />
          <button
            onClick={handleSend}
            disabled={!hasStarted || !inputValue.trim() || showTyping}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-white transition-colors ${
              hasStarted && inputValue.trim() && !showTyping
                ? 'bg-[#0EA5E9] hover:bg-[#0C4A6E] cursor-pointer'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        <p className="text-xs text-gray-400 text-center mt-2">
          {hasStarted ? 'AI智能体正在模拟真实对话场景' : '点击"开始体验"与AI智能体实时对话'}
        </p>
      </div>
    </div>
  );
}

// 模板Demo弹窗组件
function TemplateDemoModal({ isOpen, onClose, template }: { isOpen: boolean; onClose: () => void; template: typeof templates[0] }) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0);
      const interval = setInterval(() => {
        setCurrentStep(prev => {
          if (prev >= template.demoScript.length - 1) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isOpen, template]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl"
          onClick={e => e.stopPropagation()}
        >
          <div className="bg-gradient-to-r from-[#0C4A6E] to-[#0EA5E9] p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <template.icon className="w-6 h-6 text-white" />
              <span className="font-semibold text-white">{template.title}</span>
            </div>
            <button onClick={onClose} className="text-white/70 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4 h-80 overflow-y-auto bg-gray-50">
            {template.demoScript.slice(0, currentStep + 1).map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex mb-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'ai' && (
                  <div className="w-7 h-7 bg-gradient-to-br from-[#0EA5E9] to-[#38BDF8] rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <Bot className="w-3.5 h-3.5 text-white" />
                  </div>
                )}
                <div className={`max-w-[75%] rounded-xl p-2.5 text-sm ${
                  msg.role === 'user' 
                    ? 'bg-[#0EA5E9] text-white rounded-br-none' 
                    : 'bg-white shadow-sm border border-gray-100 rounded-bl-none text-gray-700'
                }`}>
                  {msg.content}
                </div>
                {msg.role === 'user' && (
                  <div className="w-7 h-7 bg-gray-300 rounded-full flex items-center justify-center ml-2 flex-shrink-0">
                    <Users className="w-3.5 h-3.5 text-white" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-100">
            <Link to="/trial" className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] text-white rounded-xl font-medium hover:from-[#0C4A6E] hover:to-[#0EA5E9] transition-all">
              使用此模板创建AI智能体 <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

const aiAgentSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "有机云AI智能体",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, iOS, Android",
  "description": "基于大语言模型的AI智能客服系统，支持企业专属知识库训练、多轮对话流、工作流自动化、全渠道接入",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "CNY",
    "description": "提供免费试用"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "100000"
  }
};

export default function AIAgent() {
  const [activeTemplate, setActiveTemplate] = useState<typeof templates[0] | null>(null);
  const [showQRCode, setShowQRCode] = useState(false);

  return (
    <>
      <SEOHelmet
        title="企微AI智能客服_有机云AI智能体_知识库训练·7×24自动回复"
        description="有机云AI智能体为企业微信提供智能客服：知识库训练、多轮对话、意图识别，7×24小时自动回复替代80%人工，复杂问题一键转人工。免费试用→"
        keywords="企微AI智能客服,AI智能体,智能客服,AI客服机器人,企业知识库,工作流自动化,大模型客服,AI客服系统"
        canonical="/ai-agent"
        extraSchema={aiAgentSchema}
      />
    <div className="min-h-screen bg-[#F0F9FF]">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0C4A6E] via-[#0EA5E9] to-[#38BDF8]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920')] opacity-10 bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full text-white/90 text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              <span>企业级AI智能体解决方案</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI智能体
              <span className="block text-2xl md:text-3xl font-normal mt-2 text-white/90">企业级智能客服全场景解决方案</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              基于对话流、专属知识库、工作流自动化<br />
              覆盖售前·售中·售后全流程，快速落地企业级AI智能应用
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/trial" className="px-8 py-4 bg-white text-[#0EA5E9] rounded-xl font-semibold hover:bg-white/90 transition-colors shadow-lg">
                立即了解
              </Link>
              <Link to="/trial" className="px-8 py-4 bg-white/10 text-white border border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-colors">
                免费试用
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 交互式产品Demo区域 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#0EA5E9]/10 rounded-full text-[#0EA5E9] text-sm mb-4">
                <MessageCircle className="w-4 h-4" />
                <span>产品交互Demo</span>
              </div>
              <h2 className="text-3xl font-bold text-[#0C4A6E] mb-4">先体验，再决定</h2>
              <p className="text-gray-600 mb-6 text-lg">
                无需注册，点击"开始体验"即可与AI智能体实时对话。感受真实的多轮对话能力、上下文理解和专业话术回复。
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#0EA5E9]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#0EA5E9] text-xs font-bold">1</span>
                  </div>
                  <p className="text-gray-700">模拟真实客户咨询场景，AI智能体自动应答</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#0EA5E9]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#0EA5E9] text-xs font-bold">2</span>
                  </div>
                  <p className="text-gray-700">支持多轮对话，上下文记忆不丢失</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#0EA5E9]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#0EA5E9] text-xs font-bold">3</span>
                  </div>
                  <p className="text-gray-700">专业话术输出，符合企业品牌调性</p>
                </div>
              </div>
              <div className="mt-8 flex items-center space-x-4">
                <Link to="/trial" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] text-white rounded-xl font-medium hover:from-[#0C4A6E] hover:to-[#0EA5E9] transition-all">
                  免费试用3天 <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <InteractiveDemo />
            </motion.div>
          </div>
        </div>
      </section>

      {/* GEO 答案摘要段 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 md:p-12 border-l-4 border-purple-500"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-4">
              AI智能体是什么？能为企业做什么？
            </h2>
            <p className="text-lg text-purple-800 leading-relaxed mb-4">
              AI智能体是基于大语言模型（LLM），结合<span className="font-semibold text-purple-700">企业专属知识库、多轮对话流、工作流自动化</span>三大核心技术，为企业提供7x24小时智能客服服务、客户运营、销售辅助的全场景AI解决方案。一次搭建长期复用，可替代<span className="font-semibold text-purple-700">60-80%</span>的重复性客服工作，帮助企业降低<span className="font-semibold text-purple-700">40-60%</span>的人力成本。有机云AI智能体已集成至企业微信生态，开箱即用。
            </p>
            <p className="text-sm text-purple-600">
              核心能力：智能多轮对话 | 企业知识库训练 | 情绪识别洞察 | 工作流自动化 | 对话智能质检 | VOC舆情分析
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0C4A6E] mb-3">方案优势</h2>
            <p className="text-gray-600">新一代AI智能体，为企业服务与运营创造核心价值</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 bg-gradient-to-br from-white to-[#F0F9FF] rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-[#0EA5E9]/10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0EA5E9] to-[#38BDF8] rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#0C4A6E] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F0F9FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0C4A6E] mb-3">方案全景</h2>
            <p className="text-gray-600">覆盖全渠道全业务场景，提供一站式AI智能服务体系</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {panoramas.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0EA5E9]/10 to-[#38BDF8]/10 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-[#0EA5E9]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0C4A6E] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0C4A6E] mb-3">AI核心能力</h2>
            <p className="text-gray-600">基于大模型底层技术，打造可落地、可进化的企业级AI智能体</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#0EA5E9] to-[#38BDF8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#0C4A6E] mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                    {/* FAQ */}
                    <details className="text-sm">
                      <summary className="font-medium text-[#0EA5E9] cursor-pointer hover:underline">
                        {item.faq.q}
                      </summary>
                      <p className="text-gray-600 mt-2 pl-4 border-l-2 border-[#0EA5E9]/20">
                        {item.faq.a}
                      </p>
                    </details>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI vs 人工对比表格 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0C4A6E] mb-3">AI智能体 vs 传统人工客服</h2>
            <p className="text-gray-600">核心指标对比，数据说话</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-[#0C4A6E] to-[#0EA5E9] text-white">
                  <th className="p-4 text-left font-semibold">指标</th>
                  <th className="p-4 text-center font-semibold">传统人工客服</th>
                  <th className="p-4 text-center font-semibold">AI智能体</th>
                  <th className="p-4 text-center font-semibold">提升幅度</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-4 font-medium text-[#0C4A6E]">{row.metric}</td>
                    <td className="p-4 text-center text-red-600">{row.manual}</td>
                    <td className="p-4 text-center text-emerald-600 font-medium">{row.ai}</td>
                    <td className="p-4 text-center text-[#0EA5E9] font-bold">{row.improvement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">
            数据来源：有机云已服务10万+企业客户实际运营数据综合统计
          </p>
        </div>
      </section>

      {/* 权威引用 */}
      <section className="py-16 bg-[#F0F9FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {authorityQuotes.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${item.bgColor} ${item.borderColor} border rounded-xl p-6`}
              >
                <p className="text-gray-800 font-medium mb-3 leading-relaxed">
                  "{item.quote}"
                </p>
                <p className="text-sm text-gray-500">— {item.source}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 模板案例 - 带立即体验按钮 */}
      <section className="py-20 bg-gradient-to-br from-[#0C4A6E] to-[#0EA5E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">模板案例</h2>
            <p className="text-white/80">内置多行业预制模板，开箱即用，快速部署专属AI智能体</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }} 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors"
              >
                <item.icon className="w-10 h-10 text-white mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm mb-4">{item.desc}</p>
                <button 
                  onClick={() => setActiveTemplate(item)}
                  className="w-full flex items-center justify-center px-4 py-2 bg-white/20 rounded-lg text-white text-sm font-medium hover:bg-white/30 transition-colors"
                >
                  <Play className="w-4 h-4 mr-2" />
                  立即体验
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 模板Demo弹窗 */}
      <TemplateDemoModal 
        isOpen={!!activeTemplate} 
        onClose={() => setActiveTemplate(null)} 
        template={activeTemplate || templates[0]} 
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#0EA5E9]/10 rounded-full text-[#0EA5E9] text-sm mb-4">
                <Zap className="w-4 h-4" />
                <span>AI协同人工Copilot模式</span>
              </div>
              <h2 className="text-3xl font-bold text-[#0C4A6E] mb-3">AI智能客服工作台</h2>
              <p className="text-gray-600 mb-6">人机协作，服务效率翻倍提升</p>
              <ul className="space-y-3">
                {workspaceFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3 text-gray-700">
                    <div className="w-5 h-5 bg-[#0EA5E9]/10 rounded-full flex items-center justify-center">
                      <Shield className="w-3 h-3 text-[#0EA5E9]" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-[#F0F9FF] to-white rounded-2xl p-8 shadow-xl border border-[#0EA5E9]/10">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 pb-4 border-b border-gray-100">
                  <div className="w-10 h-10 bg-[#0EA5E9] rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-[#0C4A6E]">AI智能助手</p>
                    <p className="text-xs text-gray-500">在线</p>
                  </div>
                </div>
                <div className="bg-[#0EA5E9]/10 rounded-lg p-4">
                  <p className="text-sm text-gray-700">您好！我是您的AI智能客服助手，有什么可以帮助您的吗？</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 ml-8">
                  <p className="text-sm text-gray-700">我想了解一下产品价格</p>
                </div>
                <div className="bg-[#0EA5E9]/10 rounded-lg p-4">
                  <p className="text-sm text-gray-700">好的，我们提供多种套餐方案，让我为您详细介绍...</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 底部CTA - 预约Demo + 企业微信二维码 */}
      <section className="py-16 bg-gradient-to-r from-[#0C4A6E] to-[#0EA5E9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                预约专属Demo演示
              </h2>
              <p className="text-lg text-white/80 mb-6">
                专业顾问1对1演示，根据您的业务场景定制AI智能体解决方案
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link to="/trial" className="inline-flex items-center px-8 py-4 bg-white text-[#0EA5E9] rounded-xl font-semibold hover:bg-white/90 transition-colors shadow-lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  预约Demo演示
                </Link>
                <button 
                  onClick={() => setShowQRCode(!showQRCode)}
                  className="inline-flex items-center px-8 py-4 bg-white/10 text-white border border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-colors"
                >
                  <QrCode className="w-5 h-5 mr-2" />
                  {showQRCode ? '收起二维码' : '扫码咨询AI'}
                </button>
              </div>
              <AnimatePresence>
                {showQRCode && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }} 
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 overflow-hidden"
                  >
                    <div className="bg-white rounded-2xl p-6 inline-block">
                      <div className="w-48 h-48 rounded-xl overflow-hidden mb-3">
                        <img
                          src="/assets/云洋-微信二维码.jpg"
                          alt="企业微信二维码"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-sm text-gray-600 text-center">扫码添加企业微信</p>
                      <p className="text-xs text-gray-400 text-center">直接向AI智能体提问</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center lg:text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Demo演示包含</h3>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span>AI智能体实时对话演示</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span>知识库训练与配置讲解</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span>工作流自动化场景演示</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span>专属方案定制与报价</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-white/70 text-sm">演示时长约30分钟，支持远程或现场</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <RelatedArticlesByKeyword keyword="AI智能体" keywords={['AI智能体', '智能体', 'AI客服', '知识库', 'AI']} title="延伸阅读：企业微信AI智能体" />
      </section>
    </div>
    </>
  );
}
