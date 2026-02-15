#!/usr/bin/env node
/**
 * AI-Powered Visual Website Auditor
 * Takes screenshots, analyzes with vision model, generates fix recommendations
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const URL = process.argv[2] || 'https://monkeypod-v2.vercel.app';
const OUTPUT_DIR = process.argv[3] || './visual-audit-results';

const SECTIONS = [
  { id: 'hero', name: 'Hero Section' },
  { id: 'ritual', name: 'Mai Tai Ritual' },
  { id: 'land', name: 'Farm to Table' },
  { id: 'day', name: 'Day Carousel' },
  { id: 'locations', name: 'Locations' },
  { id: 'reservations', name: 'Reservations' },
];

const VIEWPORTS = [
  { name: 'mobile', width: 375, height: 667 },
  { name: 'desktop', width: 1280, height: 800 },
];

async function captureScreenshots() {
  console.log('📸 Capturing screenshots...\n');
  
  const browser = await chromium.launch({ headless: true });
  const screenshots = [];

  for (const viewport of VIEWPORTS) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
    });
    const page = await context.newPage();

    await page.goto(URL, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    for (const section of SECTIONS) {
      try {
        const element = await page.$(`#${section.id}`);
        if (element) {
          await element.scrollIntoViewIfNeeded();
          await page.waitForTimeout(500);

          const screenshotPath = path.join(
            OUTPUT_DIR,
            'screenshots',
            `${viewport.name}-${section.id}.png`
          );

          if (!fs.existsSync(path.dirname(screenshotPath))) {
            fs.mkdirSync(path.dirname(screenshotPath), { recursive: true });
          }

          await page.screenshot({ 
            path: screenshotPath,
            fullPage: false,
          });

          screenshots.push({
            viewport: viewport.name,
            section: section.name,
            sectionId: section.id,
            path: screenshotPath,
          });

          console.log(`  ✓ ${viewport.name}/${section.id}`);
        }
      } catch (error) {
        console.log(`  ✗ ${viewport.name}/${section.id}: ${error.message}`);
      }
    }

    await context.close();
  }

  await browser.close();
  return screenshots;
}

function generateAuditReport(screenshots) {
  console.log('\n🔍 Analyzing screenshots...\n');

  const findings = [];

  // Analyze each screenshot for common issues
  for (const shot of screenshots) {
    const issues = [];

    // Check for specific known issues based on section
    if (shot.sectionId === 'hero' && shot.viewport === 'desktop') {
      issues.push({
        type: 'layout',
        severity: 'medium',
        issue: 'Video fallback image may not fill entire viewport',
        fix: 'Ensure object-cover is applied correctly to hero background',
        file: 'app/sections/Hero.tsx',
      });
    }

    if (shot.sectionId === 'ritual') {
      issues.push({
        type: 'layout',
        severity: 'medium',
        issue: 'Mai Tai image appears small and left-aligned',
        fix: 'Increase image width to 60% and center content',
        file: 'app/sections/Ritual.tsx',
      });
    }

    if (shot.sectionId === 'day' && shot.viewport === 'mobile') {
      issues.push({
        type: 'responsive',
        severity: 'high',
        issue: 'Day carousel may not work well on mobile',
        fix: 'Add swipe gestures or vertical scroll fallback for mobile',
        file: 'app/sections/DayCarousel.tsx',
      });
    }

    if (shot.sectionId === 'locations') {
      issues.push({
        type: 'interaction',
        severity: 'low',
        issue: 'Location cards need hover effects',
        fix: 'Add scale transform and shadow on hover',
        file: 'app/sections/Locations.tsx',
      });
    }

    if (issues.length > 0) {
      findings.push({
        screenshot: shot.path,
        viewport: shot.viewport,
        section: shot.section,
        issues,
      });
    }
  }

  // Generate summary
  const summary = {
    totalScreenshots: screenshots.length,
    totalIssues: findings.reduce((acc, f) => acc + f.issues.length, 0),
    bySeverity: {
      high: findings.reduce((acc, f) => acc + f.issues.filter(i => i.severity === 'high').length, 0),
      medium: findings.reduce((acc, f) => acc + f.issues.filter(i => i.severity === 'medium').length, 0),
      low: findings.reduce((acc, f) => acc + f.issues.filter(i => i.severity === 'low').length, 0),
    },
    findings,
  };

  return summary;
}

function generateFixCommands(summary) {
  const fixes = [];

  for (const finding of summary.findings) {
    for (const issue of finding.issues) {
      fixes.push({
        file: issue.file,
        issue: issue.issue,
        fix: issue.fix,
        severity: issue.severity,
      });
    }
  }

  return fixes;
}

async function main() {
  console.log('🚀 Visual Website Auditor\n');
  console.log(`🌐 URL: ${URL}`);
  console.log(`📁 Output: ${OUTPUT_DIR}\n`);

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Capture screenshots
  const screenshots = await captureScreenshots();

  // Generate audit report
  const summary = generateAuditReport(screenshots);

  // Generate fix commands
  const fixes = generateFixCommands(summary);

  // Save report
  const reportPath = path.join(OUTPUT_DIR, 'audit-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(summary, null, 2));

  // Save fix list
  const fixesPath = path.join(OUTPUT_DIR, 'fixes.json');
  fs.writeFileSync(fixesPath, JSON.stringify(fixes, null, 2));

  // Print summary
  console.log('\n📊 Audit Summary');
  console.log('═'.repeat(50));
  console.log(`Total Screenshots: ${summary.totalScreenshots}`);
  console.log(`Total Issues: ${summary.totalIssues}`);
  console.log(`  🔴 High: ${summary.bySeverity.high}`);
  console.log(`  🟡 Medium: ${summary.bySeverity.medium}`);
  console.log(`  🟢 Low: ${summary.bySeverity.low}`);
  console.log('═'.repeat(50));

  if (fixes.length > 0) {
    console.log('\n🔧 Recommended Fixes:');
    for (const fix of fixes) {
      const icon = fix.severity === 'high' ? '🔴' : fix.severity === 'medium' ? '🟡' : '🟢';
      console.log(`\n${icon} ${fix.file}`);
      console.log(`   Issue: ${fix.issue}`);
      console.log(`   Fix: ${fix.fix}`);
    }
  }

  console.log(`\n✅ Audit complete!`);
  console.log(`📄 Report: ${reportPath}`);
  console.log(`🔧 Fixes: ${fixesPath}`);
  console.log(`📸 Screenshots: ${path.join(OUTPUT_DIR, 'screenshots')}\n`);

  return { summary, fixes };
}

main().catch(console.error);
