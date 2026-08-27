import { motion } from 'motion/react';
import {
  YouTubeLogo,
  SakuraIcon,
  BowIcon,
  CuteHeartIcon,
} from './SvgIcons';
import { Play, ExternalLink } from 'lucide-react';
import { sounds } from '../utils/audio';
import { fireHeartConfetti, fireSparkleBurst } from '../utils/confetti';

export function VideoCornerSection() {
  return (
    <section id="videos" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-[#2C1D42]/80 border border-[#FFB6D2] text-[#FF4A85] dark:text-[#FFA3CF] text-xs font-bold shadow-sm mb-3">
            <YouTubeLogo size={14} />
            <span>🎬 YOUTUBE & VIDEO CORNER 🎬</span>
            <YouTubeLogo size={14} />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3E2D4A] dark:text-[#FFF0F7] font-display">
            ✨ OFFICIAL YOUTUBE CHANNEL ✨
          </h2>
          <p className="text-sm sm:text-base text-[#7A6487] dark:text-[#BDA8D2] mt-2 max-w-xl mx-auto">
            Subscribe, watch videos and explore all new uploads directly on YouTube!
          </p>
        </div>

        {/* YouTube Channel Spotlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-10 rounded-[2.5rem] bg-gradient-to-br from-[#FFF2F2] via-white to-[#FFE5E5] dark:from-[#3D182A] dark:via-[#251536] dark:to-[#331424] border-2 border-[#FFA3A3] dark:border-[#6B283F] shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
              <div className="w-20 h-20 rounded-3xl bg-[#FF0000] flex items-center justify-center text-white shadow-lg shadow-[#FF0000]/30">
                <YouTubeLogo size={42} />
              </div>
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#FF4D4D]">
                  Official YouTube Channel
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#3E2D4A] dark:text-white font-display">
                  @LuhvReuben
                </h3>
                <p className="text-xs sm:text-sm text-[#73576C] dark:text-[#D4BCCE] mt-1">
                  Watch new videos • Playlists • Gaming highlights • Community specials
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://www.youtube.com/@LuhvReuben"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  sounds.playPop();
                  fireHeartConfetti();
                }}
                className="px-6 py-3.5 rounded-2xl font-extrabold text-sm text-white bg-[#FF0000] hover:bg-[#D90000] shadow-md shadow-[#FF0000]/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
              >
                <YouTubeLogo size={18} />
                <span>[ ▶️ WATCH ON YOUTUBE ]</span>
                <ExternalLink size={15} />
              </a>

              <a
                href="https://www.youtube.com/@LuhvReuben?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  sounds.playPop();
                  fireSparkleBurst();
                }}
                className="px-6 py-3.5 rounded-2xl font-bold text-sm bg-white dark:bg-[#31182B] text-[#FF4D4D] dark:text-[#FFA3A3] hover:bg-[#FFE5E5] border border-[#FF9999] shadow-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
              >
                <CuteHeartIcon size={16} className="text-[#FF4D4D]" />
                <span>[ 🎬 SUBSCRIBE TO CHANNEL ]</span>
              </a>
            </div>
          </div>

          {/* Key Quick Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-[#FFD6D6] dark:border-[#4D2336]">
            {[
              { label: '🎬 YouTube Channel', desc: '@LuhvReuben on YouTube' },
              { label: '❤️ Subscribe & Support', desc: 'Join the channel family' },
              { label: '✨ Fun Gameplay', desc: 'Fresh new uploads' },
              { label: '🎀 Regular Uploads', desc: 'Check back for more!' },
            ].map((b, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-white/70 dark:bg-[#2A1526]/70 border border-[#FFD6E7] dark:border-[#4B2236] text-center"
              >
                <p className="text-xs font-bold text-[#3E2D4A] dark:text-white">{b.label}</p>
                <p className="text-[10px] text-[#7A6487] dark:text-[#C5B3DC] mt-0.5">{b.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
