import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ShoopingCartScreen from '../screens/ShoopingCartScreen';
import CheckoutAddressScreen from '../screens/CheckoutAddressScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ShoopingCartScreen}
        name="cart"
        options={{title: 'Shopping Cart'}}
      />
      <Stack.Screen
        component={CheckoutAddressScreen}
        name="CheckoutAddressScreen"
        options={{title: 'Address'}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
