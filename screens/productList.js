import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import ProductListContain from './productListContain';
import {smartWatchesData} from './../data/smartWatchesData';
import {ScrollView} from 'react-native-gesture-handler';
import {tabletsData} from './../data/tabletsData';
import {LaptopData} from './../data/laptopData';
import {monitorData} from './../data/monitorData';

const ProductList = ({navigation, route}) => {
  const id = route.params?.productId;
  console.log('id:', id);
  let selectedProduct;
  if (id === 0) {
    const selectedProduct = smartWatchesData.find(element => {
      console.log(element);
      return id === element.id;
    });
  } else if (id === 1) {
    const selectedProduct = tabletsData.find(element => {
      console.log(element);
      return id === element.id;
    });
  } else if (id === 2) {
    const selectedProduct = LaptopData.find(element => {
      console.log(element);
      return id === element.id;
    });
  }

  const goToProductDetails = item => {
    console.log(item);
    navigation.navigate('ProductDetails', {productId: item});
  };

  const goToProductDetailsTablet = itemTablets => {
    console.log(itemTablets);
    navigation.navigate('ProductDetailsTablets', {tabletId: itemTablets});
  };

  const goToProductDetailsLaptop = itemLaptop => {
    console.log(itemLaptop);
    navigation.navigate('ProductDetailsLaptop', {laptopId: itemLaptop});
  };

  const goToProductDetailsMonitor = itemMonitor => {
    console.log(itemMonitor);
    navigation.navigate('ProductDetailsMonitor', {MonitorId: itemMonitor});
  };

  return (
    <ScrollView>
      <View>
        {id === 0 && (
          <View>
            {smartWatchesData.map(item => (
              <TouchableOpacity onPress={() => goToProductDetails(item.id)}>
                <ProductListContain
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  img={item.img}
                  rating={item.rating}
                />
              </TouchableOpacity>
            ))}
          </View>
        )}

        {id === 1 && (
          <View>
            {tabletsData.map(itemTablets => (
              <TouchableOpacity
                onPress={() => goToProductDetailsTablet(itemTablets.id)}>
                <ProductListContain
                  key={itemTablets.id}
                  title={itemTablets.title}
                  price={itemTablets.price}
                  img={itemTablets.img}
                  rating={itemTablets.rating}
                />
              </TouchableOpacity>
            ))}
          </View>
        )}

        {id === 2 && (
          <View>
            {LaptopData.map(itemLaptop => (
              <TouchableOpacity
                onPress={() => goToProductDetailsLaptop(itemLaptop.id)}>
                <ProductListContain
                  key={itemLaptop.id}
                  title={itemLaptop.title}
                  price={itemLaptop.price}
                  img={itemLaptop.img}
                  rating={itemLaptop.rating}
                />
              </TouchableOpacity>
            ))}
          </View>
        )}

        {id === 3 && (
          <View>
            {monitorData.map(itemMonitor => (
              <TouchableOpacity
                onPress={() => goToProductDetailsMonitor(itemMonitor.id)}>
                <ProductListContain
                  key={itemMonitor.id}
                  title={itemMonitor.title}
                  price={itemMonitor.price}
                  img={itemMonitor.img}
                  rating={itemMonitor.rating}
                />
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default ProductList;

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
});
