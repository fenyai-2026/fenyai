import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase/client';
import { motion } from 'framer-motion';
import { Plus, Edit2, Trash2, ArrowLeft, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

interface Category {
  id: string;
  name: string;
  slug: string;
  sort: number | null;
}

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [formData, setFormData] = useState({ name: '', slug: '', sort: 0 });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const { data } = await supabase.from('categories').select('*').order('sort');
    if (data) setCategories(data);
    setLoading(false);
  };

  const generateSlug = (name: string) => {
    return name.toLowerCase().replace(/[^\u4e00-\u9fa5a-z0-9]/g, '-').replace(/-+/g, '-');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = { ...formData, slug: formData.slug || generateSlug(formData.name) };
    
    if (editingCategory) {
      await supabase.from('categories').update(data).eq('id', editingCategory.id);
    } else {
      await supabase.from('categories').insert([data]);
    }
    
    setShowForm(false);
    setEditingCategory(null);
    setFormData({ name: '', slug: '', sort: 0 });
    fetchCategories();
  };

  const handleEdit = (category: Category) => {
    setEditingCategory(category);
    setFormData({ name: category.name, slug: category.slug, sort: category.sort || 0 });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('确定删除此分类？')) return;
    await supabase.from('categories').delete().eq('id', id);
    fetchCategories();
  };

  return (
    <>
      <Helmet>
        <title>分类管理 - 有机云</title>
        <meta name="description" content="文章分类管理" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link to="/admin" className="flex items-center text-slate-600 hover:text-slate-900">
                <ArrowLeft className="w-5 h-5 mr-2" />
                返回后台
              </Link>
              <h1 className="text-xl font-bold text-slate-900">分类管理</h1>
            </div>
            <button
              onClick={() => { setShowForm(true); setEditingCategory(null); setFormData({ name: '', slug: '', sort: 0 }); }}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              新建分类
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showForm && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">{editingCategory ? '编辑分类' : '新建分类'}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">分类名称</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Slug</label>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="自动生成"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">排序</label>
                  <input
                    type="number"
                    value={formData.sort}
                    onChange={(e) => setFormData({ ...formData, sort: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="flex space-x-3">
                <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  {editingCategory ? '更新' : '创建'}
                </button>
                <button type="button" onClick={() => setShowForm(false)} className="px-6 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200">
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
                <th className="px-6 py-3 text-left text-sm font-medium text-slate-700">名称</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-slate-700">Slug</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-slate-700">排序</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-slate-700">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {categories.map((cat) => (
                <tr key={cat.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4 flex items-center space-x-2">
                    <Tag className="w-4 h-4 text-blue-500" />
                    <span className="font-medium text-slate-900">{cat.name}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{cat.slug}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{cat.sort}</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button onClick={() => handleEdit(cat)} className="p-2 text-slate-600 hover:text-blue-600">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDelete(cat.id)} className="p-2 text-slate-600 hover:text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
    </>
  );
}
