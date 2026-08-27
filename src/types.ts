export type ThemeMode = 'light' | 'dark';

export interface SocialLink {
  id: string;
  name: string;
  handle: string;
  tagline: string;
  url: string;
  svgType: 'snapchat' | 'youtube' | 'x' | 'discord' | 'roblox' | 'instagram' | 'tiktok';
  color: string;
  darkColor: string;
  accentBg: string;
  badge: string;
  buttonLabel: string;
}

export interface VideoItem {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  views: string;
  duration: string;
  youtubeUrl: string;
  description: string;
  featured?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'roblox' | 'website' | 'editing' | 'community';
  description: string;
  tags: string[];
  linkText: string;
  linkUrl: string;
  image: string;
  status: string;
}

export interface GuestbookMessage {
  id: string;
  name: string;
  message: string;
  sticker: string;
  color: string;
  createdAt: string;
  likes: number;
}
