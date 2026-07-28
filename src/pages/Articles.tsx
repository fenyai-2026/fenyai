import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Eye, ArrowRight, TrendingUp, Search, Filter, QrCode, Mail, BookOpen, Flame, Tag, Clock } from 'lucide-react';
import SEOHelmet from '../components/SEOHelmet';
import { SITE } from '../config/site';
import KeywordCrossLinks from '../components/KeywordCrossLinks';

interface Article {
  id: string;
  title: string;
  content: string;
  summary: string | null;
  cover_image: string | null;
  source_url: string | null;
  source_type: string | null;
  status: string | null;
  view_count: number | null;
  created_at: string | null;
  updated_at: string | null;
  published_at: string | null;
  slug?: string | null;
  category?: string | null;
  tags?: string[] | null;
}

// 根据正文长度估算阅读时长（中文约 350 字/分钟）
function estimateReadingMinutes(content: string): number {
  const text = content ? content.replace(/<[^>]+>/g, '') : '';
  return Math.max(1, Math.round(text.length / 350));
}

// 标签云
const tags = ['私域运营', '企微SCRM', '客户案例', 'AI智能体', '裂变增长', '社群运营', '数据分析', '营销自动化'];

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [hotArticles, setHotArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [sortBy, setSortBy] = useState<'time' | 'views'>('time');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [categories, setCategories] = useState<string[]>(['全部']);

  useEffect(() => {
    fetchArticles();
  }, []);

  useEffect(() => {
    filterArticles();
  }, [searchQuery, selectedCategory, sortBy, articles]);

  const fetchArticles = async () => {
    // C 方案：纯静态站点，文章数据来自构建时生成的 /articles.json
    try {
      const res = await fetch('/articles.json');
      if (res.ok) {
        const localData = await res.json();
        if (Array.isArray(localData)) {
          applyArticles(localData);
          setLoading(false);
          return;
        }
      }
      console.warn('本地 /articles.json 读取失败或为空');
    } catch (localErr) {
      console.warn('本地 /articles.json 读取失败：', localErr);
    }
    setLoading(false);
  };

  const applyArticles = (data: Article[]) => {
    setArticles(data || []);
    setFilteredArticles(data || []);
    // 动态分类：从文章数据中提取真实分类（避免写死导致筛选失效）
    const cats = ['全部', ...Array.from(new Set((data || []).map((a) => a.category).filter((c): c is string => !!c)))];
    setCategories(cats);
    // 获取热门文章（按浏览量排序，取前5）
    const sortedByViews = (data || []).sort((a, b) => (b.view_count || 0) - (a.view_count || 0));
    setHotArticles(sortedByViews.slice(0, 5));
  };

  const filterArticles = () => {
    let filtered = articles;

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(query) ||
        (article.summary && article.summary.toLowerCase().includes(query)) ||
        article.content.toLowerCase().includes(query)
      );
    }

    if (selectedCategory !== '全部') {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }

    // 排序
    if (sortBy === 'views') {
      filtered = [...filtered].sort((a, b) => (b.view_count || 0) - (a.view_count || 0));
    } else {
      filtered = [...filtered].sort((a, b) =>
        new Date(b.published_at || '').getTime() - new Date(a.published_at || '').getTime()
      );
    }

    setFilteredArticles(filtered);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F0F9FF] pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0EA5E9] mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F0F9FF] pt-16">
      <SEOHelmet
        title="有机云私域运营干货_企微SCRM技巧|客户案例|行业资讯"
        description="有机云私域运营干货分享，包含企微SCRM操作技巧、客户成功案例、行业解决方案、产品更新动态等，助力企业实现私域增长。"
        keywords="私域运营干货,企微SCRM技巧,客户案例,私域增长,企业微信运营"
        canonical="/articles"
      />
      <header className="bg-gradient-to-br from-[#0EA5E9] via-[#38BDF8] to-[#0EA5E9] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              行业前沿资讯
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              私域运营干货与行业资讯
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              了解最新的私域运营技巧、客户成功案例和产品更新动态，助力企业实现私域增长
            </p>
          </motion.div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 搜索和筛选 */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索文章标题或内容..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/20 outline-none transition-all"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-slate-500" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/20 outline-none bg-white"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'time' | 'views')}
              className="px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/20 outline-none bg-white"
            >
              <option value="time">按时间排序</option>
              <option value="views">按阅读量排序</option>
            </select>
          </div>
        </div>

        {/* 主内容区 + 侧边栏 */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 文章列表 */}
          <div className="flex-1">
            {filteredArticles.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-slate-600">未找到相关文章</p>
              </div>
            ) : (
              <section className="grid md:grid-cols-2 gap-6" itemScope itemType="https://schema.org/ItemList">
                {filteredArticles.map((article, index) => (
      <motion.article
        key={article.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="group bg-white rounded-2xl shadow-sm border border-[#0EA5E9]/10 overflow-hidden hover:shadow-xl hover:shadow-[#0EA5E9]/10 transition-all duration-300 cursor-pointer flex flex-col"
        itemProp="itemListElement"
        itemScope
        itemType="https://schema.org/Article"
      >
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            {article.category && (
              <span className="inline-flex items-center text-xs font-semibold text-[#0C4A6E] bg-[#0EA5E9]/10 px-2.5 py-1 rounded-full" itemProp="articleSection">
                {article.category}
              </span>
            )}
            <span className="inline-flex items-center text-xs text-[#0C4A6E]/50">
              <Clock className="w-3.5 h-3.5 mr-1" />
              {estimateReadingMinutes(article.content)} 分钟阅读
            </span>
          </div>
          <h2 className="text-xl font-bold text-[#0C4A6E] mb-3 line-clamp-2 group-hover:text-[#0EA5E9] transition-colors" itemProp="headline">
            {article.title}
          </h2>
          {article.summary && (
            <p className="text-[#0C4A6E]/70 mb-4 line-clamp-3" itemProp="description">
              {article.summary}
            </p>
          )}
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {article.tags.slice(0, 3).map((t, i) => (
                <span key={i} className="text-xs text-[#0C4A6E]/55 bg-slate-100 px-2 py-0.5 rounded">
                  #{t}
                </span>
              ))}
            </div>
          )}
          <div className="flex items-center justify-between text-sm text-[#0C4A6E]/60 mt-auto pt-2">
            <div className="flex items-center space-x-4">
              <time className="flex items-center" itemProp="datePublished" dateTime={article.published_at || ''}>
                <Calendar className="w-4 h-4 mr-1" />
                {article.published_at?.split('T')[0]}
              </time>
              <span className="flex items-center">
                <Eye className="w-4 h-4 mr-1" />
                <span itemProp="interactionStatistic">{article.view_count || 0}</span>
              </span>
            </div>
            <Link
              to={`/article/${article.slug || article.id}`}
              className="flex items-center text-[#0EA5E9] hover:text-[#F97316] font-medium transition-colors group/btn"
              itemProp="url"
            >
              阅读
              <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.article>
                ))}
              </section>
            )}
          </div>

          {/* 右侧固定侧边栏 */}
          <aside className="lg:w-80 space-y-6">
            {/* SEO 关键词专题入口（列表页 → 词页 内链） */}
            <KeywordCrossLinks title="SEO 关键词专题" maxCount={12} />
            {/* 扫码加企业微信 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-lg border border-[#0EA5E9]/10 p-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <QrCode className="w-5 h-5 text-[#0EA5E9]" />
                <h3 className="font-bold text-[#0C4A6E]">扫码加企业微信</h3>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 mb-4">
                <img
                  src={SITE.wechatQr}
                  alt="企业微信二维码"
                  className="w-full aspect-square object-cover rounded-lg"
                />
              </div>
              <p className="text-sm text-slate-500 text-center">
                扫码添加专属顾问，获取1对1咨询服务
              </p>
            </motion.div>

            {/* 免费领资料 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-[#0EA5E9] to-[#38BDF8] rounded-2xl shadow-lg p-6 text-white"
            >
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="w-5 h-5" />
                <h3 className="font-bold">免费领资料</h3>
              </div>
              <p className="text-white/90 text-sm mb-4">
                《SCRM选型避坑指南》<br/>
                <span className="text-white/70 text-xs">10年经验总结，帮你避开选型陷阱</span>
              </p>
              <Link
                to="/whitepaper"
                className="block w-full text-center py-2.5 bg-white text-[#0EA5E9] rounded-xl font-medium hover:bg-white/90 transition-colors"
              >
                立即领取
              </Link>
            </motion.div>

            {/* 热门文章 Top 5 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg border border-[#0EA5E9]/10 p-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Flame className="w-5 h-5 text-orange-500" />
                <h3 className="font-bold text-[#0C4A6E]">热门文章 Top 5</h3>
              </div>
              {hotArticles.length === 0 ? (
                <p className="text-sm text-slate-400 text-center py-4">暂无热门文章</p>
              ) : (
                <ul className="space-y-3">
                  {hotArticles.map((article, index) => (
                    <li key={article.id}>
                      <Link
                        to={`/article/${article.slug || article.id}`}
                        className="group flex items-start space-x-3 hover:bg-slate-50 p-2 -mx-2 rounded-lg transition-colors"
                      >
                        <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          index < 3
                            ? 'bg-gradient-to-br from-orange-500 to-amber-500 text-white'
                            : 'bg-slate-100 text-slate-500'
                        }`}>
                          {index + 1}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-[#0C4A6E] group-hover:text-[#0EA5E9] transition-colors line-clamp-2">
                            {article.title}
                          </p>
                          <p className="text-xs text-slate-400 mt-1">
                            {(article.view_count || 0).toLocaleString()} 阅读
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>

            {/* 标签云 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg border border-[#0EA5E9]/10 p-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Tag className="w-5 h-5 text-[#0EA5E9]" />
                <h3 className="font-bold text-[#0C4A6E]">热门标签</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <button
                    key={index}
                    onClick={() => setSearchQuery(tag)}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-[#0EA5E9]/10 text-slate-600 hover:text-[#0EA5E9] rounded-full text-sm transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* 订阅 Newsletter */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-[#0C4A6E] to-[#0EA5E9] rounded-2xl shadow-lg p-6 text-white"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Mail className="w-5 h-5" />
                <h3 className="font-bold">订阅每周私域干货</h3>
              </div>
              <p className="text-white/80 text-sm mb-4">
                每周精选私域运营技巧、案例和工具，助你实现私域增长
              </p>
              {subscribed ? (
                <div className="text-center py-2 bg-white/20 rounded-xl">
                  <span className="text-white font-medium">订阅成功！</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="输入您的邮箱"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-white text-[#0EA5E9] rounded-xl font-medium hover:bg-white/90 transition-colors"
                  >
                    立即订阅
                  </button>
                </form>
              )}
              <p className="text-white/50 text-xs text-center mt-3">
                已有 5,000+ 订阅者
              </p>
            </motion.div>
          </aside>
        </div>
      </main>
    </div>
  );
}
