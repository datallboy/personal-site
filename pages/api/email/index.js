const nodemailer = require('nodemailer');
const Joi = require('joi');
const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
} = require('@/config/index');

const schema = Joi.object().keys({
  fullname: Joi.string().min(3).max(50).required(),
  email: Joi.string().required().email(),
  subject: Joi.string().min(1).max(50).required(),
  message: Joi.string().min(1).max(500).required(),
});

export default async (req, res) => {
  if (req.method === 'POST') {
    const { fullname, email, subject, message } = req.body;
    try {
      await schema.validateAsync(req.body, {
        abortEarly: false,
      });
    } catch (error) {
      console.log(error);
      return res
        .status(error.statusCode || 500)
        .json({ success: false, error });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: true,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const html = `<html lang="en">
    <head>
      <meta charset="utf-8">
    </head>
    <body>
      <div class="container" style="margin-left: 20px;margin-right: 20px;">
        <h3>You've got a new mail from ${fullname}, their email is: ✉️${email} </h3>
        <div style="font-size: 16px;">
          <p>Message:</p>
          <p>${message}</p>
        </div>
      </div>
    </body>
    </html>`;

    try {
      await transporter.sendMail({
        from: SMTP_USER,
        to: 'contact@datallboy.com',
        subject: `[Professional Inquiry from Website] : ${subject}`,
        text: `You've got a new mail from ${fullname}, their email is: ${email}
        Message:
        ${message}
        `,
        html,
      });
    } catch (error) {
      console.log(error);
      return res
        .status(error.statusCode || 500)
        .json({ success: false, error });
    }

    return res.status(200).json({ success: true });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
