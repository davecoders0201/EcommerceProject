import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addItemToCart} from './../redux/action/Actions';
import {smartWatchesData} from './../data/smartWatchesData';
import RatingStars from '../components/ratingStars';
import SmartWatchSlider from '../components/smartWatchSlider';
import {ScrollView} from 'react-native-gesture-handler';
const ProductDetails = ({route, navigation}) => {
  const id = route.params.productId; // get the item object passed from the previous screen

  console.log('item:', id);

  const selectedProduct = smartWatchesData.find(element => {
    console.log(element);
    return id === element.id;
  });

  const dispatch = useDispatch();

  const addItem = selectedProduct => {
    dispatch(addItemToCart(selectedProduct));
    Alert.alert('Item Added to the cart');
  };

  console.log(id);
  // console.log('smartWatchesData:', smartWatchesData);
  return (
    <ScrollView>
      <View style={styles.container}>
        <SmartWatchSlider />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{selectedProduct.title}</Text>
          <Text style={styles.price}>${selectedProduct.price}</Text>
          <View style={styles.stars}>
            <RatingStars rating={selectedProduct.rating} />
          </View>
          <View>
            <Text style={styles.description}>
              {selectedProduct.description}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => addItem(selectedProduct)}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    // flex:3,
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
    // marginTop: -10,
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
