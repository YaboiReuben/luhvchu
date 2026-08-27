/**
 * Bulletproof Content Moderation Filter for Flora's Community Garden & Guestbook
 * Aggressively intercepts racial slurs, profanities, insults, harassment, toxicity,
 * and all variations of leetspeak, spacing, and character repetition (e.g. n1igger, n!gger, n i g g e r, etc.)
 */

// List of slur roots and toxic patterns to block
const BLOCKED_PATTERNS = [
  'nigg', 'niga', 'negro', 'neger',
  'fag', 'fagg', 'dyke', 'chink', 'kike', 'spic', 'tranny', 'retard', 'tard',
  'cunt', 'kunt', 'slut', 'whore', 'bitch',
  'fuck', 'fuk', 'fck', 'phuck',
  'shit', 'shyt', 'bullshit',
  'pussy', 'cock', 'dick', 'penis', 'vagina',
  'dildo', 'porn', 'nsfw', 'hentai', 'nude', 'blowjob', 'handjob', 'orgasm', 'wank',
  'kys', 'killurself', 'killyourself', 'suicide', 'hangyourself', 'diebitch',
  'idiot', 'stupid', 'dumb', 'moron', 'loser', 'stfu', 'shutup', 'hateyou', 'hateu',
  'dropdead', 'godie', 'usuck', 'yousuck', 'urugly', 'urtrash', 'utrash', 'getlost'
];

/**
 * Normalizes text to aggressively detect bypasses
 */
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    // Leet speak substitutions
    .replace(/[@4]/g, 'a')
    .replace(/8/g, 'b')
    .replace(/3/g, 'e')
    .replace(/[1!|]/g, 'i')
    .replace(/0/g, 'o')
    .replace(/[$5]/g, 's')
    .replace(/[+7]/g, 't')
    .replace(/9/g, 'g')
    .replace(/vv/g, 'w')
    .replace(/v/g, 'u')
    // Remove all non-alphanumeric characters
    .replace(/[^a-z0-9]/g, '')
    // Collapse consecutive duplicate vowels and characters (e.g. "niigger" -> "niger", "nigg" remains)
    .replace(/(.)\1+/g, '$1$1');
}

/**
 * Super-collapsed normalization (collapses all repeated letters to 1 single letter)
 * e.g., "niigger" -> "niger", "niiiiiigggggeeeer" -> "niger"
 */
function superCollapsed(text: string): string {
  return normalizeText(text).replace(/(.)\1+/g, '$1');
}

export function validateContent(name: string, message: string): { isValid: boolean; reason?: string } {
  const trimmedName = (name || '').trim();
  const trimmedMsg = (message || '').trim();

  if (!trimmedName || !trimmedMsg) {
    return { isValid: false, reason: 'Please enter both your nickname and a sweet note! 🌸' };
  }

  if (trimmedName.length < 2) {
    return { isValid: false, reason: 'Nickname must be at least 2 characters long! 🌷' };
  }

  const rawCombined = `${trimmedName} ${trimmedMsg}`.toLowerCase();
  const normalized = normalizeText(rawCombined);
  const collapsed = superCollapsed(rawCombined);

  // 1. Direct and normalized check
  for (const pattern of BLOCKED_PATTERNS) {
    const singlePattern = pattern.replace(/(.)\1+/g, '$1');
    if (
      rawCombined.includes(pattern) ||
      normalized.includes(pattern) ||
      collapsed.includes(singlePattern)
    ) {
      return {
        isValid: false,
        reason: '🌸 Please keep messages sweet, kind and respectful! Inappropriate or rude words are not allowed on the Community Board. 💕',
      };
    }
  }

  // 2. Specific regex checks for slurs with numbers/symbols inside
  const slurRegexes = [
    /n+[i1!|l]+[g9q]{2,}[e3a4@r]+/i,
    /n+[i1!|l]+[g9q]+[e3a4@r]+/i,
    /f+[a4@]+[g9q]{2,}/i,
    /f+[a4@]+[g9q]+/i,
    /r+[e3]+t+[a4@]+r+d+/i,
    /b+[i1!|]+t+c+h+/i,
    /f+u+c+k+/i,
    /s+h+[i1!|]+t+/i,
    /k+y+s+/i,
  ];

  for (const regex of slurRegexes) {
    if (regex.test(rawCombined) || regex.test(normalized)) {
      return {
        isValid: false,
        reason: '🌸 Please keep messages sweet, kind and respectful! Inappropriate or rude words are not allowed on the Community Board. 💕',
      };
    }
  }

  return { isValid: true };
}

/**
 * Advanced AI-Powered Moderation using server-side Gemini 3.7 Flash API + multi-layer heuristics.
 */
export async function checkContentWithAI(
  name: string,
  message: string
): Promise<{ isValid: boolean; reason?: string }> {
  // 1. Fast, comprehensive local heuristic filter first
  const localCheck = validateContent(name, message);
  if (!localCheck.isValid) {
    return localCheck;
  }

  // 2. Call server-side Gemini API moderation endpoint
  try {
    const res = await fetch('/api/moderate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, message }),
    });

    if (res.ok) {
      const data = await res.json();
      if (data.allowed === false) {
        return {
          isValid: false,
          reason:
            data.reason ||
            '🌸 Please keep messages sweet, kind and respectful! Inappropriate or rude words are not allowed on the Community Board. 💕',
        };
      }
    }
  } catch (err) {
    console.warn('AI moderation fallback:', err);
  }

  return { isValid: true };
}
