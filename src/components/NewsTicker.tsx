import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ChevronRight } from 'lucide-react';

const notices = [
  { text: '有机云「消息通道API」正式发布，3行代码为AI Agent接入企微消息能力', link: '/message-channel' },
  { text: '有机云服务企业突破10000家，覆盖30+行业私域运营场景', link: '/articles' },
  { text: 'AI智能体全新升级，支持知识库训练与多轮对话，7x24小时在线', link: '/ai-agent' },
  { text: '企业微信官方合作伙伴认证续期，ISO27001信息安全体系保障', link: '/scrm' },
];

export default function NewsTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % notices.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const current = notices[index];

  return (
    <div className="bg-gradient-to-r from-sky-600 to-cyan-600 text-white py-2.5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">最新动态</span>
          </div>
          <div className="flex-1 overflow-hidden relative h-5">
            {notices.map((notice, i) => (
              <Link
                key={i}
                to={notice.link}
                className={`absolute inset-0 flex items-center text-sm transition-all duration-500 hover:text-amber-200 ${
                  i === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                }`}
              >
                <span className="truncate">{notice.text}</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1 flex-shrink-0" />
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-1 flex-shrink-0">
            {notices.map((_, i) => (
              <span
                key={i}
                className={`h-1 rounded-full transition-all ${
                  i === index ? 'w-4 bg-amber-300' : 'w-1 bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
