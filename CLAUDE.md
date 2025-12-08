CLAUDE.md

Force Multiply — Brand, Voice, System Architecture & Development Instructions

Purpose of This File
This file defines the Force Multiply brand, the voice and tone, the design palette and rules, the mission, the audience, and the full development stack for the Force Multiply website. Claude should treat this file as the single source of truth for all code, design, UX, and content decisions.

Brand Overview

Force Multiply is a boutique technology and AI consulting firm that helps organizations get more from the systems and teams they already have. We improve architecture, AI and automation, data flows, Salesforce usage, governance, and delivery velocity. We multiply existing force rather than rebuild everything from scratch.

Mission

To give teams clarity, velocity, and confidence using architecture, AI, and clean execution. We fix system bottlenecks, implement automation, clean architectures, unlock Salesforce and Data Cloud value, and help teams ship faster with better governance.

Target Audience

CIO, CTO, COO
Heads of RevOps and Sales Ops
Innovation leaders
PE-backed mid-market companies
Organizations with complex systems and slow delivery cycles

Brand Palette

Primary Colors:
Deep Navy: #062e5a
Blue-Gray: #1d3557

Supporting / Neutrals:
Soft Sand: #e8e1d9
Warm Gray: #d7d3cc
Crisp White: #ffffff

Optional Accent:
Muted Sand Gold: #d2b48c

Brand Voice & Tone

Voice pillars: clean, confident, fast, approachable, strategic, practical.

Writing rules:
	•	Keep sentences short and direct.
	•	Avoid hype and jargon.
	•	Avoid corporate fluff or buzzwords.
	•	Maintain a warm, authoritative tone.
	•	Respect the reader’s time.
	•	Explain complex concepts in simple language.

What not to do:
Avoid vague promises, jargon-heavy language, robotic AI hype terms, and long-winded corporate phrasing.

Good example:
“We help you get more from the systems you already have. Faster workflows, cleaner architecture, better outcomes.”

Bad example:
“We deliver scalable digital transformation across synergistic enterprise ecosystems.”

Design & Aesthetic System

Core aesthetic: clean blur depth, natural textures like wood and plants, neutral color surfaces, minimal grids, clean cards, whitespace-heavy layouts, warm modern workplace photography.

Avoid loud colors, neon gradients, AI-brain imagery, heavy shadows, and cluttered or noisy layouts.

Typography

Headings: Inter, Söhne, Helvetica Now
Body: Inter, IBM Plex Sans

Principles: strong hierarchy, clean spacing, modern geometry, minimal ornamentation.

Primary CTAs

Talk to Us
Start an Assessment
Let’s Build Something Better
See How Much Faster You Could Move

Avoid pushy, salesy language.

Design Tokens (CSS Variables)

:root {
–fm-navy: #062e5a;
–fm-blue-gray: #1d3557;
–fm-sand: #e8e1d9;
–fm-warm-gray: #d7d3cc;
–fm-white: #ffffff;
–fm-muted-gold: #d2b48c;
}

Development Architecture

The Force Multiply website uses a modern, minimal, fast stack based on Next.js 14 with Markdown content.

Core Stack
Framework: Next.js 14
	•	App Router
	•	Server Components
	•	Server-Side Rendering (SSR)
	•	Static Site Generation (SSG)
	•	API Routes

Language: TypeScript
	•	Strict typing
	•	Interfaces for data structures

Styling: CSS Modules
	•	Component-scoped styles
	•	Uses the CSS variables included above
	•	Responsive design patterns

Content: Markdown (.md files)
	•	Blog stored as markdown
	•	YAML frontmatter parsed by gray-matter
	•	Rendered via next-mdx-remote

Runtime: Node.js 18.17+

Dependencies

Blog and content:
gray-matter
reading-time
next-mdx-remote

General:
react
react-dom
next
typescript

Deployment

Hosting: Vercel
Zero-config deployment
Automatic previews for every branch
Fast global CDN
Serverless functions
Edge runtime optional

Architecture benefits:
Fast
SEO optimized
Scalable
Secure
Cost-effective
Git-based workflow
No database required
File-based content system

Project Structure

Claude should follow this structure:

/
app/
layout.tsx
page.tsx
blog/
page.tsx
[slug]/page.tsx
api/
webhook/route.ts

components/
ui/
layout/
shared/

styles/
globals.css
variables.css

content/
blog/
*.md

lib/
mdx.ts
content.ts
utils.ts

public/
assets/

package.json

Coding Standards

Use TypeScript everywhere.
Default to Server Components.
Use CSS Modules with responsive breakpoints.
Pull content from markdown files.
Use clean file-based routing.
Produce semantic and accessible JSX.

Example CSS Module pattern:

.container {
padding: 2rem;
color: var(–fm-navy);
}

@media (max-width: 768px) {
.container {
padding: 1rem;
}
}

Required Website Pages

Homepage
	•	Hero (one-sentence value)
	•	Sub-hero
	•	Three or four value props
	•	Problem list
	•	CTA buttons

Services Page
Sections:
	1.	Salesforce Modernization
	2.	AI and Automation
	3.	Data Cloud and Integrations
	4.	Governance and DevOps
	5.	Fractional Engineering Leadership

Each section should include:
	•	Description
	•	Why it matters
	•	The Force Multiply approach
	•	Deliverables

How We Work Page
	•	Assess, Align, Architect, Activate
	•	Interview-first approach
	•	Repeatable patterns
	•	Weekly engagement commitment levels

About Page
	•	Ward Wood background
	•	Brand philosophy
	•	Values

Contact Page
	•	Simple form or CTA
	•	Optional scheduling embed

Rules for Claude When Generating Code

Use this tech stack.
Follow the project structure.
Use the brand voice for placeholder text.
Use the color palette and CSS variables.
Ensure code is readable and maintainable.
Prefer server components unless interactivity is needed.

Rules for Claude When Writing Copy

Use the Force Multiply voice.
Keep sentences short and direct.
Emphasize clarity and velocity.
Avoid corporate jargon.
Stay aligned to the mission: multiply the existing force.

Final Directive

Claude must use this document as the operating system for all code, components, templates, content, design decisions, refactoring, architecture guidance, and UX patterns for the Force Multiply website.