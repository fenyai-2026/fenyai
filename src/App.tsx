import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';

// 全部同步加载 — 禁用代码分割，避免 SSG 部署后 chunk 文件加载失败
// （静态服务器 fallback 到 index.html，HTML 被当 JS 解析报 "Unexpected token '<'"）
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Solutions from './pages/Solutions';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Trial from './pages/Trial';
import ProductQimo from './pages/ProductQimo';
import ProductYinliu from './pages/ProductYinliu';
import ProductJinqun from './pages/ProductJinqun';
import ProductTask from './pages/ProductTask';
import ProductData from './pages/ProductData';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';
import Leads from './pages/Leads';
import ContentAutomation from './pages/ContentAutomation';
import Settings from './pages/Settings';
import ArticleEditor from './pages/ArticleEditor';
import Categories from './pages/Categories';
import AIAgent from './pages/AIAgent';
import DemoShowcase from './pages/DemoShowcase';
import Scrm from './pages/Scrm';
import LiveCode from './pages/LiveCode';
import MassSend from './pages/MassSend';
import JuheChat from './pages/JuheChat';
import SessionArchive from './pages/SessionArchive';
import Growth from './pages/Growth';
import AiCall from './pages/AiCall';
import SolutionsFinance from './pages/SolutionsFinance';
import SolutionsRetail from './pages/SolutionsRetail';
import SolutionsEcommerce from './pages/SolutionsEcommerce';
import SolutionsEducation from './pages/SolutionsEducation';
import SolutionsActiveOutreach from './pages/SolutionsActiveOutreach';
import SolutionsSOP from './pages/SolutionsSOP';
import SolutionsCrack from './pages/SolutionsCrack';
import SolutionsArchive from './pages/SolutionsArchive';
import SolutionsDistribution from './pages/SolutionsDistribution';
import SolutionsHealthcare from './pages/SolutionsHealthcare';
import Whitepaper from './pages/Whitepaper';
import Compare from './pages/Compare';
import Faq from './pages/Faq';
import Weimo from './pages/Weimo';
import Sop from './pages/Sop';
import Robot from './pages/Robot';
import CloudPhone from './pages/CloudPhone';
import OpenPlatform from './pages/OpenPlatform';
import Resources from './pages/Resources';
import MessageAPI from './pages/MessageAPI';
import SolutionsAIAgent from './pages/SolutionsAIAgent';
import OpenPlatformDocs from './pages/OpenPlatformDocs';
import MessageChannel from './pages/MessageChannel';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
          <Route path="trial" element={<Trial />} />
          <Route path="products/qimo" element={<ProductQimo />} />
          <Route path="products/yinliu" element={<ProductYinliu />} />
          <Route path="products/jinqun" element={<ProductJinqun />} />
          <Route path="products/task" element={<ProductTask />} />
          <Route path="products/data" element={<ProductData />} />
          <Route path="articles" element={<Articles />} />
          <Route path="article/:id" element={<ArticleDetail />} />
          <Route path="ai-agent" element={<AIAgent />} />
          <Route path="demo-showcase" element={<DemoShowcase />} />
          {/* SEO独立落地页 */}
          <Route path="scrm" element={<Scrm />} />
          <Route path="live-code" element={<LiveCode />} />
          <Route path="mass-send" element={<MassSend />} />
          <Route path="juhe-chat" element={<JuheChat />} />
          <Route path="session-archive" element={<SessionArchive />} />
          {/* 关键词落地页：企微魔方 / 企微SOP / 企微机器人 / 云手机（抢代理商 #1 词） */}
          <Route path="weimo" element={<Weimo />} />
          <Route path="sop" element={<Sop />} />
          <Route path="robot" element={<Robot />} />
          <Route path="cloud-phone" element={<CloudPhone />} />
          <Route path="growth" element={<Growth />} />
          <Route path="ai-call" element={<AiCall />} />
          <Route path="solutions/finance" element={<SolutionsFinance />} />
          <Route path="solutions/retail" element={<SolutionsRetail />} />
          <Route path="solutions/ecommerce" element={<SolutionsEcommerce />} />
          <Route path="solutions/education" element={<SolutionsEducation />} />
          <Route path="solutions/active-outreach" element={<SolutionsActiveOutreach />} />
          <Route path="solutions/sop" element={<SolutionsSOP />} />
          <Route path="solutions/crack" element={<SolutionsCrack />} />
          <Route path="solutions/archive" element={<SolutionsArchive />} />
          <Route path="solutions/distribution" element={<SolutionsDistribution />} />
          <Route path="solutions/healthcare" element={<SolutionsHealthcare />} />
          <Route path="whitepaper" element={<Whitepaper />} />
          <Route path="compare" element={<Compare />} />
          <Route path="faq" element={<Faq />} />
          {/* 开放平台与资源 */}
          <Route path="open-platform" element={<OpenPlatform />} />
          <Route path="message-channel" element={<MessageChannel />} />
          <Route path="open-platform/message-api" element={<MessageAPI />} />
          <Route path="open-platform/docs" element={<OpenPlatformDocs />} />
          <Route path="resources" element={<Resources />} />
          {/* AI Agent 解决方案 */}
          <Route path="solutions/ai-agent-integration" element={<SolutionsAIAgent />} />
          <Route path="about" element={<About />} />
        </Route>
        {/* 百度等收录的旧 /index.html 入口：内部重定向到首页，避免 SPA 空白页 */}
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/articles/new" element={<ArticleEditorWrapper />} />
        <Route path="/admin/articles/edit/:id" element={<ArticleEditorWrapper />} />
        <Route path="/admin/categories" element={<Categories />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/content-automation" element={<ContentAutomation />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

function ArticleEditorWrapper() {
  const [showEditor, setShowEditor] = useState(true);
  const navigate = useNavigate();
  const { id: articleId } = useParams<{ id: string }>();

  if (!showEditor) {
    navigate('/admin');
    return null;
  }

  return <ArticleEditor articleId={articleId} onBack={() => setShowEditor(false)} />;
}

export default App;
