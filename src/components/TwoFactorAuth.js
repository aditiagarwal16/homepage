import React, { useState } from 'react';
import axios from 'axios';

const TwoFactorAuth = ({ secret }) => {
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  const verifyOTP = async () => {
    try {
      const response = await axios.post('http://localhost:5000/verify-2fa', {
        token: otp,
        secret: secret, // This should come from the backend after login
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Invalid OTP');
    }
  };

  return (
    <div>
      <h3>Enter your OTP</h3>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter your OTP"
      />
      <button onClick={verifyOTP}>Verify OTP</button>
      <p>{message}</p>
    </div>
  );
};

export default TwoFactorAuth;
