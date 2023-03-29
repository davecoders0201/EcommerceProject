import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import RatingStars from '../components/ratingStars';

const ProductListContain = ({img, title, price, rating, navigation}) => {
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
            source={{uri: img}}
          />
        </View>
        <View style={styles.contentCont}>
          <Text style={styles.itemTitleText}>{title}</Text>
          <RatingStars rating={rating} />
          <Text style={styles.priceText}>₹{price}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductListContain;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: 'white',
    borderBottomWidth: 10,
    backgroundColor: '#ededed',
    padding: 15,
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
    marginBottom: 10,
  },
  priceText: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 5,
    color: 'black',
  },
});
