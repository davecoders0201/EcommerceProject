import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {dealData, devicesDealData} from '../data/CarouselData';
import DeliveryAddressCard from '../components/deliveryAddressCard';
import CategoryCard from '../components/categoryCard';
import CarouselCard from '../components/carouselCard';
import DealCard from './../components/dealCard';
import {categoryData} from '../data/CarouselData';

// This is the main HomeScreen Function in the File
const HomeScreen = ({navigation}) => {
  // this is the useEffect which is executed when the page navigated everyTime
  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      header: () => (
        // This is the header part which is diplayed under the page when it is navigated
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
    // This is the ScrollView which is use to give scroll effect to the Content in the File
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.Address}>
        <DeliveryAddressCard />
      </View>
      <CarouselCard />

      {/* ---This is the title of the products categories--- */}
      <View>
        <Text style={styles.dealText}> Deals of the Day!</Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.categorycontainer}>
        {/* ---This is the Map function Which is use to map the data from the Static API created in the data Folder--- */}
        {categoryData.map(dat => (
          <CategoryCard img={dat.img} text={dat.text} />
        ))}
      </ScrollView>

      {/* ---This is the title of the products categories--- */}
      <View>
        <Text style={styles.dealText}> Electronic devices for sale</Text>
      </View>

      <View style={styles.dealItemCont}>
        {/* ---This is the Map function Which is use to map the data from the Static API created in the data Folder--- */}
        {devicesDealData.map((item, index) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProductList', {productId: index})
            }>
            <DealCard img={item.img} text={item.title} />
          </TouchableOpacity>
        ))}
      </View>

      {/* ---This is the title of the products categories--- */}

      <View>
        <Text style={styles.dealText}>
          {' '}
          Up to 60% off | Tools & home improvement
        </Text>
        <View style={styles.dealItemCont}>
          {/* ---This is the Map function Which is use to map the data from the Static API created in the data Folder--- */}
          {dealData.map(data => (
            <DealCard img={data.img} text={data.text} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

// This is the Style sheet which is use to give styles to the page
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
