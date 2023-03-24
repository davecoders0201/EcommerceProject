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

import {useSelector} from 'react-redux';
import { useStripe } from '@stripe/stripe-react-native';

const CartScreen = ({navigation}) => {
  const items = useSelector(state => state);
  const [quantity, setQuantity] = useState(1);
  const [subtotal, setSubtotal] = useState(0);
  console.log(items);
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

  useEffect(() => {
    let total = 0;
    items.forEach((item) => {
      total += item.price;
    });
    setSubtotal(total);
  });

  console.log("Items", items);
  console.log(subtotal);
  return (
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
            Your order is eleigible for FREE delivery
          </Text>
        </View>
      </View>
      <View style={styles.buyBtn}>
        <Pressable style={styles.btnCont}>
          <Text style={styles.btnText} onPress={() => navigation.navigate('PaymentScreen')}>Proceed to buy (2 items)</Text>
        </Pressable>
      </View>
      <ScrollView>
        {items.map(item => (
          <CartItem
            key={item.id}
            title={item.title}
            price={item.price}
            img={item.img}
          />
        ))}

      </ScrollView>
    </View>
  );
};

export default CartScreen;

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
  btnText: {},
});
