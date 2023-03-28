import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {OrderData} from '../data/ProfileData';

const OrderCard = ({image}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.orderImage}
        source={{
          uri: image,
        }}
      />
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    marginBottom: 10,
  },
  orderImage: {
    height: 120,
    width: 180,
    resizeMode: 'contain',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#b8baba',
    backgroundColor: 'white',
  },
});
