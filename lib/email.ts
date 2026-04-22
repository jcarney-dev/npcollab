import { Resend } from 'resend';

function getResend(): Resend {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error('RESEND_API_KEY is not set');
  return new Resend(key);
}

const FROM = process.env.RESEND_FROM_EMAIL || 'noreply@contact.npcollab.com.au';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://npcollab.com';

/** Notify Jason that a new access request has come in. */
export async function sendRequestNotification(data: {
  name: string;
  email: string;
  role: string;
  reason: string;
}) {
  const adminEmail = process.env.ADMIN_EMAIL;
  if (!adminEmail) {
    console.warn('[email] ADMIN_EMAIL not set — skipping request notification');
    return;
  }

  const resend = getResend();

  await resend.emails.send({
    from: FROM,
    to: adminEmail,
    subject: `New NPCollab access request — ${data.name}`,
    html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: system-ui, sans-serif; color: #1A2B3C; max-width: 600px; margin: 0 auto; padding: 32px 20px;">
  <div style="background: #0B1829; border-radius: 8px 8px 0 0; padding: 24px 32px; border-bottom: 3px solid #C9A84C;">
    <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 700;">NPCollab — New Access Request</h1>
  </div>
  <div style="background: #ffffff; border: 1px solid #DDE3EC; border-top: none; border-radius: 0 0 8px 8px; padding: 28px 32px;">
    <p style="margin: 0 0 20px; font-size: 15px;">A new access request has been submitted:</p>
    <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
      <tr>
        <td style="padding: 8px 0; color: #4A6080; width: 90px; font-weight: 500; vertical-align: top;">Name</td>
        <td style="padding: 8px 0; font-weight: 600;">${escapeHtml(data.name)}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #4A6080; font-weight: 500; vertical-align: top;">Email</td>
        <td style="padding: 8px 0;">${escapeHtml(data.email)}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #4A6080; font-weight: 500; vertical-align: top;">Role</td>
        <td style="padding: 8px 0;">${escapeHtml(data.role)}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #4A6080; font-weight: 500; vertical-align: top;">Reason</td>
        <td style="padding: 8px 0; line-height: 1.5;">${escapeHtml(data.reason)}</td>
      </tr>
    </table>
    <a href="${SITE_URL}/admin" style="display: inline-block; background: #C9A84C; color: #0B1829; text-decoration: none; font-weight: 600; font-size: 14px; padding: 10px 24px; border-radius: 6px;">
      Review in admin panel &rarr;
    </a>
    <p style="margin: 24px 0 0; font-size: 12px; color: #4A6080;">
      This notification was sent from NPCollab. You are receiving this because you are the site administrator.
    </p>
  </div>
</body>
</html>`,
  });
}

/** Send approval email with access code to the new user. */
export async function sendApprovalEmail(data: {
  name: string;
  email: string;
  accessCode: string;
}) {
  const resend = getResend();

  await resend.emails.send({
    from: FROM,
    to: data.email,
    subject: 'Your NPCollab access code',
    html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: system-ui, sans-serif; color: #1A2B3C; max-width: 600px; margin: 0 auto; padding: 32px 20px;">
  <div style="background: #0B1829; border-radius: 8px 8px 0 0; padding: 24px 32px; border-bottom: 3px solid #C9A84C;">
    <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 700;">NPCollab</h1>
  </div>
  <div style="background: #ffffff; border: 1px solid #DDE3EC; border-top: none; border-radius: 0 0 8px 8px; padding: 28px 32px;">
    <p style="margin: 0 0 16px; font-size: 15px;">Hi ${escapeHtml(data.name)},</p>
    <p style="margin: 0 0 20px; font-size: 15px; line-height: 1.6;">
      Your request to access NPCollab has been approved. Here is your personal access code:
    </p>
    <div style="background: #FBF3DF; border: 1.5px solid #C9A84C; border-radius: 8px; padding: 20px 24px; text-align: center; margin-bottom: 24px;">
      <p style="margin: 0 0 4px; font-size: 12px; color: #4A6080; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 600;">Your access code</p>
      <p style="margin: 0; font-size: 28px; font-weight: 700; color: #0B1829; letter-spacing: 0.1em; font-family: monospace;">${escapeHtml(data.accessCode)}</p>
    </div>
    <p style="margin: 0 0 24px; font-size: 14px; color: #4A6080; line-height: 1.6;">
      Keep this code safe &mdash; it&rsquo;s your personal access to NPCollab. Please do not share it with others.
    </p>
    <a href="${SITE_URL}/login" style="display: inline-block; background: #0B1829; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 14px; padding: 12px 28px; border-radius: 6px;">
      Log in to NPCollab &rarr;
    </a>
    <p style="margin: 28px 0 0; font-size: 13px; color: #4A6080; line-height: 1.5;">
      NPCollab is a free educational resource for Australian Nurse Practitioners. All content is for educational purposes only. Always apply your own clinical judgement.
    </p>
  </div>
</body>
</html>`,
  });
}

/** Send a mentoring introduction request email to the mentor. */
export async function sendMentoringIntroduction(data: {
  mentorName:        string;
  mentorEmail:       string;
  menteeName:        string;
  menteeEmail:       string;
  menteeRole:        string;
  menteeCredentials: string;
  message:           string;
}) {
  const resend = getResend();

  await resend.emails.send({
    from: FROM,
    to: data.mentorEmail,
    subject: `NPCollab Mentoring — Introduction Request from ${data.menteeName}`,
    html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: system-ui, sans-serif; color: #1A2B3C; max-width: 600px; margin: 0 auto; padding: 32px 20px;">
  <div style="background: #0B1829; border-radius: 8px 8px 0 0; padding: 24px 32px; border-bottom: 3px solid #C9A84C;">
    <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 700;">NPCollab Mentoring &mdash; Introduction Request</h1>
  </div>
  <div style="background: #ffffff; border: 1px solid #DDE3EC; border-top: none; border-radius: 0 0 8px 8px; padding: 28px 32px;">
    <p style="margin: 0 0 16px; font-size: 15px;">Hi ${escapeHtml(data.mentorName)},</p>
    <p style="margin: 0 0 20px; font-size: 15px; line-height: 1.6;">
      You have received a mentoring introduction request through NPCollab.
    </p>
    <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
      <tr>
        <td style="padding: 8px 0; color: #4A6080; width: 110px; font-weight: 500; vertical-align: top;">From</td>
        <td style="padding: 8px 0; font-weight: 600;">${escapeHtml(data.menteeName)}</td>
      </tr>
      ${data.menteeCredentials ? `<tr>
        <td style="padding: 8px 0; color: #4A6080; font-weight: 500; vertical-align: top;">Credentials</td>
        <td style="padding: 8px 0;">${escapeHtml(data.menteeCredentials)}</td>
      </tr>` : ''}
      ${data.menteeRole ? `<tr>
        <td style="padding: 8px 0; color: #4A6080; font-weight: 500; vertical-align: top;">Current role</td>
        <td style="padding: 8px 0;">${escapeHtml(data.menteeRole)}</td>
      </tr>` : ''}
      <tr>
        <td style="padding: 8px 0; color: #4A6080; font-weight: 500; vertical-align: top;">Reply to</td>
        <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(data.menteeEmail)}" style="color: #C9A84C;">${escapeHtml(data.menteeEmail)}</a></td>
      </tr>
    </table>
    <div style="background: #FBF3DF; border: 1.5px solid #C9A84C; border-radius: 8px; padding: 20px 24px; margin-bottom: 24px;">
      <p style="margin: 0 0 6px; font-size: 12px; color: #4A6080; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 600;">Message</p>
      <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #1A2B3C;">${escapeHtml(data.message)}</p>
    </div>
    <p style="margin: 0 0 24px; font-size: 14px; color: #4A6080; line-height: 1.6;">
      To respond, reply directly to ${escapeHtml(data.menteeName)} at
      <a href="mailto:${escapeHtml(data.menteeEmail)}" style="color: #C9A84C;">${escapeHtml(data.menteeEmail)}</a>.
      NPCollab facilitates introductions only and does not monitor or guarantee mentoring relationships.
    </p>
    <hr style="border: none; border-top: 1px solid #DDE3EC; margin: 0 0 20px;">
    <p style="margin: 0; font-size: 12px; color: #4A6080;">
      NPCollab &mdash; Free education for Australian Nurse Practitioners.<br>
      You are receiving this because you are registered as a mentor on NPCollab.
      To update or deactivate your profile, visit <a href="${SITE_URL}/mentoring/register" style="color: #C9A84C;">your mentor profile</a>.
    </p>
  </div>
</body>
</html>`,
  });
}

/** Send a "get in touch" contact form submission to the site admin. */
export async function sendContactEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
  source: 'about' | 'support' | 'contact';
}) {
  const adminEmail = process.env.ADMIN_EMAIL;
  if (!adminEmail) {
    console.warn('[email] ADMIN_EMAIL not set — skipping contact notification');
    return;
  }

  const resend = getResend();
  const sourceLabel = data.source === 'about' ? 'About page' : data.source === 'support' ? 'Support page' : 'Contact page';

  await resend.emails.send({
    from: FROM,
    to: adminEmail,
    replyTo: data.email,
    subject: `NPCollab contact — ${data.subject} (via ${sourceLabel})`,
    html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: system-ui, sans-serif; color: #1A2B3C; max-width: 600px; margin: 0 auto; padding: 32px 20px;">
  <div style="background: #0B1829; border-radius: 8px 8px 0 0; padding: 24px 32px; border-bottom: 3px solid #C9A84C;">
    <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 700;">NPCollab — Contact Form</h1>
    <p style="margin: 6px 0 0; color: #a0b0c0; font-size: 13px;">Submitted via the ${escapeHtml(sourceLabel)}</p>
  </div>
  <div style="background: #ffffff; border: 1px solid #DDE3EC; border-top: none; border-radius: 0 0 8px 8px; padding: 28px 32px;">
    <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
      <tr>
        <td style="padding: 8px 0; color: #4A6080; width: 80px; font-weight: 500; vertical-align: top;">Name</td>
        <td style="padding: 8px 0; font-weight: 600;">${escapeHtml(data.name)}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #4A6080; font-weight: 500; vertical-align: top;">Email</td>
        <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(data.email)}" style="color: #C9A84C;">${escapeHtml(data.email)}</a></td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #4A6080; font-weight: 500; vertical-align: top;">Subject</td>
        <td style="padding: 8px 0;">${escapeHtml(data.subject)}</td>
      </tr>
    </table>
    <div style="background: #FBF3DF; border: 1.5px solid #C9A84C; border-radius: 8px; padding: 20px 24px; margin-bottom: 24px;">
      <p style="margin: 0 0 6px; font-size: 12px; color: #4A6080; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 600;">Message</p>
      <p style="margin: 0; font-size: 14px; line-height: 1.7; color: #1A2B3C; white-space: pre-wrap;">${escapeHtml(data.message)}</p>
    </div>
    <p style="margin: 0; font-size: 12px; color: #4A6080;">
      Reply directly to this email to respond to ${escapeHtml(data.name)}.
    </p>
  </div>
</body>
</html>`,
  });
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
