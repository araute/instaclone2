import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Auth, DataStore} from 'aws-amplify';

import {CartProduct, Product} from '../../../models';
import CartProductItem from '../../components/CartProductItem';
import Button from '../../components/Button';

// import products from '../../data/cart';

const ShoopingCartScreen = () => {
  const [cartProducts, setCartProducts] = useState([]);

  const navigation = useNavigation();

  const fetchCartProducts = async () => {
    const userData = await Auth.currentAuthenticatedUser();
    console.log(userData.attributes.sub);
    // TODO query only my cart items
    const results = await DataStore.query(CartProduct, (cp) =>
      cp.userSub('eq', userData.attributes.sub),
    );
    setCartProducts(results);
  };

  useEffect(() => {
    fetchCartProducts();
  }, []);

  useEffect(() => {
    if (cartProducts.filter((cp) => !cp.product).length === 0) {
      return;
    }

    const fetchProducts = async () => {
      // query all products that are used in cart
      const products = await Promise.all(
        cartProducts.map((cartProduct) =>
          DataStore.query(Product, cartProduct.productID),
        ),
      );

      // assign the products to the cart items
      setCartProducts((currentCartProducts) =>
        currentCartProducts.map((cartProduct) => ({
          ...cartProduct,
          product: products.find((p) => p.id === cartProduct.productID),
        })),
      );
    };

    fetchProducts();
  }, [cartProducts]);

  useEffect(() => {
    const subscription = DataStore.observe(CartProduct).subscribe((msg) =>
      fetchCartProducts(),
    );
    return subscription.unsubscribe;
  }, []);

  useEffect(() => {
    const subscriptions = cartProducts.map((cp) =>
      DataStore.observe(CartProduct, cp.id).subscribe((msg) => {
        if (msg.opType === 'UPDATE') {
          setCartProducts((curCartProducts) =>
            curCartProducts.map((cp) => {
              if (cp.id !== msg.element.id) {
                console.log('differnt id');
                return cp;
              }
              console.log(msg);
              return {
                ...cp,
                ...msg.element,
              };
            }),
          );
        }
      }),
    );

    return () => {
      subscriptions.forEach((sub) => sub.unsubscribe());
    };
  }, [cartProducts]);

  const totalPrice = cartProducts.reduce(
    (summedPrice, product) =>
      summedPrice + (product?.price || 0) * product.quantity,
    0,
  );

  const onCheckout = () => {
    navigation.navigate('CheckoutAddressScreen', {totalPrice});
  };

  if (cartProducts.filter((cp) => !cp.product).length !== 0) {
    return <ActivityIndicator />;
  }

  return (
    <View style={{padding: 10}}>
      {/* Render Product Componet */}
      <FlatList
        data={cartProducts}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            <Text style={{fontSize: 18}}>
              Subtotal ({cartProducts.length} items):{' '}
              <Text style={{color: '#e47911', fontWeight: 'bold'}}>
                ${totalPrice.toFixed(2)}
              </Text>
            </Text>
            <Button
              text="Proceed to checkout"
              onPress={onCheckout}
              containerStyles={{
                backgroundColor: '#f7e300',
                borderColor: '#c7b702',
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default ShoopingCartScreen;
