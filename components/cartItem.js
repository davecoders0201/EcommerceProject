import {StyleSheet, Text, Image, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector, useDispatch} from 'react-redux';

const CartItem = ({img, title, price}) => {
  const [quantity, setQuantity] = useState(1);
  const [subtotal, setSubtotal] = useState(price);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.topCont}>
        <View style={styles.imageCont}>
          <Image
            style={{
              height: '100%',
              width: '100%',
              //   borderColor: "#b8baba",
              //   borderWidth: 1,
              //   borderRadius: 10,
              resizeMode: 'contain',
              backgroundColor: 'white',
            }}
            source={{
              uri: img,
            }}
          />
        </View>
        <View style={styles.contentCont}>
          <Text style={styles.itemTitleText}>{title}</Text>
          <Text style={styles.priceText}>₹{price}</Text>
          <Text style={styles.FreeText}>Eligible for FREE Shipping</Text>
        </View>
      </View>
      <View style={styles.bottomCont}>
        <View style={styles.itemCountCont}>
          <Pressable onPress={handleDecrement}>
            <Icon style={styles.iconDel} name="delete-outline" size={22} />
          </Pressable>

          <Text style={styles.countText}>{quantity}</Text>
          <Pressable onPress={handleIncrement}>
            <Icon style={styles.iconAdd} name="add" size={22} />
          </Pressable>
        </View>
        <View style={styles.actionCont}>
          <Pressable style={styles.btnCont} onPress={{}}>
            <Text>Delete</Text>
          </Pressable>
          <Pressable style={styles.btnCont}>
            <Text>Save for later</Text>
          </Pressable>
          <Pressable style={styles.btnCont}>
            <Text>See more like this</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: 'white',
    borderBottomWidth: 10,
    backgroundColor: '#ededed',
  },
  topCont: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  imageCont: {
    flex: 1,
  },
  contentCont: {
    flex: 2,
    padding: 5,
    marginLeft: 10,
  },
  itemTitleText: {
    flex: 1,
    fontWeight: '600',
    color: 'black',
    fontWeight: 'bold',
  },
  priceText: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 5,
    color: 'black',
  },
  bottomCont: {
    flexDirection: 'row',
    padding: 10,
    flex: 1,
  },
  itemCountCont: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconDel: {
    borderWidth: 1,
    borderColor: '#c9c9c9',
    backgroundColor: '#e6e5e3',
    paddingLeft: 5,
    paddingRight: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    paddingTop: 4,
    paddingBottom: 4,
  },
  iconAdd: {
    borderWidth: 1,
    borderColor: '#c9c9c9',
    backgroundColor: '#e6e5e3',
    paddingLeft: 5,
    paddingRight: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    paddingTop: 4,
    paddingBottom: 4,
  },
  btnCont: {
    borderWidth: 1,
    borderColor: '#c9c9c9',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 5,
    color: 'black',
    fontWeight: 'bold',
  },
  countText: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#c9c9c9',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 3,
  },
  actionCont: {
    flex: 2,
    padding: 5,
    marginLeft: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  FreeText: {
    fontWeight: '600',
    color: 'black',
  },
});
