import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert, ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import {addItemToCart} from './../redux/action/Actions';
import RatingStars from '../components/ratingStars';
import { monitorData } from './../data/monitorData';
import MonitorSlider from '../components/monitorSlider';
const ProductDetailsMonitor = ({route, navigation}) => {
  const id = route.params.MonitorId; // get the item object passed from the previous screen

  console.log('item:', id);

  const selectedProduct = monitorData.find(element => {
    console.log(element);
    return id === element.id;
  });

  const dispatch = useDispatch();

  const addItem = selectedProduct => {
    dispatch(addItemToCart(selectedProduct));
    Alert.alert('Item Added to the cart');
  };

  console.log(id);
  return (
    <ScrollView>
      <View style={styles.container}>
        <MonitorSlider/>
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

export default ProductDetailsMonitor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
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
