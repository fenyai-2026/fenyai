import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone } from 'lucide-react';
import { SITE } from '../config/site';

export default function WeChatFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    // 延迟显示，避免页面加载时突兀出现
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
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
          {/* 最小化状态 - 显示小按钮 */}
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

          {/* 展开状态 - 显示完整弹窗 */}
          {!isMinimized && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-72 bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* 头部 */}
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

              {/* 内容 */}
              <div className="p-5 text-center">
                <p className="text-[#0C4A6E] text-sm mb-4">
                  扫码添加微信，获取专属方案
                </p>

                {/* 二维码 */}
                <div className="relative mx-auto w-48 h-48 bg-gray-50 rounded-xl p-3 mb-4">
                  <img
                    src={SITE.wechatQr}
                    alt="微信二维码"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>

                <p className="text-gray-500 text-xs">
                  微信扫一扫，立即咨询
                </p>
              </div>

              {/* 联系电话 */}
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
