import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, Filter, Users, ClipboardList, Database } from 'lucide-react';

interface ProductLink {
  title: string;
  desc: string;
  link: string;
  icon: React.ElementType;
  color: string;
}

const allProducts: ProductLink[] = [
  {
    title: '企微魔方',
    desc: 'SCRM客户管理核心工具',
    link: '/products/qimo',
    icon: Box,
    color: 'from-[#0EA5E9] to-[#38BDF8]',
  },
  {
    title: '引流宝',
    desc: '多渠道引流拓客神器',
    link: '/products/yinliu',
    icon: Filter,
    color: 'from-[#38BDF8] to-[#0EA5E9]',
  },
  {
    title: '进群宝',
    desc: '智能群管理工具',
    link: '/products/jinqun',
    icon: Users,
    color: 'from-[#0EA5E9] to-[#38BDF8]',
  },
  {
    title: '任务宝',
    desc: '裂变任务营销工具',
    link: '/products/task',
    icon: ClipboardList,
    color: 'from-[#F97316] to-[#FB923C]',
  },
  {
    title: '数据中台',
    desc: '私域数据分析平台',
    link: '/products/data',
    icon: Database,
    color: 'from-[#38BDF8] to-[#0EA5E9]',
  },
];

interface ProductCrossLinksProps {
  currentProduct?: string;
  title?: string;
  maxCount?: number;
}

export default function ProductCrossLinks({ 
  currentProduct,
  title = '更多产品',
  maxCount = 4 
}: ProductCrossLinksProps) {
  // 过滤掉当前产品
  const filteredProducts = currentProduct
    ? allProducts.filter(p => !p.link.includes(currentProduct))
    : allProducts;

  const displayProducts = filteredProducts.slice(0, maxCount);

  if (displayProducts.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t border-slate-200">
      <h3 className="text-xl font-bold text-[#0C4A6E] mb-6">{title}</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {displayProducts.map((product) => (
          <Link
            key={product.link}
            to={product.link}
            className="group relative overflow-hidden rounded-xl bg-white p-5 border border-slate-100 hover:border-[#0EA5E9]/30 hover:shadow-lg transition-all duration-300"
          >
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${product.color}`} />
            <div className="flex items-center space-x-3 mb-3">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${product.color} flex items-center justify-center text-white`}>
                <product.icon className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-[#0C4A6E] group-hover:text-[#0EA5E9] transition-colors">
                {product.title}
              </h4>
            </div>
            <p className="text-sm text-slate-500 mb-3">{product.desc}</p>
            <span className="inline-flex items-center text-xs text-[#0EA5E9] font-medium group-hover:translate-x-1 transition-transform">
              了解详情 <ArrowRight className="w-3 h-3 ml-1" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
