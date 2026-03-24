import puppeteer from "puppeteer";
import { existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const url = process.argv[2] || "http://localhost:3000";
const label = process.argv[3] || "";

const screenshotsDir = join(__dirname, "temporary screenshots");
if (!existsSync(screenshotsDir)) mkdirSync(screenshotsDir, { recursive: true });

// Find next available N
let n = 1;
while (existsSync(join(screenshotsDir, `screenshot-${n}${label ? `-${label}` : ""}.png`))) n++;
const outPath = join(screenshotsDir, `screenshot-${n}${label ? `-${label}` : ""}.png`);

const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: "networkidle2", timeout: 15000 });

// Scroll through page to trigger IntersectionObserver animations
const totalHeight = await page.evaluate(() => document.body.scrollHeight);
let scrollY = 0;
while (scrollY < totalHeight) {
  scrollY += 400;
  await page.evaluate((y) => window.scrollTo(0, y), scrollY);
  await new Promise(r => setTimeout(r, 150));
}
// Wait for all animations to complete then scroll back to top
await new Promise(r => setTimeout(r, 800));
await page.evaluate(() => window.scrollTo(0, 0));
await new Promise(r => setTimeout(r, 500));

await page.screenshot({ path: outPath, fullPage: true });
await browser.close();
console.log(`Saved: ${outPath}`);
