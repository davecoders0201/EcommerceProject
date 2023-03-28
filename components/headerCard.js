import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DeliveryAddressCard from './deliveryAddressCard';

const HeaderCard = () => {
  return (
    <View>
      <View style={styles.maincontainer}>
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
      </View>
      <View>
        <DeliveryAddressCard />
      </View>
    </View>
  );
};

export default HeaderCard;

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
