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

  const [notestate, setNotestate] = useState(false);
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
            listView: styles.listView2,
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
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput2,
            container: {
              ...styles.autocompleteContainer3,
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

        <TextInput
          style={styles.textInput3}
          onChangeText={onChangeText}
          value={text}
          placeholder="direccion escrita "
        />

        {show === true && (
          <View style={styles.infoView}>
            {/* arrow */}

            {notestate === false && (
              <>
                <TouchableOpacity style={styles.arrow} onPress={floatWindow}>
                  <Icon
                    name="md-arrow-forward-sharp"
                    size={30}
                    color="#286EFA"
                  />
                </TouchableOpacity>

                {/* info  */}

                <View style={styles.destino}>
                  <Text style={styles.title}>
                    {destinationPlace.details.name}
                  </Text>

                  <Text style={{color: '#000'}}>
                    {destinationPlace.details.formatted_address}
                  </Text>
                  <Text style={{color: '#000', fontSize: 13.2}}>
                    <Icon name="md-radio-button-on" size={10} color="#000" />{' '}
                    {text === '' && '...........'}
                    {text != '' && text}
                  </Text>
                </View>
                {/* bottom bar  */}
                <TouchableOpacity
                  style={styles.note}
                  onPress={() => setNotestate(true)}>
                  <Text style={styles.notetxt}>
                    {' '}
                    <Icon name="add-outline" size={20} color="#286EFA" />
                    agregar nota{' '}
                  </Text>
                </TouchableOpacity>
              </>
            )}

            {notestate === true && (
              <>
                <Text style={styles.noteTxtTitle}>escribe una nota</Text>
                <Text style={styles.noteTxt}>
                  <TouchableOpacity onPress={() => setNotestate(false)}>
                    <Text>
                      <Icon name="send" size={25} color="#286EFA" />
                    </Text>
                  </TouchableOpacity>
                </Text>
                <TextInput
                  style={styles.drivertxt}
                  onChangeText={onChangeText}
                  value={text}
                  placeholder="nota para el conductor"
                />
              </>
            )}
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

        <View style={styles.line2} />
        <View style={styles.square3}>
          <Text style={{color: '#FFFFFF'}}>C</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default P3;
