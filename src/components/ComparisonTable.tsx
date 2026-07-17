import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Sparkles } from 'lucide-react';

const comparisonData = [
  {
    dimension: '你买到什么',
    competitor: '买回来的是工具席位',
    youjiyun: '可用的消息通道 + AI 运营能力',
    icon: '🛒',
  },
  {
    dimension: '上手时间',
    competitor: '培训 3 个月，半年才上手',
    youjiyun: '10 分钟注册即用，API 接入 3 行代码',
    icon: '⚡',
  },
  {
    dimension: '员工使用率',
    competitor: '买席位数员工用不用，公司自己承担',
    youjiyun: 'AI 自动运营，人工只处理少数例外',
    icon: '👥',
  },
  {
    dimension: '数据归属',
    competitor: '数据在云端，迁移困难',
    youjiyun: '支持私有化部署，数据完全归你',
    icon: '🔐',
  },
  {
    dimension: '价格模式',
    competitor: '按席位数收费，用不用都收费',
    youjiyun: '按实际用量付费，不浪费',
    icon: '💰',
  },
];

export default function ComparisonTable() {
  return (
    <section className="py-24 bg-gradient-to-br from-sky-50 to-cyan-50" aria-label="有机云 vs 传统SCRM">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            为什么选有机云
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">
            有机云 vs 传统 SCRM
          </h2>
          <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">
            不是买一个工具，而是买一套可用的消息通道 + AI 运营能力
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-sky-100"
        >
          {/* 表头 */}
          <div className="grid grid-cols-3 bg-gradient-to-r from-sky-500 to-cyan-500 text-white">
            <div className="p-5 text-center font-semibold text-sm sm:text-base">
              对比维度
            </div>
            <div className="p-5 text-center font-semibold text-sm sm:text-base border-l border-white/20">
              传统 SCRM
            </div>
            <div className="p-5 text-center font-semibold text-sm sm:text-base border-l border-white/20 bg-white/10">
              有机云
            </div>
          </div>

          {/* 表体 */}
          {comparisonData.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-sky-50/50' : 'bg-white'}`}
            >
              <div className="p-4 sm:p-5 flex items-center gap-2">
                <span className="text-xl flex-shrink-0">{row.icon}</span>
                <span className="font-semibold text-sky-900 text-sm sm:text-base">{row.dimension}</span>
              </div>
              <div className="p-4 sm:p-5 flex items-start border-l border-sky-100">
                <X className="w-4 h-4 text-red-400 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-slate-600 text-xs sm:text-sm leading-relaxed">{row.competitor}</span>
              </div>
              <div className="p-4 sm:p-5 flex items-start border-l border-sky-100 bg-sky-50/30">
                <Check className="w-4 h-4 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sky-800 font-medium text-xs sm:text-sm leading-relaxed">{row.youjiyun}</span>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-sky-600/70 mt-6"
        >
          已服务 10 万+ 企业，覆盖金融、零售、教育、电商等 30+ 行业
        </motion.p>
      </div>
    </section>
  );
}
