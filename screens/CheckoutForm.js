import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import axios from 'axios';
import {
  StripeProvider,
  CardField,
  useStripe,
} from '@stripe/stripe-react-native';

const PaymentScreen = () => {
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentId, setPaymentId] = useState(null);
  const [cardToken, setCardToken] = useState(null);
  const [processingPayment, setProcessingPayment] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const {confirmPayment} = useStripe();

  const handlePayment = async () => {
    setProcessingPayment(true);

    try {
      const response = await axios.post(
        'http://10.0.2.2:3000/ecommerce/paymentDetails',
      );
      const paymentData = response.data.result;
      setPaymentId(paymentData._id);
    } catch (error) {
      console.error(error);
    }

    const {error, paymentMethod} = await confirmPayment(cardToken, {
      type: 'Card',
    });

    if (error) {
      console.error(error);
      setProcessingPayment(false);
    } else {
      setProcessingPayment(false);
      setPaymentSuccess(true);
    }
  };
  const handleCardFieldChange = ({complete, valid, values}) => {
    if (complete && valid) {
      setCardToken(values);
    }
  };
  return (
    <StripeProvider publishableKey="pk_test_51MOxakSBrlmuoaW8d4n4QEG3OuCl7lPniqQbLnhuRYAC4fGR9EdVDpvum8sct7TvAy2cnJBoWYLoEMDYWo6JRPfu00vCnGACp0">
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {paymentSuccess ? (
          <Text>Your payment was successful!</Text>
        ) : (
          <>
            <TextInput
              placeholder="Enter payment amount"
              value={paymentAmount}
              onChangeText={setPaymentAmount}
              keyboardType="numeric"
              style={{marginBottom: 16}}
            />
            <CardField
              postalCodeEnabled={false}
              onCardChange={handleCardFieldChange}
              style={{width: '100%', height: 50, marginBottom: 16}}
            />
            <TouchableOpacity
              onPress={handlePayment}
              disabled={processingPayment}
              style={{
                backgroundColor: processingPayment ? '#ccc' : '#007bff',
                paddingVertical: 8,
                paddingHorizontal: 16,
                borderRadius: 4,
              }}>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>
                {processingPayment ? 'Processing payment...' : 'Make payment'}
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </StripeProvider>
  );
};
export default PaymentScreen;
