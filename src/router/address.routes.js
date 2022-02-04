import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddressScreen from '../screens/AddressScreen';
import NewAddressScreen from '../screens/NewAddressScreen';
import SaveNewAddress from '../screens/SaveNewAddress';

const AddressStack = createStackNavigator();

const backToHomeStack = () => {
  console.log('Back Arrow Prssed!');
};

const toNewAddress = () => {
  console.log('Someting');
};
const AddressRoutes = () => (
  <AddressStack.Navigator>
    <AddressStack.Screen
      name="Address"
      component={AddressScreen}
      options={({navigation}) => ({
        title: 'Delivery Address',
        headerLeftContainerStyle: {
          marginLeft: 15,
        },
        headerRightContainerStyle: {
          marginRight: 15,
        },
        headerLeft: () => (
          <TouchableOpacity onPress={backToHomeStack}>
            <Feather name="arrow-left" size={25} color={'#000'} />
          </TouchableOpacity>
        ),
        headerTitle: () => (
          <Text style={styles.headerTitle}>Delivery Address</Text>
          // <Image
          //   source={logo}
          //   resizeMode="contain"
          //   style={{width: 135, height: 50}}
          // />
        ),
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate('NewAddressScreen')}>
            <Ionicons name="add" size={35} color={'#545454'} />
          </TouchableOpacity>
        ),
      })}
    />
    <AddressStack.Screen name="NewAddressScreen" component={NewAddressScreen} />
    <AddressStack.Screen name="SaveNewAddress" component={SaveNewAddress} />
  </AddressStack.Navigator>
);

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'System',
  },
});

export default AddressRoutes;
