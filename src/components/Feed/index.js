import React, {useEffect, useState} from 'react';
import {Button, FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import Amplify, {Auth, DataStore} from 'aws-amplify';
import {
  CartProduct,
  FoodCategory,
  Location,
  LocationMenu,
  Product,
  User,
} from '../../../models';
import filter from 'lodash.filter';
import {useNavigation} from '@react-navigation/native';
import 'react-native-get-random-values';
import LocationComponent from '../LocationComponent';
import Cart from '../Cart';

const Feed = () => {
  const [locations, setLocations] = useState([]);
  const [products, setProducts] = useState([]);
  const [foodCategories, setFoodCategories] = useState([]);
  const [query, setQuery] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    fetchLocations();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchLocations = async () => {
    try {
      const postsData = await DataStore.query(Location);
      setLocations(postsData);
    } catch (e) {
      console.log(e.message);
    }
  };

  const fetchCategory = async () => {
    try {
      const foodCats = await DataStore.query(FoodCategory);
      setFoodCategories(foodCats);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchProducts = async () => {
    try {
      const postProducts = await DataStore.query(Product);
      setProducts(postProducts);
      console.log(postProducts);
    } catch (e) {
      console.log('Akshat' + e);
    }
  };

  // Amplify.Logger.LOG_LEVEL = 'DEBUG';
  const addProduct = () => {
    Amplify.Logger.LOG_LEVEL = 'DEBUG';
    const newProd = new Product({
      name: 'bocadillo-de-queso',
      categoryID: foodCategories[0].id,
      description:
        'Bocadillo de queso is a Spanish sandwich that consists of Spanish bread and slices of cheese. Due to the simplicity of the sandwich, both the bread and the cheese used for the preparation of this bocadillo variety must be of excellent quality.',
      primaryImage:
        'https://cdn.tasteatlas.com/images/dishes/115585fc576540be9f1ef08e69416132.jpg?mw=1300',
      images: ['asdasdasdas', 'asdasdasdas', 'Asdasdasdas'],
    });
    // const newLocation = new Location({
    //   name: 'SAN JOSE (HILLSDALE)',
    //   street: '1795 Hillsdale Ave',
    //   city: 'San Jose',
    //   state: 'California',
    //   zip: '95124',
    //   phone: '(408) 622-8602',
    //   latitude: 37.1851336,
    //   longitude: -122.1193851,
    // });
    try {
      DataStore.save(newProd).then((x) => console.log('Akshat' + x.id));
    } catch (e) {
      console.log('Error retrieving posts', e);
    }
    console.log('Product added');
  };

  function addCategory() {
    Amplify.Logger.LOG_LEVEL = 'DEBUG';
    const newCat = new FoodCategory({type: 'Beverages'});
    try {
      DataStore.save(newCat).then((cat) => console.log(cat.id));
    } catch (e) {
      console.log('Catt added');
    }
  }

  const addLocationMenu = () => {
    const newLocationMenu = new LocationMenu({
      location: locations[0],
      product: products[0],
      price: 12.99,
      Stock: 200,
    });
    try {
      DataStore.save(newLocationMenu).then((lm) => console.log(lm.id));
    } catch (e) {
      console.log(e);
    }
  };

  const deleteUser = async () => {
    Amplify.Logger.LOG_LEVEL = 'DEBUG';
    const userData = await Auth.currentAuthenticatedUser();
    DataStore.delete(User, (u) =>
      u.name('eq', userData.attributes.sub),
    ).then((x) => console.log('User Deleted'));
  };

  const logOut = () => {
    Auth.signOut();
  };

  const addUser = async () => {
    Amplify.Logger.LOG_LEVEL = 'DEBUG';
    const userData = await Auth.currentAuthenticatedUser();

    console.log(userData);
    if (!userData) {
      return;
    }

    const address = [
      {
        id: 'ChIJ9VvIyDJHjoARwuP1LsYFUFg',
        add: '211 Bean Creek Road, Apt 13, Scotts Valley, CA, 95066',
        isSelected: 'true',
      },
      {
        id: 'ChIJp8gD5NSYj4ARAFTFjJW5xSI',
        add: '1067 Shell Blvd, Foster City, CA, 94404',
        isSelected: 'false',
      },
      {
        id: 'ChIJ2dy7A34sDogRpCDXCawRnLI',
        add: '2001 South Michigan Avenue, Chicago, IL, 60606',
        isSelected: 'false',
      },
    ];

    const addressString = JSON.stringify(address);
    const newUser = new User({
      name: userData.attributes.sub,
      email: userData.attributes.email,
      addresses: addressString,
    });
    try {
      await DataStore.save(newUser);
    } catch (e) {
      console.log(e);
    }
  };

  const toAddressScreen = () => {
    navigation.navigate('Address');
  };

  const clearDataStore = () => {
    DataStore.clear();
  };

  const addCartProduct = async () => {
    const userData = await Auth.currentAuthenticatedUser();
    if (!userData) {
      return;
    }

    const newCarProduct = new CartProduct({
      userSub: userData.attributes.sub,
      quantity: 2,
      product: products[0],
    });
    // const newCartProduct = new CartProduct({ userSub: userData.attributes.sub,
    //   2,
    //   option: selectedOption,
    //   productID: product.id,});
    try {
      DataStore.save(newCarProduct).then((cp) => console.log(cp.id));
    } catch (e) {
      console.log(e);
    }
  };

  const handleSearch = (text) => {
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(locations, (location) => {
      return contains(location, formattedQuery);
    });
    setLocations(filteredData);
    setQuery(text);
  };

  const contains = ({zip}, sear) => {
    console.log(zip);
    if (zip.includes(sear)) {
      return true;
    }
    return false;
  };

  const onAddToCart = async () => {
    const postsData = await DataStore.query(Product);
    const userData = await Auth.currentAuthenticatedUser();
    const quantity = 2;
    console.log(postsData[0]);
    const productID = postsData[0].id;
    if (!userData) {
      return;
    }
    console.log(userData.attributes.sub);
    console.log(quantity);
    console.log(productID);
    Amplify.Logger.LOG_LEVEL = 'DEBUG';

    const newCartProduct = new CartProduct({
      userSub: userData.attributes.sub,
      quantity,
      // productID: postsData[0].id,
      product: postsData[0],
    });
    try {
      DataStore.save(newCartProduct).then((x) => console.log('Akshat' + x.id));
    } catch (e) {
      console.log('Error retrieving posts', e);
    }
  };

  return (
    <SafeAreaView>
      {/*<View style={styles.Header}>*/}
      {/*  <View style={styles.Container}>*/}
      {/*    <View style={styles.inputView}>*/}
      {/*      <Icon name="search" size={25} style={styles.IconInputColor} />*/}
      {/*      <TextInput*/}
      {/*        placeholder="Search by ZIP"*/}
      {/*        style={styles.input}*/}
      {/*        autoCapitalize="none"*/}
      {/*        autoCorrect={false}*/}
      {/*        clearButtonMode="always"*/}
      {/*        value={query}*/}
      {/*        onChangeText={(queryText) => handleSearch(queryText)}*/}
      {/*      />*/}
      {/*    </View>*/}
      {/*  </View>*/}
      {/*  <View style={styles.ContainerMap}>*/}
      {/*    <Icon name="map-marker" size={30} style={styles.IconMapColor} />*/}
      {/*  </View>*/}
      {/*  <View style={styles.ContainerFilter}>*/}
      {/*    <Icon name="filter" size={30} style={styles.Icon} />*/}
      {/*  </View>*/}
      {/*</View>*/}

      <View style={styles.listContainer}>
        <FlatList
          data={locations}
          renderItem={({item}) => <LocationComponent location={item} />}
          keyExtractor={({id}) => id}
        />
      </View>
      <View>
        <Button title="Create Sample Cart" onPress={onAddToCart} />
      </View>
      <View>
        <Cart />
      </View>
    </SafeAreaView>

    // <SafeAreaView>
    //   <View>
    //     <FlatList
    //       data={locations}
    //       renderItem={({item}) => <Post post={item} />}
    //       keyExtractor={({id}) => id}
    //       ListHeaderComponent={Stories}
    //     />
    //   </View>
    //
    //   <View>
    //     <Button title="Add USer" onPress={addUser} />
    //   </View>
    //   <View>
    //     <Button title="To Address Screen" onPress={toAddressScreen} />
    //   </View>
    //   <View>
    //     <Button title="Clear Data Store" onPress={clearDataStore} />
    //   </View>
    //   <View>
    //     <Button title="Delete User" onPress={deleteUser} />
    //   </View>
    //   <View>
    //     <Button title="Log Out" onPress={logOut} />
    //   </View>
    // </SafeAreaView>
    // <Button title="Add Location Menu" onPress={addLocationMenu} />
    // <Button title="Add Cart Product" onPress={addCartProduct} />

    // <Button title="Add Cateogry" onPress={addCategory} />
  );
};

const styles = StyleSheet.create({
  Header: {
    paddingHorizontal: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    marginVertical: 10,
    backgroundColor: '#653780',
    flexWrap: 'wrap',
  },
  Container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    height: 50,
    marginVertical: 15,
    paddingHorizontal: 5,
    flexDirection: 'column',
  },
  inputView: {
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    backgroundColor: '#fff',
    elevation: 2,
    height: 50,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  input: {
    fontFamily: 'System',
    paddingHorizontal: 10,
    fontSize: 20,
  },
  ContainerMap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    height: 50,
    marginVertical: 10,
  },
  ContainerFilter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    height: 80,
    marginVertical: 0,
    borderLeftWidth: 5,
    borderLeftColor: '#fff',
  },
  Icon: {
    marginTop: -10,
    color: '#fff',
  },
  IconMapColor: {
    color: '#fff',
  },
  IconInputColor: {
    color: '#653780',
  },
  listContainer: {
    width: '100%',
  },
});

export default Feed;
