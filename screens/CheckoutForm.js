import React from 'react';
import {CardField, useStripe} from '@stripe/stripe-react-native';
import axios from 'axios';
import {View, Text, TouchableOpacity} from 'react-native';

const CheckoutForm = () => {
  const {stripe, confirmPayment} = useStripe(); // change 'stripe' to 'useStripe()'
  const handleSubmit = async event => {

    if (!error) {
      console.log('Stripe 23 | token generated!', paymentMethod);
      try {
        const {id} = paymentMethod;
        const response = await axios.post(
          'http://localhost:8080/stripe/charge',
          {
            amount: '2000',
            id: id,
          },
        );
        console.log('RESPONSE-', response.data.success);
        if (response.data.success) {
          console.log('Payment successfull');
        }
      } catch (err) {
        console.log('error-', err);
      }
    } else {
      console.log('Error-', error.message);
    }
  };
  return (
    <View>
      {/* <TouchableOpacity onPress={handleSubmit}>
        <CardField style={{border: '1px solid black'}} />
        <Text>Pay</Text>
      </TouchableOpacity> */}
      <CardField
        postalCodeEnabled={true}
        placeholders={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000',
        }}
        style={{
          width: '100%',
          height: 50,
          marginVertical: 30,
        }}
        onCardChange={cardDetails => {
          console.log('cardDetails', cardDetails);
        }}
        onFocus={focusedField => {
          console.log('focusField', focusedField);
        }}
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Pay</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckoutForm;
