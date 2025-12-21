import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Check for RESEND_API_KEY environment variable
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      // Log to console that email sending is not configured
      console.log('📧 Contact form submission (email not configured):');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Company:', company || 'N/A');
      console.log('Phone:', phone || 'N/A');
      console.log('Service:', service || 'N/A');
      console.log('Message:', message);
      console.log('\nTo enable email sending, add RESEND_API_KEY to your .env.local file');
      console.log('Get your API key at: https://resend.com');

      return NextResponse.json({
        success: true,
        message: 'Form submitted successfully (logged to console - email not configured)',
      });
    }

    // Send email using Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'Force Multiply Contact <onboarding@resend.dev>', // You'll update this with your verified domain
        to: 'ward@forcemultiply.com',
        reply_to: email,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          ${service ? `<p><strong>Service Interest:</strong> ${service}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Resend API error:', error);
      throw new Error('Failed to send email');
    }

    const data = await response.json();
    console.log('✅ Email sent successfully:', data);

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or email directly at ward@forcemultiply.com' },
      { status: 500 }
    );
  }
}
