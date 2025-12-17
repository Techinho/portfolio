import type { VercelRequest, VercelResponse } from '@vercel/node';
import sgMail from '@sendgrid/mail';

// Set SendGrid API key from env
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const from = process.env.FROM_EMAIL || `no-reply@${process.env.VERCEL_URL || 'example.com'}`;
    const to = process.env.TO_EMAIL || process.env.FROM_EMAIL || 'ilyass@example.com';

    const html = `
      <h3>New contact message</h3>
      <p><strong>Name:</strong> ${String(name)}</p>
      <p><strong>Email:</strong> ${String(email)}</p>
      <p><strong>Subject:</strong> ${String(subject || 'Contact from portfolio')}</p>
      <hr/>
      <div>${String(message).replace(/\n/g, '<br/>')}</div>
    `;

    await sgMail.send({
      to,
      from,
      subject: `[Portfolio] ${subject || 'New contact message'}`,
      html,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('SendGrid error', err);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
