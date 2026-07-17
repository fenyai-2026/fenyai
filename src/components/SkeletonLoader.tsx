import React from 'react';
import { motion } from 'framer-motion';

export function ArticleCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="aspect-video bg-slate-200 animate-pulse" />
      <div className="p-6 space-y-3">
        <div className="h-6 bg-slate-200 rounded animate-pulse" />
        <div className="h-4 bg-slate-200 rounded w-3/4 animate-pulse" />
        <div className="flex items-center justify-between pt-2">
          <div className="h-4 bg-slate-200 rounded w-24 animate-pulse" />
          <div className="h-4 bg-slate-200 rounded w-16 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export function LeadRowSkeleton() {
  return (
    <tr className="border-b border-slate-100">
      <td className="px-6 py-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-slate-200 animate-pulse" />
          <div className="space-y-1">
            <div className="h-4 bg-slate-200 rounded w-20 animate-pulse" />
            <div className="h-3 bg-slate-200 rounded w-24 animate-pulse" />
          </div>
        </div>
      </td>
      <td className="px-6 py-4"><div className="h-4 bg-slate-200 rounded w-28 animate-pulse" /></td>
      <td className="px-6 py-4"><div className="h-4 bg-slate-200 rounded w-32 animate-pulse" /></td>
      <td className="px-6 py-4"><div className="h-4 bg-slate-200 rounded w-24 animate-pulse" /></td>
      <td className="px-6 py-4"><div className="h-6 bg-slate-200 rounded w-16 animate-pulse" /></td>
      <td className="px-6 py-4"><div className="h-8 bg-slate-200 rounded w-20 animate-pulse" /></td>
    </tr>
  );
}

export function StatCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <div className="h-4 bg-slate-200 rounded w-20 mb-2 animate-pulse" />
      <div className="h-8 bg-slate-200 rounded w-24 animate-pulse" />
    </div>
  );
}

export function FeatureCardSkeleton() {
  return (
    <div className="p-8 bg-white rounded-2xl border border-slate-100">
      <div className="w-14 h-14 rounded-xl bg-slate-200 mb-6 animate-pulse" />
      <div className="h-6 bg-slate-200 rounded w-24 mb-3 animate-pulse" />
      <div className="h-4 bg-slate-200 rounded w-full animate-pulse" />
    </div>
  );
}
