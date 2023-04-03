// import React, {useState, useEffect} from 'react';
// import {CardField, useStripe} from '@stripe/stripe-react-native';
// import axios from 'axios';
// import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
// import Stripe from '@stripe/react-stripe-js';

// const CheckoutForm = () => {
//   const {stripe, confirmPayment} = useStripe();
//   const [cards, setCards] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null); // change 'stripe' to 'useStripe()'

//   useEffect(() => {
//     axios
//       .post('http://10.0.2.2:3000/ecommerce/paymentDetails')
//       .then(response => {
//         console.log(response.data); // check response data

//         if (Array.isArray(response.data.result)) {
//           // verify that response data is an array
//           setCards(response.data.result);
//           setIsLoading(false);
//         } else {
//           setError('Response data is not an array.');
//           setIsLoading(false);
//         }
//       })
//       .catch(error => {
//         console.error(error);
//         setError(error.message); // set error state with error message
//         setIsLoading(false);
//       });
//   }, []);

//   const handleCard = async () => {
//     const selectedCard = cards.find(element => {
//       return element._id;
//     });
//     console.log('Selected Card:', selectedCard);

//     if (!stripe) {
//       console.log('Stripe not loaded');
//       return;
//     }

//     try {
//       const {paymentIntent} = await stripe.confirmPayment({
//         clientSecret: selectedCard.clientSecret,
//         paymentMethodId: selectedCard.paymentMethodId,
//       });

//       console.log('Payment successful:', paymentIntent);
//     } catch (e) {
//       console.log('Error while processing payment:', e);
//     }
//   };

//   return (
//     <View>
//       <CardField
//         postalCodeEnabled={false}
//         placeholders={{
//           number: '4242 4242 4242 4242',
//         }}
//         cardStyle={{
//           backgroundColor: '#FFFFFF',
//           textColor: '#000000',
//         }}
//         style={{
//           width: '100%',
//           height: 50,
//           marginVertical: 30,
//         }}
//         onCardChange={cardDetails => {
//           console.log('cardDetails', cardDetails);
//         }}
//         onFocus={focusedField => {
//           console.log('focusField', focusedField);
//         }}
//       />
//       <TouchableOpacity onPress={() => handleCard} style={styles.payContainer}>
//         <Text style={styles.payText}>Pay</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default CheckoutForm;

// const styles = StyleSheet.create({
//   payContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#DDDDDD',
//     borderRadius: 10,
//   },
//   payText: {
//     fontFamily: 'bold',
//     padding: 10,
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
// });

// const stripe = new Stripe(
//   'sk_test_51MnbtkSI6t5fguBr2gPC7eQIXMvFjqNJpHonAnkL68KoV7aVKSIkxoswfZo3335qHQJ8oVPmZfmjhFwqQcYPLFbF00xOVJMYW3',
// );

// const processPayment = async paymentIntentId => {
//   try {
//     const paymentIntent = await stripe.paymentIntents.capture(paymentIntentId);

//     console.log('Payment captured:', paymentIntent);
//   } catch (e) {
//     console.log('Error while processing payment:', e);
//   }
// };

import React, {useState, useEffect} from 'react';
import {CardField, useStripe} from '@stripe/stripe-react-native';
import axios from 'axios';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Stripe from 'stripe';

const CheckoutForm = () => {
  const {stripe, confirmPayment} = useStripe();
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .post('http://10.0.2.2:3000/ecommerce/paymentDetails')
      .then(response => {
        console.log(response.data);

        if (Array.isArray(response.data.result)) {
          setCards(response.data.result);
          setIsLoading(false);
        } else {
          setError('Response data is not an array.');
          setIsLoading(false);
        }
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  const handleCard = async () => {
    const selectedCard = cards.find(element => {
      return element._id;
    });
    console.log('Selected Card:', selectedCard);

    if (!stripe) {
      console.log('Stripe not loaded');
      return;
    }

    try {
      const {paymentIntent} = await stripe.confirmPayment({
        clientSecret: selectedCard.clientSecret,
        paymentMethodId: selectedCard.paymentMethodId,
      });

      console.log('Payment successful:', paymentIntent);
    } catch (e) {
      console.log('Error while processing payment:', e);
    }
  };

  return (
    <View>
      <CardField
        postalCodeEnabled={false}
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
          console.log('Card Details:', cardDetails);
        }}
        onFocus={focusedField => {
          console.log('Focus Field:', focusedField);
        }}
      />
      <TouchableOpacity onPress={handleCard} style={styles.payContainer}>
        <Text style={styles.payText}>Pay</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckoutForm;

const styles = StyleSheet.create({
  payContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    borderRadius: 10,
  },
  payText: {
    fontFamily: 'bold',
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const stripe = new Stripe(
  'sk_test_51MnbtkSI6t5fguBr2gPC7eQIXMvFjqNJpHonAnkL68KoV7aVKSIkxoswfZo3335qHQJ8oVPmZfmjhFwqQcYPLFbF00xOVJMYW3',
);

const processPayment = async paymentIntentId => {
  try {
    const paymentIntent = await stripe.paymentIntents.capture(paymentIntentId);

    console.log('Payment captured:', paymentIntent);
  } catch (e) {
    console.log('Error while processing payment:', e);
  }
};

module.exports = {paymentDetails, processPayment};
