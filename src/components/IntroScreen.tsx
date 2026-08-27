import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BowIcon, SparkleStarIcon, CuteHeartIcon, SakuraIcon } from './SvgIcons';
import { sounds } from '../utils/audio';
import { fireHeartConfetti } from '../utils/confetti';

interface IntroScreenProps {
  onComplete: () => void;
  isDark: boolean;
}

export function IntroScreen({ onComplete, isDark }: IntroScreenProps) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Play intro sounds & step progression
    sounds.playSparkle();

    const t1 = setTimeout(() => {
      setStep(1);
    }, 400);

    const t2 = setTimeout(() => {
      setStep(2);
      sounds.playChime();
    }, 900);

    const t3 = setTimeout(() => {
      setStep(3);
      fireHeartConfetti();
    }, 1400);

    const t4 = setTimeout(() => {
      onComplete();
    }, 2400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center ${
          isDark
            ? 'bg-[#181124] text-[#FFD6E7]'
            : 'bg-[#FFF8EE] text-[#4A3B52]'
        }`}
      >
        {/* Floating Sparkles & Sakura */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-40"
        >
          <div className="w-[360px] h-[360px] rounded-full border-2 border-dashed border-[#FFB6D2]/40" />
        </motion.div>

        {/* Step 1: Sparkles & Cute Icons popping */}
        <div className="relative flex flex-col items-center">
          {step >= 0 && (
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', damping: 12, stiffness: 200 }}
              className="flex items-center gap-2 mb-3 text-[#FF8FAB]"
            >
              <SakuraIcon size={28} className="animate-spin-slow" />
              <span className="text-sm font-semibold tracking-widest uppercase">
                ₊˚⊹♡ Welcome ♡⊹˚₊
              </span>
              <SakuraIcon size={28} className="animate-spin-slow" />
            </motion.div>
          )}

          {/* Step 2: Luhvreuben Logo Badge */}
          {step >= 1 && (
            <motion.div
              initial={{ scale: 0.5, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ type: 'spring', damping: 14, stiffness: 180 }}
              className="relative px-8 py-5 rounded-3xl shadow-xl border-2 flex flex-col items-center bg-white/80 dark:bg-[#261B3B]/90 backdrop-blur-md border-[#FFB6D2]"
            >
              {/* Surrounding hearts */}
              {step >= 2 && (
                <>
                  <motion.div
                    initial={{ scale: 0, x: -10 }}
                    animate={{ scale: 1, x: 0 }}
                    className="absolute -top-3 -left-3 text-[#FF8FAB]"
                  >
                    <CuteHeartIcon size={24} />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0, x: 10 }}
                    animate={{ scale: 1, x: 0 }}
                    className="absolute -top-3 -right-3 text-[#CDB4FF]"
                  >
                    <SparkleStarIcon size={24} />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0, y: 10 }}
                    animate={{ scale: 1, y: 0 }}
                    className="absolute -bottom-3 text-[#FFB6D2]"
                  >
                    <BowIcon size={26} />
                  </motion.div>
                </>
              )}

              <div className="flex items-center gap-3">
                <BowIcon size={32} className="text-[#FF8FAB]" />
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display bg-gradient-to-r from-[#FF8FAB] via-[#CDB4FF] to-[#FF8FAB] bg-clip-text text-transparent">
                  ୨୧ Luhvreuben ୨୧
                </h1>
                <BowIcon size={32} className="text-[#FF8FAB]" />
              </div>
              <p className="text-xs sm:text-sm font-medium text-[#7D6B88] dark:text-[#D1C2E0] mt-1">
                🌸 Cute • Fun • Creative 🌸
              </p>
            </motion.div>
          )}

          {/* Step 3: Loading bar */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '180px' }}
            transition={{ delay: 0.6, duration: 1 }}
            className="h-1.5 rounded-full bg-[#FFD6E7] dark:bg-[#34244E] mt-6 overflow-hidden"
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
              className="w-1/2 h-full bg-gradient-to-r from-[#FF8FAB] to-[#CDB4FF] rounded-full"
            />
          </motion.div>

          <button
            onClick={() => {
              sounds.playPop();
              onComplete();
            }}
            className="mt-6 text-xs text-[#9B8CA6] hover:text-[#FF8FAB] transition-colors underline cursor-pointer"
          >
            Skip intro ✨
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
