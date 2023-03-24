import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DeliveryAddressCard = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState('TechAvidus - India');
  const [addressList, setAddressList] = useState([
    'TechAvidus - India',
    'TechAvidus - USA',
    'TechAvidus - UK',
    'TechAvidus - CANADA',
  ]);

  const handleDropdownPress = () => {
    setShowDropdown(!showDropdown);
  };

  const handleAddressPress = item => {
    setSelectedAddress(item);
    setShowDropdown(false);
  };

  return (
    <View style={styles.container}>
      <Icon name="location-pin" size={20} />
      <TouchableOpacity onPress={handleDropdownPress}>
        <Text style={styles.deliverText}>{selectedAddress}</Text>
        {/* <Icon name="keyboard-arrow-down" size={20} /> */}
      </TouchableOpacity>
      <Icon name="keyboard-arrow-down" size={20} />
      {showDropdown && (
        <View style={styles.dropdown}>
          <FlatList
            data={addressList}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => handleAddressPress(item)}>
                <View style={styles.dropdownItem}>
                  <Icon name="location-pin" size={20} color="#D6D6D6" />
                  <Text style={styles.addressText}>{item}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item}
            style={styles.dropdownList}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  deliverText: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    fontSize: 18,
    color: '#232F3E',
  },
  dropdown: {
    position: 'absolute',
    top: 45,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    shadowColor: '#D6D6D6',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 3,
    zIndex: 1,
    width: '100%',
  },
  dropdownList: {
    maxHeight: 150,
    padding: 5,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D6D6D6',
    backgroundColor: 'white',
    flex: 1,
  },
  addressText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#444444',
    flex: 1,
    fontWeight: '600',
  },
});

export default DeliveryAddressCard;
