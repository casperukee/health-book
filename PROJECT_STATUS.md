# Project Status

Last updated: 2026-06-14

**Health Youpu / 健康有谱** is an open-source health literacy book for families. The Chinese edition is the source edition. A small English preview is available so international readers, clinicians, and contributors can understand the project direction.

This project is not medical advice. It helps readers prepare, sort risk, and communicate better with clinicians. It does not diagnose, prescribe, recommend stopping medication, or replace urgent care.

## Current Stage

The project is in the `v0.9-preview` small-group reader testing stage.

What is usable today:

- Chinese online reading through the mainland-friendly mirror and GitHub Pages.
- A structured Chinese book covering healthspan, checkups, metabolic health, cardiovascular risk, sleep, mental health, children and adolescents, cancer and major illness, specialty care, family health operations, elder care, and health misinformation.
- Practical handbook pages for warning signs, symptoms, doctor visits, department navigation, checkups, family health cards, chronic marker logs, and health product checks.
- A lightweight page feedback layer on the mirror site for pageviews, useful/not-useful clicks, copied share text, and comment-entry clicks.
- An aggregate log summary script for reviewing mirror-site feedback without adding accounts, an API, or a database.
- An English preview package for the project overview, medical boundaries, symptom guide, department navigation, checkup planning, checkup markers, sleep and recovery, family communication, doctor visit preparation, family health card, and health product checks.

What changed in `v0.9-preview`:

- The source Chinese edition now reads more like a family health judgment guide rather than a set of disconnected tools.
- The highest-priority Part 2 chapters were expanded or restructured: brain and mental health, children and adolescents, cancer and major illness, and specialty care.
- The project now uses a clearer “whole-family health keeper” framing: readers often manage their own risks while also helping parents, partners, children, and older family members.
- The domestic mirror deployment flow has been clarified: the production mirror is expected to pull from GitHub and build on the server.

## Maintenance Model

The project is maintained by casper, with Codex used as an engineering and editorial assistant.

Codex helps with:

- drafting and restructuring Markdown/VitePress pages;
- improving mobile reading flow and navigation;
- turning reader and clinician feedback into scoped revisions;
- checking build output, links, changelog entries, and bilingual structure;
- keeping internal writing rules, public boundaries, and source metadata consistent.
- keeping preview releases and public maintenance notes aligned with `RELEASE_PROCESS.md`.

Human maintenance remains responsible for:

- final editorial judgment;
- medical-boundary decisions;
- source selection and uncertainty wording;
- publication timing;
- accepting or declining feedback.

## Review And Correction Workflow

The project uses three layers of review:

- reader review for clarity, usefulness, and missing scenarios;
- medical-boundary review for wording that could delay care, overstate certainty, or look like diagnosis/treatment;
- maintenance review for links, navigation, source metadata, changelog entries, and release notes.

Public correction and review records live under `content/zh-CN/errata/`. High-risk medical wording should be corrected conservatively and recorded transparently.

## Near-Term Priorities

The next maintenance cycle focuses on:

- inviting clinician feedback on the pages that may affect care-seeking behavior, especially warning signs, symptom triage, checkups, mental health, cancer, and specialty care;
- doing a v0.9 pass on Part 3, so family health records, doctor visits, parent communication, and elder care feel like one coherent operating system;
- doing a lighter continuity pass on Part 4, so supplements, devices/tests/longevity marketing, and health news share the same evidence-and-cost judgment style;
- reviewing the expanded English preview without turning it into a literal translation;
- improving high-traffic pages based on mirror-site pageviews and reader feedback;
- keeping larger future ideas in the roadmap until they have a stable reader problem and evidence boundary.

## Non-Goals

The project will not become:

- a diagnostic chatbot;
- a treatment guide;
- a substitute for clinicians;
- a supplement or health-product marketing site;
- a dump of private notes, course summaries, OCR, PDFs, screenshots, or copyrighted material.
