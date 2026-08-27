import { useMemo } from 'react';
import { BowIcon, SakuraIcon, SparkleStarIcon, CuteHeartIcon, CuteCloudIcon } from './SvgIcons';

interface FloatingItem {
  id: number;
  type: 'bow' | 'sakura' | 'sparkle' | 'heart' | 'cloud' | 'star';
  top: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  color: string;
}

export function FloatingDecorations({ isDark }: { isDark: boolean }) {
  const items: FloatingItem[] = useMemo(() => {
    const types: FloatingItem['type'][] = ['bow', 'sakura', 'sparkle', 'heart', 'cloud', 'star', 'sakura', 'sparkle', 'heart'];
    const lightColors = ['#FF8FAB', '#FFB6D2', '#CDB4FF', '#E6D7FF', '#FFD6E7', '#CFF5E7'];
    const darkColors = ['#FFB6D2', '#CDB4FF', '#E6D7FF', '#FF8FAB', '#FFE699'];

    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      type: types[i % types.length],
      top: `${(i * 5.5 + Math.random() * 4) % 95}%`,
      left: `${(i * 14 + (i % 2 === 0 ? 5 : 45)) % 92}%`,
      size: 14 + (i % 4) * 6,
      duration: 10 + (i % 6) * 3,
      delay: (i * 0.7) % 5,
      opacity: isDark ? 0.35 + (i % 3) * 0.15 : 0.45 + (i % 3) * 0.15,
      color: isDark 
        ? darkColors[i % darkColors.length]
        : lightColors[i % lightColors.length],
    }));
  }, [isDark]);

  const renderIcon = (type: FloatingItem['type'], size: number, color: string) => {
    switch (type) {
      case 'bow':
        return <BowIcon size={size} style={{ color }} />;
      case 'sakura':
        return <SakuraIcon size={size} style={{ color }} />;
      case 'sparkle':
        return <SparkleStarIcon size={size} style={{ color }} />;
      case 'heart':
        return <CuteHeartIcon size={size} style={{ color }} />;
      case 'cloud':
        return <CuteCloudIcon size={size} style={{ color }} />;
      case 'star':
        return <SparkleStarIcon size={size * 0.8} style={{ color }} />;
    }
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute animate-float"
          style={{
            top: item.top,
            left: item.left,
            opacity: item.opacity,
            animationDuration: `${item.duration}s`,
            animationDelay: `${item.delay}s`,
            filter: isDark ? 'drop-shadow(0 0 6px rgba(255, 182, 210, 0.4))' : 'none',
          }}
        >
          {renderIcon(item.type, item.size, item.color)}
        </div>
      ))}
    </div>
  );
}
