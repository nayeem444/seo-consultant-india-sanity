// pages/api/send-email.js
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, company } = req.body;

    const msg = {
      to: ['nayeemdar3@gmail.com', 'nayeem@marketinglad.io'],
      from: 'contact-form@marketinglad.io', // This needs to be a verified sender
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Company:</strong> ${company}</p>`,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}