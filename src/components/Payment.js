import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './Payment.css';

// Replace with your actual Stripe publishable key
const stripePromise = loadStripe('pk_test_51Q3crJRoQU4Qkaw9hlKEeLBVcRkv62hIxGHEMmoCUQY654KIjHYGuKKA0xZkSAKuN1Wfp7VO6hze0Ujd1mwvwl4H00jC5MkBdq');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  
  // Function to handle payment submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.log("Stripe.js has not loaded yet.");
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Send card details to Stripe for processing
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error("Payment error: ", error);
      alert("Payment failed. Please check your details.");
    } else {
      console.log("Payment successful", paymentMethod);
      alert("Payment processed successfully!"); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-card">
      <h2>Complete Your Payment</h2>
      <CardElement className="card-element" />
      <button type="submit" disabled={!stripe}>Pay</button>
    </form>
  );
};

const Payment = () => {
  return (
    <div className="payment-container">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
