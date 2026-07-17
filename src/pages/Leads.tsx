import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { supabase } from '../supabase/client';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Phone, Building2, User, MessageSquare, Clock, ArrowLeft, X, Eye, Download, Filter } from 'lucide-react';
import * as XLSX from 'xlsx';
import { useSiteFavicon } from '../hooks/useSiteFavicon';

interface Lead {
  id: string;
  name: string;
  company: string | null;
  phone: string;
  requirement: string | null;
  created_at: string | null;
  updated_at: string | null;
      status: 'pending' | 'processed' | string | null;
}

export default function Leads() {
  useSiteFavicon();
  const navigate = useNavigate();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [session, setSession] = useState<any>(null);
  const [filterStatus, setFilterStatus] = useState<'all' | 'pending' | 'processed'>('all');

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (!session) {
        navigate('/admin/login');
      } else {
        fetchLeads();
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
    if (filterStatus === 'all') {
      setFilteredLeads(leads);
    } else {
      setFilteredLeads(leads.filter(lead => lead.status === filterStatus));
    }
  }, [leads, filterStatus]);

  const fetchLeads = async () => {
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching leads:', error);
    } else {
      setLeads(data || []);
    }
    setLoading(false);
  };

  const handleProcess = async (id: string) => {
    const { error } = await supabase
      .from('leads')
      .update({ status: 'processed' })
      .eq('id', id);
    
    if (!error) {
      fetchLeads();
      if (selectedLead?.id === id) {
        setSelectedLead({ ...selectedLead, status: 'processed' });
      }
    }
  };

  const exportToExcel = () => {
    const exportData = filteredLeads.map(lead => ({
      '姓名': lead.name,
      '公司': lead.company || '-',
      '电话': lead.phone,
      '需求': lead.requirement || '-',
      '状态': lead.status === 'processed' ? '已处理' : '待处理',
      '提交时间': lead.created_at ? new Date(lead.created_at).toLocaleString('zh-CN') : '-'
    }));
    
    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, '线索数据');
    XLSX.writeFile(wb, `线索数据_${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  if (!session) return null;
  if (loading) return (
    <div className="min-h-screen bg-[#F0F9FF] flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0EA5E9]"></div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>线索管理 - 有机云</title>
        <meta name="description" content="管理客户线索，跟踪转化进度" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
    <div className="min-h-screen bg-[#F0F9FF] pt-16">
      <div className="bg-gradient-to-br from-[#0C4A6E] via-[#0EA5E9] to-[#38BDF8] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">线索管理</h1>
              <p className="text-white/80 mt-1">管理客户咨询线索</p>
            </div>
            <button onClick={() => navigate('/admin')} className="flex items-center px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />返回后台
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-white rounded-lg shadow-sm border border-[#0EA5E9]/10 p-1">
              <Filter className="w-4 h-4 text-[#0EA5E9] ml-2" />
              {(['all', 'pending', 'processed'] as const).map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filterStatus === status
                      ? 'bg-[#0EA5E9] text-white'
                      : 'text-[#0C4A6E] hover:bg-[#0EA5E9]/10'
                  }`}
                >
                  {status === 'all' ? '全部' : status === 'pending' ? '待处理' : '已处理'}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={exportToExcel}
            className="flex items-center px-4 py-2 bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] text-white rounded-lg hover:from-[#0284C7] hover:to-[#0EA5E9] transition-all"
          >
            <Download className="w-4 h-4 mr-2" />导出Excel
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-[#0EA5E9]/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#F0F9FF]">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#0C4A6E]">客户信息</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#0C4A6E]">联系方式</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#0C4A6E]">需求描述</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#0C4A6E]">提交时间</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#0C4A6E]">状态</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#0C4A6E]">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredLeads.length === 0 ? (
                  <tr><td colSpan={6} className="px-6 py-12 text-center text-slate-500">暂无线索数据</td></tr>
                ) : (
                  filteredLeads.map((lead, index) => (
                    <motion.tr
                      key={lead.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="hover:bg-slate-50 transition-colors cursor-pointer"
                      onClick={() => setSelectedLead(lead)}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#38BDF8] flex items-center justify-center">
                            <User className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-medium text-[#0C4A6E]">{lead.name}</div>
                            <div className="flex items-center text-sm text-slate-500">
                              <Building2 className="w-3 h-3 mr-1" />{lead.company || '-'}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center text-slate-600">
                          <Phone className="w-4 h-4 mr-2 text-[#0EA5E9]" />{lead.phone}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-start text-slate-600 max-w-xs">
                          <MessageSquare className="w-4 h-4 mr-2 text-[#0EA5E9] flex-shrink-0 mt-0.5" />
                          <span className="truncate">{lead.requirement || '-'}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center text-slate-500 text-sm">
                          <Clock className="w-4 h-4 mr-2" />{lead.created_at ? new Date(lead.created_at).toLocaleString('zh-CN') : '-'}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          lead.status === 'processed' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {lead.status === 'processed' ? '已处理' : '待处理'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <button onClick={(e) => { e.stopPropagation(); setSelectedLead(lead); }} className="flex items-center px-3 py-1.5 text-[#0EA5E9] hover:bg-[#0EA5E9]/10 rounded-lg transition-colors">
                            <Eye className="w-4 h-4 mr-1" />查看
                          </button>
                          {lead.status === 'pending' && (
                            <button onClick={(e) => { e.stopPropagation(); handleProcess(lead.id); }} className="flex items-center px-3 py-1.5 bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] text-white text-sm font-medium rounded-lg hover:from-[#0284C7] hover:to-[#0EA5E9] transition-all">
                              <Check className="w-4 h-4 mr-1" />标记已处理
                            </button>
                          )}
                        </div>
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedLead && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setSelectedLead(null)}>
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} onClick={(e) => e.stopPropagation()} className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] px-6 py-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">线索详情</h3>
                  <button onClick={() => setSelectedLead(null)} className="p-1 text-white/80 hover:text-white hover:bg-white/20 rounded-lg transition-colors"><X className="w-5 h-5" /></button>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#38BDF8] flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-[#0C4A6E]">{selectedLead.name}</div>
                    <div className="flex items-center text-sm text-slate-500">
                      <Building2 className="w-4 h-4 mr-1" />{selectedLead.company || '未填写公司'}
                    </div>
                  </div>
                </div>
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="flex items-center"><Phone className="w-5 h-5 text-[#0EA5E9] mr-3" /><div><div className="text-sm text-slate-500">联系电话</div><div className="font-medium text-[#0C4A6E]">{selectedLead.phone}</div></div></div>
                  <div className="flex items-start"><MessageSquare className="w-5 h-5 text-[#0EA5E9] mr-3 mt-0.5" /><div><div className="text-sm text-slate-500">需求描述</div><div className="font-medium text-[#0C4A6E] mt-1">{selectedLead.requirement || '未填写需求'}</div></div></div>
                  <div className="flex items-center"><Clock className="w-5 h-5 text-[#0EA5E9] mr-3" /><div><div className="text-sm text-slate-500">提交时间</div><div className="font-medium text-[#0C4A6E]">{selectedLead.created_at ? new Date(selectedLead.created_at).toLocaleString('zh-CN') : '-'}</div></div></div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 mr-3" />
                    <div>
                      <div className="text-sm text-slate-500">处理状态</div>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mt-1 ${selectedLead.status === 'processed' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                        {selectedLead.status === 'processed' ? '已处理' : '待处理'}
                      </span>
                    </div>
                  </div>
                </div>
                {selectedLead.status === 'pending' && (
                  <div className="pt-4 border-t border-slate-100">
                    <button onClick={() => handleProcess(selectedLead.id)} className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] text-white font-semibold rounded-xl hover:from-[#0284C7] hover:to-[#0EA5E9] transition-all">
                      <Check className="w-5 h-5 mr-2" />标记为已处理
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </>
  );
}
