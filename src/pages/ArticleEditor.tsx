import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Save, Eye, Calendar, FileText } from 'lucide-react';
import { supabase } from '../supabase/client';
import RichTextEditor from '../components/RichTextEditor';

interface ArticleEditorProps {
  articleId?: string;
  onBack: () => void;
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

export default function ArticleEditor({ articleId, onBack }: ArticleEditorProps) {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [summary, setSummary] = useState('');
  const [category, setCategory] = useState('未分类');
  const [tags, setTags] = useState('');
  const [seoTitle, setSeoTitle] = useState('');
  const [seoDescription, setSeoDescription] = useState('');
  const [seoKeywords, setSeoKeywords] = useState('');
  const [scheduledAt, setScheduledAt] = useState('');
  const [status, setStatus] = useState<'draft' | 'published'>('draft');
  const [categories, setCategories] = useState<Category[]>([]);
  const [wordCount, setWordCount] = useState(0);
  const [saving, setSaving] = useState(false);
  const [content, setContent] = useState('');

  useEffect(() => {
    fetchCategories();
    if (articleId) fetchArticle();
  }, [articleId]);

  const fetchCategories = async () => {
    const { data, error } = await supabase.from('categories').select('*').order('sort');
    if (error) {
      console.error('获取分类失败:', error);
      return;
    }
    if (data && data.length > 0) {
      setCategories(data);
    } else {
      setCategories([
        { id: '1', name: 'AI私域', slug: 'ai-private' },
        { id: '2', name: '客服Agent', slug: 'cs-agent' },
        { id: '3', name: '案例分析', slug: 'cases' },
        { id: '4', name: '行业洞察', slug: 'insights' },
      ]);
    }
  };

  const fetchArticle = async () => {
    if (!articleId) return;
    const { data } = await supabase.from('articles').select('*').eq('id', articleId).single();
    if (data) {
      setTitle(data.title);
      setSlug(data.slug || '');
      setSummary(data.summary || '');
      setCategory(data.category || '未分类');
      setTags(data.tags?.join(',') || '');
      setSeoTitle(data.seo_title || '');
      setSeoDescription(data.seo_description || '');
      setSeoKeywords(data.seo_keywords?.join(',') || '');
      setScheduledAt(data.scheduled_at ? data.scheduled_at.slice(0, 16) : '');
      setStatus(data.status as 'draft' | 'published');
      setContent(data.content || '');
    }
  };

  const generateSlug = (text: string) => {
    return text.toLowerCase()
      .replace(/[^a-z0-9\u4e00-\u9fa5]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '') + '-' + Math.floor(1000 + Math.random() * 9000);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    if (!slug || slug === generateSlug(title)) {
      setSlug(generateSlug(newTitle));
    }
  };

  const handleSave = async (publishStatus?: 'draft' | 'published') => {
    if (!title) return alert('请输入标题');
    setSaving(true);

    const articleData = {
      title,
      slug,
      content,
      summary,
      category,
      tags: tags.split(',').map(t => t.trim()).filter(Boolean),
      seo_title: seoTitle || title,
      seo_description: seoDescription || summary,
      seo_keywords: seoKeywords.split(',').map(k => k.trim()).filter(Boolean),
      status: publishStatus || status,
      scheduled_at: scheduledAt || null,
      published_at: publishStatus === 'published' ? new Date().toISOString() : null,
    };

    if (articleId) {
      await supabase.from('articles').update(articleData).eq('id', articleId);
    } else {
      await supabase.from('articles').insert([{ ...articleData, source_type: 'original' }]);
    }

    setSaving(false);
    onBack();
  };

  return (
    <>
      <Helmet>
        <title>文章编辑 - 有机云</title>
        <meta name="description" content="编辑和发布文章" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button onClick={onBack} className="flex items-center text-slate-600 hover:text-slate-900">
                <ArrowLeft className="w-5 h-5 mr-2" />
                返回列表
              </button>
              <h1 className="text-xl font-bold text-slate-900">{articleId ? '编辑文章' : '新建文章'}</h1>
            </div>
            <div className="flex items-center space-x-3">
              <button onClick={() => handleSave('draft')} disabled={saving}
                className="flex items-center px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 disabled:opacity-50">
                <Save className="w-4 h-4 mr-2" />
                保存草稿
              </button>
              <button onClick={() => handleSave('published')} disabled={saving}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50">
                <Eye className="w-4 h-4 mr-2" />
                发布
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">文章标题</label>
                  <input type="text" value={title} onChange={handleTitleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg font-medium"
                    placeholder="输入文章标题..." />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">固定链接 (Slug)</label>
                    <input type="text" value={slug} onChange={(e) => setSlug(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="自动生成..." />
                  </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">分类</label>
                  <select value={category} onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 bg-white">
                    <option value="未分类">未分类</option>
                    {categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                  </select>
                </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">标签 (用逗号分隔)</label>
                  <input type="text" value={tags} onChange={(e) => setTags(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="如: AI,私域运营,案例分析" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">摘要</label>
                  <textarea value={summary} onChange={(e) => setSummary(e.target.value)} rows={3}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="文章摘要，用于列表展示和SEO..." />
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <RichTextEditor 
                value={content} 
                onChange={(newContent) => {
                  setContent(newContent);
                  // 计算字数（去除HTML标签）
                  const text = newContent.replace(/<[^>]*>/g, '').replace(/\s/g, '');
                  setWordCount(text.length);
                }}
                placeholder="粘贴 Word 或飞书文档内容到这里..."
              />
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">SEO 设置</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    SEO 标题
                    <span className="text-xs text-slate-400 ml-2">自动同步文章标题</span>
                  </label>
                  <input type="text" value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder={title || '默认使用文章标题'} />
                  {!seoTitle && title && (
                    <p className="text-xs text-slate-500 mt-1">当前使用: {title}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Meta 描述
                    <span className="text-xs text-slate-400 ml-2">自动同步文章摘要</span>
                  </label>
                  <textarea value={seoDescription} onChange={(e) => setSeoDescription(e.target.value)} rows={3}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder={summary || '用于搜索引擎展示，默认使用文章摘要...'} />
                  {!seoDescription && summary && (
                    <p className="text-xs text-slate-500 mt-1">当前使用: {summary.slice(0, 50)}...</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    关键词
                    <span className="text-xs text-slate-400 ml-2">自动同步文章标签</span>
                  </label>
                  <input type="text" value={seoKeywords} onChange={(e) => setSeoKeywords(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder={tags || '用逗号分隔关键词，默认使用文章标签'} />
                  {!seoKeywords && tags && (
                    <p className="text-xs text-slate-500 mt-1">当前使用: {tags}</p>
                  )}
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">发布设置</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    定时发布
                  </label>
                  <input type="datetime-local" value={scheduledAt} onChange={(e) => setScheduledAt(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" />
                  <p className="text-xs text-slate-500 mt-1">留空则立即发布或保存为草稿</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">当前状态</label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input type="radio" value="draft" checked={status === 'draft'} onChange={() => setStatus('draft')} className="mr-2" />
                      <span className="text-sm">草稿</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" value="published" checked={status === 'published'} onChange={() => setStatus('published')} className="mr-2" />
                      <span className="text-sm">已发布</span>
                    </label>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
