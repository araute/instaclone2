import React, {useEffect, useState} from 'react';
import {ScrollView, Text} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './styles';
import {Auth, DataStore} from 'aws-amplify';
import {CartProduct, Product} from '../../../models';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';

function ProductDetailScreen(props) {
  const [product, setProduct] = useState(undefined);
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    if (!route.params?.id) {
      return;
    }
    DataStore.query(Product, route.params?.id).then(setProduct);
    console.log(product);
    // }, [route.params?.id])
  }, [route.params?.id]);

  const onAddToCart = async () => {
    const userData = await Auth.currentAuthenticatedUser();
    console.log(userData.attributes.sub);
    console.log(product.id);

    if (!product || !userData) {
      return;
    }

    const newCartProduct = new CartProduct({
      userSub: userData.attributes.sub,
      price: route.params?.price,
      quantity,
      product,
    });

    try {
      await DataStore.save(newCartProduct);
      navigation.navigate('shoppingCart');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product?.name}</Text>
      {/* Price */}
      {/* <Text style={styles.price}>
        from ${product.price.toFixed(2)}
        {product.oldPrice && (
          <Text style={styles.oldPrice}> ${product.oldPrice.toFixed(2)}</Text>
        )}
      </Text> */}

      {/*Description */}
      <Text style={styles.description}>{product?.description}</Text>

      {/* Qunatiti selector */}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

      {/* Button */}
      <Button
        text={'Add To Cart'}
        onPress={onAddToCart}
        containerStyles={{backgroundColor: '#e3c905'}}
      />
      <Button
        text={'Buy Now'}
        onPress={() => {
          console.warn('Buy now');
        }}
      />
    </ScrollView>
  );
}

export default ProductDetailScreen;
