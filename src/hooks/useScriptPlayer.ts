import { useState, useCallback, useEffect, useRef } from 'react';

interface ScriptStep {
  id: string;
  title: string;
  content: string;
  duration?: number;
}

interface UseScriptPlayerOptions {
  steps: ScriptStep[];
  autoPlay?: boolean;
  loop?: boolean;
  onComplete?: () => void;
  onStepChange?: (stepIndex: number) => void;
}

export function useScriptPlayer(options: UseScriptPlayerOptions) {
  const { steps, autoPlay = false, loop = false, onComplete, onStepChange } = options;
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isPaused, setIsPaused] = useState(!autoPlay);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalSteps = steps.length;
  const currentStepData = steps[currentStep];
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === totalSteps - 1;
  const progress = totalSteps > 0 ? ((currentStep + 1) / totalSteps) * 100 : 0;

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const goToStep = useCallback((index: number) => {
    if (index >= 0 && index < totalSteps) {
      setCurrentStep(index);
      onStepChange?.(index);
    }
  }, [totalSteps, onStepChange]);

  const nextStep = useCallback(() => {
    if (isLastStep) {
      if (loop) {
        goToStep(0);
      } else {
        setIsPlaying(false);
        setIsPaused(true);
        onComplete?.();
      }
    } else {
      goToStep(currentStep + 1);
    }
  }, [isLastStep, loop, currentStep, goToStep, onComplete]);

  const prevStep = useCallback(() => {
    if (!isFirstStep) {
      goToStep(currentStep - 1);
    }
  }, [isFirstStep, currentStep, goToStep]);

  const play = useCallback(() => {
    setIsPlaying(true);
    setIsPaused(false);
  }, []);

  const pause = useCallback(() => {
    setIsPlaying(false);
    setIsPaused(true);
    clearTimer();
  }, [clearTimer]);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, pause, play]);

  const reset = useCallback(() => {
    clearTimer();
    setCurrentStep(0);
    setIsPlaying(false);
    setIsPaused(true);
  }, [clearTimer]);

  useEffect(() => {
    if (isPlaying && currentStepData?.duration) {
      clearTimer();
      timerRef.current = setTimeout(() => {
        nextStep();
      }, currentStepData.duration);
    }
    return clearTimer;
  }, [isPlaying, currentStep, currentStepData, nextStep, clearTimer]);

  return {
    currentStep,
    currentStepData,
    isPlaying,
    isPaused,
    isFirstStep,
    isLastStep,
    progress,
    totalSteps,
    goToStep,
    nextStep,
    prevStep,
    play,
    pause,
    togglePlay,
    reset,
  };
}
