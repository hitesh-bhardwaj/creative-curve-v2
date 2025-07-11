import { Resend } from 'resend';
import ContactDetails from '../../components/EmailTemplate/ContactDetails';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    const { data, error } = await resend.emails.send({
      from: 'Hitesh <onboarding@resend.dev>',
      to: ['hitesh@weareenigma.com'],
      subject: "New Lead: New Contact Form Submission",
      react: ContactDetails({ 
        userName: name,
        userEmail: email,
        userNumber: phone,
        userMessage: message,
        userSubject: subject,
      }),
    });

    if (error) {
      res.status(400).json({ error });
    }

    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ error });
  }
}