import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

interface Step {
  id: string;
  title: string;
  description: string;
  target?: string;
}

interface DemoPlayerProps {
  steps: Step[];
  onStepChange?: (step: number) => void;
}

export default function DemoPlayer({ steps, onStepChange }: DemoPlayerProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            handleNext();
            return 0;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentStep]);

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setProgress(0);
      onStepChange?.(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setProgress(0);
      onStepChange?.(currentStep + 1);
    } else {
      setIsPlaying(false);
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setProgress(0);
    setIsPlaying(false);
    onStepChange?.(0);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-900">
            步骤 {currentStep + 1} / {steps.length}
          </h3>
          <span className="text-sm text-slate-500">
            {steps[currentStep]?.title}
          </span>
        </div>

        <div className="relative h-2 bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            className="absolute h-full bg-gradient-to-r from-sky-500 to-cyan-500"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + progress / 100) / steps.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div className="flex justify-between mt-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index <= currentStep ? 'bg-sky-500' : 'bg-slate-200'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-6 min-h-[120px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-xl font-semibold text-slate-900 mb-2">
              {steps[currentStep]?.title}
            </h4>
            <p className="text-slate-600">
              {steps[currentStep]?.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="p-4 bg-slate-50 border-t border-slate-100">
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handlePlayPause}
            className="p-4 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white hover:from-sky-600 hover:to-cyan-600 transition-all shadow-lg shadow-sky-500/25"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6" />
            )}
          </button>

          <button
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
            className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <button
            onClick={handleReset}
            className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
