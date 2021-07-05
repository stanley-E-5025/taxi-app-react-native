import React, {useState, useEffect, memo} from 'react';
import {View, TextInput, SafeAreaView, Text, Pressable} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

navigator.geolocation = require('@react-native-community/geolocation');
navigator.geolocation = require('react-native-geolocation-service');

import styles from './styles.js';
import PlaceRow from './PlaceRow';

const P3 = (props) => {
  const route = useRoute();
  const navigation = useNavigation();

  const [text, onChangeText] = React.useState('');
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);
  const [gg, setGg] = useState(true);
  const gps = {
    lat: route.params.lat,
    lon: route.params.lon,
  };

  const type = {
    taxi: 'taxi',
  };

  const checkNavigation = () => {
    if (destinationPlace) {
      if (destinationPlace.details.geometry.location.lat === gps.lat) {
        navigation.navigate('P8', {
          originPlace,
          destinationPlace,
          gps,
          text,
          type,
        });
      } else {
        navigation.navigate('P4', {
          originPlace,
          destinationPlace,
          gps,
          text,
          type,
        });
      }
    }
  };

  useEffect(() => {
    checkNavigation();
  }, [originPlace, destinationPlace]);

  const workPlace = {
    description: 'Posición actual',
    geometry: {location: {lat: gps.lat, lng: gps.lon}},
  };
  const mapSelect = {
    description: 'fijar la ubicasion en el mapa',
    geometry: {location: {lat: gps.lat, lng: gps.lon}},
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <MapView
          style={{height: '100%', width: '100%'}}
          provider={PROVIDER_GOOGLE}
          showsMyLocationButton={false}
          showsCompass={false}
          initialRegion={{
            latitude: gps.lat,
            longitude: gps.lon,
            latitudeDelta: 0.0,
            longitudeDelta: 0.012,
          }}></MapView>
        <GooglePlacesAutocomplete
          placeholder="aqui?"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyDC5YeK0OuXzBkkpcdYF71wTjtIGVV4NgE',
            language: 'es',
            components: 'country:ni',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
          renderDescription={(data) => data.description || data.vicinity}
          predefinedPlaces={[workPlace]}
        />
        <GooglePlacesAutocomplete
          placeholder="donde?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
            console.log(details.geometry.location);
            console.log(destinationPlace);
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autocompleteContainer,
              top: 55,
            },
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyDC5YeK0OuXzBkkpcdYF71wTjtIGVV4NgE',
            language: 'es',
            components: 'country:ni',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
          predefinedPlaces={[mapSelect]}
        />

        {gg === false && (
          <View style={styles.info}>
            <Text style={styles.txt}>
              {' '}
              <Icon
                name="chatbox-ellipses-outline"
                size={20}
                color="#ffffff"
              />{' '}
              nota
            </Text>
          </View>
        )}

        {gg === false && (
          <TextInput
            style={[styles.drivertxt, {top: 450}]}
            onChangeText={onChangeText}
            value={text}
            placeholder="nota para elconductor"
          />
        )}

        <Pressable style={styles.input} onPress={() => setGg(!gg)}>
          <Text>
            <Icon name="chatbox-ellipses-outline" size={20} color="#000000" />{' '}
          </Text>
        </Pressable>
        {/* Circle near Origin input */}
        <View style={styles.circle}>
          <Text style={{color: '#FFFFFF'}}>A</Text>
        </View>

        {/* Line between dots */}
        <View style={styles.line} />

        {/* Square near Destination input */}
        <View style={styles.square}>
          <Text style={{color: '#FFFFFF'}}>B</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default P3;
