import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export interface KeywordLink {
  keywords: string[];
  url: string;
  title: string;
  anchor: string;
}

// SEO 关键词落地页清单（与 scripts/ssg.js 中的 KEYWORD_LINKS 保持一致）
export const KEYWORD_LINKS: KeywordLink[] = [
  { keywords: ['活码', '引流', '渠道活码', '加粉', '企微活码'], url: '/live-code', title: '企业微信活码怎么生成', anchor: '有机云活码工具' },
  { keywords: ['群发', '超级群发', '批量群发', '群发助手'], url: '/mass-send', title: '企业微信群发助手', anchor: '有机云超级群发' },
  { keywords: ['聚合聊天', '聚合', '统一接待'], url: '/juhe-chat', title: '聚合聊天', anchor: '有机云聚合聊天' },
  { keywords: ['会话存档', '存档', '合规', '会话合规'], url: '/session-archive', title: '企业微信会话存档', anchor: '有机云会话存档' },
  { keywords: ['AI智能体', '智能体', 'AI客服', '知识库', 'AI'], url: '/ai-agent', title: '企业微信AI智能体', anchor: '有机云AI智能体' },
  { keywords: ['企微魔方', '魔方'], url: '/weimo', title: '企微魔方', anchor: '有机云企微魔方' },
  { keywords: ['SOP', '营销自动化', '客户SOP', 'sop'], url: '/sop', title: '企微SOP', anchor: '有机云企微SOP' },
  { keywords: ['机器人', '自动回复', '关键词回复', '企微机器人'], url: '/robot', title: '企微机器人', anchor: '有机云企微机器人' },
  { keywords: ['云手机', '群控'], url: '/cloud-phone', title: '云手机群控', anchor: '有机云云手机' },
  { keywords: ['SCRM哪家好', 'SCRM选型', '选型', '哪家好', 'SCRM'], url: '/compare', title: 'SCRM哪家好', anchor: '有机云SCRM对比' },
  { keywords: ['企微SCRM', 'SCRM', '私域'], url: '/scrm', title: '企业微信SCRM', anchor: '有机云企微SCRM' },
  { keywords: ['私域', '私域运营', '解决方案'], url: '/solutions', title: '私域运营解决方案', anchor: '有机云私域方案' },
];

interface KeywordCrossLinksProps {
  title?: string;
  maxCount?: number;
  signals?: string[]; // 提供时按信号（分类/标签/标题/正文）过滤匹配的词页
  exclude?: string[]; // 需要排除的 url（如当前页自身）
}

export default function KeywordCrossLinks({
  title = '相关产品与解决方案',
  maxCount = 8,
  signals,
  exclude = [],
}: KeywordCrossLinksProps) {
  let links = KEYWORD_LINKS.filter((l) => !exclude.includes(l.url));

  if (signals && signals.length) {
    const haystack = signals.join(' ');
    links = links.filter((l) => l.keywords.some((k) => haystack.includes(k)));
  }

  const display = links.slice(0, maxCount);
  if (display.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t border-slate-200">
      <h3 className="text-xl font-bold text-[#0C4A6E] mb-6">{title}</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {display.map((link) => (
          <Link
            key={link.url}
            to={link.url}
            className="group bg-white rounded-xl p-5 border border-slate-100 hover:border-[#0EA5E9]/30 hover:shadow-lg transition-all duration-300"
          >
            <h4 className="font-bold text-[#0C4A6E] mb-2 group-hover:text-[#0EA5E9] transition-colors">
              {link.title}
            </h4>
            <p className="text-sm text-slate-500 mb-3">{link.anchor}</p>
            <span className="inline-flex items-center text-xs text-[#0EA5E9] font-medium group-hover:translate-x-1 transition-transform">
              了解详情 <ArrowRight className="w-3 h-3 ml-1" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
