import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


console.log('key-', process.env);
const PUBLIC_KEY =
  'pk_test_51MOxakSBrlmuoaW8d4n4QEG3OuCl7lPniqQbLnhuRYAC4fGR9EdVDpvum8sct7TvAy2cnJBoWYLoEMDYWo6JRPfu00vCnGACp0';
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const PaymentScreen = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default PaymentScreen
