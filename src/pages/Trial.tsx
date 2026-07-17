import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Sparkles, Shield, Clock, Users, Zap, Phone } from 'lucide-react';
import { SITE } from '../config/site';

const benefits = [
  { icon: Clock, title: '3天免费试用', desc: '全功能开放，零成本体验' },
  { icon: Users, title: '1对1顾问指导', desc: '专业顾问全程协助上手' },
  { icon: Shield, title: '无需绑定支付', desc: '试用结束自主决定是否购买' },
  { icon: Zap, title: '5分钟快速开通', desc: '提交后立即获得试用账号' },
];

const features = [
  '企微活码引流',
  '客户管理系统',
  '超级群发触达',
  'AI智能体客服',
  '智能群管',
  '数据报表分析',
  '会话存档',
  '裂变任务',
];

export default function Trial() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 to-cyan-50">
      <Helmet>
        <title>有机云免费试用_企微私域运营工具</title>
        <meta name="description" content="立即申请有机云SCRM免费试用，3天全功能体验，专业顾问1对1指导，5分钟快速开通。支持企微活码、客户管理、超级群发、AI智能体等全链路私域运营工具。" />
        <meta name="keywords" content="SCRM免费试用,企业微信试用,私域运营工具试用,有机云试用,企微SCRM试用" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Value Prop */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                3天全功能免费试用
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-sky-900 leading-tight mb-6">
                立即开启<br />
                <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">
                  私域运营效率提升10倍
                </span>
              </h1>
              <p className="text-lg text-sky-700/80 mb-8 leading-relaxed">
                扫码添加顾问微信，5分钟内获得试用账号。专业顾问1对1指导，助您快速搭建私域运营体系。
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sky-900 text-sm">{item.title}</h3>
                      <p className="text-xs text-sky-600/70">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: 扫码加微信 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl shadow-sky-500/10 p-8 border border-sky-100"
            >
              <h2 className="text-2xl font-bold text-sky-900 mb-2 text-center">添加微信开通试用</h2>
              <p className="text-sky-600/70 mb-6 text-center">扫码添加顾问微信，5分钟内获得试用账号</p>

              <div className="flex flex-col items-center">
                <div className="relative w-56 h-56 bg-gray-50 rounded-xl p-3 mb-4">
                  <img
                    src={SITE.wechatQr}
                    alt="微信二维码"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <p className="text-gray-500 text-xs mb-4">微信扫一扫，添加「有机云顾问」</p>
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sky-900 mb-4">试用期间可使用全部功能</h2>
            <p className="text-sky-600/70">零门槛体验有机云SCRM全链路私域运营能力</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center space-x-3 p-4 bg-sky-50 rounded-xl"
              >
                <svg className="w-5 h-5 text-sky-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sky-800 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sky-500 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">已有10万+企业选择有机云</h2>
          <p className="text-sky-100 mb-8">加入他们，开启私域运营效率提升10倍之旅</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl hover:bg-sky-50 transition-all duration-300 shadow-lg"
            >
              添加微信开通试用
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white border border-white/30 font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
            >
              联系销售咨询
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
