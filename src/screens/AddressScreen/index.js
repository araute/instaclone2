import React, {useEffect, useState} from 'react';
import {Auth, DataStore} from 'aws-amplify';
import {User} from '../../../models';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function AddressScreen(props) {
  const [userAddress, setUserAddress] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    if (userAddress) {
      console.log(userAddress);
    }
    fetchUserAddress();
  }, []);

  const fetchUserAddress = async () => {
    const getUserData = await Auth.currentAuthenticatedUser();
    const resultSet = (await DataStore.query(User)).filter(
      (x) => x.name === getUserData.attributes.sub,
    );
    let sortResults = [...JSON.parse(resultSet[0].addresses)];
    sortResults.sort(function (x, y) {
      return y - x;
    });
    const addressArray = JSON.parse(resultSet[0].addresses);
    setCurrentUser(resultSet[0]);
    setUserAddress(sortResults);
  };

  const setDefaultAddress = async (selectedId) => {
    console.log(selectedId);
    // Make isSelected  = false for the rest
    let updatedArray = userAddress.map((obj) => {
      if (obj.id !== selectedId) {
        return {...obj, isSelected: false};
      } else {
        return {...obj, isSelected: true};
      }
    });
    let obj = [...updatedArray];
    obj.sort(function (x, y) {
      return y - x;
    });
    console.log(obj);
    console.log(currentUser);
    setUserAddress(obj);
    setSelectedId(selectedId);
    try {
      await DataStore.save(
        User.copyOf(currentUser, (user) => {
          user.addresses = JSON.stringify(obj);
        }),
      );
    } catch (e) {
      console.log(e);
    }
  };

  const renderItem = ({item}) => {
    // console.log(item);
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';
    return (
      <Item
        item={item}
        onPress={() => setDefaultAddress(item.id)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

  const Item = ({item, onPress, backgroundColor, textColor}) => (
    <View key={item.id}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.add}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={userAddress}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default AddressScreen;
