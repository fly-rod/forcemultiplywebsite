import { NextRequest, NextResponse } from 'next/server';
import { savePost } from '@/lib/blog';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.title || !body.content) {
      return NextResponse.json(
        { error: 'Missing required fields: title and content' },
        { status: 400 }
      );
    }

    // Generate slug from title if not provided
    const slug = body.slug || body.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    // Prepare frontmatter
    const frontmatter = {
      title: body.title,
      description: body.description || body.excerpt || '',
      date: body.date || new Date().toISOString(),
      author: body.author || 'Force Multiply Consulting',
      image: body.image || body.featured_image || '',
      keywords: body.keywords || body.tags || [],
      published: body.published !== false,
    };

    // Save the post
    savePost(slug, frontmatter, body.content);

    return NextResponse.json(
      {
        success: true,
        slug,
        message: 'Blog post published successfully',
        url: `/blog/${slug}`
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json(
      { error: 'Failed to process webhook' },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to test webhook is working
export async function GET() {
  return NextResponse.json({
    message: 'Outrank webhook endpoint is active',
    endpoint: '/api/webhook/outrank',
    method: 'POST',
    requiredFields: ['title', 'content'],
    optionalFields: ['slug', 'description', 'date', 'author', 'image', 'keywords', 'published']
  });
}
