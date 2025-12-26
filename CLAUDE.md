# Force Multiply - Website Build Guide

## Company Overview

Force Multiply provides fractional Chief AI Officers, CTOs, and Chief Innovation Officers to companies ready to transform. We deliver executive-level leadership for AI transformation, technology strategy, and innovation—without the full-time commitment.

Whether you need executive leadership to guide AI adoption, hands-on consulting to implement new technologies, or both—we bring senior leadership experience at a fraction of the cost.

Header/Slogan
Expand What's Possible

Subheader
Fractional executive leadership and hands-on consulting to navigate AI transformation, modernize technology, and drive innovation.

### Mission Statement

We're practitioners who deliver results, not theorists who write reports. Force Multiply helps organizations navigate AI transformation and drive innovation through fractional executive leadership and hands-on consulting.

---

## Brand Identity

### Brand Personality
Clean, confident, and fast—but still approachable. Professional without being corporate, strategic without being stuffy. The kind of brand that shows up prepared, gets to the point, and delivers. No jargon-heavy decks or overengineered frameworks—just people who know the platforms inside and out and help clients get more from what they've already invested in.

Groundbreaking visual experience with modern animations, smooth interactions, and a polished, premium feel. Think Apple-level attention to detail with subtle motion that enhances rather than distracts.

### Logo
The Force Multiply logo features a unique icon that combines the letters F and M into a single Braille-inspired dot pattern (4 dots). It's distinctive without being gimmicky.

**Logo versions available:**
- Full color (blue dots on white/light backgrounds)
- White version (for dark backgrounds)
- SVG and PNG formats

### Color Palette

| Color | Hex | CSS Variable | Use |
|-------|-----|--------------|-----|
| Deep Blue | `#1e3a8a` | `--color-primary` | Primary brand color, headers, logo dots |
| Bright Blue | `#3b82f6` | `--color-accent` | Accents, highlights, buttons/CTAs |
| Slate Dark | `#1e293b` | `--color-text` | Body text, main content |
| Slate Gray | `#64748b` | `--color-text-secondary` | Subheadings, secondary text |
| White | `#ffffff` | `--color-bg` | Primary backgrounds |
| Light Gray | `#f1f5f9` | `--color-bg-alt` | Alternate/section backgrounds |

### Typography
- **Primary Font:** Arial (Helvetica fallback)
- **Headings:** Arial Bold (700)
- **Body:** Arial Regular (400)
- **Subtle text:** Arial Light (300)

Keep typography clean and readable. Nothing fussy.

### Iconography System

Force Multiply uses a custom, consistent icon system throughout the site. Icons are implemented via the `<Icon />` component and use inline SVG for performance and customization.

**Icon Design Principles:**
- **Simple & Clean:** Line-based icons with 2px stroke weight
- **Consistent Size:** Icons come in standard sizes: 24px (default), 32px, 48px
- **Color Flexible:** Icons inherit color from their context or can be customized
- **Meaningful:** Each icon directly represents its associated concept

**Available Icons & Usage:**

| Icon Name | Use Case | Where Used |
|-----------|----------|------------|
| `ai-brain` | AI & Machine Learning services | Services section, AI strategy |
| `cloud` | Cloud platforms & infrastructure | Services section, cloud offerings |
| `rocket` | Speed, launch, acceleration | Speed/velocity messaging |
| `code` | Development, practitioners | Differentiators, technical work |
| `database` | Data management, integration | Data services |
| `lightning` | Speed, fast delivery | Differentiators - Speed matters |
| `target` | Goals, outcomes, precision | Differentiators - Ownership |
| `shield` | Security, compliance, trust | Financial services, RegTech |
| `handshake` | Partnership, collaboration | Client relationships |
| `check-circle` | Validation, success, quality | Completed items, benefits |
| `users` | Team, people, collaboration | About, team sections |
| `briefcase` | Business, consulting, advisory | Advisory services |
| `message` | Communication, clarity | Differentiators - No jargon |
| `star` | Premium, excellence | Testimonials, highlights |
| `chart` | Analytics, growth, metrics | Data & reporting |
| `arrow-right` | Navigation, next step | Links, CTAs |

**Implementation:**

```tsx
import Icon from '@/components/Icon';

// Basic usage
<Icon name="ai-brain" size={48} />

// With custom className
<Icon name="cloud" size={32} className="custom-class" />

// Default size is 24px
<Icon name="lightning" />
```

**Icon Container Styling:**

Icons are typically displayed in colored containers:

```css
.iconContainer {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease;
}

/* On hover */
.iconContainer:hover {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 8px 20px rgba(30, 58, 138, 0.3);
}
```

**Adding New Icons:**

To add new icons to the system:
1. Open `/components/Icon.tsx`
2. Add new SVG to the `icons` object
3. Use 24x24 viewBox with 2px stroke
4. Follow line-based design style
5. Document in this guide

---

## Services

### Fractional Executive Leadership

**Fractional Chief AI Officer (CAIO)**
- Lead AI strategy and adoption
- Build AI roadmaps and governance frameworks
- Guide organizational AI readiness

**Fractional CTO**
- Technology vision, architecture, and team leadership
- Technical program management
- Engineering team mentoring and hiring support

**Fractional Chief Innovation Officer**
- Drive innovation and digital transformation
- Identify and evaluate emerging technologies
- Build innovation culture and processes

### AI Strategy & Implementation
- AI adoption strategy and organizational readiness
- Build AI agents and automation workflows
- Deploy production AI solutions (LLMs, classification, forecasting)
- AI governance, ethics, and risk management

### Technology & Platform Consulting
- Salesforce optimization, architecture, and development
- Microsoft Azure, Power Platform, and Teams
- Cloud architecture and migration
- DevOps, CI/CD, and engineering best practices

### Target Industries

**Broad Industry Focus:**
- Technology & SaaS
- Financial Services
- Professional Services
- Healthcare & Life Sciences
- Manufacturing & Industrial
- Private Equity Portfolio Companies

We work with companies at inflection points who need AI and technology leadership to drive transformation.

---

## Leadership

### Ward Wood – Founder & CEO
Ward brings over a decade of technology leadership experience, advising executives and boards on AI transformation and technology strategy. He works directly with senior leadership to shape AI roadmaps, build technology strategies, and lead implementation. Deep technical expertise meets business acumen—driving real outcomes, not just technology for its own sake.

---

## Key Differentiators & Messaging

### Value Proposition
Force Multiply is fundamentally different from traditional consulting firms because:
1. **Executive experience** – Senior leadership experience, not just consulting
2. **Practitioners** – We build and implement, not just advise
3. **Flexible commitment** – Part-time leadership, full-time impact
4. **Outcome-focused** – Invested in your success, not hours billed

### Key Messages

**Hero Headline/Slogan:**
"Expand What's Possible"

*Plays on the mathematical concept of force multiplication and expanding X/Y possibilities*

**For Companies:**
- "Executive-level leadership for AI transformation, technology strategy, and innovation—without the full-time commitment"
- "Part-time executive guidance, full-time impact"
- "Senior leadership experience at a fraction of the cost"

**For Potential Team Members:**
- "Work at the executive level on AI and technology transformation"
- "Build and operate, not just advise"
- "Real impact and career growth"
- "Learn, lead, and advance"

---

## Website Structure

### Primary Pages
1. **Home** – Hero with value prop, services overview, credibility signals
2. **Services** – Detailed consulting services (AI, Cloud, Salesforce, Advisory)
3. **About** – Mission, leadership, what sets us apart
4. **Careers** – Career paths, open positions, what we look for
5. **Contact** – Get in touch form
6. **Blog** – Thought leadership and insights

### Design Principles
- **Motion matters** – Smooth scroll animations, fade-ins, parallax effects
- **Premium feel** – Polished interactions, subtle micro-animations
- **Fast & responsive** – Optimized performance, mobile-first
- **Modern aesthetics** – Clean layouts, generous whitespace, sophisticated typography
- **Groundbreaking UX** – Apple-level attention to detail, delightful interactions

### Tone Guidelines
- Lead with confidence, not arrogance
- Be direct and clear—no jargon
- Show expertise through specificity, not buzzwords
- Warm and approachable, but professional
- Action-oriented language

### Content Principles
- Short, punchy headlines
- Substance over flash
- Real outcomes, not vague promises
- Let the work speak for itself
- Visual storytelling over text walls

---

## Animation & Interaction Guidelines

### Scroll Animations
- Fade in elements as they enter viewport
- Slide up content with stagger delays
- Parallax backgrounds for depth
- Progress indicators for long pages

### Micro-interactions
- Smooth hover states with scale/transform
- Button press feedback
- Gradient animation on CTAs
- Loading states and transitions
- Card lift effects on hover

### Performance
- Use CSS transforms for 60fps animations
- Intersection Observer for scroll triggers
- Prefer opacity and transform over other properties
- Reduce motion for accessibility preferences

---

## Technical Notes for Developers

### CSS Variables Setup
```css
:root {
  --color-primary: #1e3a8a;
  --color-accent: #3b82f6;
  --color-text: #1e293b;
  --color-text-secondary: #64748b;
  --color-bg: #ffffff;
  --color-bg-alt: #f1f5f9;
  --border: #e2e8f0;

  --font-family: Arial, Helvetica, sans-serif;
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
}
```

### Responsive Considerations
- Mobile-first approach
- Fast-loading, optimized assets
- Smooth 60fps animations
- Accessible contrast ratios
- Touch-friendly interactions

### Animation Libraries (Optional)
- GSAP for complex sequences
- Framer Motion for React animations
- CSS-only where possible for performance

---

## Legal Entity

**Legal Name:** ForceX Consulting LLC
**DBA:** Force Multiply

---

## Contact

Email: ward@forcemultiplyconsulting.com

---

## Recent Updates

**December 2025:**
- Rebranded to focus on Fractional Chief AI, Technology & Innovation Officers
- Broadened target market beyond financial services to all industries
- Updated hero, services, and messaging across all pages
- Replaced "operating leverage" language with fractional leadership positioning
- Enhanced visual design with modern animations
- Improved user experience with scroll effects and micro-interactions
- Please git add commit and push whenever you finish working on something