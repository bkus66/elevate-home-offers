import { NextResponse } from 'next/server';
import { z } from 'zod';

const leadSchema = z.object({
  address: z.string().min(5, 'Property address is required'),
  city: z.string().min(2, 'City is required'),
  state: z.string().default('TX'),
  zip: z.string().regex(/^\d{5}$/, 'Valid 5-digit ZIP code is required'),
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  phone: z.string().regex(/^[\d\s\-\(\)\+]{10,}$/, 'Valid phone number is required'),
  email: z.string().email('Valid email address is required'),
  situation: z.string().optional(),
  source: z.string().default('website'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = leadSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed. Please check your form entries.',
          errors: result.error.errors.map((e) => ({
            field: e.path.join('.'),
            message: e.message,
          })),
        },
        { status: 400 }
      );
    }

    const lead = result.data;

    // Log the lead to console (for development)
    console.log('[LEAD RECEIVED]', {
      timestamp: new Date().toISOString(),
      name: `${lead.firstName} ${lead.lastName}`,
      email: lead.email,
      phone: lead.phone,
      property: `${lead.address}, ${lead.city}, ${lead.state} ${lead.zip}`,
      situation: lead.situation || 'Not provided',
      source: lead.source,
    });

    // TODO: Integrate with CRM (e.g., HubSpot, Salesforce, GoHighLevel)
    // Example HubSpot integration:
    // await fetch('https://api.hubapi.com/contacts/v1/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}`,
    //   },
    //   body: JSON.stringify({
    //     properties: [
    //       { property: 'firstname', value: lead.firstName },
    //       { property: 'lastname', value: lead.lastName },
    //       { property: 'email', value: lead.email },
    //       { property: 'phone', value: lead.phone },
    //       { property: 'address', value: lead.address },
    //       { property: 'city', value: lead.city },
    //       { property: 'zip', value: lead.zip },
    //     ],
    //   }),
    // });

    // TODO: Send notification email to team
    // Example using Resend or SendGrid:
    // await sendEmail({
    //   to: process.env.NOTIFICATION_EMAIL,
    //   subject: `New Lead: ${lead.firstName} ${lead.lastName} — ${lead.city}, TX`,
    //   body: `New cash offer request received...`,
    // });

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! We've received your request and will contact you within 24 hours with a cash offer.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[LEAD API ERROR]', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred. Please try again or call us directly.',
      },
      { status: 500 }
    );
  }
}
