import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabase/client';
import { ArrowRight, FileText } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  summary: string | null;
  view_count: number | null;
}

interface RelatedArticlesProps {
  currentArticleId: string;
  keywords?: string[];
  maxCount?: number;
}

export default function RelatedArticles({ 
  currentArticleId, 
  keywords = [], 
  maxCount = 3 
}: RelatedArticlesProps) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRelatedArticles();
  }, [currentArticleId]);

  const fetchRelatedArticles = async () => {
    try {
      // 获取最新文章作为推荐（排除当前文章）
      const { data, error } = await supabase
        .from('articles')
        .select('id, title, summary, view_count')
        .eq('status', 'published')
        .neq('id', currentArticleId)
        .order('view_count', { ascending: false })
        .limit(maxCount);

      if (!error && data) {
        setArticles(data);
      }
    } catch (err) {
      console.error('Failed to fetch related articles:', err);
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
        相关推荐
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
