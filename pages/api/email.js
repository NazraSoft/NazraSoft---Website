// Import the nodemailer library for sending emails
const nodemailer = require('nodemailer');


// Set up the email transport using SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 587,
  secure: false,
  auth: {
    user: 'username@example.com',
    pass: 'password'
  }
});


export default function handler(req, res) {

    const mailOptions = {
        from: 'Sender Name <sender@example.com>',
        to: 'recipient@example.com',
        subject: 'Hello!',
        text: 'Hello, this is a customized email message.'
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
        } else {
            res.status(200).json(`Email sent: ${info.response}`)
        }
      });
  }

