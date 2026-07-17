import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';

interface Article {
  id: string;
  slug?: string | null;
  title: string;
  summary: string | null;
  view_count?: number | null;
  category?: string | null;
  tags?: string[] | null;
  content?: string | null;
  status?: string | null;
}

interface RelatedArticlesByKeywordProps {
  keyword: string;
  keywords?: string[];
  maxCount?: number;
  title?: string;
}

// 词页 → 文章 延伸阅读：从 /articles.json 中按关键词匹配相关文章，闭合「词页↔文章」内链
export default function RelatedArticlesByKeyword({
  keyword,
  keywords = [],
  maxCount = 3,
  title = '延伸阅读',
}: RelatedArticlesByKeywordProps) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRelated();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  const fetchRelated = async () => {
    try {
      const res = await fetch('/articles.json');
      if (res.ok) {
        const all = await res.json();
        if (Array.isArray(all)) {
          const terms = [keyword, ...keywords].map((t) => (t || '').trim()).filter(Boolean);
          const hay = (a: Article) =>
            [a.category, a.title, a.summary, a.content, ...(a.tags || [])]
              .filter(Boolean)
              .join(' ');
          const matched = all
            .filter((a: Article) => a && a.status !== 'draft' && terms.some((t) => hay(a).includes(t)))
            .slice(0, maxCount);
          setArticles(matched);
        }
      }
    } catch (err) {
      console.warn('RelatedArticlesByKeyword failed:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading || articles.length === 0) {
    return null;
  }

  return (
    <div className="mt-12 pt-8 border-t border-slate-200">
      <h3 className="text-xl font-bold text-[#0C4A6E] mb-6 flex items-center">
        <FileText className="w-5 h-5 mr-2 text-[#0EA5E9]" />
        {title}
      </h3>
      <div className="grid md:grid-cols-3 gap-4">
        {articles.map((article) => (
          <Link
            key={article.id}
            to={`/article/${article.slug || article.id}`}
            className="group bg-white rounded-xl p-5 border border-slate-100 hover:border-[#0EA5E9]/30 hover:shadow-lg transition-all duration-300"
          >
            <h4 className="font-semibold text-[#0C4A6E] mb-2 line-clamp-2 group-hover:text-[#0EA5E9] transition-colors">
              {article.title}
            </h4>
            {article.summary && (
              <p className="text-sm text-slate-500 line-clamp-2 mb-3">
                {article.summary.replace(/<[^>]+>/g, '')}
              </p>
            )}
            <span className="inline-flex items-center text-xs text-[#0EA5E9] font-medium group-hover:translate-x-1 transition-transform">
              阅读全文 <ArrowRight className="w-3 h-3 ml-1" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
