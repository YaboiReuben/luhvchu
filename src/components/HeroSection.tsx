import { motion } from 'motion/react';
import {
  BowIcon,
  SakuraIcon,
  SparkleStarIcon,
  CuteHeartIcon,
  GamepadIcon,
  YouTubeLogo,
  DiscordLogo,
  RobloxLogo,
  TeddyIcon,
} from './SvgIcons';
import { sounds } from '../utils/audio';
import { fireHeartConfetti, fireSparkleBurst } from '../utils/confetti';
import { ArrowDown, Sparkles, Video, Code, Palette, Users, Share2, Compass } from 'lucide-react';

interface HeroSectionProps {
  onExploreWorld: () => void;
  onFindLinks: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export function HeroSection({
  onExploreWorld,
  onFindLinks,
  onNavigateSection,
}: HeroSectionProps) {
  const highlights = [
    { title: 'Gaming', desc: 'Roblox, adventures & gameplay', icon: GamepadIcon, color: '#FF8FAB', bg: 'bg-[#FFD6E7]/50 dark:bg-[#3D254F]' },
    { title: 'Videos', desc: 'YouTube uploads & edits', icon: Video, color: '#FF6B6B', bg: 'bg-[#FFE6EB]/60 dark:bg-[#45233A]' },
    { title: 'Projects', desc: 'Creative builds & sites', icon: Code, color: '#CDB4FF', bg: 'bg-[#E6D7FF]/50 dark:bg-[#322354]' },
    { title: 'Creating', desc: 'Design & imagination', icon: Sparkles, color: '#FFB6D2', bg: 'bg-[#FFF0F7]/70 dark:bg-[#3A2246]' },
    { title: 'Editing', desc: 'Montages & video effects', icon: Palette, color: '#FF8FAB', bg: 'bg-[#FFD6E7]/40 dark:bg-[#3A2242]' },
    { title: 'Communities', desc: 'Roblox & Discord hubs', icon: Users, color: '#5865F2', bg: 'bg-[#E0E5FF]/60 dark:bg-[#252857]' },
    { title: 'Social Media', desc: 'TikTok, Snap, X & Insta', icon: Share2, color: '#FF6EA7', bg: 'bg-[#FFE4EE]/60 dark:bg-[#432338]' },
    { title: 'And more!', desc: 'Constant new creations', icon: CuteHeartIcon, color: '#FF8FAB', bg: 'bg-[#FFF8EE]/90 dark:bg-[#332244]' },
  ];

  return (
    <section id="home" className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Aesthetic Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 sm:gap-3 mb-6"
        >
          <span className="text-[#FF8FAB] select-none font-mono text-sm sm:text-base">♡ ⊹ ˚</span>
          <div className="h-0.5 w-12 sm:w-24 bg-gradient-to-r from-transparent via-[#FFB6D2] to-transparent" />
          <div className="px-4 py-1 rounded-full bg-white/80 dark:bg-[#2C1D42]/80 backdrop-blur-md border border-[#FFB6D2] text-[#FF4A85] dark:text-[#FFA3CF] text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-sm">
            <SakuraIcon size={14} className="animate-spin-slow" />
            <span>₊˚⊹♡ WELCOME TO LUHVREUBEN ♡⊹˚₊</span>
            <SakuraIcon size={14} className="animate-spin-slow" />
          </div>
          <div className="h-0.5 w-12 sm:w-24 bg-gradient-to-r from-transparent via-[#FFB6D2] to-transparent" />
          <span className="text-[#FF8FAB] select-none font-mono text-sm sm:text-base">˚ ⊹ ♡</span>
        </motion.div>

        {/* Hero Card Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative p-6 sm:p-10 md:p-12 rounded-[2.5rem] bg-gradient-to-b from-white/90 via-white/80 to-[#FFF0F7]/90 dark:from-[#261B3B]/90 dark:via-[#201533]/85 dark:to-[#2B1B42]/90 backdrop-blur-xl border-2 border-[#FFD6E7] dark:border-[#4B3268] shadow-2xl shadow-[#FFB6D2]/20 dark:shadow-black/40 text-center"
        >
          {/* Kawaii Face Avatar Badge */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
            className="inline-flex flex-col items-center justify-center mb-6 cursor-pointer"
            onClick={(e) => {
              sounds.playSparkle();
              fireSparkleBurst(e.clientX, e.clientY);
            }}
          >
            <div className="relative p-4 rounded-3xl bg-gradient-to-tr from-[#FFD6E7] via-[#FFF8EE] to-[#E6D7FF] dark:from-[#43235A] dark:to-[#6C3C8A] border-2 border-[#FFB6D2] shadow-lg shadow-[#FFB6D2]/30">
              <div className="flex items-center justify-center gap-2">
                <SakuraIcon size={18} className="text-[#FF8FAB]" />
                <span className="text-2xl sm:text-3xl font-extrabold text-[#4A3B52] dark:text-[#FFF0F7] select-none">
                  ૮ ˶ᵔ ᵕ ᵔ˶ ა
                </span>
                <BowIcon size={20} className="text-[#FF4A85] dark:text-[#FFA3CF]" />
              </div>
              {/* Little cute status pill */}
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-[#FF8FAB] text-white text-[10px] font-bold tracking-wide flex items-center gap-1 shadow-sm whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                <span>ONLINE & CREATING</span>
              </div>
            </div>
          </motion.div>

          {/* Main Titles */}
          <div className="space-y-3 mb-6">
            <div className="inline-block">
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#FF4A85] dark:text-[#FFA3CF] uppercase bg-[#FFD6E7]/50 dark:bg-[#43235A]/50 px-3 py-1 rounded-full border border-[#FFB6D2]/40">
                🎀 Gaming • Content • Community 🎀
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-[#3E2D4A] dark:text-[#FFF0F7]">
              HIII, WELCOME TO MY WEBSITE! 💕
            </h1>

            <div className="flex items-center justify-center gap-2 text-base sm:text-xl font-bold text-[#7D5A8C] dark:text-[#D9C4EC]">
              <SparkleStarIcon size={18} className="text-[#CDB4FF]" />
              <span>₊˚⊹♡ Welcome to Luhvreuben! ♡⊹˚₊</span>
              <SparkleStarIcon size={18} className="text-[#CDB4FF]" />
            </div>

            <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#6B5578] dark:text-[#C5B3D6] leading-relaxed">
              Welcome to my little corner of the internet! A cute little place where you can explore my socials, videos, projects, gaming, communities, creations and much more!
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 my-8">
            {/* Explore My World Button */}
            <motion.button
              id="hero-explore-world-btn"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                sounds.playPop();
                fireHeartConfetti();
                onExploreWorld();
              }}
              className="px-6 sm:px-8 py-3.5 rounded-2xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#FF8FAB] via-[#FF6EA7] to-[#CDB4FF] shadow-lg shadow-[#FF8FAB]/40 hover:shadow-[#FF8FAB]/60 transition-all border-2 border-white/50 flex items-center gap-2 cursor-pointer group"
            >
              <CuteHeartIcon size={18} className="group-hover:scale-125 transition-transform" />
              <span>💕 EXPLORE MY WORLD 💕</span>
            </motion.button>

            {/* Find My Links Button */}
            <motion.button
              id="hero-find-links-btn"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                sounds.playPop();
                fireSparkleBurst(e.clientX, e.clientY);
                onFindLinks();
              }}
              className="px-6 sm:px-8 py-3.5 rounded-2xl font-bold text-sm sm:text-base text-[#4A3B52] dark:text-white bg-white dark:bg-[#322149] hover:bg-[#FFF0F7] dark:hover:bg-[#3E295B] border-2 border-[#FFB6D2] dark:border-[#5E3E85] shadow-md transition-all flex items-center gap-2 cursor-pointer group"
            >
              <BowIcon size={18} className="text-[#FF8FAB] group-hover:rotate-12 transition-transform" />
              <span>🎀 FIND MY LINKS 🎀</span>
            </motion.button>
          </div>

          {/* Quick Platform Badges */}
          <div className="pt-6 border-t border-[#FFD6E7]/80 dark:border-[#3C2753] flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <button
              onClick={() => {
                sounds.playPop();
                onNavigateSection('roblox');
              }}
              className="px-3.5 py-1.5 rounded-xl bg-white/70 dark:bg-[#2C1D42]/70 border border-[#FFB6D2]/60 hover:border-[#FF8FAB] text-xs font-bold text-[#5B4868] dark:text-[#E2D5EE] flex items-center gap-1.5 transition-all hover:scale-105 cursor-pointer"
            >
              <RobloxLogo size={14} className="text-[#FF8FAB]" />
              <span>Reuben's Corner Roblox</span>
            </button>

            <button
              onClick={() => {
                sounds.playPop();
                onNavigateSection('videos');
              }}
              className="px-3.5 py-1.5 rounded-xl bg-white/70 dark:bg-[#2C1D42]/70 border border-[#FFB6D2]/60 hover:border-[#FF8FAB] text-xs font-bold text-[#5B4868] dark:text-[#E2D5EE] flex items-center gap-1.5 transition-all hover:scale-105 cursor-pointer"
            >
              <YouTubeLogo size={14} className="text-[#FF4D4D]" />
              <span>YouTube @LuhvReuben</span>
            </button>

            <button
              onClick={() => {
                sounds.playPop();
                onNavigateSection('community');
              }}
              className="px-3.5 py-1.5 rounded-xl bg-white/70 dark:bg-[#2C1D42]/70 border border-[#FFB6D2]/60 hover:border-[#FF8FAB] text-xs font-bold text-[#5B4868] dark:text-[#E2D5EE] flex items-center gap-1.5 transition-all hover:scale-105 cursor-pointer"
            >
              <DiscordLogo size={14} className="text-[#5865F2]" />
              <span>Discord Community</span>
            </button>
          </div>
        </motion.div>

        {/* "WHAT WILL YOU FIND?" Section Box */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-[#221735]/70 backdrop-blur-md border border-[#FFD6E7] dark:border-[#3D2754] shadow-lg text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <CuteHeartIcon size={20} className="text-[#FF8FAB]" />
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A3B52] dark:text-[#FFF0F7] font-display">
              💕 WHAT WILL YOU FIND? 💕
            </h2>
            <CuteHeartIcon size={20} className="text-[#FF8FAB]" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -4, scale: 1.02 }}
                  onMouseEnter={() => sounds.playSparkle()}
                  className={`p-4 rounded-2xl ${item.bg} border border-white/60 dark:border-white/5 shadow-sm transition-all text-left flex flex-col justify-between`}
                >
                  <div className="w-8 h-8 rounded-xl bg-white/90 dark:bg-[#2D1F42] flex items-center justify-center shadow-xs mb-2">
                    <Icon size={18} style={{ color: item.color }} />
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-[#3E2D4A] dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-[#7A6687] dark:text-[#BFAECF] mt-0.5 line-clamp-1">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => onNavigateSection('about')}
            className="flex flex-col items-center text-xs font-semibold text-[#A08DAE] hover:text-[#FF8FAB] transition-colors cursor-pointer"
          >
            <span>Scroll to explore</span>
            <ArrowDown size={16} className="animate-bounce mt-1 text-[#FF8FAB]" />
          </button>
        </div>

      </div>
    </section>
  );
}
