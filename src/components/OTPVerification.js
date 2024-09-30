import React, { useState } from 'react';
import axios from 'axios';
import './OTPVerification.css';

const OTPVerification = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [isOTPSent, setIsOTPSent] = useState(false);

  // Function to send OTP
  const sendOTP = async () => {
    try {
      const response = await axios.post('http://localhost:5002/send-otp', { email });
      if (response.status === 200) {
        setMessage('OTP sent successfully to your email!');
        setIsOTPSent(true);
      }
    } catch (error) {
      setMessage('Error sending OTP');
      console.error(error);
    }
  };

  // Function to verify OTP
  const verifyOTP = async () => {
    try {
      const response = await axios.post('http://localhost:5002/verify-otp', { otp });
      if (response.status === 200) {
        setMessage('OTP verified successfully! You are logged in.');
      }
    } catch (error) {
      setMessage('OTP verified failed!');
      console.error(error);
    }
  };

  return (
    <div className="otp-verification-container">
      <h2>OTP Verification</h2>
      <p>Enter the OTP sent to your email:</p>
      
      {/* Email Input and Send OTP Button */}
      {!isOTPSent && (
        <div className="email-container">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button onClick={sendOTP} className="btn-primary">Send OTP</button>
        </div>
      )}

      {/* OTP Input and Verify Button */}
      {isOTPSent && (
        <div className="otp-container">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button onClick={verifyOTP} className="btn-primary">Verify OTP</button>
        </div>
      )}

      {/* Display message */}
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default OTPVerification;
