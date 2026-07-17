import React from 'react';
import { motion } from 'framer-motion';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar, Legend
} from 'recharts';
import { TrendingUp, Users, FileText, MousePointer } from 'lucide-react';

const viewData = [
  { date: '1月', views: 1200 },
  { date: '2月', views: 1800 },
  { date: '3月', views: 2400 },
  { date: '4月', views: 3200 },
  { date: '5月', views: 2800 },
  { date: '6月', views: 4500 },
];

const sourceData = [
  { name: '搜索', value: 45 },
  { name: '直接访问', value: 30 },
  { name: '社交媒体', value: 15 },
  { name: '其他', value: 10 },
];

const conversionData = [
  { name: '首页', rate: 12 },
  { name: '产品页', rate: 28 },
  { name: '价格页', rate: 45 },
  { name: '联系页', rate: 68 },
];

const COLORS = ['#0EA5E9', '#38BDF8', '#7DD3FC', '#BAE6FD'];

const stats = [
  { icon: FileText, label: '文章总数', value: '156', change: '+12%' },
  { icon: Eye, label: '总阅读量', value: '45.2K', change: '+28%' },
  { icon: Users, label: '线索总数', value: '328', change: '+15%' },
  { icon: TrendingUp, label: '转化率', value: '12.5%', change: '+3%' },
];

export default function StatsDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-4 shadow-sm border border-sky-100"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs text-green-600 font-medium">{stat.change}</span>
            </div>
            <div className="mt-3">
              <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-sky-100">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">文章阅读趋势</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={viewData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="date" stroke="#64748B" fontSize={12} />
              <YAxis stroke="#64748B" fontSize={12} />
              <Tooltip />
              <Line type="monotone" dataKey="views" stroke="#0EA5E9" strokeWidth={2} dot={{ fill: '#0EA5E9' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-sky-100">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">线索来源分布</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={sourceData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value">
                {sourceData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-sky-100 col-span-2">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">页面转化率</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={conversionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="name" stroke="#64748B" fontSize={12} />
              <YAxis stroke="#64748B" fontSize={12} />
              <Tooltip />
              <Bar dataKey="rate" fill="#0EA5E9" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function Eye({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
