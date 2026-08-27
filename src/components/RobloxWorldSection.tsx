import { motion } from 'motion/react';
import {
  RobloxLogo,
  SakuraIcon,
  BowIcon,
  SparkleStarIcon,
  CuteHeartIcon,
  GamepadIcon,
} from './SvgIcons';
import { ExternalLink, Users, Sparkles, Trophy, Flame, ShieldCheck, Gamepad2 } from 'lucide-react';
import { sounds } from '../utils/audio';
import { fireHeartConfetti } from '../utils/confetti';

export function RobloxWorldSection() {
  const robloxActivities = [
    {
      title: 'Explore Roblox',
      desc: 'Discover custom experiences, hangout games, and fun mini-worlds.',
      icon: GamepadIcon,
      color: '#FF8FAB',
    },
    {
      title: 'Join the Community',
      desc: "Become an official member of Reuben's Corner on Roblox.",
      icon: Users,
      color: '#CDB4FF',
    },
    {
      title: 'Meet Other People',
      desc: 'Make new friends who share a love for gaming and cute vibes.',
      icon: CuteHeartIcon,
      color: '#FF6EA7',
    },
    {
      title: "See What's Happening",
      desc: 'Stay in the loop with events, community shoutouts, and updates.',
      icon: Sparkles,
      color: '#FFB6D2',
    },
    {
      title: 'Have Fun!',
      desc: 'Relax, hang out in experiences, and enjoy positive energy.',
      icon: BowIcon,
      color: '#FFA3CF',
    },
  ];

  const groupPerks = [
    { title: 'Community Wall Access', desc: 'Post and chat directly with other members' },
    { title: 'Special Group Ranks', desc: 'Earn recognition and cute custom roles' },
    { title: 'Event Access', desc: 'Join exclusive group hangouts & gaming sessions' },
  ];

  return (
    <section id="roblox" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-[#2C1D42]/80 border border-[#FFB6D2] text-[#FF4A85] dark:text-[#FFA3CF] text-xs font-bold shadow-sm mb-3">
            <RobloxLogo size={14} />
            <span>🎮 ROBLOX WORLD 🎮</span>
            <RobloxLogo size={14} />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3E2D4A] dark:text-[#FFF0F7] font-display">
            🌸 REUBEN'S CORNER 🌸
          </h2>
          <p className="text-sm sm:text-base text-[#7A6487] dark:text-[#BDA8D2] mt-2 max-w-xl mx-auto">
            Welcome to my Roblox community! 🎮 Explore, connect and become part of the community!
          </p>
        </div>

        {/* Hero Group Spotlight Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-10 rounded-[2.5rem] bg-gradient-to-br from-[#FFF0F6] via-white to-[#FFE5F0] dark:from-[#371B42] dark:via-[#251536] dark:to-[#2F173C] border-2 border-[#FFB6D2] dark:border-[#5E2B6F] shadow-2xl relative overflow-hidden mb-12"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Info */}
            <div className="flex-1 text-center lg:text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF8FAB]/20 dark:bg-[#FF8FAB]/30 text-[#FF4A85] dark:text-[#FFA3CF] text-xs font-bold">
                <ShieldCheck size={14} />
                <span>Verified Roblox Community • ID: 12750756</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#3E2D4A] dark:text-white font-display">
                Reuben's Corner
              </h3>

              <p className="text-sm sm:text-base text-[#675175] dark:text-[#D1C0E4] leading-relaxed">
                Join our welcoming Roblox home! Whether you're looking for fun game buddies, creative showcases, or just a sweet hangout spot, you are warmly invited!
              </p>

              {/* Perks Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                {groupPerks.map((perk, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-2xl bg-white/80 dark:bg-[#231536]/80 border border-[#FFD6E7] dark:border-[#4E2E69] text-left"
                  >
                    <p className="text-xs font-bold text-[#FF4A85] dark:text-[#FFA3CF]">
                      {perk.title}
                    </p>
                    <p className="text-[11px] text-[#7A6487] dark:text-[#B9A6CD] mt-0.5">
                      {perk.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Main Button */}
              <div className="pt-3">
                <a
                  href="https://www.roblox.com/communities/12750756/Reubens-Corner#!/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    sounds.playPop();
                    fireHeartConfetti();
                  }}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-extrabold text-sm sm:text-base text-white bg-gradient-to-r from-[#FF4A85] via-[#FF6EA7] to-[#CDB4FF] shadow-lg shadow-[#FF4A85]/30 hover:shadow-[#FF4A85]/50 transition-all hover:scale-105 active:scale-95 cursor-pointer border border-white/40"
                >
                  <RobloxLogo size={20} />
                  <span>[ 🎮 EXPLORE REUBEN'S CORNER ]</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Right Graphic Preview */}
            <div className="w-full lg:w-72 flex flex-col items-center">
              <motion.div
                whileHover={{ rotate: [0, -3, 3, 0], scale: 1.05 }}
                className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-gradient-to-tr from-[#FFB6D2] via-[#FFD6E7] to-[#E6D7FF] dark:from-[#51236B] dark:to-[#7E3E9E] p-4 flex flex-col items-center justify-center border-4 border-white dark:border-white/20 shadow-xl relative"
              >
                <div className="w-24 h-24 rounded-2xl bg-white dark:bg-[#2F1942] flex items-center justify-center text-[#FF4A85] dark:text-[#FFA3CF] shadow-inner mb-2">
                  <RobloxLogo size={52} />
                </div>
                <span className="font-extrabold text-sm text-[#3E2D4A] dark:text-white font-display">
                  Reuben's Corner
                </span>
                <span className="text-[11px] font-bold text-[#FF4A85] dark:text-[#FFB6D2]">
                  Roblox Community 🌸
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* ✨ WHAT CAN YOU DO? ✨ */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-sm sm:text-base font-extrabold text-[#FF4A85] dark:text-[#FFA3CF] uppercase tracking-wider font-display">
            <SparkleStarIcon size={18} className="text-[#FF8FAB]" />
            <span>✨ WHAT CAN YOU DO? ✨</span>
            <SparkleStarIcon size={18} className="text-[#FF8FAB]" />
          </div>
        </div>

        {/* Activities Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {robloxActivities.map((act, i) => {
            const Icon = act.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -5, scale: 1.02 }}
                onMouseEnter={() => sounds.playSparkle()}
                className="p-5 rounded-3xl bg-white/80 dark:bg-[#26173B]/80 backdrop-blur-md border border-[#FFD6E7] dark:border-[#4B2F68] shadow-md hover:shadow-lg transition-all text-center flex flex-col items-center justify-between"
              >
                <div
                  className="w-12 h-12 rounded-2xl bg-[#FFF8EE] dark:bg-[#341F4E] flex items-center justify-center mb-3 shadow-xs"
                  style={{ color: act.color }}
                >
                  <Icon size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-[#3E2D4A] dark:text-white mb-1">
                    {act.title}
                  </h4>
                  <p className="text-xs text-[#7A6487] dark:text-[#BCA8CF] leading-relaxed">
                    {act.desc}
                  </p>
                </div>
                <div className="mt-3 text-[#FF8FAB]">
                  <SakuraIcon size={14} />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
