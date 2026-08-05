import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Store, Users, TrendingUp, ShoppingCart, Award, ArrowRight, CheckCircle,
  ShoppingBag, Gift, MessageSquare, CalendarClock, ShieldCheck, Coins, Activity,
  GraduationCap, BarChart3, Clock, Star
} from 'lucide-react';
import DemoForm from '../components/DemoForm';
import { injectJSONLD } from '../utils/jsonld';
import { Breadcrumb } from '../components/Breadcrumb';
import { caseStudyBySlug, CaseStudy as CaseStudyData } from '../data/caseStudies';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Store, Users, TrendingUp, ShoppingCart, Award, ShoppingBag, Gift, MessageSquare,
  CalendarClock, ShieldCheck, Coins, Activity, GraduationCap, BarChart3, Clock, Star
};

function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center bg-sky-50">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-sky-900 mb-4">案例不存在</h1>
        <Link to="/" className="text-sky-600 underline">返回首页</Link>
      </div>
    </main>
  );
}

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const data: CaseStudyData | undefined = slug ? caseStudyBySlug(slug) : undefined;

  useEffect(() => {
    if (!data) return;
    injectJSONLD({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${data.industry}私域运营客户案例 - 有机云`,
      description: data.description,
      provider: { '@type': 'Organization', name: '有机云', url: 'https://www.fenyai.com' },
      areaServed: 'CN',
      serviceType: `${data.industry}私域运营解决方案`,
    }, `case-study-${data.slug}`);
  }, [data]);

  if (!data) return <NotFound />;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${data.industry}私域运营客户案例`,
    description: data.description,
    brand: { '@type': 'Brand', name: '有机云' },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
  };
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首页', item: 'https://www.fenyai.com/' },
      { '@type': 'ListItem', position: 2, name: '客户案例', item: 'https://www.fenyai.com/case-study' },
      { '@type': 'ListItem', position: 3, name: data.industry, item: `https://www.fenyai.com/case-study/${data.slug}` },
    ],
  };

  return (
    <main className="bg-sky-50">
      <Helmet>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <meta name="keywords" content={data.keywords} />
        <link rel="canonical" href={`https://www.fenyai.com/case-study/${data.slug}`} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta property="og:url" content={`https://www.fenyai.com/case-study/${data.slug}`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumb />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/10 via-sky-50 to-cyan-900/10"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 text-sm font-semibold mb-6">
                <Award className="w-4 h-4 mr-2" />
                {data.industry}客户案例
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sky-900 leading-tight mb-6">
                {data.h1}
              </h1>
              <p className="text-lg sm:text-xl text-sky-700/80 mb-8 leading-relaxed max-w-xl">{data.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/trial" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-sky-500/25">
                  获取同款方案
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/scrm" className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-700 font-semibold rounded-xl hover:bg-sky-50 transition-all duration-300 border border-sky-200">
                  了解产品
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-sky-500/10 border border-sky-200/50">
                <img src={data.cases[0]?.image} alt={data.industry} className="w-full" loading="lazy" decoding="async" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-24 bg-white" aria-label="行业痛点">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">{data.industry}私域四大痛点</h2>
            <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">有机云针对性破解{design_industry(data.industry)}私域运营难题</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {data.painPoints.map((point, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-sky-50 rounded-2xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-500 font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-sky-900 mb-2">{point.title}</h3>
                    <p className="text-sky-700/70 text-sm mb-3">{point.desc}</p>
                    <div className="flex items-center text-green-600 text-sm">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>{point.solution}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24" aria-label="解决方案">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">{data.industry}私域运营解决方案</h2>
            <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">覆盖获客、管理、培育、裂变全链路</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {data.solutions.map((solution, index) => {
              const Icon = ICON_MAP[solution.icon] || Star;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-sky-100">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-sky-900 mb-3">{solution.title}</h3>
                  <p className="text-sky-700/70 leading-relaxed mb-4">{solution.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.highlights.map((h, i) => (
                      <span key={i} className="px-3 py-1 bg-sky-50 text-sky-600 text-xs rounded-full">{h}</span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-24 bg-white" aria-label="客户案例">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">{data.industry}客户成功案例</h2>
            <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">真实落地数据，见证私域增长</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {data.cases.map((c, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-sky-50 rounded-2xl overflow-hidden">
                <img src={c.image} alt={c.company} className="w-full h-56 object-cover" loading="lazy" decoding="async" />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-sky-500/10 text-sky-600 text-xs rounded-full">{c.industry}</span>
                  </div>
                  <h3 className="text-lg font-bold text-sky-900 mb-2">{c.company}</h3>
                  <p className="text-sky-700/70 text-sm leading-relaxed">{c.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24" aria-label="常见问题">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">常见问题</h2>
          </motion.div>
          <div className="space-y-4">
            {data.faq.map((f, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-6 border border-sky-100">
                <h3 className="text-lg font-bold text-sky-900 mb-2 flex items-start">
                  <span className="text-sky-500 mr-2">Q{index + 1}.</span>{f.q}
                </h3>
                <p className="text-sky-700/70 text-sm leading-relaxed pl-7">{f.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 白皮书/表单 */}
      <section className="py-24 bg-white" aria-label="获取方案">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-sky-900 mb-4">获取专属私域运营方案</h2>
            <p className="text-sky-700/70 max-w-xl mx-auto">添加企业微信，资深顾问 1 对 1 为您定制{design_industry(data.industry)}私域增长方案</p>
          </div>
          <DemoForm />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-sky-500 to-cyan-500" aria-label="立即行动">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">获取{data.industry}私域运营专属方案</h2>
            <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">免费试用3天，专业顾问1对1指导，助您搭建{design_industry(data.industry)}私域运营体系</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/trial" className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl hover:bg-sky-50 transition-all duration-300">
                立即咨询
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/solutions" className="inline-flex items-center justify-center px-8 py-4 bg-sky-400/30 text-white font-semibold rounded-xl hover:bg-sky-400/40 transition-all duration-300 border border-white/30">
                查看全部方案
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

// 辅助：返回「xx」形式行业词，避免 JSX 中直接拼接
function design_industry(industry: string): string {
  return industry;
}
