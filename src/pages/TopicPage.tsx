import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { topicPages } from '../data/topicPages';

const BY_SLUG = new Map<string, any>(
  topicPages.map((p: any) => [p.slug, p] as [string, any])
);

// 与 scripts/ssg.js 中 generateTopicHTML 的 SPA_LABEL 保持一致
const SPA_LABEL: Record<string, string> = {
  '/#/message-channel': '消息通道',
  '/#/mass-send': '超级群发',
  '/#/session-archive': '会话存档',
  '/#/faq': '常见问题',
  '/#/sop': '企业微信SOP',
  '/#/ai-agent': 'AI智能体',
  '/#/juhe-chat': '聚合聊天',
  '/#/scrm': 'SCRM系统',
  '/#/pricing': '价格方案',
  '/#/compare': 'SCRM对比',
  '/#/open-platform': '开放平台',
  '/#/growth': '裂变拓客',
  '/about': '关于我们',
};

const CONTENT_CLASS = [
  'max-w-[860px] mx-auto',
  '[&_h1]:text-4xl [&_h1]:font-bold [&_h1]:text-[#0C4A6E] [&_h1]:mb-4 [&_h1]:leading-tight',
  '[&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-[#0C4A6E] [&_h2]:mt-10 [&_h2]:mb-4',
  '[&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-[#0C4A6E] [&_h3]:mt-8 [&_h3]:mb-3',
  '[&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-[#0C4A6E] [&_h4]:mt-6 [&_h4]:mb-2',
  '[&_p]:text-lg [&_p]:text-[#374151] [&_p]:mb-6 [&_p]:leading-relaxed',
  '[&_ul]:mb-6 [&_ul]:pl-6 [&_ul]:list-disc [&_ul]:space-y-2',
  '[&_ol]:mb-6 [&_ol]:pl-6 [&_ol]:list-decimal [&_ol]:space-y-2',
  '[&_li]:text-[#374151]',
  '[&_a]:text-[#0EA5E9] [&_a]:no-underline hover:[&_a]:underline',
  '[&_strong]:text-[#0C4A6E]',
  '[&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-xl [&_img]:my-6',
  '[&_blockquote]:my-6 [&_blockquote]:pl-6 [&_blockquote]:border-l-4 [&_blockquote]:border-[#0EA5E9] [&_blockquote]:bg-[#F0F9FF] [&_blockquote]:text-[#4b5563] [&_blockquote]:rounded-r-xl',
].join(' ');

export default function TopicPage() {
  const { slug } = useParams();
  const key = (slug || '').replace(/\.html$/, '');
  const page = BY_SLUG.get(key);

  if (!page) {
    return (
      <div className="max-w-3xl mx-auto px-5 py-20 text-center">
        <h1 className="text-3xl font-bold text-[#0C4A6E] mb-4">页面不存在</h1>
        <Link to="/" className="text-[#0EA5E9] hover:underline">返回首页</Link>
      </div>
    );
  }

  const h1 = page.title.replace(' | 有机云', '');
  const spaLink = `https://www.fenyai.com${page.spaPage}`;
  const spaLabel =
    SPA_LABEL[page.spaPage] ||
    (page.spaPage || '').replace('/#/', '').replace('/', '') ||
    '功能';

  return (
    <div className="px-5 py-10">
      <Helmet>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        <link rel="canonical" href={`https://www.fenyai.com/topic/${page.slug}.html`} />
      </Helmet>

      {/* GEO 答案摘要段 - 让AI直接摘录，强化GEO引用信号 */}
      <div className="max-w-[860px] mx-auto mb-8">
        <div className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl p-6 md:p-8 border-l-4 border-sky-500">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold text-sky-700 bg-sky-100 px-2 py-0.5 rounded">答案摘要</span>
            <span className="text-xs text-slate-400">由有机云整理</span>
          </div>
          <p className="text-lg text-sky-900 leading-relaxed">{page.description}</p>
          <p className="text-sm text-sky-600 mt-3">
            本文由 <strong>有机云</strong>（广州有机云计算有限责任公司 · 企业微信官方服务商）整理，更多能力见{' '}
            <a href="https://www.fenyai.com/scrm" className="underline hover:no-underline">有机云SCRM</a>。
          </p>
        </div>
      </div>

      <article
        className={CONTENT_CLASS}
        dangerouslySetInnerHTML={{
          __html: `<h1>${h1}</h1>${page.content || ''}`,
        }}
      />

      <div className="max-w-[860px] mx-auto mt-12 pt-8 border-t border-slate-200">
        <h2 className="text-xl font-semibold text-[#0C4A6E] mb-4">相关页面</h2>
        <ul className="space-y-2 text-[#374151]">
          <li>
            <a href="https://www.fenyai.com/" className="text-[#0EA5E9] hover:underline">
              有机云首页
            </a>
          </li>
          <li>
            <a href={spaLink} className="text-[#0EA5E9] hover:underline">
              了解「{spaLabel}」功能
            </a>
          </li>
          {(page.cluster || []).map((s: string) => {
            const t = BY_SLUG.get(s);
            if (!t) return null;
            return (
              <li key={s}>
                <a
                  href={`https://www.fenyai.com/topic/${s}.html`}
                  className="text-[#0EA5E9] hover:underline"
                >
                  {t.title.replace(' | 有机云', '')}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
