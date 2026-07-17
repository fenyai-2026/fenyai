import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { supabase } from '../supabase/client';
import { motion } from 'framer-motion';
import {
  Save, RefreshCw, Key, Globe, Mail, Phone,
  Bot, ToggleLeft, ToggleRight, Clock, Shield,
  Image as ImageIcon, Upload, X, Trash2, Fingerprint
} from 'lucide-react';
import { decode } from 'base64-arraybuffer';
import { useSiteFavicon } from '../hooks/useSiteFavicon';

interface Setting {
  id: string;
  key: string;
  value: string | null;
  description: string | null;
  category: string | null;
  is_encrypted: boolean | null;
}

interface FileState {
  url: string | null;
  file: File | null;
  preview: string | null;
}

const categoryLabels: Record<string, { label: string; icon: any; color: string }> = {
  ai: { label: 'AI配置', icon: Bot, color: 'from-violet-500 to-purple-500' },
  automation: { label: '自动化设置', icon: RefreshCw, color: 'from-blue-500 to-cyan-500' },
  site: { label: '网站信息', icon: Globe, color: 'from-emerald-500 to-teal-500' },
  contact: { label: '联系方式', icon: Mail, color: 'from-orange-500 to-amber-500' },
  general: { label: '通用设置', icon: Shield, color: 'from-slate-500 to-slate-400' },
};

const LOGO_ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg', 'image/svg+xml'];
const LOGO_MAX_SIZE = 2 * 1024 * 1024;
const FAVICON_ALLOWED_TYPES = ['image/x-icon', 'image/vnd.microsoft.icon', 'image/png', 'image/svg+xml'];
const FAVICON_MAX_SIZE = 1 * 1024 * 1024;

export default function Settings() {
  useSiteFavicon();
  const [settings, setSettings] = useState<Setting[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editedSettings, setEditedSettings] = useState<Record<string, string>>({});
  const [logo, setLogo] = useState<FileState>({ url: null, file: null, preview: null });
  const [favicon, setFavicon] = useState<FileState>({ url: null, file: null, preview: null });
  const [isUploadingLogo, setIsUploadingLogo] = useState(false);
  const [isUploadingFavicon, setIsUploadingFavicon] = useState(false);
  const [logoError, setLogoError] = useState<string | null>(null);
  const [faviconError, setFaviconError] = useState<string | null>(null);
  const [logoDragActive, setLogoDragActive] = useState(false);
  const [faviconDragActive, setFaviconDragActive] = useState(false);
  const logoInputRef = useRef<HTMLInputElement>(null);
  const faviconInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchSettings();
    fetchLogo();
    fetchFavicon();
  }, []);

  const fetchSettings = async () => {
    try {
      const { data, error } = await supabase
        .from('system_settings')
        .select('*')
        .order('category', { ascending: true })
        .order('key', { ascending: true });

      if (error) throw error;
      setSettings(data || []);

      const initialEdits: Record<string, string> = {};
      data?.forEach((s) => {
        initialEdits[s.key] = s.value || '';
      });
      setEditedSettings(initialEdits);
    } catch (error) {
      console.error('Error fetching settings:', error);
    }
    setLoading(false);
  };

  const fetchLogo = async () => {
    try {
      const { data, error } = await supabase
        .from('system_settings')
        .select('value')
        .eq('key', 'site_logo_url')
        .maybeSingle();

      if (error) throw error;
      if (data?.value && data.value !== '') {
        setLogo({ url: data.value, file: null, preview: data.value });
      } else {
        setLogo({ url: null, file: null, preview: null });
      }
    } catch (error) {
      console.error('Error fetching logo:', error);
    }
  };

  const fetchFavicon = async () => {
    try {
      const { data, error } = await supabase
        .from('system_settings')
        .select('value')
        .eq('key', 'site_favicon_url')
        .maybeSingle();

      if (error) throw error;
      if (data?.value && data.value !== '') {
        setFavicon({ url: data.value, file: null, preview: data.value });
      } else {
        setFavicon({ url: null, file: null, preview: null });
      }
    } catch (error) {
      console.error('Error fetching favicon:', error);
    }
  };

  const validateLogoFile = (file: File): string | null => {
    if (!LOGO_ALLOWED_TYPES.includes(file.type)) {
      return '仅支持 PNG、JPG、SVG 格式的图片';
    }
    if (file.size > LOGO_MAX_SIZE) {
      return '文件大小不能超过 2MB';
    }
    return null;
  };

  const validateFaviconFile = (file: File): string | null => {
    if (!FAVICON_ALLOWED_TYPES.includes(file.type)) {
      return '仅支持 ICO、PNG 格式的图标';
    }
    if (file.size > FAVICON_MAX_SIZE) {
      return '文件大小不能超过 1MB';
    }
    return null;
  };

  const handleLogoDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setLogoDragActive(true);
    } else if (e.type === 'dragleave') {
      setLogoDragActive(false);
    }
  }, []);

  const handleFaviconDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setFaviconDragActive(true);
    } else if (e.type === 'dragleave') {
      setFaviconDragActive(false);
    }
  }, []);

  const handleLogoDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLogoDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleLogoFileSelect(e.dataTransfer.files[0]);
    }
  }, []);

  const handleFaviconDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFaviconDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFaviconFileSelect(e.dataTransfer.files[0]);
    }
  }, []);

  const handleLogoFileSelect = (file: File) => {
    setLogoError(null);
    const error = validateLogoFile(file);
    if (error) {
      setLogoError(error);
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      setLogo({ url: null, file: file, preview: e.target?.result as string });
    };
    reader.readAsDataURL(file);
  };

  const handleFaviconFileSelect = (file: File) => {
    setFaviconError(null);
    const error = validateFaviconFile(file);
    if (error) {
      setFaviconError(error);
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      setFavicon({ url: null, file: file, preview: e.target?.result as string });
    };
    reader.readAsDataURL(file);
  };

  const uploadLogo = async () => {
    if (!logo.file) return;
    setIsUploadingLogo(true);
    setLogoError(null);
    try {
      const ext = logo.file.name.split('.').pop() || 'png';
      const path = `logo/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
      const reader = new FileReader();
      const base64 = await new Promise<string>((resolve) => {
        reader.onload = (e) => resolve((e.target?.result as string).split(',')[1]);
        reader.readAsDataURL(logo.file!);
      });
      const { data, error } = await supabase.storage
        .from('site-assets')
        .upload(path, decode(base64), { contentType: logo.file.type, upsert: false });
      if (error) throw error;
      const { data: { publicUrl } } = supabase.storage.from('site-assets').getPublicUrl(data.path);
      const { error: upsertError } = await supabase
        .from('system_settings')
        .upsert({ key: 'site_logo_url', value: publicUrl, updated_at: new Date().toISOString() }, { onConflict: 'key' });
      if (upsertError) throw upsertError;
      const urlWithTimestamp = `${publicUrl}?t=${Date.now()}`;
      setLogo({ url: urlWithTimestamp, file: null, preview: urlWithTimestamp });
      alert('LOGO上传成功，页面即将刷新...');
      setTimeout(() => window.location.reload(), 500);
    } catch (err) {
      setLogoError('上传失败：' + (err as Error).message);
    } finally {
      setIsUploadingLogo(false);
    }
  };

  const uploadFavicon = async () => {
    if (!favicon.file) return;
    setIsUploadingFavicon(true);
    setFaviconError(null);
    try {
      const ext = favicon.file.name.split('.').pop() || 'png';
      const path = `favicon/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
      const reader = new FileReader();
      const base64 = await new Promise<string>((resolve) => {
        reader.onload = (e) => resolve((e.target?.result as string).split(',')[1]);
        reader.readAsDataURL(favicon.file!);
      });
      const { data, error } = await supabase.storage
        .from('site-assets')
        .upload(path, decode(base64), { contentType: favicon.file.type, upsert: false });
      if (error) throw error;
      const { data: { publicUrl } } = supabase.storage.from('site-assets').getPublicUrl(data.path);
      const { error: upsertError } = await supabase
        .from('system_settings')
        .upsert({ key: 'site_favicon_url', value: publicUrl, updated_at: new Date().toISOString() }, { onConflict: 'key' });
      if (upsertError) throw upsertError;
      setFavicon({ url: publicUrl, file: null, preview: publicUrl });
      updateFaviconLink(publicUrl);
      alert('Favicon上传成功');
    } catch (err) {
      setFaviconError('上传失败：' + (err as Error).message);
    } finally {
      setIsUploadingFavicon(false);
    }
  };

  const updateFaviconLink = (url: string) => {
    const link = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    const shortcut = document.querySelector('link[rel="shortcut icon"]') as HTMLLinkElement;
    if (link) link.href = url;
    if (shortcut) shortcut.href = url;
  };

  const deleteLogo = async () => {
    if (!logo.url) return;
    try {
      const path = logo.url.split('/').pop();
      if (path) await supabase.storage.from('site-assets').remove([`logo/${path}`]);
      await supabase.from('system_settings').update({ value: null, updated_at: new Date().toISOString() }).eq('key', 'site_logo_url');
      setLogo({ url: null, file: null, preview: null });
      alert('LOGO已删除');
    } catch (err) {
      alert('删除失败：' + (err as Error).message);
    }
  };

  const deleteFavicon = async () => {
    if (!favicon.url) return;
    try {
      const path = favicon.url.split('/').pop();
      if (path) await supabase.storage.from('site-assets').remove([`favicon/${path}`]);
      await supabase.from('system_settings').update({ value: null, updated_at: new Date().toISOString() }).eq('key', 'site_favicon_url');
      setFavicon({ url: null, file: null, preview: null });
      updateFaviconLink('');
      alert('Favicon已删除');
    } catch (err) {
      alert('删除失败：' + (err as Error).message);
    }
  };

  const handleValueChange = (key: string, value: string) => {
    setEditedSettings((prev) => ({ ...prev, [key]: value }));
  };

  const handleToggleChange = (key: string) => {
    const currentValue = editedSettings[key];
    const newValue = currentValue === 'true' ? 'false' : 'true';
    setEditedSettings((prev) => ({ ...prev, [key]: newValue }));
  };

  const saveSettings = async () => {
    setSaving(true);
    try {
      const updates = Object.entries(editedSettings).map(([key, value]) => ({ key, value, updated_at: new Date().toISOString() }));
      for (const update of updates) {
        const { error } = await supabase.from('system_settings').update({ value: update.value, updated_at: update.updated_at }).eq('key', update.key);
        if (error) throw error;
      }
      alert('设置保存成功');
      fetchSettings();
    } catch (error) {
      alert('保存失败：' + (error as Error).message);
    }
    setSaving(false);
  };

  const groupedSettings = settings.reduce((acc, setting) => {
    const category = setting.category || 'general';
    if (!acc[category]) acc[category] = [];
    acc[category].push(setting);
    return acc;
  }, {} as Record<string, Setting[]>);

  const renderSettingInput = (setting: Setting) => {
    const value = editedSettings[setting.key] || '';
    if (value === 'true' || value === 'false') {
      return (
        <button onClick={() => handleToggleChange(setting.key)} className="flex items-center space-x-2">
          {value === 'true' ? <ToggleRight className="w-8 h-8 text-emerald-500" /> : <ToggleLeft className="w-8 h-8 text-gray-400" />}
          <span className="text-sm text-gray-600">{value === 'true' ? '已启用' : '已禁用'}</span>
        </button>
      );
    }
    if (setting.key.includes('interval') || setting.key.includes('minutes')) {
      return (
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4 text-gray-400" />
          <input type="number" value={value} onChange={(e) => handleValueChange(setting.key, e.target.value)} className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent" min={1} />
          <span className="text-sm text-gray-500">分钟</span>
        </div>
      );
    }
    if (setting.is_encrypted || setting.key.includes('key') || setting.key.includes('secret')) {
      return (
        <div className="flex items-center space-x-2">
          <Key className="w-4 h-4 text-gray-400" />
          <input type="password" value={value} onChange={(e) => handleValueChange(setting.key, e.target.value)} className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent font-mono text-sm" placeholder={`请输入${setting.description}`} />
        </div>
      );
    }
    return <input type="text" value={value} onChange={(e) => handleValueChange(setting.key, e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent" placeholder={setting.description || ''} />;
  };

  return (
    <>
      <Helmet>
        <title>系统设置 - 有机云</title>
        <meta name="description" content="有机云系统设置" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-slate-700 to-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">系统配置</h1>
              <p className="text-slate-300 mt-2">管理网站和自动化系统的各项配置</p>
            </div>
            <button onClick={saveSettings} disabled={saving} className="flex items-center px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors disabled:opacity-50 font-medium">
              <Save className="w-5 h-5 mr-2" />
              {saving ? '保存中...' : '保存设置'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center"><ImageIcon className="w-5 h-5 text-white" /></div>
              <h2 className="text-lg font-semibold text-white">网站LOGO</h2>
            </div>
          </div>
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div onDragEnter={handleLogoDrag} onDragLeave={handleLogoDrag} onDragOver={handleLogoDrag} onDrop={handleLogoDrop} onClick={() => logoInputRef.current?.click()} className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-200 ${logoDragActive ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'}`}>
                  <input ref={logoInputRef} type="file" accept=".png,.jpg,.jpeg,.svg" onChange={(e) => e.target.files?.[0] && handleLogoFileSelect(e.target.files[0])} className="hidden" />
                  {logo.preview ? (
                    <div className="relative">
                      <img src={logo.preview} alt="LOGO预览" className="max-h-32 mx-auto object-contain" />
                      {logo.file && <div className="absolute -top-2 -right-2"><span className="px-2 py-1 bg-amber-500 text-white text-xs rounded-full">待上传</span></div>}
                    </div>
                  ) : (
                    <div className="space-y-3"><Upload className="w-12 h-12 mx-auto text-gray-400" /><div><p className="text-gray-700 font-medium">点击或拖拽上传LOGO</p><p className="text-gray-500 text-sm mt-1">支持 PNG、JPG、SVG 格式</p></div></div>
                  )}
                </div>
                {logoError && <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2"><X className="w-4 h-4 text-red-500" /><span className="text-sm text-red-700">{logoError}</span></div>}
                <div className="mt-4 flex items-center space-x-3 text-sm text-gray-500"><Shield className="w-4 h-4" /><span>文件大小限制：2MB</span></div>
              </div>
              <div className="w-full md:w-64 space-y-3">
                {logo.file ? (
                  <>
                    <button onClick={uploadLogo} disabled={isUploadingLogo} className="w-full flex items-center justify-center px-4 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors disabled:opacity-50 font-medium">
                      {isUploadingLogo ? <><div className="w-4 h-4 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin" />上传中...</> : <><Upload className="w-4 h-4 mr-2" />确认上传</>}
                    </button>
                    <button onClick={() => setLogo({ url: logo.url, file: null, preview: logo.url })} className="w-full flex items-center justify-center px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"><X className="w-4 h-4 mr-2" />取消</button>
                  </>
                ) : logo.url ? (
                  <button onClick={deleteLogo} className="w-full flex items-center justify-center px-4 py-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-medium"><Trash2 className="w-4 h-4 mr-2" />删除LOGO</button>
                ) : null}
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="text-sm font-medium text-blue-900 mb-2">使用说明</h4>
                  <ul className="text-xs text-blue-700 space-y-1"><li>• 上传后LOGO将自动应用到全站</li><li>• 建议尺寸：200x50 像素</li><li>• 透明背景PNG效果最佳</li></ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center"><Fingerprint className="w-5 h-5 text-white" /></div>
              <h2 className="text-lg font-semibold text-white">网站Favicon</h2>
            </div>
          </div>
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div onDragEnter={handleFaviconDrag} onDragLeave={handleFaviconDrag} onDragOver={handleFaviconDrag} onDrop={handleFaviconDrop} onClick={() => faviconInputRef.current?.click()} className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-200 ${faviconDragActive ? 'border-amber-500 bg-amber-50' : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'}`}>
                  <input ref={faviconInputRef} type="file" accept=".ico,.png,.svg" onChange={(e) => e.target.files?.[0] && handleFaviconFileSelect(e.target.files[0])} className="hidden" />
                  {favicon.preview ? (
                    <div className="relative">
                      <img src={favicon.preview} alt="Favicon预览" className="w-16 h-16 mx-auto object-contain rounded" />
                      {favicon.file && <div className="absolute -top-2 -right-2"><span className="px-2 py-1 bg-amber-500 text-white text-xs rounded-full">待上传</span></div>}
                    </div>
                  ) : (
                    <div className="space-y-3"><Upload className="w-12 h-12 mx-auto text-gray-400" /><div><p className="text-gray-700 font-medium">点击或拖拽上传Favicon</p><p className="text-gray-500 text-sm mt-1">支持 ICO、PNG、SVG 格式</p></div></div>
                  )}
                </div>
                {faviconError && <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2"><X className="w-4 h-4 text-red-500" /><span className="text-sm text-red-700">{faviconError}</span></div>}
                <div className="mt-4 flex items-center space-x-3 text-sm text-gray-500"><Shield className="w-4 h-4" /><span>文件大小限制：1MB</span></div>
              </div>
              <div className="w-full md:w-64 space-y-3">
                {favicon.file ? (
                  <>
                    <button onClick={uploadFavicon} disabled={isUploadingFavicon} className="w-full flex items-center justify-center px-4 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors disabled:opacity-50 font-medium">
                      {isUploadingFavicon ? <><div className="w-4 h-4 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin" />上传中...</> : <><Upload className="w-4 h-4 mr-2" />确认上传</>}
                    </button>
                    <button onClick={() => setFavicon({ url: favicon.url, file: null, preview: favicon.url })} className="w-full flex items-center justify-center px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"><X className="w-4 h-4 mr-2" />取消</button>
                  </>
                ) : favicon.url ? (
                  <button onClick={deleteFavicon} className="w-full flex items-center justify-center px-4 py-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-medium"><Trash2 className="w-4 h-4 mr-2" />删除Favicon</button>
                ) : null}
                <div className="p-4 bg-amber-50 rounded-lg">
                  <h4 className="text-sm font-medium text-amber-900 mb-2">使用说明</h4>
                  <ul className="text-xs text-amber-700 space-y-1"><li>• 上传后自动更新浏览器标签页图标</li><li>• 建议尺寸：32x32 或 64x64 像素</li><li>• ICO格式兼容性最佳，SVG支持高清显示</li></ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {loading ? (
          <div className="flex items-center justify-center py-20"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-violet-600"></div></div>
        ) : (
          <div className="space-y-8">
            {Object.entries(groupedSettings).map(([category, categorySettings]) => {
              const categoryInfo = categoryLabels[category] || categoryLabels.general;
              const Icon = categoryInfo.icon;
              return (
                <motion.div key={category} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  <div className={`bg-gradient-to-r ${categoryInfo.color} px-6 py-4`}>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center"><Icon className="w-5 h-5 text-white" /></div>
                      <h2 className="text-lg font-semibold text-white">{categoryInfo.label}</h2>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid gap-6">
                      {categorySettings.map((setting) => (
                        <div key={setting.key} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 p-4 bg-gray-50 rounded-xl">
                          <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-900 mb-1">{setting.description || setting.key}</label>
                            <p className="text-xs text-gray-500 font-mono">{setting.key}</p>
                          </div>
                          <div className="sm:w-80">{renderSettingInput(setting)}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-sm font-semibold text-blue-900 mb-3 flex items-center"><Shield className="w-4 h-4 mr-2" />配置说明</h3>
          <ul className="text-sm text-blue-700 space-y-2">
            <li>• <strong>扣子API密钥</strong>：从扣子平台获取的API Key，用于AI内容改写</li>
            <li>• <strong>扣子Bot ID</strong>：扣子机器人的唯一标识</li>
            <li>• <strong>自动抓取/生成/发布</strong>：开启后系统会自动执行对应操作</li>
            <li>• <strong>抓取间隔</strong>：设置多久抓取一次新内容（建议60分钟以上）</li>
            <li>• 修改配置后点击"保存设置"按钮生效</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}
