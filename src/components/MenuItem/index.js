import React, {useEffect} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

function MenuItem({locationProduct}) {
  const {Stock, price, product} = locationProduct;
  const navigation = useNavigation();
  useEffect(() => {
    console.log(locationProduct);
  }, []);
  return (
    <Pressable
      style={styles.Row}
      onPress={() =>
        navigation.navigate('ProductDetailScreen', {id: product?.id})
      }>
      <View>
        <Text style={styles.Title}>{product?.name}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{flex: 1, flexWrap: 'wrap'}}>
            {product?.description}
          </Text>
        </View>
      </View>
      <Image
        source={{
          uri: product?.primaryImage,
        }}
        style={{width: 200, height: 200}}
      />
      <View style={styles.ButtonContainer}>
        <Image style={styles.image} source={{uri: product?.primaryImage}} />
      </View>
    </Pressable>
  );
}

export default MenuItem;
