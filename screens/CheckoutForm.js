import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import axios from 'axios';
import {
  StripeProvider,
  CardField,
  useStripe,
} from '@stripe/stripe-react-native';

const PaymentScreen = ({navigation}) => {
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentId, setPaymentId] = useState(null);
  const [cardToken, setCardToken] = useState(null);
  const [processingPayment, setProcessingPayment] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const {confirmPayment} = useStripe();
  useEffect(() => {
    console.log('PaymentId:::', paymentId);
  }, [paymentId]);

  const handlePayment = async () => {
    setProcessingPayment(true);
    const res = await axios
      .post('http://10.0.2.2:3000/ecommerce/paymentDetails')
      .then(response => {
        const paymentData = response.data;
        setPaymentId(paymentData);
        console.log('paymentData::::', paymentData);
      })
      .catch(error => {
        console.error(error);
        setError(error.message); // set error state with error message
      });

    const {error, paymentMethod} = confirmPayment(JSON.stringify(paymentId), {
      type: 'Card',
      paymentMethodType: 'Card',
    });

    if (error) {
      console.error(error);
      setProcessingPayment(false);
    } else {
      setProcessingPayment(false);
      setPaymentSuccess(true);
    }
  };

  const handleCardFieldChange = complete => {
    setCardToken(complete);
  };
  // console.log('Card Token:::', cardToken);

  return (
    <StripeProvider publishableKey="pk_test_51MnbtkSI6t5fguBrmy2ra7DzScbuIFLeY6dNVuEUEuw5xeBeHrG1zL99iyAaGCWuR5MJ7826jrXUptevBxAcn5lo00NdhrhOI5">
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {paymentSuccess ? (
          <Text>Your payment was successful!</Text>
        ) : (
          <>
            <CardField
              postalCodeEnabled={false}
              onCardChange={handleCardFieldChange}
              style={{width: '100%', height: 50, marginBottom: 16}}
            />
            <TouchableOpacity
              onPress={handlePayment}
              disabled={!cardToken || processingPayment} // disable button if cardToken is null/undefined or if payment is processing
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
