import React from 'react';
import {Text, View, Pressable, SafeAreaView} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {useNavigation, useRoute} from '@react-navigation/native';
import MapViewDirections from 'react-native-maps-directions';
import styles from './styles';
const GOOGLE_MAPS_APIKEY = 'AIzaSyDC5YeK0OuXzBkkpcdYF71wTjtIGVV4NgE';
import Icon from 'react-native-vector-icons/FontAwesome';
// constantes para las coordenadas  de punto A y B
const P4 = () => {
  const route = useRoute();
  const origins = {
    latitude: route.params.originPlace.details.geometry.location.lat,
    longitude: route.params.originPlace.details.geometry.location.lng,
  };

  const destination = {
    latitude: route.params.destinationPlace.details.geometry.location.lat,
    longitude: route.params.destinationPlace.details.geometry.location.lng,
  };
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // constante para la funcion de los botones
  const navigation = useNavigation();

  const move = () => {
    navigation.navigate('P1');
  };

  const confirmar = () => {
    navigation.navigate('P5', {
      sin,
      destination,
      origins,
    });
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // calculo para medir la distancia entre los A y B

  Number.prototype.toRad = function () {
    return (this * Math.PI) / 180;
  };

  var lat2 = origins.latitude;
  var lon2 = origins.longitude;
  var lat1 = destination.latitude;
  var lon1 = destination.longitude;

  var R = 6371;
  var x1 = lat2 - lat1;
  var dLat = x1.toRad();
  var x2 = lon2 - lon1;
  var dLon = x2.toRad();
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1.toRad()) *
      Math.cos(lat2.toRad()) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  var sin = d.toFixed(0);
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <SafeAreaView>
      <MapView
        style={{height: '100%', width: '100%'}}
        initialRegion={{
          latitude: route.params.gps.lat,
          longitude: route.params.gps.lon,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>


<Marker
  coordinate={{ latitude : origins.latitude, longitude : origins.longitude}}
  image={require('./f.png')}
/>


<Marker
  coordinate={{ latitude : destination.latitude, longitude : destination.longitude}}
  image={require('./f.png')}
/>
        <MapViewDirections
          origin={origins}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={4}
          strokeColor="#000000"
        />
      </MapView>
      <View style={styles.contaier}>
        <Text style={styles.Text}>
          {' '}
          <Icon name="edit" size={20} color="#ffffff" /> quieres confirmar la
          orden con esta ubicasion ?{' '}
        </Text>
        <Text style={styles.km}>{sin} km</Text>
        <View style={styles.op}>
          <Pressable style={styles.presable} onPress={confirmar}>
            <Text style={styles.text2}>
              <Icon name="check-circle-o" size={20} color="#080808" /> confirmar
            </Text>
          </Pressable>

          <Pressable style={styles.presable}>
            <Text style={styles.text2} onPress={move}>
              <Icon name="times-circle-o" size={20} color="#080808" /> cancelar
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default P4;