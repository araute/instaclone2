import React, {useState} from 'react';
import {
  Linking,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import getDistance from 'geolib/es/getDistance';
import Geolocation from '@react-native-community/geolocation';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

function LocationComponent({location}) {
  const iconSize = 30;
  const [currentLatitude, setCurrentLatitude] = useState('...');
  const [currentLongitude, setCurrentLongitude] = useState('...');
  const navigation = useNavigation();

  const showLocationOnMap = () => {
    const scheme = Platform.OS === 'ios' ? 'maps:0,0?q=' : 'geo:0,0?q=';
    const latLang = `${location.latitude},${location.longitude}`;
    const label = `${location.name}`;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLang}`,
      android: `${scheme}${latLang}(${label})`,
    });
    Linking.openURL(url);
  };

  const calculateDistance = (location) => {
    Geolocation.getCurrentPosition(
      (position) => {
        setCurrentLatitude(position.coords.latitude);
        setCurrentLongitude(position.coords.longitude);
      },
      (error) => console.log('Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );

    var dis = getDistance(
      {latitude: currentLatitude, longitude: currentLongitude},
      {latitude: location.latitude, longitude: location.longitude},
    );
    return `${dis / 1000} km`;
  };
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Menu', {locationId: location.id})}
      style={styles.Row}>
      <Text style={styles.Title}>{location.name}</Text>
      <Text
        style={
          styles.Subtitle
        }>{`${location.street} ${location.city} ${location.state} ${location.zip}`}</Text>
      <View style={styles.Container}>
        <Text style={styles.Distance}>{calculateDistance(location)}</Text>
        <Pressable
          onPress={() => {
            Linking.openURL(`tel:${location.phone}`).catch((err) => {
              console.log('An error occured', err);
            });
          }}>
          <Text style={styles.Phone}>{location.phone}</Text>
        </Pressable>
      </View>
      <View style={styles.ButtonContainer}>
        <Icon
          name="map-marker"
          size={35}
          color={'#653780'}
          onPress={showLocationOnMap}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Row: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    marginVertical: 5,
    backgroundColor: '#fff',
    flexWrap: 'wrap',
    height: 125,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  Title: {
    fontFamily: 'System',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    alignSelf: 'flex-start',
    lineHeight: 25,
  },
  Subtitle: {
    fontFamily: 'System',
    fontSize: 16,
    alignSelf: 'flex-start',
    width: '65%',
    lineHeight: 25,
  },
  Container: {
    flex: 1,
    flexDirection: 'row',
    fontFamily: 'System',
    fontSize: 16,
    alignSelf: 'flex-start',
    width: '65%',
  },
  Distance: {
    color: '#000',
    fontSize: 16,
    marginRight: 10,
    lineHeight: 25,
  },
  Phone: {
    color: '#1e90ff',
    fontSize: 16,
    lineHeight: 25,
  },
  ButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: 60,
    height: 60,
    marginVertical: 20,
    marginHorizontal: 55,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
});

export default LocationComponent;
