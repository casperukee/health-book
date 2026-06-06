# Scripts

This directory contains small maintenance utilities for the public project.

## Mirror Feedback Summary

The mirror site records lightweight page feedback and route pageviews through static asset requests such as:

```text
/logo.svg?hb_feedback=1&action=pageview&page=...
```

To summarize Nginx logs:

```bash
npm run feedback:summary -- /var/log/nginx/access.log /var/log/nginx/access.log.1
```

Rotated gzip logs are supported:

```bash
npm run feedback:summary -- /var/log/nginx/access.log /var/log/nginx/access.log.1 /var/log/nginx/access.log.2.gz
```

For machine-readable output:

```bash
npm run feedback:summary -- --json /var/log/nginx/access.log
```

The summary is aggregate-only. It is meant to help maintainers see which pages are being read and which footer actions are clicked. Do not use it to collect personal health information or identify individual readers.

Quick local check:

```bash
npm run feedback:summary -- --self-test
```

