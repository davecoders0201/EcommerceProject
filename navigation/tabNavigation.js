import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native';
import CartScreen from '../screens/cartScreen';
import MenuScreen from '../screens/menuScreen';
import HomeScreen from '../screens/homeScreen';
import ProfileScreen from '../screens/profileScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  const items = useSelector(state => state);
  const [cartCount, setCartCount] = useState(items.length);

  useEffect(() => {
    setCartCount(items.length);
  }, [items]);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#02c3d9',
      }}
      initialRouteName="login">
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="account" color={color} size={size} />
          ),
        }}
      />

      {/* ---This is the only static Cart Icon without count--- */}
      {/* <Tab.Screen
        name="cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="cart-outline" color={color} size={size} />
          ),
        }}
      /> */}

      {/* ----This will add the cart count icon on the Cart Icon---  */}
      <Tab.Screen
        name="cart"
        component={CartScreen}
        options={({route}) => ({
          tabBarIcon: ({color, size}) => (
            <View style={{position: 'relative'}}>
              <Icon name="cart-outline" color={color} size={size} />
              {cartCount >= 0 && (
                <View
                  style={{
                    position: 'absolute',
                    top: -8,
                    right: -12,
                    backgroundColor: '#02c3d9',
                    borderRadius: 10,
                    minWidth: 20,
                    height: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: '#fff', fontSize: 12}}>{cartCount}</Text>
                </View>
              )}
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="menu"
        component={MenuScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="menu" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
