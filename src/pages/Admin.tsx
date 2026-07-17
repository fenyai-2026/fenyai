import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase/client';
import { motion } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Plus, Edit2, Trash2, Eye, EyeOff, ExternalLink, FileText, Users, BarChart3, TrendingUp, MousePointer, Star, Award, Tag } from 'lucide-react';
import { useSiteFavicon } from '../hooks/useSiteFavicon';

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
  published_at: string | null;
}

interface Testimonial {
  id: string;
  company: string;
  avatar: string | null;
  content: string;
  rating: number | null;
  result: string;
  is_active: boolean | null;
  sort_order: number | null;
  created_at: string | null;
}

export default function Admin() {
  useSiteFavicon();
  const location = useLocation();
  const [session, setSession] = useState<any>(null);
  const [articles, setArticles] = useState<Article[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'articles' | 'testimonials'>('articles');
  const [showForm, setShowForm] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [importUrl, setImportUrl] = useState('');
  const [showImport, setShowImport] = useState(false);
  const [importMode, setImportMode] = useState<'url' | 'file'>('url');
  const [importFile, setImportFile] = useState<File | null>(null);
  const [importTitle, setImportTitle] = useState('');
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    summary: '',
    cover_image: '',
    status: 'draft',
  });

  const [testimonialForm, setTestimonialForm] = useState({
    company: '',
    content: '',
    result: '',
    avatar: 'A',
    rating: 5,
    sort_order: 0,
    is_active: true,
  });

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (!session) {
        navigate('/admin/login');
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (!session) {
        navigate('/admin/login');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (session) {
      fetchArticles();
      fetchTestimonials();
    }
  }, [session]);

  const fetchArticles = async () => {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching articles:', error);
    } else {
      setArticles(data || []);
    }
    setLoading(false);
  };

  const fetchTestimonials = async () => {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .order('sort_order', { ascending: true });
    
    if (error) {
      console.error('Error fetching testimonials:', error);
    } else {
      setTestimonials(data || []);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const articleData = {
      ...formData,
      published_at: formData.status === 'published' ? new Date().toISOString() : null,
    };

    if (editingArticle) {
      const { error } = await supabase
        .from('articles')
        .update(articleData)
        .eq('id', editingArticle.id);
      
      if (error) {
        alert('更新失败: ' + error.message);
      } else {
        alert('文章更新成功');
        resetForm();
        fetchArticles();
      }
    } else {
      const { error } = await supabase
        .from('articles')
        .insert([{ ...articleData, source_type: 'original' }])
        .select();
      
      if (error) {
        alert('发布失败: ' + error.message);
      } else {
        alert('文章发布成功');
        resetForm();
        fetchArticles();
      }
    }
  };

  const handleTestimonialSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingTestimonial) {
      const { error } = await supabase
        .from('testimonials')
        .update(testimonialForm)
        .eq('id', editingTestimonial.id);
      
      if (error) {
        alert('更新失败: ' + error.message);
      } else {
        alert('案例更新成功');
        resetTestimonialForm();
        fetchTestimonials();
      }
    } else {
      const { error } = await supabase
        .from('testimonials')
        .insert([testimonialForm])
        .select();
      
      if (error) {
        alert('创建失败: ' + error.message);
      } else {
        alert('案例创建成功');
        resetTestimonialForm();
        fetchTestimonials();
      }
    }
  };

  // 简单的 markdown 转 HTML 函数
  const markdownToHtml = (markdown: string): string => {
    let html = markdown
      // 转义 HTML 特殊字符
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      // 代码块
      .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
      // 行内代码
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      // 标题
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      // 粗体
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      // 斜体
      .replace(/\*([^*]+)\*/g, '<em>$1</em>')
      // 图片
      .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />')
      // 链接
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
      // 无序列表
      .replace(/^\s*[-*+]\s+(.*$)/gim, '<li>$1</li>')
      // 有序列表
      .replace(/^\s*\d+\.\s+(.*$)/gim, '<li>$1</li>')
      // 引用
      .replace(/^>\s*(.*$)/gim, '<blockquote>$1</blockquote>')
      // 水平线
      .replace(/^---$/gim, '<hr />')
      // 换行
      .replace(/\n/g, '<br />');

    // 包装列表项
    html = html.replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>');

    return html;
  };

  const handleImport = async () => {
    // 文件导入模式
    if (importMode === 'file') {
      if (!importFile) {
        alert('请选择要导入的 Markdown 文件');
        return;
      }

      if (!importTitle.trim()) {
        alert('请输入文章标题');
        return;
      }

      try {
        const text = await importFile.text();
        const content = markdownToHtml(text);

        const { error } = await supabase
          .from('articles')
          .insert([{
            title: importTitle,
            content,
            source_url: null,
            source_type: 'markdown_import',
            status: 'draft',
          }]);

        if (error) {
          alert('导入失败: ' + error.message);
        } else {
          alert('Markdown 文件导入成功');
          setImportFile(null);
          setImportTitle('');
          setShowImport(false);
          fetchArticles();
        }
      } catch (err) {
        alert('导入失败，请检查文件格式');
      }
      return;
    }

    // URL 导入模式
    if (!importUrl.trim()) {
      alert('请输入文章链接');
      return;
    }

    try {
      const response = await fetch(importUrl);
      const html = await response.text();

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      const title = doc.querySelector('title')?.textContent || '导入文章';
      const content = doc.querySelector('article')?.innerHTML ||
                     doc.querySelector('.content')?.innerHTML ||
                     doc.querySelector('main')?.innerHTML ||
                     doc.body.innerHTML;

      const { error } = await supabase
        .from('articles')
        .insert([{
          title,
          content,
          source_url: importUrl,
          source_type: 'imported',
          status: 'draft',
        }]);

      if (error) {
        alert('导入失败: ' + error.message);
      } else {
        alert('文章导入成功');
        setImportUrl('');
        setShowImport(false);
        fetchArticles();
      }
    } catch (err) {
      alert('导入失败，请检查链接是否有效');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('确定要删除这篇文章吗？')) return;
    
    const { error } = await supabase
      .from('articles')
      .delete()
      .eq('id', id);
    
    if (error) {
      alert('删除失败: ' + error.message);
    } else {
      fetchArticles();
    }
  };

  const handleDeleteTestimonial = async (id: string) => {
    if (!confirm('确定要删除这个案例吗？')) return;
    
    const { error } = await supabase
      .from('testimonials')
      .delete()
      .eq('id', id);
    
    if (error) {
      alert('删除失败: ' + error.message);
    } else {
      fetchTestimonials();
    }
  };

  const handleToggleStatus = async (article: Article) => {
    const newStatus = article.status === 'published' ? 'draft' : 'published';
    const { error } = await supabase
      .from('articles')
      .update({ 
        status: newStatus,
        published_at: newStatus === 'published' ? new Date().toISOString() : null,
      })
      .eq('id', article.id);
    
    if (error) {
      alert('操作失败: ' + error.message);
    } else {
      fetchArticles();
    }
  };

  const handleToggleTestimonialStatus = async (testimonial: Testimonial) => {
    const { error } = await supabase
      .from('testimonials')
      .update({ is_active: !testimonial.is_active })
      .eq('id', testimonial.id);
    
    if (error) {
      alert('操作失败: ' + error.message);
    } else {
      fetchTestimonials();
    }
  };

  const handleEdit = (article: Article) => {
    setEditingArticle(article);
    setFormData({
      title: article.title,
      content: article.content,
      summary: article.summary || '',
      cover_image: article.cover_image || '',
      status: article.status || 'draft',
    });
    setShowForm(true);
  };

  const handleEditTestimonial = (testimonial: Testimonial) => {
    setEditingTestimonial(testimonial);
    setTestimonialForm({
      company: testimonial.company,
      content: testimonial.content,
      result: testimonial.result,
      avatar: testimonial.avatar || 'A',
      rating: testimonial.rating || 5,
      sort_order: testimonial.sort_order || 0,
      is_active: testimonial.is_active ?? true,
    });
  };

  const resetForm = () => {
    setFormData({
      title: '',
      content: '',
      summary: '',
      cover_image: '',
      status: 'draft',
    });
    setEditingArticle(null);
    setShowForm(false);
  };

  const resetTestimonialForm = () => {
    setTestimonialForm({
      company: '',
      content: '',
      result: '',
      avatar: 'A',
      rating: 5,
      sort_order: 0,
      is_active: true,
    });
    setEditingTestimonial(null);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  if (!session) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>后台管理 - 有机云</title>
        <meta name="description" content="有机云后台管理系统" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center text-slate-600 hover:text-slate-900">
                <ArrowLeft className="w-5 h-5 mr-2" />
                返回网站
              </Link>
              <h1 className="text-xl font-bold text-slate-900">管理后台</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-slate-600">{session.user?.email}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm text-red-600 hover:text-red-700"
              >
                退出登录
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <Link
              to="/admin"
              onClick={() => setActiveTab('articles')}
              className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'articles'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              文章管理
            </Link>
            <Link
              to="/leads"
              className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                location.pathname === '/leads'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              线索管理
            </Link>
            <Link
              to="/content-automation"
              className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                location.pathname === '/content-automation'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              内容自动化
            </Link>
            <Link
              to="/settings"
              className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                location.pathname === '/settings'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              系统配置
            </Link>
            <Link
              to="/admin/categories"
              className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                location.pathname === '/admin/categories'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              分类管理
            </Link>
            <button
              onClick={() => setActiveTab('testimonials')}
              className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'testimonials'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              案例管理
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'articles' ? (
          <>
            <div className="grid grid-cols-4 gap-4 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs text-green-600 font-medium">+12%</span>
                </div>
                <div className="mt-3">
                  <div className="text-2xl font-bold text-slate-900">{articles.length}</div>
                  <div className="text-sm text-slate-500">文章总数</div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs text-green-600 font-medium">+28%</span>
                </div>
                <div className="mt-3">
                  <div className="text-2xl font-bold text-slate-900">
                    {articles.reduce((sum, a) => sum + (a.view_count || 0), 0).toLocaleString()}
                  </div>
                  <div className="text-sm text-slate-500">总阅读量</div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs text-green-600 font-medium">+15%</span>
                </div>
                <div className="mt-3">
                  <div className="text-2xl font-bold text-slate-900">--</div>
                  <div className="text-sm text-slate-500">线索总数</div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs text-green-600 font-medium">+3%</span>
                </div>
                <div className="mt-3">
                  <div className="text-2xl font-bold text-slate-900">12.5%</div>
                  <div className="text-sm text-slate-500">转化率</div>
                </div>
              </motion.div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-900">文章列表</h2>
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowImport(true)}
                  className="flex items-center px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  导入文章
                </button>
                <Link
                  to="/admin/articles/new"
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  新建文章
                </Link>
              </div>
            </div>

            {showImport && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-4">导入文章</h3>

                {/* 导入方式切换 */}
                <div className="flex space-x-4 mb-4">
                  <button
                    onClick={() => setImportMode('url')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      importMode === 'url'
                        ? 'bg-blue-100 text-blue-700 border border-blue-300'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    从链接导入
                  </button>
                  <button
                    onClick={() => setImportMode('file')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      importMode === 'file'
                        ? 'bg-blue-100 text-blue-700 border border-blue-300'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    上传 Markdown 文件
                  </button>
                </div>

                {importMode === 'url' ? (
                  <div className="flex space-x-3">
                    <input
                      type="url"
                      value={importUrl}
                      onChange={(e) => setImportUrl(e.target.value)}
                      placeholder="请输入文章链接"
                      className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      onClick={handleImport}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      导入
                    </button>
                    <button
                      onClick={() => setShowImport(false)}
                      className="px-6 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200"
                    >
                      取消
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">文章标题</label>
                      <input
                        type="text"
                        value={importTitle}
                        onChange={(e) => setImportTitle(e.target.value)}
                        placeholder="请输入文章标题"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Markdown 文件</label>
                      <div className="flex items-center space-x-3">
                        <label className="flex-1 cursor-pointer">
                          <div className="px-4 py-2 border border-slate-300 border-dashed rounded-lg hover:bg-slate-50 transition-colors text-center">
                            <span className="text-slate-600">
                              {importFile ? importFile.name : '点击选择 .md 或 .markdown 文件'}
                            </span>
                          </div>
                          <input
                            type="file"
                            accept=".md,.markdown"
                            onChange={(e) => {
                              const file = e.target.files?.[0] || null;
                              setImportFile(file);
                              // 自动从文件名提取标题（去掉扩展名）
                              if (file && !importTitle.trim()) {
                                const fileName = file.name.replace(/\.(md|markdown)$/i, '');
                                setImportTitle(fileName);
                              }
                            }}
                            className="hidden"
                          />
                        </label>
                        <button
                          onClick={handleImport}
                          disabled={!importFile || !importTitle.trim()}
                          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed"
                        >
                          导入
                        </button>
                        <button
                          onClick={() => {
                            setShowImport(false);
                            setImportFile(null);
                            setImportTitle('');
                          }}
                          className="px-6 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200"
                        >
                          取消
                        </button>
                      </div>
                      <p className="text-xs text-slate-500 mt-2">
                        支持 .md 和 .markdown 格式，文件内容将自动转换为 HTML
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {showForm && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  {editingArticle ? '编辑文章' : '新建文章'}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">文章标题</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">文章摘要</label>
                    <input
                      type="text"
                      value={formData.summary}
                      onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="选填，用于列表展示"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">文章内容</label>
                    <textarea
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      rows={10}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">状态</label>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="draft">草稿</option>
                      <option value="published">发布</option>
                    </select>
                  </div>
                  <div className="flex space-x-3">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      {editingArticle ? '更新' : '发布'}
                    </button>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-6 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200"
                    >
                      取消
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              </div>
            ) : articles.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
                <FileText className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-600">暂无文章</p>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-medium text-slate-700">标题</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-slate-700">状态</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-slate-700">来源</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-slate-700">浏览</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-slate-700">时间</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-slate-700">操作</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {articles.map((article) => (
                      <tr key={article.id} className="hover:bg-slate-50">
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-slate-900">{article.title}</div>
                          {article.summary && (
                            <div className="text-sm text-slate-500 truncate max-w-xs">{article.summary}</div>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                              article.status === 'published'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            {article.status === 'published' ? '已发布' : '草稿'}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600">
                          {article.source_type === 'imported' ? '导入' : '原创'}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600">
                          {article.view_count || 0}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600">
                          {article.created_at?.split('T')[0]}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleToggleStatus(article)}
                              className="p-2 text-slate-600 hover:text-blue-600"
                              title={article.status === 'published' ? '下架' : '发布'}
                            >
                              {article.status === 'published' ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                            <Link
                              to={`/admin/articles/edit/${article.id}`}
                              className="p-2 text-slate-600 hover:text-blue-600"
                              title="编辑"
                            >
                              <Edit2 className="w-4 h-4" />
                            </Link>
                            <button
                              onClick={() => handleDelete(article.id)}
                              className="p-2 text-slate-600 hover:text-red-600"
                              title="删除"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-900">客户案例列表</h2>
              <button
                onClick={() => {
                  setTestimonialForm({
                    company: '',
                    content: '',
                    result: '',
                    avatar: 'A',
                    rating: 5,
                    sort_order: 0,
                    is_active: true,
                  });
                  setEditingTestimonial({ id: '', company: '', content: '', result: '', avatar: 'A', rating: 5, is_active: true, sort_order: 0, created_at: '' });
                }}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Plus className="w-4 h-4 mr-2" />
                新建案例
              </button>
            </div>

            {editingTestimonial && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  {editingTestimonial?.id ? '编辑案例' : '新建案例'}
                </h3>
                <form onSubmit={handleTestimonialSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">公司名称</label>
                      <input
                        type="text"
                        value={testimonialForm.company}
                        onChange={(e) => setTestimonialForm({ ...testimonialForm, company: e.target.value })}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">头像标识</label>
                      <input
                        type="text"
                        value={testimonialForm.avatar}
                        onChange={(e) => setTestimonialForm({ ...testimonialForm, avatar: e.target.value })}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                        placeholder="如：A、B、C"
                        maxLength={2}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">案例内容</label>
                    <textarea
                      value={testimonialForm.content}
                      onChange={(e) => setTestimonialForm({ ...testimonialForm, content: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">成果数据</label>
                      <input
                        type="text"
                        value={testimonialForm.result}
                        onChange={(e) => setTestimonialForm({ ...testimonialForm, result: e.target.value })}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                        placeholder="如：转化率提升 300%"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">评分 (1-5)</label>
                      <input
                        type="number"
                        min={1}
                        max={5}
                        value={testimonialForm.rating}
                        onChange={(e) => setTestimonialForm({ ...testimonialForm, rating: parseInt(e.target.value) })}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">排序</label>
                      <input
                        type="number"
                        value={testimonialForm.sort_order}
                        onChange={(e) => setTestimonialForm({ ...testimonialForm, sort_order: parseInt(e.target.value) })}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="is_active"
                      checked={testimonialForm.is_active}
                      onChange={(e) => setTestimonialForm({ ...testimonialForm, is_active: e.target.checked })}
                      className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="is_active" className="text-sm text-slate-700">启用展示</label>
                  </div>
                  <div className="flex space-x-3">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      {editingTestimonial?.id ? '更新' : '创建'}
                    </button>
                    <button
                      type="button"
                      onClick={resetTestimonialForm}
                      className="px-6 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200"
                    >
                      取消
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-slate-700">公司</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-slate-700">内容</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-slate-700">成果</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-slate-700">评分</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-slate-700">状态</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-slate-700">操作</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {testimonials.map((testimonial) => (
                    <tr key={testimonial.id} className="hover:bg-slate-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center text-white font-bold">
                            {testimonial.avatar || 'A'}
                          </div>
                          <span className="font-medium text-slate-900">{testimonial.company}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-slate-600 max-w-xs truncate">{testimonial.content}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
                          {testimonial.result}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          {[...Array(testimonial.rating || 5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                            testimonial.is_active
                              ? 'bg-green-100 text-green-700'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {testimonial.is_active ? '展示中' : '已隐藏'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleToggleTestimonialStatus(testimonial)}
                            className="p-2 text-slate-600 hover:text-blue-600"
                            title={testimonial.is_active ? '隐藏' : '展示'}
                          >
                            {testimonial.is_active ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                          <button
                            onClick={() => handleEditTestimonial(testimonial)}
                            className="p-2 text-slate-600 hover:text-blue-600"
                            title="编辑"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteTestimonial(testimonial.id)}
                            className="p-2 text-slate-600 hover:text-red-600"
                            title="删除"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </main>
    </div>
    </>
  );
}
