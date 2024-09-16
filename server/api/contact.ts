// server/api/contact.ts
import { defineEventHandler, readBody } from 'h3';
import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { email, subject, message } = body;

  // Set up Nodemailer transport
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  }); 

  // Send the email
  const mailOptions = {
    from: email, // Sender's email
    to: 'contact@learnstone.ai', // Your email to receive the message
    subject: subject,
    text: message
  };

  console.log(mailOptions);

  try {
    await transporter.sendMail(mailOptions);
    return {
      status: 'success',
      message: 'Message sent successfully!'
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      status: 'error',
      message: 'Failed to send message.'
    };
  }
});
