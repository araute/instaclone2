import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {Auth, DataStore} from 'aws-amplify';
import {User} from '../../../models';

function SafeNewAddress({route}) {
  const [userAddress, setUserAddress] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetchUserAddress();
  }, []);

  const fetchUserAddress = async () => {
    const getUserData = await Auth.currentAuthenticatedUser();
    console.log(getUserData.attributes.sub);
    // const result = await DataStore.query(
    //   User,
    //   `"${getUserData.attributes.sub}"`,
    // );
    const resultSet = (await DataStore.query(User)).filter(
      (x) => x.name === getUserData.attributes.sub,
    );

    setCurrentUser(resultSet[0]);
    const addressArray = JSON.parse(resultSet[0].addresses);
    setUserAddress(addressArray);
  };

  const saveAddress = async () => {
    try {
      const updatedArray = userAddress.map((obj) => {
        return {...obj, isSelected: false};
      });

      const newAddress = {
        id: route.params.placeId,
        add: route.params.address,
        isSelected: true,
      };

      const arrayWithNewAddressString = JSON.stringify(
        [newAddress].concat(updatedArray),
      );
      console.log(arrayWithNewAddressString);
      // setCurrentUser(user => {
      //   ...user, {addresses : arrayWithNewAddress}
      // });

      setUserAddress((addresses) => [newAddress, ...addresses]);
      await DataStore.save(
        User.copyOf(currentUser, (user) => {
          user.addresses = arrayWithNewAddressString;
        }),
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView>
      <View>
        <Text>{route.params.address}</Text>
      </View>
      <View>
        <Text>{route.params.placeId}</Text>
      </View>
      <View>
        <Button title="Save Address" onPress={saveAddress} />
      </View>
    </SafeAreaView>
  );
}

export default SafeNewAddress;
