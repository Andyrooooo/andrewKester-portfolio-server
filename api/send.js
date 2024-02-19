const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(dotenv.config());

app.post('/send', (req, res) => {
    const formData = req.body

    // Logic to send an email using Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    })
  
    const mailOptions = {
      from: formData.email,
      to: 'wheelbiter666@gmail.com',
      subject: 'New message from Portfolio Site',
      text: `From: ${formData.name}\n\n${formData.email}\n\nMessage:\n${formData.message}`,
    }
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'Email sent successfully' });
      }
    })
    console.log('Email to be sent:', mailOptions)
});

module.exports = app;