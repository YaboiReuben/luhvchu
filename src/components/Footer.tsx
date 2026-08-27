import { motion } from 'motion/react';
import {
  BowIcon,
  SakuraIcon,
  SparkleStarIcon,
  CuteHeartIcon,
  TeddyIcon,
  YouTubeLogo,
  DiscordLogo,
  RobloxLogo,
  SnapchatLogo,
  InstagramLogo,
  TikTokLogo,
  XLogo,
} from './SvgIcons';
import { ArrowUp, RotateCcw, Heart } from 'lucide-react';
import { sounds } from '../utils/audio';
import { fireHeartConfetti, fireSparkleBurst } from '../utils/confetti';

interface FooterProps {
  onReplayIntro: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export function Footer({ onReplayIntro, onNavigateSection }: FooterProps) {
  const scrollToTop = () => {
    sounds.playPop();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 pb-12 overflow-hidden border-t-2 border-[#FFD6E7] dark:border-[#3D2554] bg-gradient-to-b from-[#FFF8EE]/60 to-[#FFEBF2]/90 dark:from-[#181124]/90 dark:to-[#120B1C]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Top ASCII ribbon */}
        <div className="flex items-center justify-center gap-2 mb-8 text-[#FF8FAB] font-mono text-sm">
          <span>♡ ⊹ ˚</span>
          <div className="h-0.5 w-16 sm:w-32 bg-gradient-to-r from-transparent via-[#FFB6D2] to-transparent" />
          <span>───────────────</span>
          <div className="h-0.5 w-16 sm:w-32 bg-gradient-to-r from-transparent via-[#FFB6D2] to-transparent" />
          <span>˚ ⊹ ♡</span>
        </div>

        {/* Big Thank you card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-10 rounded-[2.5rem] bg-white/85 dark:bg-[#231637]/85 backdrop-blur-xl border border-[#FFB6D2] dark:border-[#4E2F6B] shadow-xl max-w-3xl mx-auto mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFD6E7]/50 dark:bg-[#402357]/50 text-[#FF4A85] dark:text-[#FFA3CF] text-xs font-bold">
            <SakuraIcon size={14} />
            <span>💌 THANKS FOR VISITING! 💌</span>
            <SakuraIcon size={14} />
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#3E2D4A] dark:text-white font-display">
            Thank you for visiting my little corner of the internet! 🌷
          </h3>

          <p className="text-base text-[#6B5578] dark:text-[#C5B3D8] font-medium">
            I hope you enjoyed exploring my world! 💕
          </p>

          <div className="py-4 border-y border-[#FFD6E7]/60 dark:border-[#3D2554] my-4">
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#FF8FAB] mb-3">
              Before you go...
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs font-bold text-[#554163] dark:text-[#D1BEE4]">
              <a
                href="https://www.youtube.com/@LuhvReuben"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.playPop()}
                className="px-3 py-1.5 rounded-xl bg-[#FFF8EE] dark:bg-[#2E1D44] hover:bg-[#FFE5EC] border border-[#FFD6E7] dark:border-[#4B2E69] flex items-center gap-1.5 transition-transform hover:scale-105"
              >
                <YouTubeLogo size={14} className="text-[#FF4D4D]" />
                <span>Check out YouTube!</span>
              </a>

              <a
                href="https://www.roblox.com/communities/12750756/Reubens-Corner#!/about"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.playPop()}
                className="px-3 py-1.5 rounded-xl bg-[#FFF8EE] dark:bg-[#2E1D44] hover:bg-[#FFE5EC] border border-[#FFD6E7] dark:border-[#4B2E69] flex items-center gap-1.5 transition-transform hover:scale-105"
              >
                <RobloxLogo size={14} className="text-[#FF4A85]" />
                <span>Join Roblox group!</span>
              </a>

              <a
                href="https://discord.gg/HHGsaVPYEg"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.playPop()}
                className="px-3 py-1.5 rounded-xl bg-[#FFF8EE] dark:bg-[#2E1D44] hover:bg-[#FFE5EC] border border-[#FFD6E7] dark:border-[#4B2E69] flex items-center gap-1.5 transition-transform hover:scale-105"
              >
                <DiscordLogo size={14} className="text-[#5865F2]" />
                <span>Join Flora's Garden!</span>
              </a>

              <button
                onClick={() => onNavigateSection('socials')}
                className="px-3 py-1.5 rounded-xl bg-[#FFF8EE] dark:bg-[#2E1D44] hover:bg-[#FFE5EC] border border-[#FFD6E7] dark:border-[#4B2E69] flex items-center gap-1.5 transition-transform hover:scale-105 cursor-pointer"
              >
                <CuteHeartIcon size={14} className="text-[#FF8FAB]" />
                <span>Follow socials!</span>
              </button>
            </div>
          </div>

          <p className="text-sm font-bold text-[#FF4A85] dark:text-[#FFA3CF]">
            Come back again soon! 🎀
          </p>

          <div className="pt-2 flex items-center justify-center gap-2 text-base select-none opacity-80">
            <span>🌸</span>
            <span>🎀</span>
            <span>🧸</span>
            <span>✨</span>
            <span>💕</span>
            <span>🌷</span>
            <span>⭐</span>
            <span>☁️</span>
          </div>
        </motion.div>

        {/* Luhvreuben Big Signature */}
        <div className="space-y-2 mb-8">
          <div className="flex items-center justify-center gap-3">
            <BowIcon size={24} className="text-[#FF8FAB]" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3E2D4A] dark:text-white font-display">
              ✨ ୨୧ LUHVREUBEN ୨୧ ✨
            </h2>
            <BowIcon size={24} className="text-[#FF8FAB]" />
          </div>

          <p className="text-xs sm:text-sm text-[#7A6487] dark:text-[#BCA7CF]">
            Made with love, creativity and sparkles! 💕
          </p>

          <div className="flex items-center justify-center gap-4 pt-3 text-xs text-[#8E779F] dark:text-[#A997BC]">
            <span>© 2026 LUHVREUBEN</span>
            <span>•</span>
            <span className="text-[#FF8FAB] font-mono">♡ ♡ ♡</span>
          </div>
        </div>

        {/* Bottom Utility Controls */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-full bg-white/80 dark:bg-[#26173B] text-xs font-bold text-[#6C567A] dark:text-[#D1C0E4] hover:text-[#FF4A85] border border-[#FFD6E7] dark:border-[#4B3068] shadow-sm hover:scale-105 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <ArrowUp size={14} />
            <span>Back to Top</span>
          </button>

          <button
            onClick={() => {
              sounds.playSparkle();
              onReplayIntro();
            }}
            className="px-4 py-2 rounded-full bg-white/80 dark:bg-[#26173B] text-xs font-bold text-[#6C567A] dark:text-[#D1C0E4] hover:text-[#FF4A85] border border-[#FFD6E7] dark:border-[#4B3068] shadow-sm hover:scale-105 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <RotateCcw size={14} />
            <span>Replay Intro ✨</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
