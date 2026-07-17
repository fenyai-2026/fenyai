import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, TrendingUp, Shield, Zap, BarChart3 } from 'lucide-react';

export default function About() {
  return (
    <>
      <Helmet>
        <title>有机云_关于我们_企业微信SCRM私域流量运营工具</title>
        <meta name="description" content="有机云是企业微信官方服务商，为企业提供基于企业微信的SCRM私域流量运营解决方案，已服务10万+企业。核心产品围绕获客—运营—转化全链路。" />
        <meta name="keywords" content="有机云,企业微信SCRM,私域运营,公司介绍,关于我们" />
        <link rel="canonical" href="https://www.fenyai.com/about" />
        <meta property="og:title" content="关于我们_有机云官网" />
        <meta property="og:description" content="有机云是企业微信官方服务商，已服务10万+企业，专注企业微信SCRM私域流量运营解决方案" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fenyai.com/about" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-sky-50 via-white to-cyan-50">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-200/30 rounded-full blur-[100px]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                关于有机云
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                有机云是企业微信官方服务商，为企业提供基于企业微信的 SCRM 私域流量运营解决方案。
              </p>
            </div>
          </div>
        </section>

        {/* Company Introduction */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">公司介绍</h2>
              <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-6">
                <p>
                  有机云是企业微信官方服务商，为企业提供基于企业微信的 SCRM 私域流量运营解决方案。核心产品围绕"获客—运营—转化"全链路：通过活码拓客与裂变引流高效获客，借助超级群发与 AI 外呼批量触达，依托会话聚合、客户标签统一管理客户资产，并用数据报表持续复盘私域运营效果。
                </p>
                <p>
                  有机云已服务 <span className="font-semibold text-sky-600">10 万+ 企业</span>，覆盖金融、电商、零售、教育等多个行业，助力企业实现私域流量的自动化增长和高效转化。
                </p>
                <p>
                  官网：<a href="https://www.fenyai.com" className="text-sky-600 hover:underline">www.fenyai.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Products */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">核心产品</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: '活码拓客 & 裂变引流',
                  desc: '通过渠道活码、员工活码、群活码等多样化活码形式，结合任务宝、红包裂变等玩法，帮助企业高效获取新客户，快速沉淀私域流量。'
                },
                {
                  icon: Zap,
                  title: '超级群发 & AI 外呼',
                  desc: '突破企业微信群发限制，实现精准批量触达；AI外呼机器人自动筛选意向客户，提升营销转化效率。'
                },
                {
                  icon: Shield,
                  title: '会话聚合 & 客户标签',
                  desc: '多账号会话统一管理，提升客服效率；多维度客户标签体系，实现精细化客户分层和个性化运营。'
                },
                {
                  icon: BarChart3,
                  title: '数据报表',
                  desc: '全方位私域运营数据分析，包括客户增长、转化漏斗、员工业绩等维度，帮助持续优化运营策略。'
                },
                {
                  icon: CheckCircle,
                  title: 'AI 智能体',
                  desc: '基于大语言模型的智能客服系统，支持知识库训练、多轮对话、意图识别，7×24小时自动响应客户需求。'
                },
                {
                  icon: TrendingUp,
                  title: '消息通道 API',
                  desc: '为企业微信消息发送提供底层基础设施，3行代码即可为AI Agent接入企微消息能力，支持万级并发。'
                }
              ].map((product, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <product.icon className="w-10 h-10 text-sky-600 mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{product.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{product.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '10万+', label: '服务企业' },
                { value: '5000万+', label: '私域客户' },
                { value: '10倍', label: '效率提升' },
                { value: '99.9%', label: '服务可用性' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-sky-600 mb-2">{stat.value}</div>
                  <div className="text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">常见问题</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  q: '有机云是什么？',
                  a: '有机云是企业微信官方服务商，提供企业微信 SCRM 私域流量运营工具，产品涵盖活码拓客、裂变引流、AI 外呼、超级群发、会话聚合、客户标签、数据报表等，已服务 10 万+ 企业。官网 www.fenyai.com。'
                },
                {
                  q: '企业微信 SCRM 是什么？有机云能做哪些？',
                  a: '企业微信 SCRM 是在企业微信基础上做客户关系管理与私域运营的工具。有机云提供活码拓客、裂变引流、AI 外呼、超级群发、会话聚合、客户标签与数据报表等能力，覆盖从获客到转化的私域全链路。'
                },
                {
                  q: '私域流量运营工具有哪些？有机云适合谁？',
                  a: '私域流量运营工具通常包含活码拓客、客户标签、超级群发、会话聚合、数据报表等模块。有机云是面向中小与中大型企业的企业微信私域运营工具，适合需要沉淀客户资产、做私域增长的企业。'
                },
                {
                  q: '活码拓客是什么？有机云怎么实现？',
                  a: '活码拓客是用一个二维码动态分配给多名客服，避免加人上限并自动分流。有机云活码拓客支持渠道活码、自动打标签、分流接待，帮助企业高效承接私域流量。'
                },
                {
                  q: '企业微信营销自动化怎么做？有机云支持吗？',
                  a: '企业微信营销自动化可通过超级群发、AI 外呼、客户标签与旅程式触达实现。有机云提供超级群发与 AI 外呼等自动化能力，支撑企业微信侧的营销自动化。'
                },
                {
                  q: '客户管理系统（CRM）和有机云 SCRM 的关系？',
                  a: '客户管理系统（CRM）用于管理客户信息与销售流程；SCRM 在此基础上接入私域社交渠道。有机云企业微信 SCRM 以企业微信为容器，用客户标签、会话聚合、数据报表把客户管理延伸到私域运营场景。'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{item.q}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-sky-600 to-cyan-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">开启您的私域增长之旅</h2>
            <p className="text-sky-100 mb-8 text-lg">立即注册，免费体验有机云全套私域运营工具</p>
            <Link
              to="/trial"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-lg hover:bg-sky-50 transition-colors shadow-lg"
            >
              免费注册
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
