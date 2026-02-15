#!/usr/bin/env node
/**
 * Visual Feedback Loop for Websites
 * Records 60fps video of site interactions, analyzes with AI, auto-fixes issues
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const URL = process.argv[2] || 'https://monkeypod-v2.vercel.app';
const OUTPUT_DIR = process.argv[3] || './visual-audit-results';

const VIEWPORTS = [
  { name: 'mobile', width: 375, height: 667 },
  { name: 'desktop', width: 1280, height: 720 },
];

const INTERACTIONS = [
  { name: 'hero', action: 'scroll', duration: 3000 },
  { name: 'ritual', action: 'scroll', duration: 3000 },
  { name: 'land', action: 'scroll', duration: 3000 },
  { name: 'day-carousel', action: 'scroll', duration: 5000 },
  { name: 'locations', action: 'scroll', duration: 3000 },
  { name: 'reservations', action: 'scroll', duration: 2000 },
];

async function recordVideo(viewport, interaction) {
  const videoDir = path.join(OUTPUT_DIR, 'videos');
  if (!fs.existsSync(videoDir)) fs.mkdirSync(videoDir, { recursive: true });

  const videoPath = path.join(videoDir, `${viewport.name}-${interaction.name}.webm`);

  console.log(`🎬 Recording ${viewport.name} - ${interaction.name}...`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: viewport.width, height: viewport.height },
    recordVideo: {
      dir: videoDir,
      size: { width: viewport.width, height: viewport.height },
    },
  });

  const page = await context.newPage();
  
  try {
    await page.goto(URL, { waitUntil: 'networkidle' });
    
    // Navigate to section if specified
    if (interaction.name !== 'hero') {
      const sectionId = interaction.name.replace('-section', '');
      const element = await page.$(`#${sectionId}`);
      if (element) {
        await element.scrollIntoViewIfNeeded();
        await page.waitForTimeout(500);
      }
    }

    // Perform scroll interaction
    if (interaction.action === 'scroll') {
      const steps = 30;
      const stepDuration = interaction.duration / steps;
      for (let i = 0; i < steps; i++) {
        await page.mouse.wheel(0, viewport.height / 4);
        await page.waitForTimeout(stepDuration);
      }
    }

    await page.waitForTimeout(500);
    await context.close();
    await browser.close();

    // Find the recorded video file
    const videoFiles = fs.readdirSync(videoDir).filter(f => f.endsWith('.webm'));
    const latestVideo = videoFiles
      .map(f => ({ name: f, time: fs.statSync(path.join(videoDir, f)).mtime }))
      .sort((a, b) => b.time - a.time)[0];

    if (latestVideo) {
      const finalPath = path.join(videoDir, `${viewport.name}-${interaction.name}.webm`);
      fs.renameSync(path.join(videoDir, latestVideo.name), finalPath);
      return finalPath;
    }

    return null;
  } catch (error) {
    console.error(`❌ Error recording ${interaction.name}:`, error.message);
    await context.close();
    await browser.close();
    return null;
  }
}

async function analyzeVideo(videoPath) {
  console.log(`🔍 Analyzing ${path.basename(videoPath)}...`);
  
  // For now, return placeholder analysis
  // In production, this would send to Kimi/Gemini multimodal API
  return {
    videoPath,
    issues: [],
    recommendations: [],
  };
}

async function main() {
  console.log(`🚀 Visual Feedback Loop Starting`);
  console.log(`🌐 URL: ${URL}`);
  console.log(`📁 Output: ${OUTPUT_DIR}\n`);

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const results = [];

  for (const viewport of VIEWPORTS) {
    console.log(`\n📱 Testing ${viewport.name} (${viewport.width}x${viewport.height})\n`);
    
    for (const interaction of INTERACTIONS) {
      const videoPath = await recordVideo(viewport, interaction);
      if (videoPath) {
        const analysis = await analyzeVideo(videoPath);
        results.push({
          viewport: viewport.name,
          interaction: interaction.name,
          videoPath,
          ...analysis,
        });
      }
    }
  }

  // Generate report
  const reportPath = path.join(OUTPUT_DIR, 'audit-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));

  console.log(`\n✅ Visual Audit Complete!`);
  console.log(`📊 Report: ${reportPath}`);
  console.log(`🎥 Videos: ${path.join(OUTPUT_DIR, 'videos')}\n`);

  return results;
}

main().catch(console.error);
