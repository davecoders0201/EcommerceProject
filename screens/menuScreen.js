import {
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  SafeAreaView,
  Text,
  TouchableOpacity
} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {menuData} from '../data/MenuData';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuItemCard from '../components/menuItemCard';

const MenuScreen = ({navigation}) => {

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
    <ScrollView style={styles.container}>
      <LinearGradient colors={['rgba(5,250,242,0.4)', '#fff']}>
        <View style={styles.itemCont}>
          {menuData.map(dat => (
            <MenuItemCard title={dat.text} img={dat.img} />
          ))}
        </View>
        
      </LinearGradient>
    </ScrollView>
  );
};

export default MenuScreen;

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
  itemCont: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  logoutbtn:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#8bebf2',
    borderRadius:10,
    paddingLeft:10,
  },
  logoutText:{
    fontSize:20,
    paddingLeft:10,
    color:"black",
    fontWeight:"bold",
  }
});
