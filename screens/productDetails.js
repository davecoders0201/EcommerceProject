// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';
// import {useDispatch} from 'react-redux';
// import {addItemToCart} from './../redux/action/Actions';
// import {smartWatchesData} from './../data/smartWatchesData';
// import RatingStars from '../components/ratingStars';
// import SmartWatchSlider from '../components/smartWatchSlider';
// import {ScrollView} from 'react-native-gesture-handler';

// // This is the main Function of the file
// const ProductDetails = ({route, navigation}) => {
// const id = route.params.productId; // get the item object passed from the previous screen

// console.log('item:', id);

// // This is find function which is use to find the data according to the id
// const selectedProduct = smartWatchesData.find(element => {
//   console.log(element);
//   return id === element.id;
// });

// // This is the dipatch which uses a useDispatch when the cart products are added this will add the product in the store
// const dispatch = useDispatch();

// const addItem = selectedProduct => {
//   dispatch(addItemToCart(selectedProduct));
//   Alert.alert('Item Added to the cart');
// };

//   console.log(id);
//   return (
//     // This is the ScrollView Content which give the Scroll Effect to the Content
//     <ScrollView>
//       {/* This is the Main Container in the File  */}
//       <View style={styles.container}>
//         {/* ---This is the Smart watch slider which diplay the images in the Array--- */}
//         <SmartWatchSlider />
//         <View style={styles.infoContainer}>
//           {/* The Content is comming from the previous id  */}
//           <Text style={styles.title}>{selectedProduct.title}</Text>
//           <Text style={styles.price}>${selectedProduct.price}</Text>
//           <View style={styles.stars}>
//             <RatingStars rating={selectedProduct.rating} />
//           </View>
//           <View>
//             <Text style={styles.description}>
//               {selectedProduct.description}
//             </Text>
//           </View>

//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => addItem(selectedProduct)}>
//             <Text style={styles.buttonText}>Add to cart</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.buybutton}>
//             <Text style={styles.buttonText}>Buy Now</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default ProductDetails;

// // This is the StyleSheet which is use to give the style sheet
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   image: {
//     width: '100%',
//     height: 300,
//     resizeMode: 'contain',
//     // flex:1,
//   },
//   infoContainer: {
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: 'black',
//   },
//   price: {
//     fontSize: 25,
//     fontWeight: 'bold',
//     color: '#f0c14a',
//     marginBottom: 10,
//   },
//   description: {
//     fontSize: 20,
//     marginBottom: 5,
//     marginTop: 20,
//   },
//   stars: {
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: '#f0c14a',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   buybutton: {
//     backgroundColor: '#ffa135',
//     padding: 10,
//     marginTop: 20,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'black',
//     fontSize: 18,
//     fontWeight: '600',
//   },
// });

// This Code add the Backend Node(JS)
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addItemToCart} from './../redux/action/Actions';
import RatingStars from '../components/ratingStars';
import SmartWatchSlider from '../components/smartWatchSlider';
import {ScrollView} from 'react-native-gesture-handler';
import axios from 'axios';

// This is the main Function of the file
const ProductDetails = ({route, navigation}) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // add error state
  const id = route.params.productId; // get the item object passed from the previous screen
  console.log('itemID:', id);
  // console.log('', products);
  useEffect(() => {
    axios
      .get('http://10.0.2.2:3000/ecommerce/productDetails')
      .then(response => {
        // console.log(response.data); // check response data
        if (Array.isArray(response.data.result)) {
          // verify that response data is an array
          setProducts(response.data.result);
          setIsLoading(false);
        } else {
          setError('Response data is not an array.');
          setIsLoading(false);
        }
      })
      .catch(error => {
        console.error(error);
        setError(error.message); // set error state with error message
        setIsLoading(false);
      });
  }, []);

  // This is the find method which is use to find the products from the selected id and compare the element id from the id in the API and display the current Data as per the Id
  const selectedProducts = products.find(element => {
    // console.log("elementID:::",element);
    return id === element._id;
  });
  console.log('Selected Product', selectedProducts);

  // This is the dipatch which uses a useDispatch when the cart products are added this will add the product in the store
  const dispatch = useDispatch();

  //This is the redux ToolKit which is the use to add the selected items to the cart and diplay the single products.
  const addItem = selectedProducts => {
    dispatch(addItemToCart(selectedProducts));
    Alert.alert('Item Added to the cart');
  };

  // This is find function which is use to find the data according to the id
  if (isLoading) {
    return (
      <View style={[styles.loadingContainer, styles.horizontal]}>
        <ActivityIndicator size="large" color="#f0c14b" />
      </View>
    );
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  if (!selectedProducts) {
    return <Text>Product not found.</Text>;
  }

  //This is the main return function which display the Whole pages function perform the functions.
  return (
    // This is the ScrollView Content which give the Scroll Effect to the Content
    <ScrollView>
      {/* This is the Main Container in the File  */}
      <View style={styles.container}>
        {/* ---This is the Smart watch slider which diplay the images in the Array--- */}
        <SmartWatchSlider />
        <View style={styles.infoContainer}>
          {/* The Content is comming from the previous id  */}
          <Text style={styles.title}>{selectedProducts.title}</Text>
          <Text style={styles.price}>${selectedProducts.price}</Text>
          <View style={styles.stars}>
            <RatingStars rating={selectedProducts.rating} />
          </View>
          <View>
            <Text style={styles.description}>
              {selectedProducts.description}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => addItem(selectedProducts)}>
            <Text style={styles.buttonText}>Add to cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buybutton}>
            <Text style={styles.buttonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetails;

// This is the StyleSheet which is use to give the style sheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    // flex:1,
  },
  infoContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#f0c14a',
    marginBottom: 10,
  },
  description: {
    fontSize: 20,
    marginBottom: 5,
    marginTop: 20,
  },
  stars: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#f0c14a',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buybutton: {
    backgroundColor: '#ffa135',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
});
