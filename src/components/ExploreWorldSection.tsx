import { motion } from 'motion/react';
import {
  BowIcon,
  SakuraIcon,
  SparkleStarIcon,
  CuteHeartIcon,
  GamepadIcon,
  YouTubeLogo,
  DiscordLogo,
} from './SvgIcons';
import { Sparkles, ArrowRight, Play, Gamepad2, MessageSquare, Code2 } from 'lucide-react';
import { sounds } from '../utils/audio';
import { fireSparkleBurst } from '../utils/confetti';

interface ExploreWorldProps {
  onNavigateSection: (sectionId: string) => void;
}

export function ExploreWorldSection({ onNavigateSection }: ExploreWorldProps) {
  const cards = [
    {
      id: 'roblox',
      title: 'GAMING',
      subtitle: 'Welcome to my gaming world! 🎮✨',
      desc: 'Explore games, communities and everything connected to my gaming adventures!',
      btnLabel: 'EXPLORE GAMING',
      icon: GamepadIcon,
      accentColor: '#FF8FAB',
      btnBg: 'bg-gradient-to-r from-[#FF8FAB] to-[#FF6EA7]',
      cardBg: 'from-[#FFF0F6] via-white to-[#FFE6F0] dark:from-[#371E42] dark:via-[#261633] dark:to-[#2F193B]',
      border: 'border-[#FFB6D2] dark:border-[#572B6B]',
      badge: 'Roblox & More',
    },
    {
      id: 'videos',
      title: 'VIDEOS',
      subtitle: 'Watch my videos & YouTube content! 🎬✨',
      desc: 'Find my newest uploads and check out my channel for fun edits & videos!',
      btnLabel: 'WATCH NOW',
      icon: YouTubeLogo,
      accentColor: '#FF4D4D',
      btnBg: 'bg-gradient-to-r from-[#FF4D4D] to-[#FF7878]',
      cardBg: 'from-[#FFF2F2] via-white to-[#FFE5E5] dark:from-[#3E1C2E] dark:via-[#261633] dark:to-[#351829]',
      border: 'border-[#FF9EAA] dark:border-[#652545]',
      badge: 'YouTube @LuhvReuben',
    },
    {
      id: 'community',
      title: 'COMMUNITY',
      subtitle: 'Join my community & hang out! 💬💕',
      desc: 'Chat, meet people, have fun and be part of the sweetest gaming community!',
      btnLabel: 'JOIN US',
      icon: DiscordLogo,
      accentColor: '#5865F2',
      btnBg: 'bg-gradient-to-r from-[#5865F2] to-[#7983F5]',
      cardBg: 'from-[#F0F3FF] via-white to-[#E4E9FF] dark:from-[#22244E] dark:via-[#201738] dark:to-[#1C1F45]',
      border: 'border-[#B4C0FF] dark:border-[#3E428C]',
      badge: 'Discord & Groups',
    },
    {
      id: 'projects',
      title: 'PROJECTS',
      subtitle: 'Explore what I am working on! ✨💻',
      desc: 'Websites, communities, creative ideas, video edits, and custom creations!',
      btnLabel: 'EXPLORE PROJECTS',
      icon: Sparkles,
      accentColor: '#CDB4FF',
      btnBg: 'bg-gradient-to-r from-[#CDB4FF] to-[#A380F5]',
      cardBg: 'from-[#F6F0FF] via-white to-[#EFE6FF] dark:from-[#2D1F4D] dark:via-[#201738] dark:to-[#291B48]',
      border: 'border-[#D9C4FF] dark:border-[#4B307D]',
      badge: 'Creative Showcase',
    },
  ];

  return (
    <section id="explore-world" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-[#2C1D42]/80 border border-[#FFB6D2] text-[#FF4A85] dark:text-[#FFA3CF] text-xs font-bold shadow-sm mb-3">
            <SparkleStarIcon size={14} />
            <span>✨ EXPLORE MY WORLD ✨</span>
            <SparkleStarIcon size={14} />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3E2D4A] dark:text-[#FFF0F7] font-display">
            Step Into My Universe
          </h2>
          <p className="text-sm sm:text-base text-[#7A6487] dark:text-[#BDA8D2] mt-2 max-w-xl mx-auto">
            Discover all the fun, cute, and exciting corners of what I create and share!
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                onMouseEnter={() => sounds.playSparkle()}
                className={`p-6 sm:p-8 rounded-[2.2rem] bg-gradient-to-br ${card.cardBg} border-2 ${card.border} shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between relative group`}
              >
                {/* Cute Corner Sakura */}
                <div className="absolute top-4 right-4 opacity-40 group-hover:opacity-80 transition-opacity">
                  <SakuraIcon size={24} style={{ color: card.accentColor }} />
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-14 h-14 rounded-2xl bg-white dark:bg-[#2A1D3D] flex items-center justify-center shadow-md border border-white/60 dark:border-white/10 group-hover:rotate-6 transition-transform"
                      style={{ color: card.accentColor }}
                    >
                      <Icon size={28} />
                    </div>
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#FF8FAB] dark:text-[#FFB6D2]">
                        {card.badge}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#3E2D4A] dark:text-[#FFF0F7] font-display">
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-base font-bold text-[#FF6EA7] dark:text-[#FFA3CF] mb-2">
                    {card.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#6C557A] dark:text-[#C5B3D8] leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>

                <div>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={(e) => {
                      sounds.playPop();
                      fireSparkleBurst(e.clientX, e.clientY);
                      onNavigateSection(card.id);
                    }}
                    className={`w-full py-3.5 px-6 rounded-2xl text-white font-bold text-sm ${card.btnBg} shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer border border-white/40`}
                  >
                    <span>[ {card.btnLabel} ]</span>
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
