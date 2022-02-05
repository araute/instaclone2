import React from 'react';
import Menu from '../../components/Menu';
import {View} from 'react-native';

const MenuScreen = ({route, navigation}) => {
  const {locationId} = route.params;
  return (
    <View>
      <Menu locationId={locationId} />
    </View>
  );
};

export default MenuScreen;
