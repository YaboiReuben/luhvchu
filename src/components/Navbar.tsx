import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BowIcon,
  SakuraIcon,
  SparkleStarIcon,
  CuteHeartIcon,
  GamepadIcon,
  YouTubeLogo,
  DiscordLogo,
  RobloxLogo,
} from './SvgIcons';
import { Volume2, VolumeX, Moon, Sun, Music, Menu, X } from 'lucide-react';
import { sounds } from '../utils/audio';
import { fireSparkleBurst } from '../utils/confetti';
import { ThemeMode } from '../types';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
  isBgmActive: boolean;
  onToggleBgm: () => void;
}

export function Navbar({
  activeSection,
  onNavigate,
  theme,
  onToggleTheme,
  isMuted,
  onToggleMute,
  isBgmActive,
  onToggleBgm,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME', icon: SakuraIcon, color: '#FF8FAB' },
    { id: 'about', label: 'ABOUT', icon: BowIcon, color: '#FFB6D2' },
    { id: 'projects', label: 'PROJECTS', icon: SparkleStarIcon, color: '#CDB4FF' },
    { id: 'roblox', label: 'ROBLOX', icon: RobloxLogo, color: '#FF8FAB' },
    { id: 'videos', label: 'VIDEOS', icon: YouTubeLogo, color: '#FF4D4D' },
    { id: 'community', label: 'COMMUNITY', icon: DiscordLogo, color: '#5865F2' },
    { id: 'socials', label: 'SOCIALS', icon: GamepadIcon, color: '#FF8FAB' },
    { id: 'guestbook', label: 'GUESTBOOK', icon: CuteHeartIcon, color: '#FF8FAB' },
  ];

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    sounds.playPop();
    fireSparkleBurst(e.clientX, e.clientY);
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 backdrop-blur-xl bg-[#FFF8EE]/85 dark:bg-[#181124]/85 border-b border-[#FFD6E7]/60 dark:border-[#382650]/60 shadow-sm'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="brand-logo-btn"
          onClick={(e) => handleNavClick('home', e)}
          className="group flex items-center gap-2 text-left cursor-pointer focus:outline-none"
        >
          <motion.div
            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
            transition={{ duration: 0.4 }}
            className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#FFB6D2] via-[#FFD6E7] to-[#E6D7FF] dark:from-[#47245A] dark:to-[#6C3C8A] p-2 flex items-center justify-center shadow-md shadow-[#FFB6D2]/30 border border-white/60 dark:border-white/10"
          >
            <BowIcon size={22} className="text-[#FF4A85] dark:text-[#FFA3CF]" />
          </motion.div>
          <div>
            <div className="flex items-center gap-1">
              <span className="font-extrabold text-xl sm:text-2xl font-display tracking-tight text-[#4A3B52] dark:text-[#FFF0F7] group-hover:text-[#FF4A85] dark:group-hover:text-[#FFA3CF] transition-colors">
                Luhvreuben
              </span>
              <span className="text-xs text-[#FF8FAB] font-mono">୨୧</span>
            </div>
            <p className="text-[10px] sm:text-[11px] font-semibold text-[#A08DAE] dark:text-[#B9A6CA] tracking-wider uppercase">
              Cute • Fun • Creative
            </p>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 dark:bg-[#251B38]/80 backdrop-blur-md border border-[#FFD6E7] dark:border-[#3E2958] shadow-inner shadow-black/5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={(e) => handleNavClick(item.id, e)}
                onMouseEnter={() => sounds.playSparkle()}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-[#FF8FAB] to-[#CDB4FF] shadow-md shadow-[#FF8FAB]/30'
                    : 'text-[#6C567A] dark:text-[#D1C2E0] hover:text-[#FF4A85] dark:hover:text-[#FFA3CF] hover:bg-[#FFD6E7]/30 dark:hover:bg-[#3B2857]/40'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-white' : ''} />
                <span>{item.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="activePill"
                    className="absolute inset-0 rounded-full border-2 border-white/40 pointer-events-none"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Controls & Quick CTA */}
        <div className="flex items-center gap-2">
          {/* Lofi BGM Audio Toggle */}
          <button
            id="toggle-bgm-btn"
            onClick={() => {
              sounds.playPop();
              onToggleBgm();
            }}
            title={isBgmActive ? 'Pause Kawaii Melody' : 'Play Kawaii Melody'}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer border ${
              isBgmActive
                ? 'bg-[#FF8FAB] text-white border-white/60 shadow-md shadow-[#FF8FAB]/40 animate-pulse'
                : 'bg-white/80 dark:bg-[#251B38] text-[#7D6B88] dark:text-[#D1C2E0] border-[#FFD6E7] dark:border-[#3E2958] hover:border-[#FF8FAB]'
            }`}
          >
            <Music size={15} />
          </button>

          {/* Sound FX Toggle */}
          <button
            id="toggle-sfx-btn"
            onClick={() => {
              onToggleMute();
              sounds.playPop();
            }}
            title={isMuted ? 'Unmute Sound FX' : 'Mute Sound FX'}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-white/80 dark:bg-[#251B38] text-[#7D6B88] dark:text-[#D1C2E0] border border-[#FFD6E7] dark:border-[#3E2958] hover:border-[#FF8FAB] transition-all cursor-pointer"
          >
            {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>

          {/* Theme Mode Toggle */}
          <button
            id="theme-mode-toggle"
            onClick={() => {
              sounds.playSparkle();
              onToggleTheme();
            }}
            title={`Switch to ${theme === 'light' ? 'Dark Mode' : 'Light Mode'}`}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-white/80 dark:bg-[#251B38] text-[#7D6B88] dark:text-[#FFA3CF] border border-[#FFD6E7] dark:border-[#3E2958] hover:border-[#FF8FAB] transition-all cursor-pointer"
          >
            {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
          </button>

          {/* Direct Discord button */}
          <a
            id="nav-discord-quick-btn"
            href="https://discord.gg/HHGsaVPYEg"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sounds.playPop()}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#5865F2] hover:bg-[#4752C4] text-white shadow-md shadow-[#5865F2]/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <DiscordLogo size={14} />
            <span>Join Discord</span>
          </a>

          {/* Mobile menu hamburger */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => {
              sounds.playPop();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center bg-white/80 dark:bg-[#251B38] text-[#7D6B88] dark:text-[#D1C2E0] border border-[#FFD6E7] dark:border-[#3E2958] cursor-pointer"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden px-4 pt-3 pb-5 bg-white/95 dark:bg-[#1C132B]/95 backdrop-blur-xl border-b border-[#FFD6E7] dark:border-[#3E2958] overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={(e) => handleNavClick(item.id, e)}
                    className={`flex items-center gap-2 p-3 rounded-2xl text-xs font-bold transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-[#FF8FAB] to-[#CDB4FF] text-white shadow-md'
                        : 'bg-[#FFF8EE] dark:bg-[#2A1E3F] text-[#6C567A] dark:text-[#D1C2E0]'
                    }`}
                  >
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
