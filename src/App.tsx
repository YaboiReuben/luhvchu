import { useState, useEffect } from 'react';
import { ThemeMode, SocialLink } from './types';
import { sounds } from './utils/audio';
import { SparkleCursor } from './components/SparkleCursor';
import { FloatingDecorations } from './components/FloatingDecorations';
import { IntroScreen } from './components/IntroScreen';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExploreWorldSection } from './components/ExploreWorldSection';
import { SocialsSection } from './components/SocialsSection';
import { RobloxWorldSection } from './components/RobloxWorldSection';
import { VideoCornerSection } from './components/VideoCornerSection';
import { CommunitySection } from './components/CommunitySection';
import { ProjectsSection } from './components/ProjectsSection';
import { GuestbookSection } from './components/GuestbookSection';
import { Footer } from './components/Footer';
import { QrModal } from './components/QrModal';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isBgmActive, setIsBgmActive] = useState<boolean>(false);
  const [selectedQrLink, setSelectedQrLink] = useState<SocialLink | null>(null);

  // Sync theme with root HTML class
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Section observer for active navbar indicator
  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'explore-world',
      'projects',
      'roblox',
      'videos',
      'community',
      'socials',
      'guestbook',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [showIntro]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleToggleMute = () => {
    const muted = sounds.toggleMute();
    setIsMuted(muted);
    if (muted) setIsBgmActive(false);
  };

  const handleToggleBgm = () => {
    const active = sounds.toggleBgm();
    setIsBgmActive(active);
    setIsMuted(sounds.getMuted());
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div
      className={`min-h-screen relative overflow-x-hidden transition-colors duration-300 font-sans ${
        theme === 'dark'
          ? 'bg-[#181124] text-[#EADBFA]'
          : 'bg-[#FFF8EE] text-[#4A3B52]'
      }`}
    >
      {/* Intro Animation Screen on initial load */}
      {showIntro && (
        <IntroScreen
          isDark={theme === 'dark'}
          onComplete={() => setShowIntro(false)}
        />
      )}

      {/* Interactive Sparkle Trail Cursor */}
      <SparkleCursor isDark={theme === 'dark'} />

      {/* Floating Kawaii Background Decorations */}
      <FloatingDecorations isDark={theme === 'dark'} />

      {/* Navigation Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
        isBgmActive={isBgmActive}
        onToggleBgm={handleToggleBgm}
      />

      {/* Main Content Area */}
      <main className="relative z-10">
        <HeroSection
          onExploreWorld={() => scrollToSection('explore-world')}
          onFindLinks={() => scrollToSection('socials')}
          onNavigateSection={scrollToSection}
        />

        <AboutSection />

        <ExploreWorldSection onNavigateSection={scrollToSection} />

        <SocialsSection onOpenQr={(link) => setSelectedQrLink(link)} />

        <RobloxWorldSection />

        <VideoCornerSection />

        <CommunitySection />

        <ProjectsSection />

        <GuestbookSection />
      </main>

      {/* Footer Section */}
      <Footer
        onReplayIntro={() => setShowIntro(true)}
        onNavigateSection={scrollToSection}
      />

      {/* QR Code Preview Modal */}
      <QrModal
        link={selectedQrLink}
        onClose={() => setSelectedQrLink(null)}
      />
    </div>
  );
}
