import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let aiClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// Normalizer to detect bypasses in backend
function normalizeText(text: string): string {
  return text
    .toLowerCase()
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
    .replace(/[^a-z0-9]/g, '');
}

function superCollapsed(text: string): string {
  return normalizeText(text).replace(/(.)\1+/g, '$1');
}

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
  'dropdead', 'godie', 'usuck', 'yousuck', 'urugly', 'urtrash'
];

const SLUR_REGEXES = [
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

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Moderation API Endpoint for Community Notes & Guestbook
  app.post('/api/moderate', async (req, res) => {
    try {
      const { name, message } = req.body;
      if (!name || !message || typeof name !== 'string' || typeof message !== 'string') {
        return res.status(400).json({
          allowed: false,
          reason: 'Please provide both your nickname and a sweet note! 🌸',
        });
      }

      // Fast deep normalized check for slur / profanity bypasses
      const rawText = `${name} ${message}`.toLowerCase();
      const normalized = normalizeText(rawText);
      const collapsed = superCollapsed(rawText);

      for (const pat of BLOCKED_PATTERNS) {
        const singlePat = pat.replace(/(.)\1+/g, '$1');
        if (rawText.includes(pat) || normalized.includes(pat) || collapsed.includes(singlePat)) {
          return res.json({
            allowed: false,
            reason: '🌸 Please keep messages sweet, kind and respectful! Inappropriate or rude words are not allowed on the Community Board. 💕',
            checkedBy: 'deep-pattern-filter',
          });
        }
      }

      for (const regex of SLUR_REGEXES) {
        if (regex.test(rawText) || regex.test(normalized) || regex.test(collapsed)) {
          return res.json({
            allowed: false,
            reason: '🌸 Please keep messages sweet, kind and respectful! Inappropriate or rude words are not allowed on the Community Board. 💕',
            checkedBy: 'deep-regex-filter',
          });
        }
      }

      const ai = getGenAI();
      if (!ai) {
        return res.json({
          allowed: true,
          checkedBy: 'heuristic-passed',
        });
      }

      try {
        const prompt = `You are a strict, smart, and friendly AI content moderator for a wholesome kawaii community board for "Luhvreuben" and Discord community "Flora's Community Garden".

Carefully evaluate the user submission for:
1. Racial slurs, slurs of any kind, hate speech, profanity, vulgarity, NSFW/sexual references, adult content (including variations like n1igger, n!gga, f*ck, etc.)
2. Toxicity, insults, bullying, mean or rude remarks, trolling, death wishes, self-harm, harassment
3. Obfuscated or leetspeak bypass attempts of bad words
4. Threatening language or spam

Submission to evaluate:
- Nickname: "${name.slice(0, 60)}"
- Message Note: "${message.slice(0, 300)}"

Return a JSON object with:
- "allowed": boolean (true if friendly, respectful, and safe; false if rude, toxic, profane, slurs, or inappropriate)
- "reason": string (if not allowed, provide a sweet, kind 1-sentence reminder explaining why, e.g. "Please keep your note sweet and kind! Toxic or rude words are not allowed on the garden board. 🌸")`;

        const response = await ai.models.generateContent({
          model: 'gemini-3.7-flash',
          contents: prompt,
          config: {
            responseMimeType: 'application/json',
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                allowed: {
                  type: Type.BOOLEAN,
                  description: 'Whether the message is safe, polite, and acceptable for a wholesome community board.',
                },
                reason: {
                  type: Type.STRING,
                  description: 'Kind explanation why the message was flagged, if allowed is false.',
                },
              },
              required: ['allowed'],
            },
          },
        });

        const parsed = JSON.parse(response.text || '{}');
        const isAllowed = parsed.allowed !== false;
        const rejectReason =
          parsed.reason ||
          '🌸 Please keep messages sweet, kind and respectful! Inappropriate or rude words are not allowed on the Community Board. 💕';

        return res.json({
          allowed: isAllowed,
          reason: isAllowed ? undefined : rejectReason,
          checkedBy: 'gemini-3.7-flash',
        });
      } catch (aiErr) {
        console.warn('AI evaluation warning:', aiErr);
        return res.json({
          allowed: true,
          checkedBy: 'heuristic-passed-ai-fallback',
        });
      }
    } catch (err: any) {
      console.error('Moderation error:', err);
      return res.json({
        allowed: false,
        reason: '🌸 Please ensure your note is kind, respectful, and appropriate! 💕',
        error: err?.message,
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🌸 Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
