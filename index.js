import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import nodemailer from 'nodemailer'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

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
    
})

app.get('/get', (req, res) => {
    res.send({"message": "hello World"});
    console.log('working')
    });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});