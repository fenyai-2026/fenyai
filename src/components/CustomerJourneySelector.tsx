import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Wrench, HeartHandshake, ArrowRight, Check } from 'lucide-react';

const paths = [
  {
    icon: Code,
    title: '消息通道 API',
    subtitle: '已有 AI 智能体？',
    desc: '只需企微消息发送底层，3 行代码完成对接',
    features: ['3 行代码对接', '万级并发支持', '99.9% 送达率', '<100ms 延迟'],
    cta: '查看 API 文档',
    link: '/message-channel',
    color: 'from-purple-500 to-indigo-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-600',
    badge: '面向开发者',
  },
  {
    icon: Wrench,
    title: 'SCRM 工具',
    subtitle: '需要全套私域运营？',
    desc: '10 分钟注册即用，100+ 功能模块开箱即用',
    features: ['10 分钟注册即用', '100+ 功能模块', '全渠道获客', 'AI 智能运营'],
    cta: '免费注册',
    link: '/trial',
    color: 'from-sky-500 to-cyan-500',
    bgColor: 'bg-sky-50',
    borderColor: 'border-sky-200',
    textColor: 'text-sky-600',
    badge: '面向运营',
    highlight: true,
  },
  {
    icon: HeartHandshake,
    title: '代运营服务',
    subtitle: '不想自己操作？',
    desc: '交给我们专业团队，按月付费按结果验收',
    features: ['12 个月专属服务', '按效果付费', '行业 SOP 定制', '专属运营顾问'],
    cta: '咨询方案',
    link: '/contact',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    textColor: 'text-amber-600',
    badge: '面向管理者',
  },
];

export default function CustomerJourneySelector() {
  return (
    <section className="py-24 bg-white" aria-label="三路径选择">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-sm font-semibold mb-4">
            按需选择 · 三种客户路径
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">
            你属于哪种情况？选择最适合的产品线
          </h2>
          <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">
            无论你是技术团队、运营团队还是管理者，有机云都有匹配的解决方案
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {paths.map((path, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl border-2 p-8 transition-all duration-300 hover:-translate-y-1 ${
                path.highlight
                  ? `${path.borderColor} ${path.bgColor} shadow-xl shadow-sky-500/10`
                  : `${path.borderColor} bg-white hover:shadow-lg`
              }`}
            >
              {path.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-sky-500 to-cyan-500 text-white text-xs font-bold rounded-full">
                  最受欢迎
                </div>
              )}

              <div className="flex items-center justify-between mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${path.color} flex items-center justify-center shadow-lg`}>
                  <path.icon className="w-7 h-7 text-white" />
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${path.bgColor} ${path.textColor}`}>
                  {path.badge}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-sky-900 mb-1">{path.title}</h3>
              <p className={`text-sm font-medium ${path.textColor} mb-3`}>{path.subtitle}</p>
              <p className="text-sky-700/70 leading-relaxed mb-6">{path.desc}</p>

              <ul className="space-y-2.5 mb-8">
                {path.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-sky-800">
                    <Check className={`w-4 h-4 ${path.textColor} mr-2 flex-shrink-0`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to={path.link}
                className={`inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r ${path.color} text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg group`}
              >
                {path.cta}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
