import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  SparkleStarIcon,
  SakuraIcon,
  BowIcon,
  CuteHeartIcon,
  GamepadIcon,
  RobloxLogo,
} from './SvgIcons';
import { ExternalLink, Code2, Palette, Users, Sparkles, Folder, Eye } from 'lucide-react';
import { sounds } from '../utils/audio';
import { fireSparkleBurst } from '../utils/confetti';
import { ProjectItem } from '../types';

export function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'roblox' | 'website' | 'editing' | 'community'>('all');

  const projects: ProjectItem[] = [
    {
      id: 'p1',
      title: "Reuben's Corner Roblox Hub",
      category: 'roblox',
      description: 'The central Roblox community group featuring events, hangout spaces, and player interactions.',
      tags: ['Roblox', 'Community', 'Gaming'],
      linkText: 'Visit Roblox Community',
      linkUrl: 'https://www.roblox.com/communities/12750756/Reubens-Corner#!/about',
      image: 'https://images.unsplash.com/photo-1612287233215-648ccaa2bc9a?w=800&auto=format&fit=crop&q=80',
      status: 'Live & Active 🌸',
    },
    {
      id: 'p2',
      title: 'Luhvreuben Official Kawaii Web Portal',
      category: 'website',
      description: 'The interactive cute aesthetic website connecting all socials, videos, projects, and community links.',
      tags: ['Web Design', 'Aesthetic', 'Interactive'],
      linkText: 'Explore Features',
      linkUrl: '#home',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=800&auto=format&fit=crop&q=80',
      status: 'Current Version ✨',
    },
    {
      id: 'p3',
      title: 'YouTube Gaming Video Edits & Montages',
      category: 'editing',
      description: 'Custom video editing projects, cute sound design, and color grading for YouTube uploads.',
      tags: ['Video Editing', 'VFX', 'YouTube'],
      linkText: 'Watch Edits on YouTube',
      linkUrl: 'https://www.youtube.com/@LuhvReuben',
      image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&auto=format&fit=crop&q=80',
      status: 'Ongoing Uploads 🎬',
    },
    {
      id: 'p4',
      title: "Flora's Community Garden Discord",
      category: 'community',
      description: 'A cozy blooming Discord community with fun channels, cute color roles, gaming voice lounges, and events.',
      tags: ['Discord', 'Community', 'Garden'],
      linkText: "Join Flora's Garden",
      linkUrl: 'https://discord.gg/HHGsaVPYEg',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80',
      status: 'Open & Growing 🌷',
    },
  ];

  const filtered = selectedFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === selectedFilter);

  const filters = [
    { id: 'all', label: 'All Projects', icon: Sparkles },
    { id: 'roblox', label: 'Roblox', icon: RobloxLogo },
    { id: 'website', label: 'Websites', icon: Code2 },
    { id: 'editing', label: 'Editing', icon: Palette },
    { id: 'community', label: 'Community', icon: Users },
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-[#2C1D42]/80 border border-[#FFB6D2] text-[#FF4A85] dark:text-[#FFA3CF] text-xs font-bold shadow-sm mb-3">
            <SparkleStarIcon size={14} />
            <span>✨ PROJECTS & CREATIONS ✨</span>
            <SparkleStarIcon size={14} />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3E2D4A] dark:text-[#FFF0F7] font-display">
            Creative Ideas & Work
          </h2>
          <p className="text-sm sm:text-base text-[#7A6487] dark:text-[#BDA8D2] mt-2 max-w-xl mx-auto">
            Explore the different things I'm working on — websites, communities, creative ideas, video edits, and more!
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filters.map((f) => {
            const Icon = f.icon;
            const isActive = selectedFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={(e) => {
                  sounds.playPop();
                  fireSparkleBurst(e.clientX, e.clientY);
                  setSelectedFilter(f.id as any);
                }}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#FF8FAB] to-[#CDB4FF] text-white shadow-md shadow-[#FF8FAB]/30 scale-105'
                    : 'bg-white/80 dark:bg-[#27193C]/80 text-[#675475] dark:text-[#D1C0E4] hover:bg-[#FFEBF2] border border-[#FFD6E7] dark:border-[#422B5D]'
                }`}
              >
                <Icon size={14} />
                <span>{f.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((proj, idx) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                onMouseEnter={() => sounds.playSparkle()}
                className="p-6 sm:p-7 rounded-[2.2rem] bg-white/85 dark:bg-[#251739]/85 backdrop-blur-md border-2 border-[#FFD6E7] dark:border-[#4B2E69] shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FFD6E7]/60 dark:bg-[#43235A]/60 text-[#FF4A85] dark:text-[#FFA3CF]">
                      {proj.status}
                    </span>
                    <SakuraIcon size={16} className="text-[#FF8FAB]" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#3E2D4A] dark:text-white font-display mb-2">
                    {proj.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6C557A] dark:text-[#C5B3D8] leading-relaxed mb-4">
                    {proj.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.tags.map((t, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-semibold px-2.5 py-0.5 rounded-lg bg-[#FFF8EE] dark:bg-[#341F4E] text-[#806B8E] dark:text-[#D1BEE4] border border-[#FFD6E7]/60 dark:border-white/5"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <a
                    href={proj.linkUrl}
                    target={proj.linkUrl.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    onClick={() => sounds.playPop()}
                    className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-[#FF8FAB] to-[#CDB4FF] text-white hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>[ {proj.linkText} ]</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
