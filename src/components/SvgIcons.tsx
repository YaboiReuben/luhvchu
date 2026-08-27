import React from 'react';

export interface SvgProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

// 🎀 Cute Bow SVG Icon
export function BowIcon({ size = 24, className = '', ...props }: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M12 10.5C11.17 10.5 10.5 11.17 10.5 12C10.5 12.83 11.17 13.5 12 13.5C12.83 13.5 13.5 12.83 13.5 12C13.5 11.17 12.83 10.5 12 10.5Z" />
      <path d="M10.8 11.2C9.5 9.2 6.5 7.8 4.2 8.6C2.2 9.3 1.8 11.8 3.3 13.2C4.8 14.5 7.8 14.1 10.5 12.8L10.8 11.2Z" />
      <path d="M13.2 11.2C14.5 9.2 17.5 7.8 19.8 8.6C21.8 9.3 22.2 11.8 20.7 13.2C19.2 14.5 16.2 14.1 13.5 12.8L13.2 11.2Z" />
      <path d="M11 13.5L8.5 20.5C8.3 21 8.8 21.5 9.3 21.2L12 19.5L14.7 21.2C15.2 21.5 15.7 21 15.5 20.5L13 13.5" />
    </svg>
  );
}

// 🌸 Sakura Blossom SVG Icon
export function SakuraIcon({ size = 24, className = '', ...props }: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="2.2" fill="currentColor" opacity="0.9" />
      <path d="M12 2C13.5 4.5 14.2 6.8 13.5 8.2C12.8 9.5 11.2 9.5 10.5 8.2C9.8 6.8 10.5 4.5 12 2Z" />
      <path d="M21.5 8.9C19 10.4 16.8 11.1 15.4 10.4C14.1 9.7 14.1 8.1 15.4 7.4C16.8 6.7 19 7.4 21.5 8.9Z" />
      <path d="M17.9 20C16.4 17.5 15.7 15.2 16.4 13.8C17.1 12.5 18.7 12.5 19.4 13.8C20.1 15.2 19.4 17.5 17.9 20Z" />
      <path d="M6.1 20C7.6 17.5 8.3 15.2 7.6 13.8C6.9 12.5 5.3 12.5 4.6 13.8C3.9 15.2 4.6 17.5 6.1 20Z" />
      <path d="M2.5 8.9C5 10.4 7.2 11.1 8.6 10.4C9.9 9.7 9.9 8.1 8.6 7.4C7.2 6.7 5 7.4 2.5 8.9Z" />
    </svg>
  );
}

// ✨ Sparkle 4-point Star SVG Icon
export function SparkleStarIcon({ size = 24, className = '', ...props }: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
    </svg>
  );
}

// 💕 Kawaii Heart SVG Icon
export function CuteHeartIcon({ size = 24, className = '', ...props }: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

// ☁️ Cute Cloud SVG Icon
export function CuteCloudIcon({ size = 24, className = '', ...props }: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
    </svg>
  );
}

// 🧸 Teddy Bear SVG Icon
export function TeddyIcon({ size = 24, className = '', ...props }: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Ears */}
      <circle cx="6" cy="6" r="3.5" />
      <circle cx="18" cy="6" r="3.5" />
      {/* Head */}
      <circle cx="12" cy="11" r="6" />
      {/* Snout */}
      <ellipse cx="12" cy="12.5" rx="2.5" ry="2" fill="#FFF8EE" />
      <circle cx="12" cy="11.8" r="0.8" fill="#4A3B52" />
      {/* Eyes */}
      <circle cx="10" cy="10" r="0.8" fill="#4A3B52" />
      <circle cx="14" cy="10" r="0.8" fill="#4A3B52" />
      {/* Body */}
      <ellipse cx="12" cy="18.5" rx="6.5" ry="5.5" />
    </svg>
  );
}

// 👻 Snapchat Official Vector Logo
export function SnapchatLogo({ size = 24, className = '', ...props }: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M12.001 2c-3.834 0-5.88 2.87-5.88 5.672 0 .817.202 2.073.743 3.033.155.275.14.426.046.593-.11.198-.382.355-.783.473-.59.173-1.464.385-1.579.882-.092.4.218.796.865.992.836.253 1.83.178 2.148.802.13.255.05.783-.697 1.492-.767.727-1.745 1.654-1.258 2.515.342.604 1.34.808 2.57.53 1.077-.243 1.94-.962 2.766-.962.333 0 .68.12 1.059.273.704.285 1.58.64 2.802.64 1.22 0 2.096-.355 2.8-.64.38-.153.727-.273 1.06-.273.826 0 1.69.72 2.766.962 1.23.278 2.228.074 2.57-.53.487-.861-.491-1.788-1.258-2.515-.747-.71-.827-1.237-.697-1.492.318-.624 1.312-.55 2.148-.802.647-.196.957-.592.865-.992-.115-.497-.99-.71-1.58-.882-.4-.118-.672-.275-.782-.473-.094-.167-.11-.318.046-.593.54-.96.743-2.216.743-3.033C17.88 4.87 15.834 2 12.001 2z" />
    </svg>
  );
}

// ▶️ YouTube Official Vector Logo
export function YouTubeLogo({ size = 24, className = '', ...props }: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

// 🖤 X (formerly Twitter) Vector Logo
export function XLogo({ size = 24, className = '', ...props }: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// 💬 Discord Official Vector Logo
export function DiscordLogo({ size = 24, className = '', ...props }: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

// 🎮 Roblox Official Tilt Square Vector Logo
export function RobloxLogo({ size = 24, className = '', ...props }: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M5.165 0L0 18.835 18.835 24 24 5.165 5.165 0zm9.37 13.91l-4.78-1.28 1.28-4.78 4.78 1.28-1.28 4.78z" />
    </svg>
  );
}

// 📸 Instagram Official Vector Logo
export function InstagramLogo({ size = 24, className = '', ...props }: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

// 🎵 TikTok Official Vector Logo
export function TikTokLogo({ size = 24, className = '', ...props }: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

// 🎮 Gamepad Icon
export function GamepadIcon({ size = 24, className = '', ...props }: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <line x1="6" y1="12" x2="10" y2="12" />
      <line x1="8" y1="10" x2="8" y2="14" />
      <line x1="15" y1="13" x2="15.01" y2="13" />
      <line x1="18" y1="11" x2="18.01" y2="11" />
      <rect x="2" y="6" width="20" height="12" rx="6" />
    </svg>
  );
}
