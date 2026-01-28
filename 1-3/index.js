import { CronJob } from 'cron';
import puppeteer from 'puppeteer';

const URL = 'https://github.com/alpnix/Radical-Software-DevLogs';

const scrape = async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto(URL, { waitUntil: 'networkidle2' });
  const content = await page.evaluate(() => ({
    title: document.title,
    name: document.querySelector('strong[itemprop="name"] a')?.textContent?.trim(),
    description: document.querySelector('p[itemprop="about"]')?.textContent?.trim(),
    stars: document.querySelector('a[href*="stargazers"]')?.textContent?.trim(),
    files: Array.from(document.querySelectorAll('div[role="row"] a')).slice(0, 5).map(a => a.textContent.trim())
  }));
  await browser.close();
  console.log(`[${new Date().toISOString()}]`, content);
};

var job = new CronJob('*/10 * * * *', scrape, null, true);
