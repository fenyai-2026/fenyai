import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { supabase } from '../supabase/client';
import { Store, Users, TrendingUp, ShoppingCart, Award, ArrowRight, CheckCircle, BarChart3, Clock, Star, Loader2 } from 'lucide-react';
import { injectJSONLD } from '../utils/jsonld';
import { Breadcrumb } from '../components/Breadcrumb';

const painPoints = [
  {
    title: '门店流量难沉淀',
    desc: '线下门店客流大，但难以沉淀到私域，客户流失严重',
    solution: '企微活码+门店专属码，线下流量100%沉淀私域'
  },
  {
    title: '多门店管理难',
    desc: '连锁门店数量多，各门店运营数据难统一，管理效率低',
    solution: '多门店SCRM系统，总部统一管理，数据实时同步'
  },
  {
    title: '会员运营粗放',
    desc: '会员数据分散，缺乏精细化运营，复购率低',
    solution: '客户标签+人群包+运营SOP，会员精细化运营'
  },
  {
    title: '线上线下割裂',
    desc: '线上商城与线下门店数据不通，客户体验不一致',
    solution: '全渠道SCRM系统，线上线下数据打通，体验一致'
  }
];

const solutions = [
  {
    icon: Store,
    title: '门店活码获客',
    desc: '为每个门店生成专属活码，放置于门店海报、展架、收银台。顾客扫码自动添加门店专属导购，实现线下流量线上沉淀。',
    highlights: ['门店专属码', '自动分配导购', '业绩归属', '数据统计']
  },
  {
    icon: Users,
    title: '多门店管理',
    desc: '总部统一管理所有门店，实时查看各门店运营数据。支持门店分级管理、权限控制、数据隔离，满足连锁企业管理需求。',
    highlights: ['总部管理', '分级权限', '数据隔离', '实时同步']
  },
  {
    icon: TrendingUp,
    title: '会员精细化运营',
    desc: '基于客户标签、消费行为、生命周期进行会员分层。通过运营SOP自动触发营销动作，提升会员复购率和LTV。',
    highlights: ['客户标签', '消费分析', '运营SOP', '复购提升']
  },
  {
    icon: ShoppingCart,
    title: '全渠道融合',
    desc: '打通线上线下数据，实现会员通、积分通、权益通。客户在线上下单可到店自提，到店消费可线上积分，体验无缝衔接。',
    highlights: ['会员通', '积分通', '权益通', '无缝体验']
  }
];

const cases = [
  {
    company: '华润万家',
    result: '门店活码引流+会员运营SOP+数据分析，3个月沉淀私域会员100万+，会员复购率从23%提升到58%（提升150%），门店业绩提升80%，月均引流新客3万+',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80'
  },
  {
    company: '李宁',
    result: '多门店私域统一管理+导购赋能+会员通，私域会员复购率提升200%，会员消费占比提升至60%，门店坪效提升50%',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&q=80'
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "有机云连锁门店私域运营方案",
  "description": "连锁门店私域运营解决方案，提供门店活码获客、多门店管理、会员精细化运营、全渠道融合",
  "brand": {
    "@type": "Brand",
    "name": "有机云"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "CNY"
  }
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "首页",
      "item": "https://www.fenyai.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "解决方案",
      "item": "https://www.fenyai.com/solutions"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "零售行业",
      "item": "https://www.fenyai.com/solutions/retail"
    }
  ]
};

export default function SolutionsRetail() {
  useEffect(() => {
    injectJSONLD({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: '连锁零售私域运营解决方案 - 有机云',
      description: '为连锁零售企业提供多门店管理、导购赋能、库存同步等私域运营方案',
      provider: { '@type': 'Organization', name: '有机云', url: 'https://www.fenyai.com' },
      areaServed: 'CN',
      serviceType: '连锁零售私域运营解决方案',
    }, 'solution-retail');
  }, []);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('leads').insert({
        name: formData.name,
        company: formData.company,
        phone: formData.phone,
        requirement: `零售行业白皮书下载 - 邮箱: ${formData.email}`,
        status: 'pending',
      });

      if (error) {
        console.error('Lead save error:', error);
        alert('提交失败，请稍后重试');
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);
      setIsSuccess(true);

      setTimeout(() => {
        navigate('/trial');
      }, 3000);
    } catch (err) {
      console.error('Submit error:', err);
      alert('提交失败，请稍后重试');
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>有机云连锁门店私域运营_零售行业企业微信解决方案_门店活码·会员运营</title>
        <meta name="description" content="有机云连锁门店私域运营方案，零售行业企业微信私域运营解决方案，提供门店活码获客、多门店管理、会员精细化运营、全渠道融合，助力零售企业10倍提升运营效率。免费试用→" />
        <meta name="keywords" content="连锁门店私域运营,零售私域,门店活码,会员运营,连锁SCRM,零售SCRM" />
        <link rel="canonical" href="https://www.fenyai.com/solutions/retail" />
        <meta property="og:title" content="连锁门店私域运营_零售行业企业微信解决方案_门店活码·会员运营" />
        <meta property="og:description" content="有机云连锁门店私域运营方案，提供门店活码获客、多门店管理、会员精细化运营、全渠道融合" />
        <meta property="og:url" content="https://www.fenyai.com/solutions/retail" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      <main className="bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Breadcrumb />
        </div>
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[80vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-900/10 via-sky-50 to-cyan-900/10"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 text-sm font-semibold mb-6">
                  <Store className="w-4 h-4 mr-2" />
                  零售行业专属方案
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sky-900 leading-tight mb-6">
                  连锁门店
                  <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">私域运营</span>
                  方案
                </h1>
                <p className="text-lg sm:text-xl text-sky-700/80 mb-8 leading-relaxed max-w-xl">
                  专为连锁零售行业打造的企微SCRM私域运营解决方案，提供门店活码获客、多门店管理、会员精细化运营、全渠道融合，助力零售企业10倍提升运营效率
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/trial"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-sky-500/25"
                  >
                    获取方案
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    to="/scrm"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-700 font-semibold rounded-xl hover:bg-sky-50 transition-all duration-300 border border-sky-200"
                  >
                    了解产品
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-sky-500/10 border border-sky-200/50">
                  <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                    alt="连锁门店私域运营"
                    className="w-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-24 bg-white" aria-label="行业痛点">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">
                连锁门店私域运营四大痛点
              </h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">
                有机云连锁门店私域运营方案，针对性解决零售行业私域运营难题
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-sky-50 rounded-2xl p-8"
                >
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

        {/* Solutions Section */}
        <section className="py-24" aria-label="解决方案">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">
                连锁门店私域运营四大解决方案
              </h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">
                覆盖获客、管理、运营、融合全链路，一站式解决连锁门店私域运营需求
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-sky-100"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center mb-6">
                    <solution.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-sky-900 mb-3">{solution.title}</h3>
                  <p className="text-sky-700/70 leading-relaxed mb-4">{solution.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.highlights.map((highlight, i) => (
                      <span key={i} className="px-3 py-1 bg-sky-50 text-sky-600 text-xs rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cases Section */}
        <section className="py-24 bg-white" aria-label="客户案例">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">
                零售行业客户成功案例
              </h2>
              <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">
                头部零售企业的私域运营实战经验
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {cases.map((caseItem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-sky-50 rounded-2xl overflow-hidden"
                >
                  <img src={caseItem.image} alt={caseItem.company} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-sky-900 mb-2">{caseItem.company}</h3>
                    <p className="text-sky-700/70 text-sm">{caseItem.result}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 白皮书下载 */}
        <section className="py-24 bg-white" aria-label="白皮书下载">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-3xl p-8 md:p-12 border border-sky-100"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-sky-900 mb-4">
                  获取《零售行业私域运营白皮书》
                </h2>
                <p className="text-sky-700/70 max-w-xl mx-auto">
                  深入了解零售行业私域运营最佳实践，包含华润万家、李宁等头部案例拆解
                </p>
              </div>
              {isSuccess ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-sky-900 mb-2">提交成功！</h3>
                  <p className="text-sky-700/70">感谢您的关注，白皮书将发送至您的邮箱<br />正在跳转到试用页面...</p>
                </motion.div>
              ) : (
                <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
                  <input type="text" placeholder="您的姓名" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all" required />
                  <input type="text" placeholder="公司名称" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all" required />
                  <input type="email" placeholder="工作邮箱" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all" required />
                  <input type="tel" placeholder="手机号码" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all" required />
                  <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center">
                    {isSubmitting ? (
                      <><Loader2 className="w-5 h-5 mr-2 animate-spin" />提交中...</>
                    ) : '立即下载'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-sky-500 to-cyan-500" aria-label="立即行动">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                获取连锁门店私域运营专属方案
              </h2>
              <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">
                免费试用3天，专业顾问1对1指导，助您搭建连锁门店私域运营体系
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/trial"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl hover:bg-sky-50 transition-all duration-300"
                >
                  立即咨询
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/solutions/ecommerce"
                  className="inline-flex items-center justify-center px-8 py-4 bg-sky-400/30 text-white font-semibold rounded-xl hover:bg-sky-400/40 transition-all duration-300 border border-white/30"
                >
                  了解电商方案
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
