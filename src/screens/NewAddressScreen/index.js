import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useNavigation} from '@react-navigation/native';

function NewAddressScreen(props) {
  const [selectedAddress, setSelectedAddress] = useState(null);

  useEffect(() => {
    if (selectedAddress) {
      navigation.navigate('SaveNewAddress', selectedAddress);
    }
  }, [selectedAddress]);

  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 35, flex: 1}}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        minLength={2} // minimum length of text to search
        autoFocus={false}
        returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
        listViewDisplayed="auto" // true/false/undefined
        fetchDetails={true}
        currentLocation={true}
        currentLocationLabel="Current Location"
        renderDescription={(row) => row.description} // custom description render
        onPress={(data, details) => {
          console.log(data);
          console.log(details);

          let updatedValues = {
            address: details.formatted_address,
            placeId: details.place_id,
          };
          setSelectedAddress(updatedValues);
        }}
        getDefaultValue={() => {
          return ''; // text input default value
        }}
        query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
          key: 'AIzaSyA0aj_gd2ClA00gLIgteiwTIlyXTzFw87o',
          language: 'en', // language of the results
        }}
        styles={{
          description: {
            fontWeight: 'bold',
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
        //currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
        nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
        GoogleReverseGeocodingQuery={
          {
            // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
          }
        }
        GooglePlacesSearchQuery={{
          // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
          rankby: 'distance',
        }}
        // filterReverseGeocodingByTypes={[
        //   'locality',
        // ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
        debounce={200}
      />
    </View>
  );
}

export default NewAddressScreen;
