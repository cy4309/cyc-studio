# SPEC — Extend Home Page into Creative Studio Structure

## Goal

Transform the current Home page of CYC Studio from a portfolio hero into a full creative studio homepage by adding four new sections:

1. Services
2. Process
3. Philosophy (About)
4. Start a Project (Contact CTA)

Maintain the existing visual style:

- Black background
- White typography
- Minimal Apple / CSS Awards style
- Use existing `Reveal` motion component

Do NOT modify Navigation, Footer, or layout structure.

---

## Files to Create

Create the following components:

/components/sections/Services.tsx  
/components/sections/Process.tsx  
/components/sections/About.tsx  
/components/sections/ContactCTA.tsx

---

## Shared Layout Rules for All Sections

Each section must:

- Use `min-h-dvh`
- Center content vertically using flex
- Use `max-w-6xl mx-auto px-8`
- Wrap main content with `<Reveal>`
- Use large spacing and typography
- No cards, no borders, no backgrounds

---

## Services Section

Title: `Services`

List items:

- Interactive & Motion Websites
- WebAR / 3D Experiences
- Generative AI Integration
- System & API Integration (LINE, OAuth, CMS)

Layout:
Large title, vertical list with generous spacing.

---

## Process Section

Title: `Process`

Four vertical steps:

1. Discover — Understanding goals and experience direction
2. Design — Visual and interaction design
3. Develop — Frontend, backend, and system integration
4. Deliver — Deployment, optimization, and iteration

---

## About Section

Title: `Philosophy`

Paragraph:

I work at the intersection of visual design and engineering, crafting interactive experiences beyond traditional websites. CYC Studio blends motion, technology, and storytelling into meaningful digital products.

---

## ContactCTA Section

Centered layout.

Title: `Start a Project`

Text:

Have a project in mind? Let's build something unique together.

Email link:
mailto:cy4309@gmail.com

---

## Modify Home Page

Edit:

app/page.tsx

Import and render sections after Hero and before Footer in this order:

<Services />
<Process />
<About />
<ContactCTA />

---

## Motion Requirement

All sections must wrap their content with:

<Reveal>...</Reveal>

---

## Styling Rules

Titles:
text-5xl md:text-7xl

Content:
text-lg md:text-xl opacity-80

Use spacing:
space-y-12 or space-y-16
