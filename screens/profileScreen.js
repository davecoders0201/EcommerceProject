import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import ProfileCard from '../components/profileCard';
import OrderCard from '../components/orderCard';
import AccountCard from '../components/accountCard';
import {
  accountData,
  infoData,
  OrderData,
  WishListData,
} from '../data/ProfileData';

const ProfileScreen = ({navigation}) => {
  useEffect(
    () =>
      navigation.setOptions({
        headerTitle: '',
        headerLeft: () => (
          <Image style={styles.Image} source={require('../asset/amazon.png')} />
        ),
        headerRight: () => (
          <View style={styles.headerRight}>
            <Icon name="bell-outline" size={26} style={{marginRight: 5}} />
            <Icon name="magnify" size={26} />
          </View>
        ),
        headerStyle: {
          backgroundColor: '#8bebf2',
          borderBottomWidth: 0,
        },
      }),

    [],
  );

  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={['rgba(5,250,242,0.4)', '#fff']}>
        <View style={styles.titleCont}>
          <Text style={styles.titleText}>Hello, TechAvidus</Text>
          <Icon
            name="account-circle"
            color={'#b0b0b0'}
            size={50}
            // backgroundColor="white"
          />
        </View>
        <View style={styles.actionCont}>
          {infoData.map(data => (
            <ProfileCard title={data.title} />
          ))}
        </View>
      </LinearGradient>
      <View style={styles.orderCont}>
        <View style={styles.textContainer}>
          <Text style={styles.orderText}>Your Orders</Text>
          <Text style={styles.seeall} onPress={() => {}}>
            See all
          </Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {OrderData.map(data => (
            <OrderCard image={data.image} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.orderCont}>
        <Text style={styles.orderText}>Your Wishlist</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {WishListData.map(data => (
            <OrderCard image={data.image} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.orderCont}>
        <Text style={styles.orderText}>Your Account</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {accountData.map(data => (
            <AccountCard title={data.title} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.logoutbtn}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  Image: {
    height: 30,
    width: 90,
    marginLeft: 10,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  titleCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  actionCont: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  orderCont: {
    marginTop: 15,
    borderBottomColor: '#b8baba',
    borderBottomWidth: 3,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  textContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  orderText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginBottom: 15,
  },
  seeall: {
    padding: 5,
    color: 'green',
    fontSize: 16,
  },
  logoutbtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8bebf2',
    borderRadius: 10,
    marginTop: 10,
    borderColor: 'black',
  },
  logoutText: {
    fontSize: 20,
    paddingLeft: 10,
    color: 'black',
    fontWeight: 'bold',
  },
});
