import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  SnapchatLogo,
  YouTubeLogo,
  XLogo,
  DiscordLogo,
  RobloxLogo,
  InstagramLogo,
  TikTokLogo,
  SakuraIcon,
  BowIcon,
  SparkleStarIcon,
  CuteHeartIcon,
} from './SvgIcons';
import { ExternalLink, Copy, Check, QrCode, Share2 } from 'lucide-react';
import { sounds } from '../utils/audio';
import { fireHeartConfetti, fireSparkleBurst } from '../utils/confetti';
import { SocialLink } from '../types';

interface SocialsSectionProps {
  onOpenQr: (link: SocialLink) => void;
}

export function SocialsSection({ onOpenQr }: SocialsSectionProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const socialLinks: SocialLink[] = [
    {
      id: 'snapchat',
      name: 'SNAPCHAT',
      handle: '@luhvreuben',
      tagline: 'Follow me and keep up with me! 💛',
      url: 'https://www.snapchat.com/@luhvreuben',
      svgType: 'snapchat',
      color: '#FFFC00',
      darkColor: '#FFFC00',
      accentBg: 'from-[#FFFDE6] via-white to-[#FFFBE0] dark:from-[#383318] dark:to-[#221F10]',
      badge: 'Daily Snaps & Stories',
      buttonLabel: 'OPEN SNAPCHAT',
    },
    {
      id: 'youtube',
      name: 'YOUTUBE',
      handle: '@LuhvReuben',
      tagline: 'Watch my videos and subscribe! ❤️✨',
      url: 'https://www.youtube.com/@LuhvReuben',
      svgType: 'youtube',
      color: '#FF0000',
      darkColor: '#FF4D4D',
      accentBg: 'from-[#FFEBEB] via-white to-[#FFE5E5] dark:from-[#3E1A2B] dark:to-[#26121E]',
      badge: 'Main Video Channel',
      buttonLabel: 'VISIT MY CHANNEL',
    },
    {
      id: 'x',
      name: 'X',
      handle: '@LuhvReuben',
      tagline: 'Follow my posts and updates! ✨',
      url: 'https://x.com/LuhvReuben',
      svgType: 'x',
      color: '#111111',
      darkColor: '#FFFFFF',
      accentBg: 'from-[#F5F5F7] via-white to-[#EAEAEF] dark:from-[#25222E] dark:to-[#17151D]',
      badge: 'Thoughts & Live Updates',
      buttonLabel: 'FOLLOW ON X',
    },
    {
      id: 'discord',
      name: 'DISCORD',
      handle: "Flora's Community Garden 🌷",
      tagline: 'Join Flora’s Community Garden! Chat, game and blossom together! 💕🌿',
      url: 'https://discord.gg/HHGsaVPYEg',
      svgType: 'discord',
      color: '#5865F2',
      darkColor: '#7983F5',
      accentBg: 'from-[#EEF1FF] via-white to-[#E3E7FF] dark:from-[#1E2145] dark:to-[#141630]',
      badge: "Flora's Community Garden",
      buttonLabel: 'JOIN FLORA’S GARDEN',
    },
    {
      id: 'roblox',
      name: "REUBEN'S CORNER",
      handle: 'Roblox Community',
      tagline: 'Join my Roblox community! 🌸 Explore my gaming world and community! ✨',
      url: 'https://www.roblox.com/communities/12750756/Reubens-Corner#!/about',
      svgType: 'roblox',
      color: '#FF4A85',
      darkColor: '#FFA3CF',
      accentBg: 'from-[#FFF0F6] via-white to-[#FFE4F0] dark:from-[#3C1D42] dark:to-[#28142D]',
      badge: 'Roblox Group Hub',
      buttonLabel: 'JOIN THE COMMUNITY',
    },
    {
      id: 'instagram',
      name: 'INSTAGRAM',
      handle: '@luhvreuben',
      tagline: 'Follow me on Instagram! 💕',
      url: 'https://www.instagram.com/luhvreuben',
      svgType: 'instagram',
      color: '#E1306C',
      darkColor: '#FF6EA7',
      accentBg: 'from-[#FFF0F8] via-white to-[#FFE5F2] dark:from-[#3D1E38] dark:to-[#281325]',
      badge: 'Photos & Highlights',
      buttonLabel: 'FOLLOW ME',
    },
    {
      id: 'tiktok',
      name: 'TIKTOK',
      handle: '@luhvreuben',
      tagline: 'Watch my TikToks! ✨🎀',
      url: 'https://www.tiktok.com/@luhvreuben',
      svgType: 'tiktok',
      color: '#00F2FE',
      darkColor: '#25F4EE',
      accentBg: 'from-[#EDFCFC] via-white to-[#E0F8F8] dark:from-[#142F38] dark:to-[#0F1E24]',
      badge: 'Shorts & Edits',
      buttonLabel: 'FOLLOW ON TIKTOK',
    },
  ];

  const handleCopy = (link: SocialLink, e: React.MouseEvent) => {
    e.stopPropagation();
    sounds.playPop();
    fireSparkleBurst(e.clientX, e.clientY);
    navigator.clipboard.writeText(link.url);
    setCopiedId(link.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const renderSvgLogo = (type: SocialLink['svgType'], isSnap?: boolean) => {
    switch (type) {
      case 'snapchat':
        return (
          <div className="w-12 h-12 rounded-2xl bg-[#FFFC00] flex items-center justify-center text-black shadow-md">
            <SnapchatLogo size={28} />
          </div>
        );
      case 'youtube':
        return (
          <div className="w-12 h-12 rounded-2xl bg-[#FF0000] flex items-center justify-center text-white shadow-md">
            <YouTubeLogo size={28} />
          </div>
        );
      case 'x':
        return (
          <div className="w-12 h-12 rounded-2xl bg-black dark:bg-white flex items-center justify-center text-white dark:text-black shadow-md">
            <XLogo size={24} />
          </div>
        );
      case 'discord':
        return (
          <div className="w-12 h-12 rounded-2xl bg-[#5865F2] flex items-center justify-center text-white shadow-md">
            <DiscordLogo size={26} />
          </div>
        );
      case 'roblox':
        return (
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FF4A85] to-[#FF8FAB] flex items-center justify-center text-white shadow-md">
            <RobloxLogo size={26} />
          </div>
        );
      case 'instagram':
        return (
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FFD600] via-[#FF0100] to-[#D800B9] flex items-center justify-center text-white shadow-md">
            <InstagramLogo size={26} />
          </div>
        );
      case 'tiktok':
        return (
          <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-[#25F4EE] shadow-md">
            <TikTokLogo size={26} />
          </div>
        );
    }
  };

  return (
    <section id="socials" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-[#2C1D42]/80 border border-[#FFB6D2] text-[#FF4A85] dark:text-[#FFA3CF] text-xs font-bold shadow-sm mb-3">
            <SakuraIcon size={14} />
            <span>🌷 MY SOCIALS & LINKS 🌷</span>
            <SakuraIcon size={14} />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3E2D4A] dark:text-[#FFF0F7] font-display">
            Connect With Luhvreuben
          </h2>
          <p className="text-sm sm:text-base text-[#7A6487] dark:text-[#BDA8D2] mt-2 max-w-xl mx-auto">
            Find and follow all my official accounts across social media and gaming communities!
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialLinks.map((item, idx) => {
            const isCopied = copiedId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onMouseEnter={() => sounds.playSparkle()}
                className={`p-6 sm:p-7 rounded-[2rem] bg-gradient-to-br ${item.accentBg} border-2 border-[#FFD6E7] dark:border-[#4B306D] shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between relative group overflow-hidden`}
              >
                {/* Background Sparkle watermark */}
                <div className="absolute -right-4 -bottom-4 opacity-10 dark:opacity-20 group-hover:scale-125 group-hover:rotate-12 transition-transform pointer-events-none">
                  <BowIcon size={120} />
                </div>

                <div>
                  {/* Top Bar: Icon + Badge + QR/Copy */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="group-hover:rotate-6 group-hover:scale-105 transition-transform">
                      {renderSvgLogo(item.svgType)}
                    </div>

                    <div className="flex items-center gap-1.5">
                      {/* QR Code trigger */}
                      <button
                        onClick={() => {
                          sounds.playPop();
                          onOpenQr(item);
                        }}
                        title="View QR Code"
                        className="w-8 h-8 rounded-full bg-white/80 dark:bg-[#2B1D40] text-[#7A6588] dark:text-[#D1C0E2] hover:text-[#FF4A85] flex items-center justify-center border border-black/5 hover:border-[#FFB6D2] transition-colors cursor-pointer"
                      >
                        <QrCode size={15} />
                      </button>

                      {/* Copy Link trigger */}
                      <button
                        onClick={(e) => handleCopy(item, e)}
                        title="Copy Link"
                        className="w-8 h-8 rounded-full bg-white/80 dark:bg-[#2B1D40] text-[#7A6588] dark:text-[#D1C0E2] hover:text-[#FF4A85] flex items-center justify-center border border-black/5 hover:border-[#FFB6D2] transition-colors cursor-pointer"
                      >
                        {isCopied ? <Check size={15} className="text-emerald-500" /> : <Copy size={15} />}
                      </button>
                    </div>
                  </div>

                  {/* Title & Handle */}
                  <div className="mb-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FF8FAB] dark:text-[#FFA3CF]">
                      {item.badge}
                    </span>
                    <h3 className="text-xl font-extrabold text-[#3E2D4A] dark:text-[#FFF0F7] font-display">
                      {item.name}
                    </h3>
                    <p className="text-xs font-mono font-bold text-[#7B618E] dark:text-[#C5B3DC] mt-0.5">
                      {item.handle}
                    </p>
                  </div>

                  {/* Tagline */}
                  <p className="text-xs sm:text-sm text-[#6C567A] dark:text-[#BDA6CE] leading-relaxed mb-6">
                    {item.tagline}
                  </p>
                </div>

                {/* Main Action Button */}
                <div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      sounds.playPop();
                      fireHeartConfetti();
                    }}
                    className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-white dark:bg-[#2E1E46] text-[#3E2D4A] dark:text-white hover:bg-[#FF8FAB] hover:text-white dark:hover:bg-[#FF4A85] border border-[#FFB6D2] dark:border-[#5E3E85] shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 group/btn cursor-pointer"
                  >
                    <span>[ {item.buttonLabel} ]</span>
                    <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom ASCII ribbon */}
        <div className="mt-12 text-center text-[#FF8FAB] font-mono text-sm">
          ♡ ⊹ ˚ ─────────────── ˚ ⊹ ♡
        </div>

      </div>
    </section>
  );
}
