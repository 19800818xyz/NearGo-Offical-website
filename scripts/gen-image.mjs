#!/usr/bin/env node
/**
 * Generate an image with Google Gemini and save it under public/generated/.
 *
 * Usage:
 *   node scripts/gen-image.mjs --out nearshop.png --prompt "..." [--model gemini-2.5-flash-image] [--aspect 4:3]
 *
 * Reads GEMINI_API_KEY from process.env or .env.local (KEY=VALUE lines).
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

function loadEnv() {
  if (process.env.GEMINI_API_KEY) return process.env.GEMINI_API_KEY;
  try {
    const txt = readFileSync(join(root, ".env.local"), "utf8");
    for (const line of txt.split("\n")) {
      const m = line.match(/^\s*GEMINI_API_KEY\s*=\s*(.+)\s*$/);
      if (m) return m[1].trim();
    }
  } catch {}
  return null;
}

function arg(name, def) {
  const i = process.argv.indexOf(`--${name}`);
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : def;
}

const KEY = loadEnv();
if (!KEY) {
  console.error("Missing GEMINI_API_KEY (env or .env.local).");
  process.exit(1);
}

const out = arg("out");
const prompt = arg("prompt");
const model = arg("model", "gemini-2.5-flash-image");
const aspect = arg("aspect", "4:3");
const inputImg = arg("image"); // optional: image-to-image edit
if (!out || !prompt) {
  console.error('Required: --out <file.png> --prompt "<text>"');
  process.exit(1);
}

// Build content parts — prepend the input image for img2img edits.
const parts = [];
if (inputImg) {
  const buf = readFileSync(inputImg.startsWith("/") ? inputImg : join(root, inputImg));
  parts.push({ inlineData: { mimeType: "image/png", data: buf.toString("base64") } });
}
parts.push({ text: prompt });

const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${KEY}`;
const body = {
  contents: [{ parts }],
  generationConfig: {
    responseModalities: ["IMAGE"],
    imageConfig: { aspectRatio: aspect },
  },
};

async function attempt() {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 90000); // 90s request timeout
  let res;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: ctrl.signal,
    });
  } finally {
    clearTimeout(timer);
  }
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${(await res.text()).slice(0, 300)}`);
  const data = await res.json();
  const parts = data?.candidates?.[0]?.content?.parts ?? [];
  const img = parts.find((p) => p.inlineData?.data);
  if (!img) throw new Error("No image in response: " + JSON.stringify(data).slice(0, 300));
  return img;
}

let img;
const MAX = 4;
for (let i = 1; i <= MAX; i++) {
  try {
    img = await attempt();
    break;
  } catch (e) {
    console.error(`Attempt ${i}/${MAX} failed: ${e.message}`);
    if (i === MAX) process.exit(1);
    await new Promise((r) => setTimeout(r, 2000 * i));
  }
}

const dir = join(root, "public", "generated");
if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
const dest = join(dir, out);
writeFileSync(dest, Buffer.from(img.inlineData.data, "base64"));
console.log(`Saved ${dest} (${(img.inlineData.data.length * 0.75 / 1024).toFixed(0)} KB, model=${model})`);
