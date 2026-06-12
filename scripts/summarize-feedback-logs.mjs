#!/usr/bin/env node

import fs from 'node:fs';
import { gunzipSync } from 'node:zlib';

const monthMap = new Map([
  ['Jan', 0],
  ['Feb', 1],
  ['Mar', 2],
  ['Apr', 3],
  ['May', 4],
  ['Jun', 5],
  ['Jul', 6],
  ['Aug', 7],
  ['Sep', 8],
  ['Oct', 9],
  ['Nov', 10],
  ['Dec', 11],
]);

const args = process.argv.slice(2);
const jsonMode = takeFlag('--json');
const selfTest = takeFlag('--self-test');
const help = takeFlag('--help') || takeFlag('-h');

if (help) {
  printUsage();
  process.exit(0);
}

if (selfTest) {
  summarizeLines(sampleLines(), { jsonMode });
  process.exit(0);
}

if (args.length === 0) {
  printUsage();
  process.exit(0);
}

const lines = [];
for (const file of args) {
  lines.push(...readLogLines(file));
}

summarizeLines(lines, { jsonMode });

function takeFlag(flag) {
  const index = args.indexOf(flag);
  if (index === -1) return false;
  args.splice(index, 1);
  return true;
}

function printUsage() {
  console.log(`Usage:
  node scripts/summarize-feedback-logs.mjs [--json] <nginx-access-log>...
  npm run feedback:summary -- /var/log/nginx/access.log /var/log/nginx/access.log.1

The script summarizes mirror-site page feedback events recorded as:
  /logo.svg?hb_feedback=1&action=pageview&page=...

It reads plain text logs and .gz rotated logs. Use --self-test to run a built-in sample.`);
}

function readLogLines(file) {
  const bytes = fs.readFileSync(file);
  const text = file.endsWith('.gz') ? gunzipSync(bytes).toString('utf8') : bytes.toString('utf8');
  return text.split(/\r?\n/).filter(Boolean);
}

function summarizeLines(lines, options) {
  const stats = {
    totalLines: 0,
    parsedLines: 0,
    feedbackEvents: 0,
    htmlPageviews: 0,
    firstAt: null,
    lastAt: null,
    eventByAction: new Map(),
    eventBySource: new Map(),
    eventByDay: new Map(),
    eventByPage: new Map(),
    eventByPageAction: new Map(),
    htmlByPage: new Map(),
    uniqueByPageAction: new Map(),
  };

  for (const line of lines) {
    stats.totalLines += 1;
    const entry = parseNginxLine(line);
    if (!entry) continue;
    stats.parsedLines += 1;
    rememberRange(stats, entry.date);

    const requestUrl = requestPath(entry.request);
    if (!requestUrl) continue;

    const url = parseUrl(requestUrl);
    if (!url) continue;

    if (isHtmlPageview(url)) {
      stats.htmlPageviews += 1;
      bump(stats.htmlByPage, normalizePath(url.pathname));
    }

    const params = url.searchParams;
    if (params.get('hb_feedback') !== '1') continue;

    const action = clean(params.get('action')) || 'unknown';
    const page = clean(params.get('page')) || normalizePath(params.get('path')) || normalizePath(entry.referrer) || '(unknown page)';
    const source = clean(params.get('source')) || inferSource(entry.host, entry.referrer);
    const day = dayKey(entry.date);
    const uniqueKey = `${entry.ip}\t${entry.userAgent}`;

    stats.feedbackEvents += 1;
    bump(stats.eventByAction, action);
    bump(stats.eventBySource, source);
    bump(stats.eventByDay, day);
    bump(stats.eventByPage, page);
    bump(stats.eventByPageAction, `${action}\t${page}`);
    addSet(stats.uniqueByPageAction, `${action}\t${page}`, uniqueKey);
  }

  const serializable = toSerializable(stats);
  if (options.jsonMode) {
    console.log(JSON.stringify(serializable, null, 2));
    return;
  }
  printMarkdown(serializable);
}

function parseNginxLine(line) {
  const match = line.match(/^(\S+)\s+\S+\s+\S+\s+\[([^\]]+)]\s+"([^"]*)"\s+(\d{3})\s+(\S+)(?:\s+"([^"]*)"\s+"([^"]*)")?/);
  if (!match) return null;
  const [, ip, rawDate, request, status, bytes, referrer = '', userAgent = ''] = match;
  const date = parseNginxDate(rawDate);
  return {
    ip,
    rawDate,
    date,
    request,
    status: Number(status),
    bytes,
    referrer,
    userAgent,
    host: '',
  };
}

function parseNginxDate(raw) {
  const match = raw.match(/^(\d{2})\/([A-Za-z]{3})\/(\d{4}):(\d{2}):(\d{2}):(\d{2})\s+([+-])(\d{2})(\d{2})$/);
  if (!match) return null;
  const [, dd, mon, yyyy, hh, mm, ss, sign, tzh, tzm] = match;
  const month = monthMap.get(mon);
  if (month === undefined) return null;
  const utc = Date.UTC(Number(yyyy), month, Number(dd), Number(hh), Number(mm), Number(ss));
  const offsetMinutes = Number(tzh) * 60 + Number(tzm);
  const direction = sign === '+' ? -1 : 1;
  return new Date(utc + direction * offsetMinutes * 60_000);
}

function requestPath(request) {
  const parts = request.split(/\s+/);
  if (parts.length < 2) return '';
  return parts[1];
}

function parseUrl(path) {
  try {
    return new URL(path, 'https://health.mindarae.com');
  } catch {
    return null;
  }
}

function normalizePath(value) {
  if (!value || value === '-') return '';
  try {
    const url = new URL(value, 'https://health.mindarae.com');
    return url.pathname.replace(/\/index\.html$/, '/');
  } catch {
    return String(value).split('?')[0].replace(/\/index\.html$/, '/');
  }
}

function isHtmlPageview(url) {
  const path = url.pathname;
  if (path === '/' || path.endsWith('.html')) return true;
  return path.startsWith('/content/') && !path.includes('.');
}

function clean(value) {
  if (!value || value === '-') return '';
  return String(value).trim();
}

function inferSource(_host, referrer) {
  if (referrer.includes('casperukee.github.io')) return 'github';
  if (referrer.includes('health.mindarae.com')) return 'mirror';
  if (referrer.includes('localhost') || referrer.includes('127.0.0.1')) return 'local';
  return 'unknown';
}

function rememberRange(stats, date) {
  if (!date) return;
  if (!stats.firstAt || date < stats.firstAt) stats.firstAt = date;
  if (!stats.lastAt || date > stats.lastAt) stats.lastAt = date;
}

function dayKey(date) {
  if (!date) return '(unknown day)';
  return date.toISOString().slice(0, 10);
}

function bump(map, key, count = 1) {
  map.set(key, (map.get(key) || 0) + count);
}

function addSet(map, key, value) {
  if (!map.has(key)) map.set(key, new Set());
  map.get(key).add(value);
}

function topEntries(map, limit = 20) {
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1] || String(a[0]).localeCompare(String(b[0])))
    .slice(0, limit)
    .map(([key, count]) => ({ key, count }));
}

function toSerializable(stats) {
  const pageAction = topEntries(stats.eventByPageAction, 200).map(({ key, count }) => {
    const [action, page] = key.split('\t');
    return {
      action,
      page,
      count,
      uniqueIpUa: stats.uniqueByPageAction.get(key)?.size || 0,
    };
  });

  return {
    totalLines: stats.totalLines,
    parsedLines: stats.parsedLines,
    feedbackEvents: stats.feedbackEvents,
    htmlPageviews: stats.htmlPageviews,
    firstAt: stats.firstAt?.toISOString() || null,
    lastAt: stats.lastAt?.toISOString() || null,
    eventByAction: topEntries(stats.eventByAction, 50),
    eventBySource: topEntries(stats.eventBySource, 20),
    eventByDay: [...stats.eventByDay.entries()].sort().map(([day, count]) => ({ day, count })),
    eventByPage: topEntries(stats.eventByPage, 30),
    htmlByPage: topEntries(stats.htmlByPage, 30),
    pageAction,
  };
}

function printMarkdown(data) {
  console.log('# Mirror Feedback Summary');
  console.log('');
  console.log(`- Range: ${data.firstAt || '(unknown)'} to ${data.lastAt || '(unknown)'}`);
  console.log(`- Raw log lines: ${data.totalLines}`);
  console.log(`- Parsed log lines: ${data.parsedLines}`);
  console.log(`- Feedback/pageview events: ${data.feedbackEvents}`);
  console.log(`- HTML requests observed: ${data.htmlPageviews}`);
  console.log('');

  printTable('Events By Action', ['Action', 'Count'], data.eventByAction.map((item) => [item.key, item.count]));
  printTable('Events By Source', ['Source', 'Count'], data.eventBySource.map((item) => [item.key, item.count]));
  printTable('Events By Day', ['Day', 'Count'], data.eventByDay.map((item) => [item.day, item.count]));
  printTable('Top Event Pages', ['Page', 'Count'], data.eventByPage.map((item) => [item.key, item.count]));
  printTable('Top HTML Requests', ['Page', 'Count'], data.htmlByPage.map((item) => [item.key, item.count]));

  const importantActions = new Set(['pageview', 'useful', 'not_useful', 'share', 'comment', 'github_repo', 'github_star', 'github_clone']);
  const rows = data.pageAction
    .filter((item) => importantActions.has(item.action))
    .slice(0, 40)
    .map((item) => [item.action, item.page, item.count, item.uniqueIpUa]);
  printTable('Top Page Actions', ['Action', 'Page', 'Count', 'Unique IP+UA'], rows);
}

function printTable(title, headers, rows) {
  console.log(`## ${title}`);
  console.log('');
  if (rows.length === 0) {
    console.log('_No data._');
    console.log('');
    return;
  }
  console.log(`| ${headers.join(' | ')} |`);
  console.log(`| ${headers.map(() => '---').join(' | ')} |`);
  for (const row of rows) {
    console.log(`| ${row.map(formatCell).join(' | ')} |`);
  }
  console.log('');
}

function formatCell(value) {
  return String(value ?? '')
    .replace(/\|/g, '\\|')
    .replace(/\n/g, ' ')
    .trim();
}

function sampleLines() {
  return [
    '203.0.113.10 - - [06/Jun/2026:08:15:00 +0800] "GET /logo.svg?hb_feedback=1&action=pageview&page=%2Fcontent%2Fzh-CN%2Fbook%2F00-start-here.html&title=%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8&source=mirror&ts=1780704900000 HTTP/1.1" 200 123 "https://health.mindarae.com/content/zh-CN/book/00-start-here.html" "Mozilla/5.0 Sample"',
    '203.0.113.10 - - [06/Jun/2026:08:16:00 +0800] "GET /logo.svg?hb_feedback=1&action=useful&page=%2Fcontent%2Fzh-CN%2Fbook%2F00-start-here.html&source=mirror HTTP/1.1" 200 123 "https://health.mindarae.com/content/zh-CN/book/00-start-here.html" "Mozilla/5.0 Sample"',
    '203.0.113.11 - - [06/Jun/2026:08:17:00 +0800] "GET /content/zh-CN/handbook/playbooks/symptom-action-guide.html HTTP/1.1" 200 456 "-" "Mozilla/5.0 Sample 2"',
    '203.0.113.11 - - [06/Jun/2026:08:18:00 +0800] "GET /logo.svg?hb_feedback=1&action=share&page=%2Fcontent%2Fzh-CN%2Fhandbook%2Fplaybooks%2Fsymptom-action-guide.html&source=mirror HTTP/1.1" 200 123 "https://health.mindarae.com/content/zh-CN/handbook/playbooks/symptom-action-guide.html" "Mozilla/5.0 Sample 2"',
  ];
}
