/**
 * Cute & Robust Content Moderation Filter for Flora's Community Garden & Guestbook
 * Prevents rude, toxic, offensive, inappropriate words and bypass attempts.
 */

// List of inappropriate, rude, profane, toxic, or offensive words/patterns
const BLOCKED_WORDS = [
  // Profanity & Vulgarity
  'fuck', 'shit', 'bitch', 'asshole', 'bastard', 'cunt', 'dick', 'cock', 'pussy',
  'whore', 'slut', 'fag', 'faggot', 'nigger', 'nigga', 'retard', 'tits', 'boobs',
  'penis', 'vagina', 'dildo', 'porn', 'nsfw', 'sex', 'hentai', 'nude', 'naked',
  'cum', 'ejaculate', 'horny', 'orgasm', 'wank', 'blowjob', 'handjob',

  // Rude, Toxic, Insults & Bullying
  'idiot', 'stupid', 'dumb', 'moron', 'ugly', 'loser', 'stfu', 'shut up', 'hate you',
  'kill yourself', 'kys', 'die', 'murder', 'suicide', 'trash', 'garbage', 'scum',
  'useless', 'freak', 'clown', 'fat', 'gross', 'disgusting', 'suck', 'sucks', 'screw you',
  'hate u', 'ur ugly', 'u r ugly', 'stfu', 'gtfo', 'crap', 'bastard', 'pathetic',
  'creep', 'pedophile', 'pedo', 'pervert', 'creep', 'loser', 'go die', 'drop dead',
  'kill urself', 'kill yourself', 'hang yourself', 'hate this', 'annoying', 'cringe',

  // Threatening / Harmful
  'threat', 'bomb', 'terrorist', 'attack', 'dox', 'doxx', 'hack', 'steal', 'cheat', 'scam'
];

// Normalize leetspeak and special character obfuscation
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    // Replace common leet-speak substitutions
    .replace(/@/g, 'a')
    .replace(/4/g, 'a')
    .replace(/8/g, 'b')
    .replace(/3/g, 'e')
    .replace(/1/g, 'i')
    .replace(/!/g, 'i')
    .replace(/0/g, 'o')
    .replace(/5/g, 's')
    .replace(/\$/g, 's')
    .replace(/7/g, 't')
    .replace(/\+/g, 't')
    .replace(/9/g, 'g')
    .replace(/vv/g, 'w')
    // Remove all non-alphanumeric characters (spaces, periods, asterisks, dashes, underscores)
    .replace(/[^a-z0-9]/g, '');
}

/**
 * Validates whether user-submitted nickname and message are safe and kind.
 */
export function validateContent(name: string, message: string): { isValid: boolean; reason?: string } {
  const trimmedName = name.trim();
  const trimmedMsg = message.trim();

  if (!trimmedName || !trimmedMsg) {
    return { isValid: false, reason: 'Please enter both your nickname and a sweet note! 🌸' };
  }

  if (trimmedName.length < 2) {
    return { isValid: false, reason: 'Nickname must be at least 2 characters long! 🌷' };
  }

  const rawCombined = `${trimmedName} ${trimmedMsg}`.toLowerCase();
  const normalizedCombined = normalizeText(rawCombined);

  // 1. Direct word check (word boundaries & substrings)
  for (const word of BLOCKED_WORDS) {
    const cleanWord = word.replace(/\s+/g, '');
    
    // Check if whole word or phrase exists in raw text
    const regex = new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
    if (regex.test(rawCombined)) {
      return {
        isValid: false,
        reason: '🌸 Please keep messages sweet, kind and respectful! Inappropriate or rude words are not allowed on the Community Board. 💕',
      };
    }

    // Check in normalized text (catches f.u.c.k, b!tch, k-y-s, etc.)
    if (cleanWord.length >= 3 && normalizedCombined.includes(cleanWord)) {
      return {
        isValid: false,
        reason: '🌸 Please keep messages sweet, kind and respectful! Inappropriate or rude words are not allowed on the Community Board. 💕',
      };
    }
  }

  // 2. Specific toxic phrase heuristics
  const toxicPhrases = [
    'shut up',
    'shut the',
    'hate you',
    'kill you',
    'kys',
    'go die',
    'drop dead',
    'u suck',
    'you suck',
    'you are bad',
    'ur trash',
    'u r trash',
    'so ugly',
    'ur ugly',
    'get lost',
  ];

  for (const phrase of toxicPhrases) {
    const cleanPhrase = phrase.replace(/\s+/g, '');
    if (rawCombined.includes(phrase) || normalizedCombined.includes(cleanPhrase)) {
      return {
        isValid: false,
        reason: '🌸 Please keep messages sweet, kind and respectful! Inappropriate or rude words are not allowed on the Community Board. 💕',
      };
    }
  }

  return { isValid: true };
}
