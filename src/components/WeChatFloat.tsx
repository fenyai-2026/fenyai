import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone, ShieldCheck } from 'lucide-react';
import { SITE } from '../config/site';

// 行业词 → 浮窗钩子文案（提升首触留存，降低「加了又删」）
const INDUSTRY_HOOKS: Record<string, string> = {
  'case-study/home-decoration': '获取家装行业私域专属方案',
  'case-study/retail': '获取零售行业私域专属方案',
  'case-study/dental': '获取口腔行业私域专属方案',
  'case-study/education': '获取教育行业私域专属方案',
  'case-study/fission': '获取裂变增长落地方案',
};

export default function WeChatFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [hook, setHook] = useState('扫码添加微信，获取专属方案');

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    // 根据当前路径设置行业化钩子文案
    const path = window.location.pathname;
    const matched = Object.keys(INDUSTRY_HOOKS).find((k) => path.includes(k));
    if (matched) setHook(INDUSTRY_HOOKS[matched]);
    else if (path.includes('/topic/')) setHook('扫码加微信，领取词页同款 SOP 模板');
    else if (path.includes('/solutions/')) setHook('扫码添加微信，获取行业解决方案');
    else if (path.includes('/session-archive')) setHook('扫码咨询会话存档合规部署');
    return () => clearTimeout(timer);
  }, []);

  // 在管理后台页面不显示
  const isAdminPage = window.location.hash.includes('/admin');
  if (isAdminPage) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="fixed right-4 bottom-24 z-50"
        >
          {isMinimized && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setIsMinimized(false)}
              className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-[#07C160] to-[#10B981] text-white rounded-full shadow-lg shadow-[#07C160]/30 hover:shadow-xl hover:shadow-[#07C160]/40 transition-shadow"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium">扫码加微信</span>
            </motion.button>
          )}

          {!isMinimized && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-72 bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-[#07C160] to-[#10B981] px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-white">
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-medium">添加微信</span>
                </div>
                <button
                  onClick={() => setIsMinimized(true)}
                  className="p-1 text-white/80 hover:text-white hover:bg-white/20 rounded-lg transition-colors"
                  title="最小化"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-5 text-center">
                <p className="text-[#0C4A6E] text-sm font-medium mb-1">
                  {hook}
                </p>
                <p className="text-gray-400 text-xs mb-4">
                  资深顾问 1 对 1，添加后立得落地资料
                </p>

                <div className="relative mx-auto w-48 h-48 bg-gray-50 rounded-xl p-3 mb-3">
                  <img
                    src={SITE.wechatQr}
                    alt="微信二维码"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>

                <p className="text-gray-500 text-xs mb-3">微信扫一扫，立即咨询</p>

                {/* 会话存档合规 CTA —— 强化品牌词曝光与首触信任 */}
                <a
                  href="/session-archive"
                  className="flex items-center justify-center gap-1.5 text-[#07C160] text-xs font-medium hover:underline"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  会话存档合规留存 · 客户资产不流失
                </a>
              </div>

              <div className="bg-gray-50 px-4 py-3 space-y-2">
                <a
                  href="tel:13316169107"
                  className="flex items-center justify-center gap-2 text-[#0C4A6E] hover:text-[#0EA5E9] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">133-1616-9107</span>
                </a>
                <a
                  href="tel:18998367461"
                  className="flex items-center justify-center gap-2 text-[#0C4A6E] hover:text-[#0EA5E9] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">189-9836-7461</span>
                </a>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
