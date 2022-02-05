import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {DataStore} from 'aws-amplify';
import {LocationMenu} from '../../../models';
import MenuItem from '../MenuItem';
import Cart from '../Cart';

function Menu({locationId}) {
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    fetchMenuByLocation();
    console.log(locationId);
  }, [fetchMenuByLocation, locationId]);

  const fetchMenuByLocation = async () => {
    try {
      setMenuItems(
        (await DataStore.query(LocationMenu)).filter(
          (lm) => lm.location.id === locationId,
        ),
      );
      console.log(menuItems);
    } catch (e) {
      console.log('Error retrieving Menu' + e);
    }
  };

  function clearDataStoreCache() {
    DataStore.clear();
  }

  return (
    <SafeAreaView>
      <View>
        <Button title="Clear DataStore" onPress={clearDataStoreCache} />
      </View>
      <ScrollView>
        <FlatList
          data={menuItems}
          renderItem={({item}) => <MenuItem locationProduct={item} />}
          keyExtractor={({id}) => id}
        />
      </ScrollView>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Cart />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
});

export default Menu;
