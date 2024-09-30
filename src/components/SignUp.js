import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Import the auth object from firebase.js
import './SignUp.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle sign-up form submission
  const handleSignUp = async (e) => {
    e.preventDefault();

    // Basic validation: Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Create a new user with email and password
      // eslint-disable-next-line no-unused-vars
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // If account creation is successful, redirect the user to login
      navigate('/login');
    } catch (error) {
      // Handle specific Firebase Auth error codes
      switch (error.code) {
        case 'auth/email-already-in-use':
          setError('Email is already in use.');
          break;
        case 'auth/invalid-email':
          setError('Invalid email format.');
          break;
        case 'auth/weak-password':
          setError('Password should be at least 6 characters.');
          break;
        default:
          setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="signup-page">
      <h2>Create a DEV@Deakin Account</h2>
      
      {/* Show error message if any */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        
        <button type="submit">Create</button>
      </form>
      
      <div className="login-redirect">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default SignUp;
