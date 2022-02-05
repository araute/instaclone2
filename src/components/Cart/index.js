import React from 'react';
import styles from './styles';
import {Text, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function Cart(props) {
  const iconSize = 30;
  return (
    <View style={styles.cartContainer}>
      <View style={styles.cart}>
        <View style={styles.cartIcon}>
          <FontAwesome5 name="cart-plus" size={iconSize} color="white" />
        </View>
        <View style={styles.cartMiddleContent}>
          <Text style={styles.cartHeading}>View Cart</Text>
          <Text style={styles.cartLocation}>Chilli's Grill & Bar</Text>
        </View>
        <View style={styles.cartItemCount} />
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'white',
            paddingRight: 10,
            paddingTop: 5,
          }}>
          6
        </Text>
      </View>
    </View>
  );
}

export default Cart;
