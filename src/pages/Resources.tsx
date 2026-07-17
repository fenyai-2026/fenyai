import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { BookOpen, BarChart3, FileText, Download, CheckCircle, ArrowRight } from 'lucide-react';
import SEOHelmet from '../components/SEOHelmet';
import DemoForm from '../components/DemoForm';

const resources = [
  {
    icon: BookOpen,
    title: 'AI智能体入门指南',
    desc: '什么是私域AI智能体？企业如何落地？适合老板/管理者快速了解',
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'bg-blue-50'
  },
  {
    icon: BarChart3,
    title: 'AI客服 vs 人工客服数据对比',
    desc: '7组真实数据对比，帮您算清成本账和效率账',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50'
  },
  {
    icon: FileText,
    title: '私域运营SOP模板',
    desc: '直接可用的客户运营SOP模板，覆盖引流→培育→转化全流程',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50'
  },
];

const benefits = [
  '无需集赞，无需助力，直接领取',
  '内容持续更新，终身免费获取',
  '加入私域运营交流群，与10万+企业共同成长',
  '1对1专属顾问，解答您的私域运营问题',
];

export default function Resources() {
  return (
    <>
      <SEOHelmet
        title="有机云私域运营资料包_免费下载_行业报告案例"
        description="免费领取私域运营资料包：含AI智能体入门指南、AI客服vs人工客服数据对比、私域运营SOP模板等，助力企业私域运营提效。有机云SCRM官方出品。"
        keywords="私域运营资料,AI智能体入门,私域SOP模板,企微运营资料,私域流量资料"
        canonical="/resources"
      />
      <div className="min-h-screen bg-gradient-to-br from-sky-50 to-cyan-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#0C4A6E] via-[#0EA5E9] to-[#38BDF8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                私域运营实战资料包 · 免费下载
              </h1>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                有机云SCRM团队整理，覆盖AI智能体、客服效率、私域SOP等核心主题。已帮助10万+企业提升私域运营效率。
              </p>
            </motion.div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`${resource.bgColor} rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300`}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${resource.color} flex items-center justify-center mb-6`}>
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.desc}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Download className="w-4 h-4 mr-1" />
                    <span>PDF格式 · 免费下载</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Form Section */}
            <div className="max-w-xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-10"
              >
                <DemoForm />
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
