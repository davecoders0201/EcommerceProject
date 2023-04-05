import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/login';
import Register from './screens/register';
import TabNavigation from './navigation/tabNavigation';
import ForgotPass from './screens/forgotPass';
import ProductDetails from './screens/productDetails';
import {Provider} from 'react-redux';
import {mystore} from './redux/store/store';
import ProductList from './screens/productList';
import ProductDetailsTablets from './screens/productDetailsTablets';
import PaymentScreen from './screens/paymentScreen';
import ProductDetailsLaptop from './screens/productDetailsLaptop';
import ProductDetailsMonitor from './screens/productDetailsMonitor';
import OrderScreen from './screens/orderScreen';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Provider store={mystore}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Forgotpass" component={ForgotPass} />
          <Stack.Screen name="ProductList" component={ProductList} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
          <Stack.Screen
            name="ProductDetailsTablets"
            component={ProductDetailsTablets}
          />
          <Stack.Screen
            name="ProductDetailsLaptop"
            component={ProductDetailsLaptop}
          />
          <Stack.Screen
            name="ProductDetailsMonitor"
            component={ProductDetailsMonitor}
          />
          <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
          <Stack.Screen name="orderScreen" component={OrderScreen} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
