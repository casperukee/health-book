# English Edition Adaptation Plan

Status: planning

Last updated: 2026-06-28

Source edition: Chinese web and reading-edition content line `v1.0.0`

Primary target: U.S. readers, with globally readable safety boundaries

## Core Decision

The English edition should not be a direct translation of the Chinese edition.

It should be a U.S.-first adaptation of the Chinese `v1.0.0` source edition: the same family health decision system, the same medical boundaries, and the same product spirit, rewritten for readers who use different units, healthcare entry points, preventive-care systems, insurance constraints, family structures, and trusted medical sources.

The English edition should remain useful to non-U.S. English readers by avoiding unnecessary U.S.-only assumptions and by repeatedly reminding readers to use local emergency numbers, local clinicians, local public-health guidance, and local insurance or care-access rules.

## Target Reader

Primary reader:

- adults in the United States who help themselves, parents, partners, children, or older relatives make practical health decisions;
- people who do not want to become medical experts but want to recognize warning signs, prepare better for visits, keep family health records, and avoid health-marketing traps;
- family caregivers who deal with fragmented records, primary-care visits, urgent care, ER decisions, medication lists, insurance friction, and long-distance family coordination.

Secondary reader:

- English-speaking readers outside the United States who can use the decision models but must map emergency care, primary care, screening, insurance, and public-health sources to their local systems.

## Adaptation Principles

### 1. Keep the same job, not the same sentences

Each English chapter should preserve the Chinese source chapter's role in the whole book, but it should not copy Chinese paragraph order, examples, jokes, rhythm, or family assumptions.

For each chapter, start from:

- what problem this chapter solves in the book;
- what a U.S. family is likely facing when they open it;
- what the reader should be able to do after reading;
- what medical boundary must not be crossed.

Then rewrite in natural English.

### 2. Localize medical facts and source anchors

High-risk medical facts must be checked against English-language authoritative sources before publication.

Preferred U.S. and international source anchors include:

- CDC, NIH, NHLBI, NCI, NIA, NIMH, MedlinePlus;
- USPSTF for preventive services and screening;
- AHA/ACC, ADA, ACS, ACOG, AAP, AGS, and other relevant professional organizations when needed;
- SAMHSA and 988 resources for mental health crisis boundaries;
- FDA, FTC, and NCCIH for supplements, devices, health fraud, and consumer health claims;
- WHO or other international sources when a topic should stay globally framed.

Any numerical threshold, screening interval, unit convention, or medical claim that could change must be checked at drafting time and described with a review date.

### 3. Use U.S. units, with portability where useful

The English U.S.-first edition should use units readers commonly see in U.S. reports and care settings, such as:

- mg/dL for many lipid, glucose, and uric acid discussions;
- mmHg for blood pressure;
- lb/in or BMI language where needed, with metric equivalents only when they reduce confusion;
- U.S.-style lab report language such as reference range, flag, trend, and follow-up.

Do not assume Chinese units, Chinese checkup-package names, or China-specific report conventions. If a chapter discusses international readers, say that units and reference ranges vary by country and lab.

### 4. Adapt the healthcare pathway

The U.S. edition should reflect common U.S. care pathways without pretending they are universal:

- emergency services / 911;
- ER / emergency department;
- urgent care;
- primary care;
- specialist referral;
- telehealth;
- preventive visit / annual wellness or preventive care framing where appropriate;
- pharmacy and medication reconciliation;
- discharge instructions and return precautions.

Where insurance, network status, copays, deductibles, prior authorization, or out-of-pocket cost can affect real family decisions, mention them as planning factors, not as medical decision rules.

The book must never imply that cost or insurance concerns should override emergency warning signs.

### 5. Localize family collaboration

Family chapters should not directly translate Chinese parent-child communication patterns.

U.S. family scenarios should consider:

- adult children supporting parents while respecting privacy and autonomy;
- long-distance caregiving across states;
- blended families, partners, divorced parents, and chosen family;
- HIPAA, consent, emergency contacts, advance directives, and patient portals;
- medication lists, allergies, pharmacy records, discharge papers, and portal messages scattered across systems;
- caregiving burnout and boundary setting;
- conversations where a parent does not want to be managed or monitored.

The tone should be collaborative and autonomy-respecting. The English edition should avoid sounding like one family member is taking control of another adult's health.

### 6. Keep non-U.S. readers oriented

When a section is U.S.-specific, say so.

Useful phrasing:

- "In the U.S., this often means..."
- "If you live elsewhere, map this to your local emergency number, primary-care system, and public-health guidance."
- "Units and reference ranges vary by country and lab; use your own report's reference range and clinician guidance."

Avoid presenting U.S. screening recommendations, insurance pathways, or crisis resources as universal.

## Version Strategy

The existing English files should remain a preview until they are rewritten against the Chinese `v1.0.0` source edition.

Recommended labels:

- `en-preview`: current early preview pages;
- `en-v0.1`: English foundation pack ready for review;
- `en-v0.5`: Part 1 and core safety tools adapted;
- `en-v0.8`: full main-book draft adapted;
- `en-v1.0.0`: English edition ready after adaptation, source review, editorial review, and medical-boundary review.

Do not call the English edition `v1.0.0` just because the Chinese edition is `v1.0.0`.

## Chinese Review Companion

The official English edition files should stay in English.

However, the project maintainer needs Chinese-language review support when checking English work. For every substantial English deliverable, Codex should provide a Chinese review companion.

For short planning updates, the companion can be a Chinese summary in the conversation. For English web pages, the preferred review mode is a phone-readable Chinese review page on the website.

These review pages should:

- live under `content/en-review/zh-CN/`;
- mirror the English page path where practical, for example `content/en/book/00-start-here.md` should have a review page such as `content/en-review/zh-CN/book/00-start-here.md`;
- translate or back-translate the English adaptation into Chinese for maintainer review;
- not copy the original Chinese source chapter as the review text;
- clearly state that the page is a Chinese review aid for the English adaptation, not the Chinese source edition;
- stay inside the review edition's own navigation, sidebar, footer links, and internal links;
- not be linked from ordinary English body content;
- be reached through the site edition switcher or the review edition's own index.

Use Chinese review companions for:

- Chinese summaries of English plans, README changes, and chapter drafts;
- paragraph-level Chinese back-translation for high-risk pages such as emergency boundaries, symptom guidance, checkup interpretation, mental health crisis, cancer screening, and medication safety;
- notes on what was localized for U.S. readers and what remains portable for non-U.S. readers;
- explicit flags where the English adaptation differs from the Chinese source because of U.S. units, care pathways, insurance friction, legal/privacy context, family norms, or source guidance.

The companion should help the maintainer check meaning, tone, medical boundaries, and source alignment on mobile. It should not become a second Chinese edition of the English book.

## Web First, Reading Edition Later

Build the English web edition first.

The English reading edition should not be the writing starting point. It should be a publication package created only after the web edition has stabilized.

Reasons:

- the English edition requires substantial U.S. localization and should be reviewed page by page before being packaged;
- web pages support incremental release, source review, link updates, and medical-boundary corrections;
- U.S. healthcare pathways, insurance friction, family-care scenarios, and source anchors will need iteration;
- Amazon/KDP or other ebook publication requires separate packaging decisions: title, subtitle, cover, front matter, copyright page, disclaimer placement, table of contents, Kindle formatting, metadata, and store positioning.

Recommended order:

1. Build the English web foundation pack.
2. Adapt core book chapters and handbook tools on the website.
3. Run English editorial review and medical-boundary review.
4. Stabilize a web version checkpoint.
5. Only then create an English reading-edition package for Amazon/KDP or other stores.

The English reading edition should have its own release notes and review trail. Do not export it directly from unfinished preview pages.

## Work Pack For Each Chapter

Before rewriting any English chapter, create a short adaptation brief:

```text
English Adaptation Brief
  - Chinese source path and source version
  - Chapter job in the whole book
  - U.S. reader scenario
  - Non-U.S. portability note
  - Core model to preserve
  - Medical boundaries that must not be weakened
  - U.S. healthcare pathway involved
  - Insurance/cost/friction points, if relevant
  - Unit and terminology choices
  - U.S./international source anchors to verify
  - Family/cultural localization notes
  - Chinese review companion: conversation summary / web review page / paragraph back-translation
```

Then draft the English page from that brief rather than translating sentence by sentence. When the English page is updated, update the corresponding Chinese review page in the same work session.

## Priority Sequence

### Phase 0: Reset the English edition frame

- Update `content/en/README.md` to say the English edition is being rebuilt as a U.S.-first adaptation from the Chinese `v1.0.0` source edition.
- Update `content/en/book/README.md` to mirror the Chinese `v1.0.0` structure while marking chapter status clearly.
- Treat the current main book and handbook pages as `en-v0.2` content-review pages: structure-aligned and usable for review, but not yet production-ready.
- Update `shared/glossary.md` when English terminology decisions become stable.

### Phase 1: Safety and entry pack

Goal: make the English edition safe to browse before the full book exists.

Pages:

- `content/en/book/00-start-here.md`
- `content/en/book/medical-boundaries.md`
- `content/en/handbook/playbooks/red-flags.md`
- `content/en/handbook/playbooks/symptom-action-guide.md`
- `content/en/handbook/playbooks/doctor-visit-checklist.md`
- `content/en/handbook/templates/family-health-record.md` (including the one-page family health card section)

Special U.S. adaptation issues:

- 911, ER, urgent care, primary care, crisis lines, poison control where relevant;
- "return precautions" and discharge instructions;
- patient portals and medication lists;
- family emergency contacts and consent.

### Phase 2: Checkups and risk language

Goal: rebuild Part 1 for U.S. lab reports and preventive-care language.

Pages:

- `healthspan-and-risk-curve.md`
- `checkup-markers.md`
- `checkup-planning-guide.md`
- `common-checkup-markers` equivalent if added in English;
- `family-health-record.md` (including the chronic marker log section)

Special U.S. adaptation issues:

- U.S. lab units and report conventions;
- USPSTF preventive-service framing;
- primary-care visit versus employer checkup versus direct-to-consumer testing;
- insurance-covered preventive services versus optional testing;
- avoiding over-screening and tumor-marker shortcuts.

### Phase 3: Main risk lines

Goal: adapt the body's main risk lines with U.S. source anchors and family action boundaries.

Pages:

- `metabolic-health.md`
- `cardiovascular-event-chain.md`
- `common-upstream.md`
- `sleep-and-recovery.md`
- `brain-and-mental-health.md`
- `cancer-and-major-illness.md`
- `children-and-adolescent-health.md`
- `specialty-care-map.md`

Special U.S. adaptation issues:

- primary care and specialist referral patterns;
- ER versus urgent care boundaries;
- mental health crisis resources and access constraints;
- cancer screening sources and shared decision-making;
- pediatric and adolescent autonomy, school context, and family support.

### Phase 4: Family health operating system

Goal: localize family coordination for U.S. realities rather than translating Chinese family scenes.

Pages:

- `what-to-manage.md`
- `doctor-visit-preparation.md`
- `talking-with-parents.md`
- `elder-care-basics.md`
- family record templates.

Special U.S. adaptation issues:

- HIPAA, consent, patient portals, proxy access;
- advance directives and emergency contacts;
- Medicare/Medicaid/private insurance as planning context, not medical advice;
- long-distance caregiving;
- autonomy-respecting parent conversations;
- caregiver burnout and support.

### Phase 5: Health information defense

Goal: adapt health-marketing chapters to the U.S. consumer health environment.

Pages:

- `supplement-evidence-traps.md`
- `devices-tests-and-longevity-marketing.md`
- `reading-health-news.md`
- `health-product-checklist.md`

Special U.S. adaptation issues:

- dietary supplements and FDA boundaries;
- FTC health-advertising concerns;
- direct-to-consumer tests;
- wearable devices and wellness claims;
- longevity clinics, anti-aging marketing, and cash-pay services;
- distinguishing mechanism, biomarker movement, and patient-important outcomes.

### Phase 6: Publication readiness

Before treating the English edition as ready for broader publication or Amazon/KDP exploration:

- confirm the web edition has reached a stable checkpoint and is no longer a preview-only draft;
- complete the English source registry or source notes for all high-risk chapters;
- run a medical-boundary review focused on care-seeking, screening, medication, mental health crisis, and cancer content;
- run an English editorial pass for tone, rhythm, and U.S. reader fit;
- ensure the book does not read like a translation;
- decide whether the English web title, "Health Decisions for Families," should also be used for any later reading edition or store package;
- prepare a separate publication package rather than exporting directly from the current preview pages.

Do not upload or publish an English ebook until the English edition has its own review trail.

## Current Assessment Of Existing English Pages

The English main book and handbook have moved past early preview status. They are now structure-aligned `en-v0.2` adaptation pages with matching Chinese review companions.

They should be treated as usable review pages for:

- checking whether every page stays inside the English edition loop;
- reviewing U.S.-first healthcare pathways, source anchors, units, and family scenarios;
- checking whether the Chinese review companions translate the English adaptation rather than copying the Chinese source edition;
- finding remaining tone, title, navigation, and medical-boundary issues before broader publication.

They still need review before any `en-v1.0.0` label or reading-edition packaging:

- source checks for high-risk medical claims;
- an English editorial pass for rhythm and U.S. reader fit;
- a medical-boundary pass focused on emergency care, screening, medication, mental health crisis, cancer, children, and older adults;
- final metadata and release notes.
