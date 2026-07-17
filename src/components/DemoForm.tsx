import React from 'react';
import { Phone } from 'lucide-react';
import { SITE } from '../config/site';

interface DemoFormProps {
  variant?: 'card' | 'inline';
  title?: string;
  subtitle?: string;
}

// 纯静态：不再提交到 Supabase leads 表，改为扫码添加微信
export default function DemoForm({ variant = 'card', title, subtitle }: DemoFormProps) {
  const isCard = variant === 'card';
  return (
    <div className={isCard ? 'bg-white rounded-2xl shadow-xl border border-sky-100 p-6 sm:p-8' : ''}>
      <div className="text-center mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-sky-900 mb-2">
          {title || '扫码添加微信'}
        </h3>
        <p className="text-sm text-sky-700/70">
          {subtitle || '专业顾问 1 对 1 为您提供专属方案'}
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative w-48 h-48 bg-gray-50 rounded-xl p-3 mb-4">
          <img
            src={SITE.wechatQr}
            alt="微信二维码"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        <p className="text-gray-500 text-xs mb-4">微信扫一扫，立即添加咨询</p>
        <div className="space-y-2 w-full">
          {SITE.phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/-/g, '')}`}
              className="flex items-center justify-center gap-2 text-[#0C4A6E] hover:text-[#0EA5E9] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">{phone}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
