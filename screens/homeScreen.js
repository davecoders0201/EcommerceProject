import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {dealData, devicesDealData} from '../data/CarouselData';
import DeliveryAddressCard from '../components/deliveryAddressCard';
import CategoryCard from '../components/categoryCard';
import CarouselCard from '../components/carouselCard';
import DealCard from './../components/dealCard';
import {categoryData} from '../data/CarouselData';
import ProductDetails from './productDetails';
import ProductList from './productList';

const HomeScreen = ({navigation}) => {
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

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.Address}>
        <DeliveryAddressCard />
      </View>
      <CarouselCard />

      <View>
        <Text style={styles.dealText}> Deals of the Day!</Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.categorycontainer}>
        {categoryData.map(dat => (
          <CategoryCard img={dat.img} text={dat.text} />
        ))}
      </ScrollView>

      <View>
        <Text style={styles.dealText}> Electronic devices for sale</Text>
      </View>

      <View style={styles.dealItemCont}>
        {devicesDealData.map((item, index) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProductList', {productId: index})
            }>
            <DealCard img={item.img} text={item.title} />
          </TouchableOpacity>
        ))}
      </View>

      <View>
        <Text style={styles.dealText}>
          {' '}
          Up to 60% off | Tools & home improvement
        </Text>
        <View style={styles.dealItemCont}>
          {dealData.map(data => (
            <DealCard img={data.img} text={data.text} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

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
  categorycontainer: {
    flex: 1,
    paddingLeft: 15,
    paddingTop: 20,
    paddingBottom: 10,
    marginTop: -20,
  },
  dealText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 10,
    marginTop: 20,
    flex: 2,
  },
  dealItemCont: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  deliverText: {
    marginLeft: 10,
    marginRight: 10,
    flex: 2,
    fontSize: 18,
    color: '#232F3E',
  },
  Address: {
    flex: 1,
    zIndex: 1,
  },
});
