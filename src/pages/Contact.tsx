import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import DemoForm from '../components/DemoForm';
import { Phone, Mail, MapPin, MessageSquare, Clock, Shield } from 'lucide-react';

const contactCards = [
  { icon: Phone, label: '咨询电话', value: '133-1616-9107', color: 'from-sky-500 to-cyan-500' },
  { icon: Phone, label: '咨询电话', value: '189-9836-7461', color: 'from-sky-500 to-cyan-500' },
  { icon: Mail, label: '电子邮箱', value: '374183167@qq.com', color: 'from-cyan-500 to-blue-500' },
  { icon: MapPin, label: '公司地址', value: '广州市番禺区大学城青蓝街28号创智大厦3栋6楼', color: 'from-blue-500 to-indigo-500' },
];

const trustBadges = [
  { icon: Clock, text: '5分钟内响应' },
  { icon: Shield, text: '企业级安全保障' },
  { icon: MessageSquare, text: '1对1专家服务' },
];

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>有机云_联系我们_客服咨询</title>
        <meta name="description" content="联系有机云，获取专业的私域流量运营解决方案咨询服务，电话133-1616-9107。" />
        <meta name="keywords" content="有机云客服,私域运营咨询,企业微信咨询" />
        <link rel="canonical" href="https://www.fenyai.com/contact" />
        <meta property="og:title" content="联系我们_有机云客服咨询" />
        <meta property="og:description" content="联系有机云，获取专业的私域流量运营解决方案咨询服务。" />
        <meta property="og:url" content="https://www.fenyai.com/contact" />
      </Helmet>
      <div className="min-h-screen bg-sky-50 pt-16">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-900/5 via-sky-50 to-cyan-900/5"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl font-bold text-slate-900 mb-4">联系我们</h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                专业的私域运营顾问团队，为您提供一对一咨询服务
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <DemoForm title="扫码添加微信" subtitle="专业顾问 1 对 1 为您提供私域运营方案" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                {contactCards.map((card, index) => (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 p-6 flex items-center space-x-5 cursor-pointer transition-shadow hover:shadow-xl"
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center flex-shrink-0`}>
                      <card.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 mb-1">{card.label}</p>
                      <p className="text-lg font-semibold text-slate-900">{card.value}</p>
                    </div>
                  </motion.div>
                ))}

                <div className="bg-gradient-to-br from-sky-500 to-cyan-500 rounded-2xl p-6 text-white">
                  <h3 className="font-semibold mb-4">为什么选择我们</h3>
                  <div className="space-y-3">
                    {trustBadges.map((badge) => (
                      <div key={badge.text} className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                          <badge.icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm">{badge.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
