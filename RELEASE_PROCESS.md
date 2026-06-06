# Release Process

This project uses small, transparent preview releases rather than large, infrequent drops.

The Chinese edition is the source edition. English pages are adapted after selected Chinese pages become stable enough to represent the project safely.

## Version Labels

- `v0.x-preview`: public preview releases used for reader testing, clinician feedback, and workflow validation.
- `v0.x`: stable preview releases after the same content cycle has received enough cleanup and review.
- `v1.0`: the first release where the main Chinese book is considered structurally stable.
- `v1.x`: maintenance releases for corrections, medical-boundary wording, links, sources, templates, and translations.

Version numbers should not move quickly just because a few pages changed. A release is useful only when it makes the project easier to evaluate, read, or maintain.

## What Goes Into A Release

Before tagging a release, check:

- content changes are summarized in `CHANGELOG.md`;
- high-risk medical wording changes are recorded in `content/zh-CN/errata/review-log.md` when appropriate;
- reader or clinician feedback that affects the roadmap is captured in GitHub issues or `content/zh-CN/updates/roadmap-and-ideas.md`;
- the build passes with `npm run docs:build`;
- public files do not contain private paths, paid-course material, OCR dumps, screenshots, PDFs, or internal working notes;
- the domestic mirror deployment path still works if the release should be visible on `health.mindarae.com`.

## Routine Release Steps

1. Finish the scoped content or maintenance changes.
2. Update `CHANGELOG.md` under `Unreleased`.
3. Run local checks:

```bash
npm run docs:build
```

4. Commit and push to `main`.
5. Confirm GitHub Pages builds successfully.
6. Trigger or wait for the mirror sync.
7. If the change represents a preview checkpoint, create an annotated tag and GitHub release.

Example:

```bash
git tag -a v0.8-preview -m "Health Youpu v0.8 preview"
git push origin v0.8-preview
```

## Correction Releases

Medical-boundary corrections should be handled conservatively:

- fix wording quickly when a page could delay care, overstate certainty, or look like diagnosis/treatment;
- record the change in `content/zh-CN/errata/review-log.md`;
- keep the public correction trail concise and factual;
- avoid expanding the main book just to answer one edge case unless it improves the general reader path.

Small wording corrections do not always require a new tag. They should still be committed, pushed, and reflected in the changelog when user-facing.

## English Preview Updates

English pages are not literal translations. Before adding an English preview page:

- confirm the Chinese source page is stable enough to represent publicly;
- keep the same medical boundary and uncertainty level;
- adapt examples and phrasing for English-speaking readers;
- do not add stronger claims than the Chinese source;
- link back to the Chinese source edition when helpful.

## Mirror Feedback Review

The mirror site records lightweight aggregate events through static asset requests. To review logs:

```bash
npm run feedback:summary -- /var/log/nginx/access.log /var/log/nginx/access.log.1
```

Use the result to decide which pages need clearer entrances, better mobile reading flow, or stronger calls to action. Do not use logs to identify individual readers or collect personal health information.
