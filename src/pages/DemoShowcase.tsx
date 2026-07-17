import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { X, Play, Pause, ChevronLeft, ChevronRight, ExternalLink, Monitor, Film, Layers } from 'lucide-react';

const navItems = [
  { id: 'modal', label: 'Modal弹层', icon: Layers },
  { id: 'iframe', label: 'iframe嵌入', icon: ExternalLink },
  { id: 'player', label: '剧本播放器', icon: Film },
];

const scriptSteps = [
  { id: 1, title: '步骤1：初始化配置', content: '系统正在加载基础配置...' },
  { id: 2, title: '步骤2：连接数据源', content: '正在建立与数据库的安全连接...' },
  { id: 3, title: '步骤3：加载用户数据', content: '从云端获取用户配置信息...' },
  { id: 4, title: '步骤4：渲染界面', content: '构建用户界面组件...' },
  { id: 5, title: '步骤5：完成启动', content: '系统启动完成，欢迎使用！' },
];

export default function DemoShowcase() {
  const [activeTab, setActiveTab] = useState('modal');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleNext = () => {
    if (currentStep < scriptSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      const interval = setInterval(() => {
        if (currentStep < scriptSteps.length - 1) {
          setCurrentStep(prev => prev + 1);
        } else {
          setIsPlaying(false);
          clearInterval(interval);
        }
      }, 2000);
      return () => clearInterval(interval);
    }
  };

  return (
    <>
      <Helmet>
        <title>演示展示 - 有机云</title>
        <meta name="description" content="产品演示展示" />
        <script type="application/ld+json">{JSON.stringify({"@context": "https://schema.org", "@type": "Organization", "name": "有机云", "url": "https://www.fenyai.com", "description": "企业微信SCRM私域流量自动化运营专家", "sameAs": ["https://www.yjiyun.com", "https://www.zhihu.com/people/youjiyun", "https://www.xiaohongshu.com/user/profile/6901911c000000003700bbdf"]})}</script>
      </Helmet>
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-64 bg-white border-r border-gray-200 flex-shrink-0">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900 flex items-center">
            <Monitor className="w-6 h-6 mr-2 text-blue-500" />
            演示系统
          </h2>
        </div>
        <nav className="px-4 pb-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-4 py-3 rounded-lg mb-2 transition-colors ${
                  activeTab === item.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <AnimatePresence mode="wait">
          {activeTab === 'modal' && (
            <motion.div
              key="modal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl"
            >
              <h1 className="text-3xl font-bold text-gray-900 mb-6">Modal弹层演示</h1>
              <p className="text-gray-600 mb-8">点击按钮打开全屏遮罩Modal弹层</p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                打开Modal
              </button>
            </motion.div>
          )}

          {activeTab === 'iframe' && (
            <motion.div
              key="iframe"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl"
            >
              <h1 className="text-3xl font-bold text-gray-900 mb-6">iframe嵌入演示</h1>
              <p className="text-gray-600 mb-8">嵌入外部可交互系统</p>
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden" style={{ height: '500px' }}>
                <iframe
                  src="https://example.com"
                  className="w-full h-full"
                  title="演示系统"
                />
              </div>
            </motion.div>
          )}

          {activeTab === 'player' && (
            <motion.div
              key="player"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl"
            >
              <h1 className="text-3xl font-bold text-gray-900 mb-6">剧本播放器演示</h1>
              <div className="bg-white rounded-xl border border-gray-200 p-8">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">
                      步骤 {currentStep + 1} / {scriptSteps.length}
                    </span>
                    <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-blue-500 rounded-full transition-all duration-300"
                        style={{ width: `${((currentStep + 1) / scriptSteps.length) * 100}%` }}
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {scriptSteps[currentStep]?.title}
                  </h3>
                  <p className="text-gray-600">{scriptSteps[currentStep]?.content}</p>
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <button
                    onClick={handlePrev}
                    disabled={currentStep === 0}
                    className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={togglePlay}
                    className="p-4 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                  >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={currentStep === scriptSteps.length - 1}
                    className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsModalOpen(false)}
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Modal弹层</h2>
            <p className="text-gray-600 mb-6">
              这是一个全屏遮罩+居中浮窗的Modal组件示例。
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              关闭
            </button>
          </motion.div>
        </div>
      )}
    </div>
    </>
  );
}
