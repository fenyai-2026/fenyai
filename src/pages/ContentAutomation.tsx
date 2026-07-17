import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { supabase } from '../supabase/client';
import { motion } from 'framer-motion';
import {
  Plus, Trash2, RefreshCw, Play, Settings,
  Globe, Rss, FileText, CheckCircle, XCircle,
  Clock, AlertCircle, Sparkles, Send
} from 'lucide-react';

interface ContentSource {
  id: string;
  name: string;
  url: string;
  source_type: string;
  category: string | null;
  is_active: boolean | null;
  last_fetch_at: string | null;
  fetch_interval_minutes: number | null;
  created_at: string | null;
}

interface RawContent {
  id: string;
  original_title: string;
  original_url: string;
  fetched_at: string | null;
  is_processed: boolean | null;
  author: string | null;
  original_content: string | null;
  published_at: string | null;
  source_id: string | null;
}

interface AIGenerationTask {
  id: string;
  status: string | null;
  generated_title: string | null;
  generated_summary: string | null;
  generated_content: string | null;
  created_at: string | null;
  completed_at: string | null;
  error_message: string | null;
  keywords: string[] | null;
  raw_content_id: string | null;
}

interface PublishTask {
  id: string;
  status: string | null;
  published_at: string | null;
  created_at: string | null;
  error_message: string | null;
  article_id: string | null;
  generation_task_id: string | null;
  scheduled_at: string | null;
  article_title?: string;
}

export default function ContentAutomation() {
  const [sources, setSources] = useState<ContentSource[]>([]);
  const [rawContents, setRawContents] = useState<RawContent[]>([]);
  const [aiTasks, setAiTasks] = useState<AIGenerationTask[]>([]);
  const [publishTasks, setPublishTasks] = useState<PublishTask[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('sources');
  const [showAddModal, setShowAddModal] = useState(false);
  const [processing, setProcessing] = useState(false);

  const [newSource, setNewSource] = useState({
    name: '',
    url: '',
    source_type: 'rss',
    category: '私域运营',
    fetch_interval_minutes: 60,
  });

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (activeTab === 'sources') {
        const { data } = await supabase
          .from('content_sources')
          .select('*')
          .order('created_at', { ascending: false });
        setSources(data || []);
      } else if (activeTab === 'raw') {
        const { data } = await supabase
          .from('raw_contents')
          .select('*')
          .order('fetched_at', { ascending: false })
          .limit(50);
        setRawContents(data || []);
      } else if (activeTab === 'ai') {
        const { data } = await supabase
          .from('ai_generation_tasks')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(50);
        setAiTasks(data || []);
      } else if (activeTab === 'publish') {
        const { data } = await supabase
          .from('publish_tasks')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(50);
        setPublishTasks(data || []);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  const addSource = async () => {
    if (!newSource.name || !newSource.url) return;

    try {
      const { error } = await supabase
        .from('content_sources')
        .insert(newSource);

      if (error) throw error;

      setShowAddModal(false);
      setNewSource({
        name: '',
        url: '',
        source_type: 'rss',
        category: '私域运营',
        fetch_interval_minutes: 60,
      });
      fetchData();
    } catch (error) {
      alert('添加失败：' + (error as Error).message);
    }
  };

  const deleteSource = async (id: string) => {
    if (!confirm('确定要删除这个内容源吗？')) return;

    try {
      const { error } = await supabase
        .from('content_sources')
        .delete()
        .eq('id', id);

      if (error) throw error;
      fetchData();
    } catch (error) {
      alert('删除失败：' + (error as Error).message);
    }
  };

  const runAutomation = async (action: string) => {
    setProcessing(true);
    try {
      // 先获取扣子配置
      const { data: settings } = await supabase
        .from('system_settings')
        .select('*')
        .in('key', ['coze_api_key', 'coze_bot_id']);

      const config: Record<string, string> = {};
      settings?.forEach((s) => {
        config[s.key] = s.value || '';
      });

      const { data, error } = await supabase.functions.invoke('content-automation', {
        body: { action, config },
      });

      if (error) throw error;

      alert(`执行成功！\n${JSON.stringify(data.results, null, 2)}`);
      fetchData();
    } catch (error) {
      alert('执行失败：' + (error as Error).message);
    }
    setProcessing(false);
  };

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      pending: 'bg-yellow-100 text-yellow-700',
      processing: 'bg-blue-100 text-blue-700',
      completed: 'bg-green-100 text-green-700',
      failed: 'bg-red-100 text-red-700',
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[status] || 'bg-gray-100'}`}>
        {status}
      </span>
    );
  };

  return (
    <>
      <Helmet>
        <title>内容自动化 - 有机云</title>
        <meta name="description" content="AI抓取行业热点，智能改写，自动发布" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">内容自动化</h1>
              <p className="text-violet-100 mt-2">AI抓取行业热点 → 智能改写 → 自动发布</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => runAutomation('fetch_sources')}
                disabled={processing}
                className="flex items-center px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${processing ? 'animate-spin' : ''}`} />
                抓取内容
              </button>
              <button
                onClick={() => runAutomation('generate_content')}
                disabled={processing}
                className="flex items-center px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors disabled:opacity-50"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                AI改写
              </button>
              <button
                onClick={() => runAutomation('publish_content')}
                disabled={processing}
                className="flex items-center px-4 py-2 bg-white text-violet-600 rounded-lg hover:bg-violet-50 transition-colors disabled:opacity-50"
              >
                <Send className="w-4 h-4 mr-2" />
                发布文章
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 标签页 */}
        <div className="flex space-x-1 bg-white rounded-xl p-1 shadow-sm mb-6">
          {[
            { id: 'sources', label: '内容源', icon: Globe },
            { id: 'raw', label: '原始内容', icon: FileText },
            { id: 'ai', label: 'AI改写', icon: Sparkles },
            { id: 'publish', label: '发布任务', icon: Send },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-violet-100 text-violet-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <tab.icon className="w-4 h-4 mr-2" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* 内容源管理 */}
        {activeTab === 'sources' && (
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-900">内容源配置</h2>
              <button
                onClick={() => setShowAddModal(true)}
                className="flex items-center px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
              >
                <Plus className="w-4 h-4 mr-2" />
                添加内容源
              </button>
            </div>

            {loading ? (
              <div className="p-8 text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-violet-600 mx-auto"></div>
              </div>
            ) : sources.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                暂无内容源，点击上方按钮添加
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {sources.map((source) => (
                  <div key={source.id} className="p-6 flex items-center justify-between hover:bg-gray-50">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        source.source_type === 'rss' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'
                      }`}>
                        {source.source_type === 'rss' ? <Rss className="w-5 h-5" /> : <Globe className="w-5 h-5" />}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{source.name}</h3>
                        <p className="text-sm text-gray-500">{source.url}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xs px-2 py-0.5 bg-gray-100 rounded">{source.category}</span>
                          <span className="text-xs text-gray-400">
                            每{source.fetch_interval_minutes}分钟抓取
                          </span>
                          {source.last_fetch_at && (
                            <span className="text-xs text-gray-400">
                              上次: {new Date(source.last_fetch_at).toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        source.is_active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {source.is_active ? '启用' : '停用'}
                      </span>
                      <button
                        onClick={() => deleteSource(source.id)}
                        className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 原始内容 */}
        {activeTab === 'raw' && (
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">抓取的原内容</h2>
            </div>
            {loading ? (
              <div className="p-8 text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-violet-600 mx-auto"></div>
              </div>
            ) : rawContents.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                暂无原始内容，请先执行"抓取内容"
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {rawContents.map((content) => (
                  <div key={content.id} className="p-6 hover:bg-gray-50">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{content.original_title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{content.original_url}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {content.fetched_at ? new Date(content.fetched_at).toLocaleString() : '-'}
                          </span>
                          {getStatusBadge(content.is_processed ? 'completed' : 'pending')}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* AI改写任务 */}
        {activeTab === 'ai' && (
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">AI改写任务</h2>
            </div>
            {loading ? (
              <div className="p-8 text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-violet-600 mx-auto"></div>
              </div>
            ) : aiTasks.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                暂无AI改写任务，请先执行"AI改写"
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {aiTasks.map((task) => (
                  <div key={task.id} className="p-6 hover:bg-gray-50">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">
                          {task.generated_title || '处理中...'}
                        </h3>
                        {task.generated_summary && (
                          <p className="text-sm text-gray-500 mt-1 line-clamp-2">{task.generated_summary}</p>
                        )}
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {task.created_at ? new Date(task.created_at).toLocaleString() : '-'}
                          </span>
                          {getStatusBadge(task.status || 'pending')}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 发布任务 */}
        {activeTab === 'publish' && (
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">发布任务</h2>
            </div>
            {loading ? (
              <div className="p-8 text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-violet-600 mx-auto"></div>
              </div>
            ) : publishTasks.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                暂无发布任务，请先执行"发布文章"
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {publishTasks.map((task) => (
                  <div key={task.id} className="p-6 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {task.status === 'completed' ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : task.status === 'failed' ? (
                          <XCircle className="w-5 h-5 text-red-500" />
                        ) : (
                          <Clock className="w-5 h-5 text-yellow-500" />
                        )}
                        <span className="text-sm text-gray-600">任务 #{task.id.slice(0, 8)}</span>
                      </div>
                      {getStatusBadge(task.status || 'pending')}
                    </div>
                    {task.published_at && (
                      <p className="text-xs text-gray-400 mt-2">
                        发布时间: {task.published_at ? new Date(task.published_at).toLocaleString() : '-'}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* 添加内容源弹窗 */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-6 w-full max-w-md"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">添加内容源</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">名称</label>
                <input
                  type="text"
                  value={newSource.name}
                  onChange={(e) => setNewSource({ ...newSource, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  placeholder="例如：36氪私域运营"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">URL</label>
                <input
                  type="url"
                  value={newSource.url}
                  onChange={(e) => setNewSource({ ...newSource, url: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  placeholder="https://..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">类型</label>
                <select
                  value={newSource.source_type}
                  onChange={(e) => setNewSource({ ...newSource, source_type: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                >
                  <option value="rss">RSS订阅</option>
                  <option value="web">网页</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">分类</label>
                <select
                  value={newSource.category}
                  onChange={(e) => setNewSource({ ...newSource, category: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                >
                  <option value="私域运营">私域运营</option>
                  <option value="客户案例">客户案例</option>
                  <option value="产品更新">产品更新</option>
                  <option value="行业资讯">行业资讯</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">抓取间隔（分钟）</label>
                <input
                  type="number"
                  value={newSource.fetch_interval_minutes}
                  onChange={(e) => setNewSource({ ...newSource, fetch_interval_minutes: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  min={10}
                />
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                取消
              </button>
              <button
                onClick={addSource}
                className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700"
              >
                添加
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
    </>
  );
}
