import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

// This is the public key of the stripe which is display when you create your account in the stripe
const PUBLIC_KEY =
  'pk_test_51MOxakSBrlmuoaW8d4n4QEG3OuCl7lPniqQbLnhuRYAC4fGR9EdVDpvum8sct7TvAy2cnJBoWYLoEMDYWo6JRPfu00vCnGACp0';
const stripeTestPromise = loadStripe(PUBLIC_KEY);

// This is the main function of the file
const PaymentScreen = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default PaymentScreen;
