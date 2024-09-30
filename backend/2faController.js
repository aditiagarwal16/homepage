const speakeasy = require('speakeasy');
const qrcode = require('qrcode');
const nodemailer = require('nodemailer');

// Generate OTP and QR code (for Google Authenticator)
exports.generate2FASecret = (req, res) => {
  const secret = speakeasy.generateSecret({ length: 20 });

  qrcode.toDataURL(secret.otpauth_url, (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to generate QR code' });
    } else {
      res.status(200).json({
        secret: secret.base32,  // Save this secret to the database
        qrCode: data,           // Send this to user for scanning in Authenticator app
      });
    }
  });
};

// Verify OTP
exports.verify2FA = (req, res) => {
  const { token, secret } = req.body;
  
  const verified = speakeasy.totp.verify({
    secret: secret,
    encoding: 'base32',
    token: token,
  });

  if (verified) {
    res.status(200).json({ message: '2FA Verified' });
  } else {
    res.status(400).json({ message: 'Invalid OTP' });
  }
};
