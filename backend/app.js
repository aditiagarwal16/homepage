const express = require('express');
const speakeasy = require('speakeasy');
const qrcode = require('qrcode');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

let users = {}; // Store users with their OTP secrets for simplicity

app.post('/generate-2fa-secret', (req, res) => {
  const { email } = req.body;

  const secret = speakeasy.generateSecret({
    name: 'DEV@Deakin'
  });

  users[email] = secret.base32; // Save the secret for the user

  qrcode.toDataURL(secret.otpauth_url, (err, data) => {
    if (err) return res.status(500).json({ message: 'Error generating QR code' });

    res.json({
      secret: secret.base32,
      qrCode: data // Send back the QR code to the frontend
    });
  });
});

app.post('/verify-2fa', (req, res) => {
  const { email, token } = req.body;

  const secret = users[email]; // Retrieve the user's secret
  const verified = speakeasy.totp.verify({
    secret,
    encoding: 'base32',
    token
  });

  if (verified) {
    res.json({ message: 'OTP verified successfully!' });
  } else {
    res.status(400).json({ message: 'Invalid OTP' });
  }
});

module.exports = app;
