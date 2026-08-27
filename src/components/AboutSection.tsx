import { motion } from 'motion/react';
import {
  BowIcon,
  SakuraIcon,
  SparkleStarIcon,
  CuteHeartIcon,
  GamepadIcon,
  TeddyIcon,
} from './SvgIcons';
import { Video, Code, Palette, Users, Sparkles, Heart } from 'lucide-react';
import { sounds } from '../utils/audio';

export function AboutSection() {
  const roles = [
    {
      title: 'Gamer',
      desc: 'I enjoy exploring and playing games!',
      icon: GamepadIcon,
      accent: '#FF8FAB',
      bg: 'from-[#FFE8F0] to-[#FFF0F7] dark:from-[#3D2248] dark:to-[#2B1736]',
      tag: 'Roblox & More',
    },
    {
      title: 'Creator',
      desc: 'I enjoy creating and working on projects!',
      icon: Sparkles,
      accent: '#CDB4FF',
      bg: 'from-[#F2EBFF] to-[#FAF6FF] dark:from-[#2F214E] dark:to-[#21163B]',
      tag: 'Art & Code',
    },
    {
      title: 'Content Creator',
      desc: 'I create and share content online!',
      icon: Video,
      accent: '#FF6B6B',
      bg: 'from-[#FFEBEB] to-[#FFF5F5] dark:from-[#442137] dark:to-[#2A1626]',
      tag: 'YouTube & TikTok',
    },
    {
      title: 'Editor',
      desc: 'I enjoy editing and creating new things!',
      icon: Palette,
      accent: '#FFB6D2',
      bg: 'from-[#FFF0F6] to-[#FFF9FC] dark:from-[#3B1F3C] dark:to-[#28152D]',
      tag: 'Video & Visuals',
    },
    {
      title: 'Community Owner',
      desc: 'I enjoy building communities and bringing people together! 💕',
      icon: Users,
      accent: '#5865F2',
      bg: 'from-[#EDF0FF] to-[#F7F9FF] dark:from-[#252857] dark:to-[#1A1A3F]',
      tag: "Reuben's Corner & Discord",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-[#2C1D42]/80 border border-[#FFB6D2] text-[#FF4A85] dark:text-[#FFA3CF] text-xs font-bold shadow-sm mb-3">
            <BowIcon size={14} />
            <span>🎀 ABOUT ME 🎀</span>
            <BowIcon size={14} />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3E2D4A] dark:text-[#FFF0F7] font-display">
            ₊˚⊹♡ Hiii! ♡⊹˚₊
          </h2>
          <p className="text-sm sm:text-base text-[#FF8FAB] font-semibold mt-2">
            Welcome to my cute little space on the internet! 🌸
          </p>
        </div>

        {/* Bio Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-10 rounded-[2.5rem] bg-white/85 dark:bg-[#231738]/85 backdrop-blur-xl border-2 border-[#FFD6E7] dark:border-[#4B3268] shadow-xl text-center max-w-3xl mx-auto mb-14"
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-3xl bg-gradient-to-tr from-[#FFB6D2] via-[#FFD6E7] to-[#E6D7FF] dark:from-[#49225E] dark:to-[#6E3C8E] flex items-center justify-center border-2 border-white dark:border-white/20 shadow-md">
            <TeddyIcon size={36} className="text-[#FF4A85] dark:text-[#FFA3CF]" />
          </div>

          <p className="text-base sm:text-lg text-[#523E5E] dark:text-[#E2D5EE] leading-relaxed font-medium">
            I'm <strong className="text-[#FF4A85] dark:text-[#FFA3CF] font-extrabold">Luhvreuben</strong> and this is a place where you can find everything connected to my online world! 💕
          </p>
          <p className="text-sm sm:text-base text-[#7A6487] dark:text-[#BDA8D2] mt-3 leading-relaxed">
            From gaming and content to communities, projects, videos, socials and creative ideas! ✨
          </p>

          <div className="flex items-center justify-center gap-3 mt-6 pt-6 border-t border-[#FFD6E7]/60 dark:border-[#3E2958] text-xs font-bold text-[#8C749B] dark:text-[#B9A5CD]">
            <span>✨ Creative Mind</span>
            <span>•</span>
            <span>🎮 Gaming Heart</span>
            <span>•</span>
            <span>🧸 Community Builder</span>
          </div>
        </motion.div>

        {/* 🌷 A LITTLE ABOUT ME 🌷 */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-sm sm:text-base font-extrabold text-[#FF4A85] dark:text-[#FFA3CF] uppercase tracking-wider font-display">
            <SakuraIcon size={18} className="text-[#FF8FAB]" />
            <span>🌷 A LITTLE ABOUT ME 🌷</span>
            <SakuraIcon size={18} className="text-[#FF8FAB]" />
          </div>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {roles.map((role, idx) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                onMouseEnter={() => sounds.playSparkle()}
                className={`p-6 rounded-3xl bg-gradient-to-br ${role.bg} border-2 border-white dark:border-white/10 shadow-md hover:shadow-xl transition-all relative overflow-hidden flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-2xl bg-white dark:bg-[#2C1D42] flex items-center justify-center shadow-sm border border-[#FFD6E7]/50"
                      style={{ color: role.accent }}
                    >
                      <Icon size={24} />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/80 dark:bg-[#221636]/80 text-[#7D5A8C] dark:text-[#D4C0E8] border border-black/5">
                      {role.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-[#3E2D4A] dark:text-[#FFF0F7] mb-2">
                    {role.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6C557A] dark:text-[#CBBADF] leading-relaxed">
                    {role.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[11px] font-semibold text-[#8E799D] dark:text-[#AFA1C1]">
                  <span>Role #{idx + 1}</span>
                  <SparkleStarIcon size={12} style={{ color: role.accent }} />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
