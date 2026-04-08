import { db } from '@/lib/db';
import { sponsors } from '@/lib/schema';
import { NextRequest } from 'next/server';
import { Resend } from 'resend';

const VALID_OPTIONS = ['sidebar', 'module', 'homepage'];

const OPTION_LABELS: Record<string, string> = {
  sidebar:  'Sidebar Sponsor Card — $300/month',
  module:   'Module Sponsor — $500/month',
  homepage: 'Homepage Featured Sponsor Card — $600/month',
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { companyName, contactName, email, option, message } = body;

    // Validate
    if (!companyName || typeof companyName !== 'string' || companyName.trim().length < 2) {
      return Response.json({ error: 'Please enter your company name.' }, { status: 400 });
    }
    if (!contactName || typeof contactName !== 'string' || contactName.trim().length < 2) {
      return Response.json({ error: 'Please enter a contact name.' }, { status: 400 });
    }
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }
    if (!option || !VALID_OPTIONS.includes(option)) {
      return Response.json({ error: 'Please select a valid advertising option.' }, { status: 400 });
    }
    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return Response.json({ error: 'Please add a brief message.' }, { status: 400 });
    }

    // Save to database as inactive sponsor enquiry
    await db.insert(sponsors).values({
      companyName:  companyName.trim(),
      contactName:  contactName.trim(),
      contactEmail: email.trim().toLowerCase(),
      placement:    option,
      message:      message.trim(),
      active:       false,
    });

    // Notify admin via Resend — fire and forget
    sendAdvertEnquiryNotification({
      companyName:  companyName.trim(),
      contactName:  contactName.trim(),
      email:        email.trim().toLowerCase(),
      option,
      message:      message.trim(),
    }).catch(err => console.error('[email] Failed to send advert notification:', err));

    return Response.json({ ok: true });
  } catch (err) {
    console.error('[advertise]', err);
    return Response.json({ error: 'Server error. Please try again later.' }, { status: 500 });
  }
}

async function sendAdvertEnquiryNotification(data: {
  companyName: string;
  contactName: string;
  email: string;
  option: string;
  message: string;
}) {
  const adminEmail = process.env.ADMIN_EMAIL;
  if (!adminEmail) {
    console.warn('[email] ADMIN_EMAIL not set — skipping advert notification');
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn('[email] RESEND_API_KEY not set — skipping advert notification');
    return;
  }

  const resend = new Resend(apiKey);
  const FROM = process.env.RESEND_FROM_EMAIL || 'noreply@contact.npcollab.com.au';
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://npcollab.com';

  await resend.emails.send({
    from: FROM,
    to: adminEmail,
    subject: `New NPCollab sponsorship enquiry — ${data.companyName}`,
    html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: system-ui, sans-serif; color: #1A2B3C; max-width: 600px; margin: 0 auto; padding: 32px 20px;">
  <div style="background: #0B1829; border-radius: 8px 8px 0 0; padding: 24px 32px; border-bottom: 3px solid #C9A84C;">
    <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 700;">NPCollab — Sponsorship Enquiry</h1>
  </div>
  <div style="background: #ffffff; border: 1px solid #DDE3EC; border-top: none; border-radius: 0 0 8px 8px; padding: 28px 32px;">
    <p style="margin: 0 0 20px; font-size: 15px;">A new sponsorship enquiry has been received:</p>
    <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
      <tr>
        <td style="padding: 8px 0; color: #4A6080; width: 120px; font-weight: 500; vertical-align: top;">Company</td>
        <td style="padding: 8px 0; font-weight: 600;">${escapeHtml(data.companyName)}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #4A6080; font-weight: 500; vertical-align: top;">Contact</td>
        <td style="padding: 8px 0;">${escapeHtml(data.contactName)}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #4A6080; font-weight: 500; vertical-align: top;">Email</td>
        <td style="padding: 8px 0;">${escapeHtml(data.email)}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #4A6080; font-weight: 500; vertical-align: top;">Option</td>
        <td style="padding: 8px 0; font-weight: 600; color: #C9A84C;">${escapeHtml(OPTION_LABELS[data.option] || data.option)}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #4A6080; font-weight: 500; vertical-align: top;">Message</td>
        <td style="padding: 8px 0; line-height: 1.5;">${escapeHtml(data.message)}</td>
      </tr>
    </table>
    <a href="${SITE_URL}/admin" style="display: inline-block; background: #C9A84C; color: #0B1829; text-decoration: none; font-weight: 600; font-size: 14px; padding: 10px 24px; border-radius: 6px;">
      Manage in admin panel →
    </a>
    <p style="margin: 24px 0 0; font-size: 12px; color: #4A6080;">
      This notification was sent from NPCollab. The enquiry has been saved to the database.
    </p>
  </div>
</body>
</html>`,
  });
}
