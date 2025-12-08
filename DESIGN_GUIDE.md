# Force Multiply Website Design Guide

## Brand Identity

**Name:** Force Multiply
**Tagline:** Clean. Confident. Fast.
**Positioning:** Strategic technology + AI partner for Salesforce, AI architecture, automation, and enterprise modernization

---

## Color Palette

### Primary Colors
```css
--primary: #1a1a1a          /* Deep charcoal - main text and dark sections */
--primary-light: #2d2d2d    /* Lighter charcoal for gradients */
```

### Accent Colors
```css
--accent: #d4a574           /* Warm bronze/wood - buttons, highlights, CTAs */
--accent-dark: #b8935f      /* Darker bronze for hover states */
```

### Text Colors
```css
--text-primary: #1a1a1a     /* Main text */
--text-secondary: #666666   /* Secondary text, body copy */
--text-muted: #999999       /* Tertiary text, labels */
```

### Background Colors
```css
--bg-white: #ffffff         /* Pure white for cards and containers */
--bg-warm: #faf8f5         /* Warm off-white for sections */
--bg-light: #f5f5f5        /* Light gray alternative */
```

### Utility Colors
```css
--border: #e8e8e8          /* Subtle borders */
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.04)
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.08)
--shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.12)
```

---

## Typography

### Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

### Headings
- **H1:** 3.5rem (56px), weight 600, letter-spacing -0.02em
- **H2:** 2.5rem (40px), weight 600, letter-spacing -0.02em
- **H3:** 1.75rem (28px), weight 600, letter-spacing -0.02em

### Body Text
- **Base:** 1.125rem (18px), line-height 1.7
- **Secondary:** 1rem (16px), line-height 1.6

### Mobile Adjustments
- **H1:** 2.5rem (40px)
- **H2:** 2rem (32px)
- **Body:** 1rem (16px)

---

## Design Principles

### 1. Minimalist & Modern
- Clean layouts with generous whitespace
- Subtle shadows and depth
- No clutter, every element has purpose

### 2. Warm & Sophisticated
- Warm accent colors (bronze/wood tones)
- Inviting but professional
- Premium feel without being cold

### 3. Fast & Direct
- Clear hierarchy
- Scannable content
- Direct CTAs without fluff

### 4. Cohesive Blur Effect
- Subtle backdrop blur on navigation
- Glass morphism touches on hover states
- Modern, polished aesthetic

---

## Component Patterns

### Cards
```css
background: var(--bg-white);
border-radius: 8px;
box-shadow: var(--shadow-sm);
border: 1px solid var(--border);
transition: all 0.3s ease;
```

**On Hover:**
```css
transform: translateY(-4px);
box-shadow: var(--shadow-md);
border-color: var(--accent);
```

### Buttons (Primary)
```css
background: var(--accent);
color: white;
padding: 1rem 2.5rem;
border-radius: 6px;
font-weight: 600;
font-size: 1rem;
transition: all 0.2s ease;
```

**On Hover:**
```css
background: var(--accent-dark);
transform: translateY(-1px);
box-shadow: 0 8px 20px rgba(212, 165, 116, 0.3);
```

### Buttons (Secondary)
```css
background: transparent;
color: white;
padding: 1rem 2.5rem;
border-radius: 6px;
border: 2px solid rgba(255, 255, 255, 0.3);
```

**On Hover:**
```css
border-color: rgba(255, 255, 255, 0.6);
background: rgba(255, 255, 255, 0.05);
```

---

## Site Structure

### Pages
1. **Home** - Hero, value props, problems we solve, CTA
2. **Services** - 5 core services with detailed breakdowns
3. **How We Work** - 4-phase methodology (Assess → Align → Architect → Activate)
4. **About** - Origin story, Ward's background, philosophy, values
5. **Contact** - Simple form with clear next steps

### Navigation
- Home
- Services
- How We Work
- About
- Contact

---

## Hero Image Concepts

### Concept 1: "Modern Workspace with Natural Elements"
**Description:** Overhead shot of a clean, minimal workspace with:
- High-end laptop showing architecture diagrams or code
- Natural wood desk surface (connects to accent color)
- Soft natural lighting
- Subtle technology elements (tablet, phone)
- Warm, inviting but professional

**Mood:** Sophisticated, productive, human

### Concept 2: "Abstract Technology & Nature Fusion"
**Description:** Abstract composition featuring:
- Blurred bokeh background with warm tones
- Geometric tech elements (wireframes, nodes, connections)
- Natural textures (wood grain overlay, soft focus)
- Depth of field creating modern "cohesive blur"
- Accent colors prominent

**Mood:** Modern, strategic, premium

### Concept 3: "Team Collaboration (Blurred Focus)"
**Description:** Artistic shot of a team working together:
- Shallow depth of field - figures slightly out of focus
- Focus on whiteboard with architecture diagrams
- Warm lighting, natural setting
- Conveys "multiplying the team" without stock photo cliché
- Human element without being too literal

**Mood:** Collaborative, strategic, authentic

---

## Image Style Guide

### Photography Direction
- **Lighting:** Natural, warm, soft shadows
- **Composition:** Clean, minimal, generous negative space
- **Focus:** Selective focus with depth of field
- **Textures:** Wood, metal, glass - premium materials
- **Colors:** Warm tones that complement accent colors
- **Avoid:** Overly corporate stock photos, blue tones, cluttered backgrounds

### Iconography
- Simple line icons
- 2px stroke weight
- Accent color for active/hover states
- Minimalist, geometric

---

## Tone of Voice

### Writing Style
- **Short sentences.** No jargon.
- **Active voice.** Direct statements.
- **Honest.** No buzzwords or fluff.
- **Confident.** Not arrogant.

### Examples
✅ "We multiply the force you already have."
✅ "Interviews, not workshops."
✅ "We ship, not deck."

❌ "Leveraging synergistic paradigms to optimize..."
❌ "Our innovative solutions framework..."
❌ "Best-in-class enterprise transformation..."

---

## Accessibility

### Contrast Ratios
- Text on white: AAA (7:1+)
- Accent on dark: AA (4.5:1+)
- Interactive elements: Clear focus states

### Focus States
- 2px solid accent color outline
- 2px offset for visibility
- Never remove outline

### Responsive Design
- Mobile-first approach
- Breakpoint: 768px
- Touch targets minimum 44x44px
- Readable text sizes on all devices

---

## Performance Optimization

### Images
- WebP format with fallbacks
- Lazy loading below fold
- Responsive srcset for different viewports
- Max 200kb per hero image

### Loading Strategy
- Critical CSS inline
- Defer non-critical JavaScript
- Preload hero fonts
- Optimize for Core Web Vitals

---

## Next Steps

1. **Deploy to Vercel** - Push to GitHub and connect to Vercel for automatic deployment
2. **Custom Domain** - Configure forcemultiply.com (or desired domain)
3. **Analytics** - Add Plausible or privacy-focused analytics
4. **Email Integration** - Connect contact form to email service (EmailJS, SendGrid, or Resend)
5. **SEO Optimization** - Add meta descriptions, Open Graph tags, schema markup
6. **Hero Images** - Source or create professional photography based on concepts above
7. **Performance Audit** - Run Lighthouse audit and optimize
8. **Accessibility Review** - Test with screen readers and keyboard navigation

---

## Additional Enhancements (Future)

- **Case Studies** - Add a case studies/work page when you have client examples
- **Blog** - Technical blog for thought leadership (optional)
- **Resources** - Downloadable guides/frameworks
- **Testimonials** - Client quotes with photos
- **Video** - Short intro video on homepage (30-60 seconds)
- **Live Chat** - Consider adding Intercom or similar
- **Scheduling Integration** - Calendly embed for booking calls

---

*Generated: 2025-12-08*
