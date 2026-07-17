import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FileText, Download, BookOpen, Mail, User, Building, Phone, ArrowRight, CheckCircle, Star, Award } from 'lucide-react';

const resources = [
  {
    icon: BookOpen,
    title: '2024私域运营白皮书',
    desc: '深度解析私域运营趋势、方法论与实战案例',
    pages: '86页',
    downloads: '12,000+'
  },
  {
    icon: FileText,
    title: '电商行业私域报告',
    desc: '电商私域运营数据洞察与增长策略',
    pages: '45页',
    downloads: '8,500+'
  },
  {
    icon: Award,
    title: '头部企业案例集',
    desc: '50+行业标杆企业私域运营实战案例',
    pages: '120页',
    downloads: '6,800+'
  },
  {
    icon: Download,
    title: 'SCRM操作指南',
    desc: '从0到1搭建私域运营体系完整指南',
    pages: '68页',
    downloads: '15,000+'
  }
];

const testimonials = [
  { name: '张经理', company: '某电商企业', content: '白皮书内容非常实用，帮助我们快速搭建了私域体系' },
  { name: '李总监', company: '某教育机构', content: '案例集参考价值很高，学到了很多实战经验' }
];

export default function Whitepaper() {
  const [formData, setFormData] = useState({ name: '', company: '', position: '', phone: '', email: '', interest: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>有机云私域运营白皮书_免费下载_行业报告_案例集</title>
        <meta name="description" content="免费下载有机云私域运营白皮书、行业报告、实战案例集、SCRM操作指南。助力企业快速搭建私域运营体系，提升客户运营效率。" />
        <link rel="canonical" href="https://www.fenyai.com/whitepaper" />
      </Helmet>

      <main className="bg-sky-50">
        <section className="relative min-h-[70vh] flex items-center py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-900/10 via-sky-50 to-cyan-900/10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 text-sm font-semibold mb-6">
                  <Download className="w-4 h-4 mr-2" />
                  限时免费下载
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-sky-900 leading-tight mb-6">
                  私域运营<span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">实战资料</span>库
                </h1>
                <p className="text-lg text-sky-700/80 mb-8">行业白皮书、实战案例、操作指南，助力企业私域增长</p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center text-sky-700"><CheckCircle className="w-5 h-5 mr-2 text-green-500" /><span>86页深度白皮书</span></div>
                  <div className="flex items-center text-sky-700"><CheckCircle className="w-5 h-5 mr-2 text-green-500" /><span>50+实战案例</span></div>
                  <div className="flex items-center text-sky-700"><CheckCircle className="w-5 h-5 mr-2 text-green-500" /><span>完整操作指南</span></div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="bg-white rounded-2xl p-8 shadow-xl">
                {!submitted ? (
                  <form onSubmit={handleSubmit}>
                    <h3 className="text-xl font-bold text-sky-900 mb-6">填写信息，立即获取资料</h3>
                    <div className="space-y-4">
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-5 h-5 text-sky-400" />
                        <input type="text" placeholder="您的姓名" className="w-full pl-10 pr-4 py-3 rounded-lg border border-sky-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
                      </div>
                      <div className="relative">
                        <Building className="absolute left-3 top-3 w-5 h-5 text-sky-400" />
                        <input type="text" placeholder="公司名称" className="w-full pl-10 pr-4 py-3 rounded-lg border border-sky-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} required />
                      </div>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-5 h-5 text-sky-400" />
                        <input type="email" placeholder="工作邮箱" className="w-full pl-10 pr-4 py-3 rounded-lg border border-sky-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />
                      </div>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-5 h-5 text-sky-400" />
                        <input type="tel" placeholder="手机号码" className="w-full pl-10 pr-4 py-3 rounded-lg border border-sky-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} required />
                      </div>
                      <select className="w-full px-4 py-3 rounded-lg border border-sky-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none text-sky-700" value={formData.interest} onChange={e => setFormData({...formData, interest: e.target.value})}>
                        <option value="">选择感兴趣的资料</option>
                        <option value="whitepaper">2024私域运营白皮书</option>
                        <option value="report">电商行业私域报告</option>
                        <option value="cases">头部企业案例集</option>
                        <option value="guide">SCRM操作指南</option>
                      </select>
                    </div>
                    <button type="submit" className="w-full mt-6 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-sky-600 hover:to-cyan-600 transition-all flex items-center justify-center">
                      立即获取资料<ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                    <p className="text-xs text-sky-500/60 text-center mt-4">提交即表示同意隐私政策，资料将发送至您的邮箱</p>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-sky-900 mb-2">提交成功！</h3>
                    <p className="text-sky-700/70">资料将发送至您的邮箱，请查收</p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-sky-900 mb-4">精选资料库</h2>
              <p className="text-sky-700/70">专业团队精心打磨，助力企业私域增长</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-sky-50 rounded-xl p-6 hover:shadow-lg transition-all">
                  <item.icon className="w-10 h-10 text-sky-500 mb-4" />
                  <h3 className="font-bold text-sky-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-sky-700/70 mb-4">{item.desc}</p>
                  <div className="flex items-center justify-between text-xs text-sky-500">
                    <span>{item.pages}</span>
                    <span>{item.downloads}下载</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-sky-900 mb-4">用户好评</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {testimonials.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </div>
                  <p className="text-sky-700 mb-4">{item.content}</p>
                  <div className="text-sm">
                    <span className="font-semibold text-sky-900">{item.name}</span>
                    <span className="text-sky-500 ml-2">{item.company}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-sky-500 to-cyan-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-white mb-6">立即获取私域运营实战资料</h2>
              <p className="text-sky-100 mb-8">加入42,000+企业用户的行列，开启私域增长之旅</p>
              <Link to="/trial" className="inline-flex items-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl hover:bg-sky-50 transition-all">
                咨询专业顾问<ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
