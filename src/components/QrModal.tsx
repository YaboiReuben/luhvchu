import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BowIcon } from './SvgIcons';
import { X, ExternalLink, Copy, Check } from 'lucide-react';
import { sounds } from '../utils/audio';
import { fireSparkleBurst } from '../utils/confetti';
import { SocialLink } from '../types';

interface QrModalProps {
  link: SocialLink | null;
  onClose: () => void;
}

export function QrModal({ link, onClose }: QrModalProps) {
  const [copied, setCopied] = useState(false);

  if (!link) return null;

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(
    link.url
  )}&bgcolor=ffffff&color=3E2D4A&margin=8`;

  const handleCopy = (e: React.MouseEvent) => {
    sounds.playPop();
    fireSparkleBurst(e.clientX, e.clientY);
    navigator.clipboard.writeText(link.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            sounds.playPop();
            onClose();
          }}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 20, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="relative w-full max-w-sm rounded-[2.5rem] bg-white dark:bg-[#251739] border-2 border-[#FFB6D2] dark:border-[#523372] shadow-2xl p-6 sm:p-8 text-center z-10"
        >
          {/* Close button */}
          <button
            onClick={() => {
              sounds.playPop();
              onClose();
            }}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#FFF8EE] dark:bg-[#341F4E] text-[#7A6487] dark:text-[#C5B3D8] hover:text-[#FF4A85] flex items-center justify-center border border-[#FFD6E7] dark:border-[#4B3068] transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>

          {/* Header */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <BowIcon size={20} className="text-[#FF8FAB]" />
            <h3 className="text-xl font-extrabold text-[#3E2D4A] dark:text-white font-display">
              {link.name} QR Code
            </h3>
            <BowIcon size={20} className="text-[#FF8FAB]" />
          </div>

          <p className="text-xs text-[#7A6487] dark:text-[#C5B3DC] mb-4">
            Scan with your phone camera to open {link.name}!
          </p>

          {/* QR Container */}
          <div className="p-3 bg-[#FFF8EE] dark:bg-[#1E122E] rounded-3xl border border-[#FFD6E7] dark:border-[#472E63] inline-block mb-4 shadow-inner">
            <div className="w-48 h-48 sm:w-52 sm:h-52 bg-white rounded-2xl p-2 flex items-center justify-center shadow-md">
              <img
                src={qrUrl}
                alt={`${link.name} QR code`}
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          </div>

          <p className="text-xs font-mono font-bold text-[#FF4A85] dark:text-[#FFA3CF] mb-4">
            {link.handle}
          </p>

          {/* Actions */}
          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              className="flex-1 py-2.5 px-3 rounded-xl bg-[#FFF8EE] dark:bg-[#341F4E] hover:bg-[#FFE5EC] border border-[#FFD6E7] dark:border-[#4E316B] text-xs font-bold text-[#4A3B52] dark:text-white flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
              <span>{copied ? 'Copied!' : 'Copy Link'}</span>
            </button>

            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.playPop()}
              className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#FF8FAB] to-[#CDB4FF] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm hover:opacity-90 transition-all cursor-pointer"
            >
              <span>Open Link</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
