import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CuteHeartIcon,
  BowIcon,
  SakuraIcon,
  SparkleStarIcon,
  TeddyIcon,
} from './SvgIcons';
import { Send, Heart, Sparkles, MessageSquareHeart, ShieldCheck, AlertCircle, Loader2 } from 'lucide-react';
import { sounds } from '../utils/audio';
import { fireHeartConfetti, fireSparkleBurst } from '../utils/confetti';
import { validateContent, checkContentWithAI } from '../utils/moderation';
import { GuestbookMessage } from '../types';

const INITIAL_MESSAGES: GuestbookMessage[] = [
  {
    id: 'm1',
    name: 'MochiGamer',
    message: 'Love your Roblox games and YouTube uploads! Keep shining Luhvreuben! 🌸✨',
    sticker: '🎀',
    color: 'from-[#FFE8F2] to-[#FFF0F7] dark:from-[#3B1F3C] dark:to-[#28152D]',
    createdAt: 'Just now',
    likes: 12,
  },
  {
    id: 'm2',
    name: 'StarryBunny',
    message: "Flora's Community Garden is the sweetest Discord ever! Loving the cute flower vibes! 🌷🧸",
    sticker: '🌸',
    color: 'from-[#F3EBFF] to-[#FAF6FF] dark:from-[#2E204E] dark:to-[#1E1438]',
    createdAt: 'Today',
    likes: 9,
  },
  {
    id: 'm3',
    name: 'PixelReubenFan',
    message: "Reuben's Corner is the best community on Roblox! Huge love! 💖🎮",
    sticker: '✨',
    color: 'from-[#FFF8EE] to-[#FFF0F5] dark:from-[#36214A] dark:to-[#231536]',
    createdAt: 'Yesterday',
    likes: 18,
  },
];

export function GuestbookSection() {
  const [messages, setMessages] = useState<GuestbookMessage[]>(() => {
    try {
      const saved = localStorage.getItem('luhvreuben_guestbook');
      if (saved) {
        const parsed: GuestbookMessage[] = JSON.parse(saved);
        // Filter out any inappropriate content from cache
        const filtered = parsed.filter(m => validateContent(m.name, m.message).isValid);
        return filtered.length > 0 ? filtered : INITIAL_MESSAGES;
      }
      return INITIAL_MESSAGES;
    } catch {
      return INITIAL_MESSAGES;
    }
  });

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [selectedSticker, setSelectedSticker] = useState('🎀');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [moderationError, setModerationError] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('luhvreuben_guestbook', JSON.stringify(messages));
    } catch {
      // Ignore
    }
  }, [messages]);

  const stickers = ['🎀', '🌸', '✨', '💕', '🧸', '🎮', '🌷', '⭐'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setModerationError(null);
    setIsSubmitting(true);

    try {
      // Validate content against inappropriate / rude words with Gemini AI + local heuristic
      const validation = await checkContentWithAI(name, message);
      if (!validation.isValid) {
        sounds.playPop();
        setModerationError(
          validation.reason ||
            '🌸 Please keep messages sweet, kind and respectful! Inappropriate or rude words are not allowed on the Community Board. 💕'
        );
        setIsSubmitting(false);
        return;
      }

      sounds.playPop();
      fireHeartConfetti();

      const colors = [
        'from-[#FFE8F2] to-[#FFF0F7] dark:from-[#3B1F3C] dark:to-[#28152D]',
        'from-[#F3EBFF] to-[#FAF6FF] dark:from-[#2E204E] dark:to-[#1E1438]',
        'from-[#EEF1FF] to-[#F6F8FF] dark:from-[#22244E] dark:to-[#1E2145]',
        'from-[#FFF8EE] to-[#FFF0F5] dark:from-[#36214A] dark:to-[#231536]',
      ];

      const newMsg: GuestbookMessage = {
        id: Date.now().toString(),
        name: name.trim().slice(0, 30),
        message: message.trim().slice(0, 200),
        sticker: selectedSticker,
        color: colors[Math.floor(Math.random() * colors.length)],
        createdAt: 'Just now',
        likes: 1,
      };

      setMessages([newMsg, ...messages]);
      setName('');
      setMessage('');
      setModerationError(null);
    } catch (err) {
      console.error('Note submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLike = (id: string, e: React.MouseEvent) => {
    sounds.playSparkle();
    fireSparkleBurst(e.clientX, e.clientY);
    setMessages(
      messages.map((m) => (m.id === id ? { ...m, likes: m.likes + 1 } : m))
    );
  };

  return (
    <section id="guestbook" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-[#2C1D42]/80 border border-[#FFB6D2] text-[#FF4A85] dark:text-[#FFA3CF] text-xs font-bold shadow-sm mb-3">
            <CuteHeartIcon size={14} />
            <span>💌 SWEET MESSAGES & COMMUNITY BOARD 💌</span>
            <CuteHeartIcon size={14} />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3E2D4A] dark:text-[#FFF0F7] font-display">
            Leave a Cute Note!
          </h2>
          <p className="text-sm sm:text-base text-[#7A6487] dark:text-[#BDA8D2] mt-2 max-w-xl mx-auto">
            Say hi to Luhvreuben, send some sparkles, or leave a sweet note on the community board! 💕
          </p>

          {/* Wholesome Community Guidelines Badge */}
          <div className="mt-3 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EDFAF1] dark:bg-[#1C3627] border border-[#BDE5CB] dark:border-[#2D5E3F] text-[#2E7D4E] dark:text-[#82E2A6] text-xs font-bold shadow-xs">
            <ShieldCheck size={14} />
            <span>AI Kindness Shield: Only friendly, sweet & respectful notes allowed 🌸</span>
          </div>
        </div>

        {/* Message Input Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-8 rounded-[2.5rem] bg-white/90 dark:bg-[#26173B]/90 backdrop-blur-xl border-2 border-[#FFB6D2] dark:border-[#523372] shadow-xl max-w-2xl mx-auto mb-14"
        >
          {/* Inappropriate Content Alert Warning Banner */}
          <AnimatePresence>
            {moderationError && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                className="mb-4 p-4 rounded-2xl bg-[#FFF0F2] dark:bg-[#3D1A25] border-2 border-[#FF758F] text-[#C9184A] dark:text-[#FF8FA3] text-xs sm:text-sm font-bold flex items-start gap-2.5 shadow-sm"
              >
                <AlertCircle size={18} className="shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p>{moderationError}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#7E658C] dark:text-[#CBB8DF] mb-1.5">
                Your Nickname or Tag 🌸
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (moderationError) setModerationError(null);
                }}
                placeholder="e.g. StarryGamer"
                maxLength={30}
                required
                className="w-full px-4 py-3 rounded-2xl bg-[#FFF8EE] dark:bg-[#1E132F] border border-[#FFD6E7] dark:border-[#4B3167] text-[#3E2D4A] dark:text-white placeholder-[#A894B5] focus:outline-none focus:border-[#FF8FAB] text-sm"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#7E658C] dark:text-[#CBB8DF]">
                  Your Sweet Message ✨
                </label>
                <span className="text-[11px] text-[#A894B5]">
                  {message.length}/200
                </span>
              </div>
              <textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (moderationError) setModerationError(null);
                }}
                placeholder="Write something kind, cheering, or cute for Luhvreuben and the garden..."
                maxLength={200}
                rows={3}
                required
                className="w-full px-4 py-3 rounded-2xl bg-[#FFF8EE] dark:bg-[#1E132F] border border-[#FFD6E7] dark:border-[#4B3167] text-[#3E2D4A] dark:text-white placeholder-[#A894B5] focus:outline-none focus:border-[#FF8FAB] text-sm resize-none"
              />
            </div>

            {/* Sticker Picker */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#7E658C] dark:text-[#CBB8DF] mb-1.5">
                Choose a sticker:
              </label>
              <div className="flex flex-wrap gap-2">
                {stickers.map((stk) => (
                  <button
                    key={stk}
                    type="button"
                    onClick={() => {
                      sounds.playPop();
                      setSelectedSticker(stk);
                    }}
                    className={`w-9 h-9 rounded-xl text-lg flex items-center justify-center transition-all cursor-pointer ${
                      selectedSticker === stk
                        ? 'bg-[#FF8FAB] text-white scale-110 shadow-md shadow-[#FF8FAB]/40 ring-2 ring-white'
                        : 'bg-[#FFF8EE] dark:bg-[#1E132F] hover:bg-[#FFE8F2] border border-[#FFD6E7] dark:border-[#472E63]'
                    }`}
                  >
                    {stk}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3.5 px-6 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-[#FF8FAB] via-[#FF6EA7] to-[#CDB4FF] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                isSubmitting ? 'opacity-80 cursor-wait' : 'hover:scale-[1.01] active:scale-98'
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Checking & Posting Note... 🌸</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  <span>[ 💕 POST SWEET NOTE 💕 ]</span>
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Message Notes Board */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence>
            {messages.map((msg, idx) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className={`p-6 rounded-3xl bg-gradient-to-br ${msg.color} border-2 border-white dark:border-white/10 shadow-md flex flex-col justify-between relative`}
              >
                <div className="text-2xl absolute top-4 right-4 select-none">
                  {msg.sticker}
                </div>

                <div>
                  <h4 className="text-base font-extrabold text-[#3E2D4A] dark:text-white font-display mb-1 pr-8">
                    {msg.name}
                  </h4>
                  <p className="text-xs text-[#6C557A] dark:text-[#C5B3D8] leading-relaxed mb-4">
                    "{msg.message}"
                  </p>
                </div>

                <div className="pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                  <span className="text-[11px] text-[#917B9F] dark:text-[#A796B8]">
                    {msg.createdAt}
                  </span>
                  <button
                    onClick={(e) => handleLike(msg.id, e)}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/80 dark:bg-[#2C1D42]/80 text-[#FF4A85] text-xs font-bold hover:scale-110 active:scale-95 transition-transform cursor-pointer border border-[#FFD6E7]"
                  >
                    <Heart size={12} className="fill-[#FF4A85]" />
                    <span>{msg.likes}</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
