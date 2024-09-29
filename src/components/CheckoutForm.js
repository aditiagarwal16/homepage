import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.log("Stripe.js has not loaded yet.");
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error("Payment error: ", error);
      alert(`Payment failed: ${error.message}`);
    } else {
      console.log("Payment successful", paymentMethod);
      alert("Payment processed successfully!");

      // Call the function to update the state to premium
      if (onPaymentSuccess) {
        onPaymentSuccess(); // Update premium status
      }

      // Add a slight delay before redirecting
      setTimeout(() => {
        console.log("Redirecting to premium...");
        navigate('/premium'); // Redirect to Premium Plan page
      }, 1000); // 1 second delay
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-card">
      <h2>Complete Your Payment</h2>
      <CardElement
        className="card-element"
        options={{
          hidePostalCode: true,
          style: {
            base: {
              fontSize: '16px',
              color: '#32325d',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#fa755a',
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe}>Pay</button>
    </form>
  );
};

export default CheckoutForm;
