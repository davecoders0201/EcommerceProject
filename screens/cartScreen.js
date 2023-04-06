import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CartItem from './../components/cartItem';
import {useSelector, useDispatch} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';

// This is the main Function of the CartScreen and it is executed in every decent manner
const CartScreen = ({navigation}) => {
  const items = useSelector(state => state);
  const [quantity, setQuantity] = useState(1);
  const [subtotal, setSubtotal] = useState(0);
  const isFocused = useIsFocused();
  const [cartCount, setCartCount] = useState(items.length);
  console.log(items);
  useEffect(() => {
    setCartCount(items.length);
    console.log('Items count::', items.length);
  }, [items]);

  // This is the useEffect and executed when the page is diplayed
  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      header: () => (
        <SafeAreaView style={styles.maincontainer}>
          <View style={styles.searchcontainer}>
            <Icon name="magnify" color={'gray'} size={20} />
            <TextInput
              style={styles.searchText}
              placeholder="Search"
              placeholderTextColor={'gray'}
            />
          </View>

          <View style={styles.micicon}>
            <Icon name="microphone-outline" size={26} />
          </View>
        </SafeAreaView>
      ),
    });
  });

  // This is the Second useEffect which is executed the User increase the Count of the Products
  // useEffect(() => {
  //   let total = 0;
  //   items.forEach(item => {
  //     total += item.price;
  //   });
  //   setSubtotal(total);
  // });

  useEffect(() => {
    let total = 0;
    items.forEach(item => {
      total += item.price;
    });
    setSubtotal(total);
    setCartCount(items.length);
  }, [items]);

  useEffect(() => {
    if (isFocused) {
      setCartCount(items.length);
    }
  }, [isFocused]);
  console.log('Items', items);
  console.log(subtotal);
  return (
    // This is the main Container in the File
    <View style={styles.container}>
      <View style={styles.subCont}>
        <Text style={styles.titleText}>subtotal</Text>
        <Text style={styles.priceText}>₹{subtotal}</Text>
      </View>
      <View style={styles.deliveryCont}>
        <View>
          <Icon name="check-decagram" color={'teal'} size={22} />
        </View>
        <View>
          <Text style={styles.deliveryText}>
            Your order is eligible for FREE delivery
          </Text>
        </View>
      </View>
      <View style={styles.buyBtn}>
        <Pressable style={styles.btnCont}>
          <Text
            style={styles.btnText}
            onPress={() => navigation.navigate('PaymentScreen')}>
            Proceed to buy ({cartCount} items)
          </Text>
        </Pressable>
      </View>
      <ScrollView>
        {/* --- This is the Map function which is use to display the Items one by one --- */}
        {items.map(item => (
          <CartItem
            key={item._id}
            title={item.title}
            price={item.price}
            image={item.image}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default CartScreen;

// This is the StyleSheet which is use for giving styles to the page
const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: '#8bebf2',
    flexDirection: 'row',
    width: '100%',
  },
  searchcontainer: {
    flexDirection: 'row',
    width: '80%',
    margin: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#b8baba',
    paddingLeft: 15,
    backgroundColor: 'white',
    borderRadius: 5,
    height: 40,
  },
  searchText: {
    width: '92%',
    height: '90%',
    borderWidth: 0,
    paddingLeft: 10,
    backgroundColor: 'white',
    paddingBottom: 8,
  },
  micicon: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    width: '10%',
  },
  container: {
    flex: 1,
  },
  subCont: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
  },
  priceText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  deliveryCont: {
    flexDirection: 'row',
    padding: 10,
  },
  deliveryText: {
    color: 'teal',
    marginLeft: 5,
  },
  buyBtn: {
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  btnCont: {
    backgroundColor: 'gold',
    marginLeft: '5%',
    marginRight: '5%',
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 5,
  },
});
