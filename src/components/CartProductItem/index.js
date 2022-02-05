import React from 'react';
import {Image, Text, View} from 'react-native';
import QuantitySelector from '../QuantitySelector';
import styles from './styles';
import {DataStore} from 'aws-amplify';

import {CartProduct} from '../../../models';

const CartProductItem = ({cartItem}) => {
  console.log(cartItem);
  const {product, ...cartProduct} = cartItem;

  const updateQuantity = async (newQuantity: number) => {
    const original = await DataStore.query(CartProduct, cartProduct.id);

    await DataStore.save(
      CartProduct.copyOf(original, (updated) => {
        updated.quantity = newQuantity;
      }),
    );
  };

  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Image style={styles.image} source={{uri: product.primaryImage}} />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {product.name}
          </Text>
          {/* Ratings */}
          {/*<View style={styles.ratingsContainer}>*/}
          {/*  {[0, 0, 0, 0, 0].map((el, i) => (*/}
          {/*    <FontAwesome*/}
          {/*      key={`${product.id}-${i}`}*/}
          {/*      style={styles.star}*/}
          {/*      name={i < Math.floor(product.avgRating) ? 'star' : 'star-o'}*/}
          {/*      size={18}*/}
          {/*      color={'#e47911'}*/}
          {/*    />*/}
          {/*  ))}*/}
          {/*  <Text>{product.ratings}</Text>*/}
          {/*</View>*/}
          <Text style={styles.price}>
            from ${cartProduct.price}
            {/*{product.oldPrice && (*/}
            {/*  <Text style={styles.oldPrice}> ${product.oldPrice}</Text>*/}
            {/*)}*/}
          </Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <QuantitySelector
          quantity={cartProduct.quantity}
          setQuantity={updateQuantity}
        />
      </View>
    </View>
  );
};

export default CartProductItem;
