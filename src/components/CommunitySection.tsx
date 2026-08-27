import { motion } from 'motion/react';
import {
  DiscordLogo,
  SakuraIcon,
  BowIcon,
  SparkleStarIcon,
  CuteHeartIcon,
  GamepadIcon,
} from './SvgIcons';
import { MessageSquare, Users, Sparkles, Smile, ExternalLink, Shield, Radio, Flame } from 'lucide-react';
import { sounds } from '../utils/audio';
import { fireHeartConfetti } from '../utils/confetti';

export function CommunitySection() {
  const features = [
    {
      title: 'CHAT',
      desc: 'Talk with other members!',
      sub: 'Friendly chats, kawaii memes & cute channels',
      icon: MessageSquare,
      color: '#5865F2',
      bg: 'from-[#EEF1FF] to-[#F6F8FF] dark:from-[#21244E] dark:to-[#171939]',
    },
    {
      title: 'GAME',
      desc: 'Find people to play games with!',
      sub: 'Roblox squads, party games & co-op fun',
      icon: GamepadIcon,
      color: '#FF8FAB',
      bg: 'from-[#FFF0F6] to-[#FFF8FB] dark:from-[#3E1D43] dark:to-[#26132A]',
    },
    {
      title: 'HANG OUT',
      desc: 'Relax and have fun!',
      sub: 'Voice hangouts, music listening & chilling',
      icon: Smile,
      color: '#CDB4FF',
      bg: 'from-[#F3EBFF] to-[#FAF6FF] dark:from-[#2D1F4F] dark:to-[#1F143A]',
    },
    {
      title: 'CONNECT',
      desc: 'Become part of the community!',
      sub: 'Exclusive member roles, events & perks',
      icon: Users,
      color: '#FF6EA7',
      bg: 'from-[#FFE8F2] to-[#FFF5FA] dark:from-[#3E1B38] dark:to-[#261023]',
    },
  ];

  return (
    <section id="community" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-[#2C1D42]/80 border border-[#FFB6D2] text-[#FF4A85] dark:text-[#FFA3CF] text-xs font-bold shadow-sm mb-3">
            <DiscordLogo size={14} />
            <span>💬 COMMUNITY CORNER 💬</span>
            <DiscordLogo size={14} />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3E2D4A] dark:text-[#FFF0F7] font-display">
            🌸 COME JOIN THE FUN! 🌸
          </h2>
          <p className="text-sm sm:text-base text-[#7A6487] dark:text-[#BDA8D2] mt-2 max-w-xl mx-auto">
            Join my Discord community and become part of it! 💕
          </p>
        </div>

        {/* Discord Hero Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-10 rounded-[2.5rem] bg-gradient-to-br from-[#F0F3FF] via-white to-[#E3E8FF] dark:from-[#1E224F] dark:via-[#21163A] dark:to-[#17193F] border-2 border-[#B4C0FF] dark:border-[#434891] shadow-2xl relative overflow-hidden mb-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-5 text-center md:text-left flex-col md:flex-row">
              <div className="w-20 h-20 rounded-3xl bg-[#5865F2] flex items-center justify-center text-white shadow-lg shadow-[#5865F2]/40">
                <DiscordLogo size={46} />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#5865F2] dark:text-[#8E97FF]">
                    Official Discord Server 🌿
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#3E2D4A] dark:text-white font-display">
                  Flora's Community Garden 🌷
                </h3>
                <p className="text-xs sm:text-sm text-[#646A8E] dark:text-[#CBD0F5]">
                  Friendly members • Flower & gaming channels • Voice lounges • Fun events
                </p>
              </div>
            </div>

            {/* Direct Join Discord CTA */}
            <div>
              <a
                href="https://discord.gg/HHGsaVPYEg"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  sounds.playPop();
                  fireHeartConfetti();
                }}
                className="px-8 py-4 rounded-2xl font-extrabold text-sm sm:text-base text-white bg-[#5865F2] hover:bg-[#4752C4] shadow-lg shadow-[#5865F2]/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer border border-white/40"
              >
                <DiscordLogo size={20} />
                <span>[ 💬 JOIN FLORA'S GARDEN ]</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Channels Preview Mockup */}
          <div className="mt-8 pt-6 border-t border-[#D5DCFF] dark:border-[#383C73] grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { tag: '# 🌷-welcome-garden', desc: 'Get your cute roles' },
              { tag: '# 💬-general-sprout', desc: 'Main cozy hangout' },
              { tag: '# 🎮-roblox-squads', desc: 'Find game buddies' },
              { tag: '# ✨-creations-and-art', desc: 'Show off your work' },
            ].map((ch, i) => (
              <div
                key={i}
                className="p-3 rounded-2xl bg-white/80 dark:bg-[#191B3E]/80 border border-[#D5DCFF] dark:border-[#363B72] text-left"
              >
                <p className="text-xs font-mono font-bold text-[#5865F2] dark:text-[#9DA4FF]">
                  {ch.tag}
                </p>
                <p className="text-[10px] text-[#7A6487] dark:text-[#B5BCE8] mt-0.5">
                  {ch.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 4 Feature Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                onMouseEnter={() => sounds.playSparkle()}
                className={`p-6 rounded-3xl bg-gradient-to-br ${f.bg} border-2 border-white dark:border-white/10 shadow-md hover:shadow-xl transition-all flex flex-col justify-between`}
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-2xl bg-white dark:bg-[#281A3F] flex items-center justify-center mb-4 shadow-sm"
                    style={{ color: f.color }}
                  >
                    <Icon size={24} />
                  </div>
                  <h4 className="text-lg font-extrabold text-[#3E2D4A] dark:text-white font-display mb-1">
                    {f.title}
                  </h4>
                  <p className="text-xs font-bold text-[#FF6EA7] dark:text-[#FFA3CF] mb-1">
                    {f.desc}
                  </p>
                  <p className="text-[11px] text-[#746083] dark:text-[#BFAFD1] leading-relaxed">
                    {f.sub}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[11px] font-semibold text-[#8C759C]">
                  <span>Discord Perk #{i + 1}</span>
                  <SakuraIcon size={12} style={{ color: f.color }} />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
