import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  YouTubeLogo,
  SakuraIcon,
  BowIcon,
  SparkleStarIcon,
  CuteHeartIcon,
} from './SvgIcons';
import { Play, ExternalLink, Eye, Clock, Film, Heart, Sparkles, X } from 'lucide-react';
import { sounds } from '../utils/audio';
import { fireHeartConfetti, fireSparkleBurst } from '../utils/confetti';
import { VideoItem } from '../types';

export function VideoCornerSection() {
  const [activeVideoModal, setActiveVideoModal] = useState<VideoItem | null>(null);

  const videos: VideoItem[] = [
    {
      id: 'v1',
      title: 'Roblox Adventures with Friends! ✨ Fun & Chaos',
      category: 'Roblox Gaming',
      thumbnail: 'https://images.unsplash.com/photo-1612287233215-648ccaa2bc9a?w=800&auto=format&fit=crop&q=80',
      views: 'YouTube Upload',
      duration: 'Featured',
      youtubeUrl: 'https://www.youtube.com/@LuhvReuben',
      description: 'Hop into custom experiences and explore the cutest Roblox worlds!',
      featured: true,
    },
    {
      id: 'v2',
      title: 'Aesthetic Gaming Highlights & Cute Moments 💕',
      category: 'Highlights',
      thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80',
      views: 'Popular Video',
      duration: 'Highlight',
      youtubeUrl: 'https://www.youtube.com/@LuhvReuben',
      description: 'The sweetest, funniest, and most chaotic clips combined together!',
    },
    {
      id: 'v3',
      title: 'Building Communities & Fun Hangouts 🌸',
      category: 'Community',
      thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80',
      views: 'Community Special',
      duration: 'Special',
      youtubeUrl: 'https://www.youtube.com/@LuhvReuben',
      description: 'Exploring Reuben’s Corner, meeting amazing community members!',
    },
  ];

  return (
    <section id="videos" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-[#2C1D42]/80 border border-[#FFB6D2] text-[#FF4A85] dark:text-[#FFA3CF] text-xs font-bold shadow-sm mb-3">
            <YouTubeLogo size={14} />
            <span>🎬 VIDEO CORNER 🎬</span>
            <YouTubeLogo size={14} />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3E2D4A] dark:text-[#FFF0F7] font-display">
            ✨ WATCH MY CONTENT! ✨
          </h2>
          <p className="text-sm sm:text-base text-[#7A6487] dark:text-[#BDA8D2] mt-2 max-w-xl mx-auto">
            Explore my YouTube channel and watch my videos!
          </p>
        </div>

        {/* YouTube Channel Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-10 rounded-[2.5rem] bg-gradient-to-br from-[#FFF2F2] via-white to-[#FFE5E5] dark:from-[#3D182A] dark:via-[#251536] dark:to-[#331424] border-2 border-[#FFA3A3] dark:border-[#6B283F] shadow-xl mb-12"
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
                  Gaming videos • Edits • Community fun • New uploads
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
                <span>[ ▶️ WATCH NOW ]</span>
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
                <span>[ 🎬 VISIT MY YOUTUBE CHANNEL ]</span>
              </a>
            </div>
          </div>

          {/* Key Bullet List from prompt */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-[#FFD6D6] dark:border-[#4D2336]">
            {[
              { label: '🎬 Videos to watch', desc: 'Gaming & creations' },
              { label: '❤️ Subscribe to channel', desc: 'Join the family' },
              { label: '✨ Explore my content', desc: 'Edits & playthroughs' },
              { label: '🎀 Come back for more!', desc: 'Fresh new updates' },
            ].map((b, idx) => (
              <div
                key={idx}
                className="p-3 rounded-2xl bg-white/70 dark:bg-[#2A1526]/70 border border-[#FFD6E7] dark:border-[#4B2236] text-center"
              >
                <p className="text-xs font-bold text-[#3E2D4A] dark:text-white">{b.label}</p>
                <p className="text-[10px] text-[#7A6487] dark:text-[#C5B3DC] mt-0.5">{b.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((vid, idx) => (
            <motion.div
              key={vid.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              onMouseEnter={() => sounds.playSparkle()}
              className="rounded-3xl bg-white/85 dark:bg-[#271738]/85 backdrop-blur-md border-2 border-[#FFD6E7] dark:border-[#4C2A61] shadow-lg hover:shadow-xl overflow-hidden flex flex-col justify-between group"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden bg-black/10">
                <img
                  src={vid.thumbnail}
                  alt={vid.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-center justify-center">
                  <a
                    href={vid.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sounds.playPop()}
                    className="w-12 h-12 rounded-full bg-[#FF0000]/90 hover:bg-[#FF0000] text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 cursor-pointer"
                  >
                    <Play size={20} className="ml-0.5 fill-white" />
                  </a>
                </div>
                <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-black/70 text-white text-[10px] font-bold">
                  {vid.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-5">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FF4D4D]">
                  {vid.category}
                </span>
                <h4 className="text-base font-extrabold text-[#3E2D4A] dark:text-white mt-1 line-clamp-2">
                  {vid.title}
                </h4>
                <p className="text-xs text-[#7A6487] dark:text-[#C4B2D8] mt-1.5 line-clamp-2">
                  {vid.description}
                </p>

                <div className="mt-4 pt-3 border-t border-[#FFD6E7]/60 dark:border-[#3E2856] flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#FF8FAB]">
                    {vid.views}
                  </span>
                  <a
                    href={vid.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sounds.playPop()}
                    className="text-xs font-bold text-[#FF4D4D] hover:text-[#D90000] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Watch</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
