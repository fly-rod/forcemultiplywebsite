# Resources Directory

This directory contains brand assets for the Force Multiply website.

## Directory Structure

```
public/resources/
├── logos/          # Company logos
├── images/         # General images for pages
└── assets/         # Other brand assets
```

## Adding Your Logo

### Step 1: Add your logo file

Place your logo in the `logos/` directory with one of these names:
- `logo.svg` (recommended - scalable vector)
- `logo.png` (alternative - use high resolution, 2x size)
- `logo-light.svg` / `logo-light.png` (optional - for dark backgrounds)

### Step 2: Recommended specifications

**For SVG (recommended):**
- Clean, optimized SVG
- Transparent background
- Viewbox properly set
- No embedded raster images

**For PNG:**
- Minimum 400px width (for retina displays, use 800px)
- Transparent background
- Optimized file size

### Step 3: The website will automatically use it

Once you add `logo.svg` or `logo.png`, the navigation and footer will automatically display your logo instead of the text "Force Multiply".

## Logo Guidelines (from CLAUDE.md)

Your logo should follow these brand principles:
- **Clean and minimal** - No clutter
- **Professional** - Reflects boutique consulting firm
- **Navy-based** - Use Deep Navy (#062e5a) or Blue-Gray (#1d3557)
- **Works on both light and dark backgrounds**

## File naming conventions

- `logo.svg` or `logo.png` - Main logo for light backgrounds
- `logo-light.svg` or `logo-light.png` - Logo for dark backgrounds (optional)
- `favicon.ico` - Browser favicon (16x16, 32x32, 48x48)
- `og-image.png` - Open Graph image for social sharing (1200x630px)

## Other images

### Hero/Background Images
Place in `images/` directory:
- Use clean, modern workplace photography
- Natural textures (wood, plants, neutral surfaces)
- Avoid loud colors, neon gradients, AI-brain imagery

### Brand Assets
Place in `assets/` directory:
- Brand guidelines PDF
- Color palette swatches
- Typography samples
- Any other brand materials

## Usage in Code

The logo is automatically loaded in:
- `/components/Navigation.tsx` - Header navigation
- `/components/Footer.tsx` - Footer branding
- `/app/layout.tsx` - Metadata and favicons

## Need Help?

If you need to customize logo sizing or placement, edit:
- `/components/Navigation.module.css` - Navigation logo styles
- `/components/Footer.module.css` - Footer logo styles
