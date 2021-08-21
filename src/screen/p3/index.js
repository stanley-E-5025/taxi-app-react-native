import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
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
  const [show, setSow] = React.useState(false);
  const [text, onChangeText] = React.useState('');
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);
  const [nota, setNota] = React.useState(false);
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
        setSow(true);
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
    description: 'fijar la ubicación  en el mapa',
    geometry: {location: {lat: gps.lat, lng: gps.lon}},
  };

  const floatWindow = () => {
    navigation.navigate('P4', {
      originPlace,
      destinationPlace,
      gps,
      text,
      type,
    });
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
          placeholder="origen"
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
          placeholder="destino"
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

        {show === true && (
          <View style={styles.infoView}>
            {/* arrow */}

            <TouchableOpacity style={styles.arrow} onPress={floatWindow}>
              <Icon name="md-arrow-forward-sharp" size={30} color="#ffffff" />
            </TouchableOpacity>

            {/* info  */}

            <View style={styles.destino}>
              <Text style={styles.title}>{destinationPlace.details.name}</Text>

              <Text style={{color: '#fff'}}>
                {destinationPlace.details.formatted_address}
              </Text>
            </View>
            {/* bottom bar  */}
          </View>
        )}

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

        <TouchableOpacity style={styles.note} onPress={() => setNota(true)}>
          <Icon name="ios-chatbubble-ellipses-outline" size={25} color="#fff" />
        </TouchableOpacity>
        {nota === true && (
          <View style={styles.driverNote}>
            <Text style={{margin: 15, fontWeight: 'bold', fontSize: 21}}>
              escribe un nota
            </Text>
            <TextInput
              style={[styles.drivertxt]}
              onChangeText={onChangeText}
              value={text}
              placeholder="nota para el conductor"
            />
            <TouchableOpacity
              style={styles.save}
              onPress={() => setNota(false)}>
              <Text style={{color: '#FFFFFF'}}>guardar</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default P3;
