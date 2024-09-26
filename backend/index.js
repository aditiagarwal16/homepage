const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();

app.use(cors()); // Enable CORS to allow requests from the React frontend
app.use(express.json()); // Parse incoming JSON requests

// Create a route to handle email subscription
app.post('/subscribe', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send('Email is required');
  }

  // Nodemailer setup to send welcome email
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'aditiagarwall1603@gmail.com', // Replace with your email
      pass: 'gjva ujcv gfxo grre', // Replace with your email password or app password
    },
  });

  let mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Welcome to DEV@Deakin',
    text: 'Thank you for subscribing to our newsletter!',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending email');
    } else {
      return res.status(200).send(`Welcome email sent to ${email}`);
    }
  });
});

// Start the server
app.listen(5002, () => {
  console.log('Server running on port 5002');
});
