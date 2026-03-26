import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    await resend.emails.send({
      from: 'hello@mail.digitalsphereug.tech',
      to: email,
      subject: 'Welcome to DigitalSphereUg | Uganda-built Web3 community 🇺🇬',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h2 style="color: #1a1a2e;">Welcome to DigitalSphereUg 🇺🇬</h2>
          <p style="color: #444; font-size: 16px;">You just joined a student-led, Uganda-built Web3 community.</p>
          <p style="color: #444; font-size: 16px;">From now on, you will get practical learning resources, event announcements, and curated opportunities from Uganda's blockchain ecosystem.</p>
          <p style="color: #444; font-size: 16px;">No gatekeeping. No paywalls. Free, always.</p>
          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #eee;">
            <p style="color: #888; font-size: 14px;">— The DigitalSphereUg Team<br/>Student-led. Uganda-built. Web3-ready.</p>
          </div>
        </div>
      `
    });

    return res.status(200).json({ success: true, message: 'Subscribed successfully' });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
