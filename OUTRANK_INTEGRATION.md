# Outrank Integration Guide

Your Force Multiply website is now set up to receive blog posts directly from Outrank via webhook.

## Overview

When you publish content from Outrank, it will automatically create a new blog post on your website. The blog system includes:

- SEO-optimized pages with meta tags
- Structured data (JSON-LD) for better search visibility
- Automatic sitemap generation
- OpenGraph and Twitter Card support
- Responsive design

## Setting Up Outrank Webhook

### 1. Deploy Your Site to Vercel

First, deploy your site to get a live URL:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

Note your production URL (e.g., `https://your-site.vercel.app`)

### 2. Configure Outrank

In your Outrank dashboard:

1. Go to **Integrations** or **Publishing Settings**
2. Select **Webhook** as your publishing destination
3. Enter your webhook URL:
   ```
   https://your-site.vercel.app/api/webhook/outrank
   ```
4. Set the method to **POST**

### 3. Webhook Payload Format

Outrank should send a JSON payload with the following structure:

**Required Fields:**
- `title` - The blog post title
- `content` - The blog post content (supports Markdown)

**Optional Fields:**
- `slug` - URL-friendly slug (auto-generated from title if not provided)
- `description` - Meta description for SEO
- `date` - Publication date (ISO format, defaults to current date)
- `author` - Author name (defaults to "Force Multiply Consulting")
- `image` - Featured image URL
- `keywords` - Array of keywords/tags for SEO
- `published` - Boolean (defaults to `true`)

**Example Payload:**
```json
{
  "title": "5 Strategies for Business Growth",
  "slug": "5-strategies-business-growth",
  "description": "Discover proven strategies to accelerate your business growth",
  "content": "## Introduction\n\nBusiness growth requires...",
  "date": "2025-12-08T00:00:00.000Z",
  "author": "Force Multiply Consulting",
  "image": "https://example.com/image.jpg",
  "keywords": ["business growth", "strategy", "consulting"],
  "published": true
}
```

### 4. Response

On success, the webhook returns:
```json
{
  "success": true,
  "slug": "5-strategies-business-growth",
  "message": "Blog post published successfully",
  "url": "/blog/5-strategies-business-growth"
}
```

## Testing the Webhook

### Test the Endpoint

You can test if the webhook is active:

```bash
curl https://your-site.vercel.app/api/webhook/outrank
```

### Test Publishing a Post

```bash
curl -X POST https://your-site.vercel.app/api/webhook/outrank \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Test Post",
    "content": "This is a test post from Outrank.",
    "description": "Testing the webhook integration"
  }'
```

## How Blog Posts are Stored

Blog posts are stored as Markdown files in `/content/blog/`:
- Each post is a `.md` file with frontmatter
- Frontmatter contains metadata (title, date, keywords, etc.)
- Content is in Markdown format
- Files are named using the slug (e.g., `my-post-title.md`)

## SEO Features Included

✅ **Meta Tags** - Title, description, keywords
✅ **OpenGraph** - Social media sharing optimization
✅ **Twitter Cards** - Twitter-specific metadata
✅ **JSON-LD** - Structured data for search engines
✅ **Sitemap** - Auto-generated at `/sitemap.xml`
✅ **Robots.txt** - Search engine directives at `/robots.txt`
✅ **Semantic HTML** - Proper article structure
✅ **Image Alt Tags** - Accessibility and SEO

## Workflow

1. **Write & Optimize** - Create content in Outrank with SEO optimization
2. **Publish** - Click publish in Outrank
3. **Webhook Triggered** - Outrank sends data to your webhook
4. **Post Created** - Blog post file is created automatically
5. **Site Updated** - Next.js regenerates pages with new content
6. **Live** - Post appears at `https://your-site.com/blog/[slug]`

## Important Notes

### Redeployment
When Outrank creates a new blog post via webhook, the file is added to your repository. For the changes to appear on your live site:

**Option 1: Auto-deploy with Vercel (Recommended)**
- Connect your GitHub repo to Vercel
- Set up auto-deployment
- After webhook creates post, commit and push:
  ```bash
  git add content/blog
  git commit -m "New blog post from Outrank"
  git push
  ```
- Vercel auto-deploys the changes

**Option 2: Manual webhook handling**
- Modify the webhook to trigger a Vercel rebuild
- Add a deploy hook in Vercel settings
- Call the deploy hook after saving the post

### Environment Variables

Add to your `.env.local` (and Vercel settings):

```bash
NEXT_PUBLIC_SITE_URL=https://your-site.com
```

This ensures correct URLs in sitemap and metadata.

## Customization

### Changing Blog Styles
Edit these files:
- `/app/blog/page.module.css` - Blog listing page
- `/app/blog/[slug]/page.module.css` - Individual post pages

### Modifying SEO
Edit metadata in:
- `/app/blog/[slug]/page.tsx` - Individual post SEO
- `/app/sitemap.ts` - Sitemap configuration

### Adding Features
- Comments: Add Disqus, Giscus, or similar
- Analytics: Add Google Analytics or Plausible
- Newsletter: Integrate email signup
- Related Posts: Add recommendation logic

## Support

For questions about:
- **Outrank setup**: Contact Outrank support
- **Website customization**: Check Next.js documentation
- **Deployment issues**: Check Vercel documentation

## Next Steps

1. Deploy your site to Vercel
2. Configure the webhook in Outrank
3. Test with a sample post
4. Start publishing optimized content!

Your blog is ready to help you rank better and attract more customers.
