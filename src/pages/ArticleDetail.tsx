import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { SITE } from '../config/site';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, CalendarDays, Eye, Share2, Check, QrCode, Clock } from 'lucide-react';
import SEOHelmet from '../components/SEOHelmet';
import RelatedArticles from '../components/RelatedArticles';
import ProductCrossLinks from '../components/ProductCrossLinks';
import KeywordCrossLinks from '../components/KeywordCrossLinks';
import { injectJSONLD } from '../utils/jsonld';

interface Article {
  id: string;
  title: string;
  content: string;
  summary: string | null;
  cover_image: string | null;
  slug?: string | null;
  category: string | null;
  source_url: string | null;
  source_type: string | null;
  status: string | null;
  view_count: number | null;
  created_at: string | null;
  published_at: string | null;
}

// 内容升级资料配置
const contentUpgrades: Record<string, { title: string; filename: string; icon: string }> = {
  'SCRM': { title: '8家SCRM功能对比表', filename: '8家SCRM功能对比表.xlsx', icon: '📊' },
  'AI': { title: 'AI智能体应用白皮书', filename: 'AI智能体应用白皮书.pdf', icon: '🤖' },
  '私域': { title: '私域运营SOP模板', filename: '私域运营SOP模板.xlsx', icon: '📋' },
  '裂变': { title: '裂变活动案例集', filename: '裂变活动案例集.pdf', icon: '🚀' },
  '企微': { title: '企业微信运营指南', filename: '企业微信运营指南.pdf', icon: '💼' },
};

// 软性CTA卡片组件
function SoftCTACard({ position, title, description, buttonText, type }: { 
  position: string; 
  title: string; 
  description: string; 
  buttonText: string;
  type: 'qr' | 'form';
}) {
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="my-8 bg-gradient-to-r from-[#0EA5E9]/5 to-[#38BDF8]/5 rounded-2xl p-6 border border-[#0EA5E9]/20">
      <div className="flex items-start space-x-4">
        <div className="flex-1">
          <p className="text-sm text-[#0EA5E9] font-medium mb-2">{position}</p>
          <h4 className="text-lg font-bold text-[#0C4A6E] mb-2">{title}</h4>
          <p className="text-slate-600 text-sm mb-4">{description}</p>
          {type === 'qr' ? (
            <div>
              <button 
                onClick={() => setShowQR(!showQR)}
                className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] text-white font-medium rounded-xl hover:from-[#0284C7] hover:to-[#0EA5E9] transition-all"
              >
                <QrCode className="w-4 h-4 mr-2" />
                {showQR ? '收起二维码' : buttonText}
              </button>
              {showQR && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-4 flex items-center space-x-4"
                >
                  <img
                    src={SITE.wechatQr}
                    alt="微信二维码"
                    className="w-32 h-32 rounded-xl shadow-lg"
                  />
                  <div className="text-sm text-slate-500">
                    <p>扫码添加微信</p>
                    <p>免费领取资料</p>
                  </div>
                </motion.div>
              )}
            </div>
          ) : (
            <Link 
              to="/trial"
              className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all"
            >
              <CalendarDays className="w-4 h-4 mr-2" />
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

// 内容升级领资料组件（纯静态：扫码加微信领取，不再留邮箱）
function ContentUpgrade({ articleTitle }: { articleTitle: string }) {
  // 根据标题匹配资料
  const getUpgrade = () => {
    for (const [keyword, data] of Object.entries(contentUpgrades)) {
      if (articleTitle.includes(keyword)) return data;
    }
    return { title: '私域运营资料包', filename: '私域运营资料包.zip', icon: '📦' };
  };

  const upgrade = getUpgrade();

  return (
    <div className="my-8 bg-gradient-to-br from-[#0C4A6E] to-[#0EA5E9] rounded-2xl p-6 text-white">
      <div className="flex items-center space-x-3 mb-4">
        <span className="text-3xl">{upgrade.icon}</span>
        <div>
          <h4 className="font-bold text-lg">内容升级：{upgrade.title}</h4>
          <p className="text-white/70 text-sm">{upgrade.filename}</p>
        </div>
      </div>
      <p className="text-white/80 text-sm mb-4">扫码添加微信，免费领取这份资料</p>
      <div className="flex items-center space-x-4">
        <img
          src={SITE.wechatQrAlt}
          alt="微信二维码"
          className="w-28 h-28 rounded-xl shadow-lg object-cover"
        />
        <div className="text-sm text-white/80">
          <p>扫码添加「有机云顾问」</p>
          <p>备注：{upgrade.title}</p>
        </div>
      </div>
    </div>
  );
}

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (id) {
      fetchArticle(id);
    }
  }, [id]);

  const fetchArticle = async (articleId: string) => {
    // C 方案：纯静态站点，文章数据来自构建时生成的 /articles.json
    try {
      const res = await fetch('/articles.json');
      if (res.ok) {
        const articles = await res.json();
        if (Array.isArray(articles)) {
          const found = articles.find((a) => a && (a.id === articleId || a.slug === articleId));
          if (found) {
            setArticle(found);
            injectBlogJSONLD(found);
            setLoading(false);
            return;
          }
        }
      }
    } catch (localErr) {
      console.warn('本地 /articles.json 读取失败：', localErr);
    }
    // 未找到，跳转回列表
    navigate('/articles');
    setLoading(false);
  };

  const injectBlogJSONLD = (data: Article) => {
    // 注入 BlogPosting 结构化数据
    injectJSONLD({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: data.title,
      description: data.summary || data.content.substring(0, 150).replace(/<[^>]+>/g, ''),
      image: ['https://www.fenyai.com/og-image.png'],
      articleSection: data.category || '私域运营',
      inLanguage: 'zh-CN',
      datePublished: data.published_at || data.created_at,
      dateModified: data.updated_at || data.published_at || data.created_at,
      author: {
        '@type': 'Organization',
        name: '有机云',
        url: 'https://www.fenyai.com',
      },
      publisher: {
        '@type': 'Organization',
        name: '有机云',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.fenyai.com/logo.png',
        },
      },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', 'article'],
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://www.fenyai.com/article/${data.slug || data.id}`,
      },
    }, 'blog-posting');

    injectJSONLD({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首页', item: 'https://www.fenyai.com/' },
        { '@type': 'ListItem', position: 2, name: '文章资讯', item: 'https://www.fenyai.com/articles' },
        { '@type': 'ListItem', position: 3, name: data.title, item: `https://www.fenyai.com/article/${data.slug || data.id}` },
      ],
    }, 'breadcrumb-article');
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 在内容中插入CTA卡片
  const renderContentWithCTA = (content: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const paragraphs = doc.querySelectorAll('p');
    const totalP = paragraphs.length;
    
    if (totalP < 3) return content;
    
    const oneThird = Math.floor(totalP / 3);
    const twoThird = Math.floor(totalP * 2 / 3);
    
    let html = content;
    let insertions = 0;
    
    // 在1/3处插入第一个CTA
    if (paragraphs[oneThird]) {
      const cta1 = `<div data-cta="1"></div>`;
      html = html.replace(paragraphs[oneThird].outerHTML, cta1 + paragraphs[oneThird].outerHTML);
      insertions++;
    }
    
    // 在2/3处插入第二个CTA
    if (paragraphs[twoThird]) {
      const cta2 = `<div data-cta="2"></div>`;
      html = html.replace(paragraphs[twoThird].outerHTML, cta2 + paragraphs[twoThird].outerHTML);
      insertions++;
    }
    
    return html;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F0F9FF] pt-16">
        <SEOHelmet
          title="文章详情_有机云私域运营干货"
          description="有机云私域流量运营实战经验与行业洞察分享。"
          keywords="私域运营干货,企业微信营销"
          canonical={`/article/${id}`}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0EA5E9] mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-[#F0F9FF] pt-16">
        <SEOHelmet
          title="文章未找到_有机云"
          description="抱歉，您访问的文章不存在或已被删除。"
          keywords="有机云"
          canonical="/articles"
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">文章未找到</h1>
          <Link to="/articles" className="text-[#0EA5E9] hover:underline">返回文章列表</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F0F9FF] pt-16">
      <SEOHelmet
        title={`${article.title}_有机云私域运营干货`}
        description={article.summary || article.content.substring(0, 150).replace(/<[^>]+>/g, '')}
        keywords={`${article.title},私域运营,企业微信营销,${article.source_type || '行业资讯'}`}
        canonical={`/article/${encodeURIComponent(article.slug || article.id)}`}
        ogImage={'https://www.fenyai.com/og-image.png'}
      />
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link
              to="/articles"
              className="inline-flex items-center text-[#0C4A6E] hover:text-[#0EA5E9] transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F0F9FF] flex items-center justify-center mr-3 group-hover:bg-[#0EA5E9]/10 transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </div>
              <span className="font-medium">返回文章列表</span>
            </Link>
          </motion.div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0C4A6E] mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center justify-between py-4 border-y border-slate-200 mb-8">
            <div className="flex items-center space-x-6 text-sm text-[#0C4A6E]/70">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-[#0EA5E9]" />
                {article.published_at?.split('T')[0]}
              </span>
              <span className="flex items-center">
                <Eye className="w-4 h-4 mr-2 text-[#0EA5E9]" />
                {article.view_count || 0} 阅读
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-[#0EA5E9]" />
                {Math.max(1, Math.round((article.content || '').replace(/<[^>]+>/g, '').length / 350))} 分钟阅读
              </span>
              {article.source_type === 'imported' && article.source_url && (
                <a
                  href={article.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0EA5E9] hover:text-[#38BDF8] transition-colors"
                >
                  原文链接
                </a>
              )}
            </div>
            <motion.button
              onClick={handleShare}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center px-4 py-2 rounded-xl transition-all duration-200 ${
                copied 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-[#0EA5E9]/10 text-[#0EA5E9] hover:bg-[#0EA5E9]/20'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  已复制
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 mr-2" />
                  分享
                </>
              )}
            </motion.button>
          </div>

          {/* 内容升级资料 */}
          <ContentUpgrade articleTitle={article.title} />

          {/* 文章正文 */}
          <div
            ref={contentRef}
            className="prose prose-slate max-w-none prose-headings:text-[#0C4A6E] prose-a:text-[#0EA5E9] prose-a:no-underline hover:prose-a:underline"
          >
            {/* 1/3处CTA */}
            <SoftCTACard 
              position="💡 读到这里的都是认真做私域的人"
              title="扫码加微信，送你一份《SCRM选型避坑指南》"
              description="10年私域运营经验总结，帮你避开选型陷阱，节省至少3个月试错时间"
              buttonText="扫码领取"
              type="qr"
            />
            
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
            
            {/* 2/3处CTA */}
            <SoftCTACard 
              position="🎯 需要帮你诊断私域问题？"
              title="扫码加微信，免费诊断您的私域运营"
              description="专业顾问1对1分析您的业务场景，提供定制化解决方案建议"
              buttonText="扫码添加"
              type="qr"
            />
          </div>

          {/* 相关文章推荐 */}
          {article.id && (
            <RelatedArticles currentArticleId={article.id} maxCount={3} />
          )}

          {/* 相关词页（SEO 内链：文章 → 关键词落地页） */}
          <KeywordCrossLinks
            title="相关产品与解决方案"
            signals={[article.category || '', article.title, ...(article.tags || [])]}
          />

          {/* 产品交叉链接 */}
          <ProductCrossLinks title="相关产品" maxCount={4} />

          {/* 文章底部双CTA */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <h3 className="text-xl font-bold text-[#0C4A6E] mb-6 text-center">觉得文章有帮助？</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* 扫码加企业微信 */}
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <QrCode className="w-6 h-6 text-[#0EA5E9]" />
                  <h4 className="font-bold text-[#0C4A6E]">扫码加企业微信</h4>
                </div>
              <div className="flex items-center space-x-4">
                {showQRCode && (
                  <img
                    src={SITE.wechatQr}
                    alt="企业微信二维码"
                    className="w-24 h-24 rounded-xl shadow-md object-cover"
                  />
                )}
                <div className="flex-1">
                  <p className="text-sm text-slate-600 mb-3">扫码添加专属顾问，获取1对1咨询服务</p>
                  <button 
                    onClick={() => setShowQRCode(!showQRCode)}
                    className="text-sm text-[#0EA5E9] hover:underline"
                  >
                    {showQRCode ? '收起二维码' : '查看二维码'}
                  </button>
                </div>
              </div>
              </div>

              {/* 扫码加微信 */}
              <div className="bg-gradient-to-br from-[#0EA5E9] to-[#38BDF8] rounded-2xl shadow-lg p-6 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <QrCode className="w-6 h-6" />
                  <h4 className="font-bold">扫码加微信</h4>
                </div>
                <div className="flex items-center space-x-4">
                  <img
                    src={SITE.wechatQrAlt}
                    alt="企业微信二维码"
                    className="w-24 h-24 rounded-xl shadow-md object-cover"
                  />
                  <p className="text-white/80 text-sm">
                    专业顾问为您1对1演示产品功能，定制私域运营解决方案
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  );
}
