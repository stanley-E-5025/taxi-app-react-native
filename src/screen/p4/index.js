import React, {useState} from 'react';
import {Text, View, Pressable, SafeAreaView} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {useNavigation, useRoute} from '@react-navigation/native';
import MapViewDirections from 'react-native-maps-directions';
import styles from './styles';
const GOOGLE_MAPS_APIKEY = 'AIzaSyDC5YeK0OuXzBkkpcdYF71wTjtIGVV4NgE';
import Icon from 'react-native-vector-icons/FontAwesome';
import map from '../map-style';
import {createOrder} from '../../graphql/mutations';
import LottieView from 'lottie-react-native';
import {listCars} from '../../graphql/queries';

import {API, graphqlOperation, Auth} from 'aws-amplify';

// constantes para las coordenadas  de punto A y B
const P4 = () => {
  const [allinfo, setAllinfo] = useState({
    distance: 10,
    duration: 1000,
  });
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
  console.log(route.params.text);
  // constante para la funcion de los botones
  const navigation = useNavigation();

  const move = () => {
    navigation.navigate('P1');
  };

  const confirmar = () => {
    navigation.navigate('P5', {
      destination,
      origins,
    });
  };

  const types = {
    type: 'taxi1',
  };

  const type = types.type;

  const order = async () => {
    try {
      const userInfo = await Auth.currentAuthenticatedUser();
      console.log(userInfo.username);

      const date = new Date();

      const input = {
        createdAt: date.toISOString(),
        type: userInfo.username,
        originLatitude: route.params.originPlace.details.geometry.location.lat,
        originLongitude: route.params.originPlace.details.geometry.location.lng,
        distance: distance,
        duration: duration,
        cost: tarifa,
        status: 'NEW',
        destLatitude:
          route.params.destinationPlace.details.geometry.location.lat,
        destLongitude:
          route.params.destinationPlace.details.geometry.location.lng,
        nota: route.params.text,
        userId: userInfo.username,
        carId: '1',
      };

      const response = await API.graphql(
        graphqlOperation(createOrder, {
          input,
        }),
      );
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };

  console.log(route.params.type.taxi);
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const info = (event) => {
    setAllinfo({
      distance: event.distance,
      duration: event.duration,
    });
  };

  // calculo para medir la distancia entre los A y B

  const distance = allinfo.distance.toFixed(1);
  const duration = allinfo.duration.toFixed(1);
  const durationClientside = allinfo.distance.toFixed(0);
  const cal = distance * 10;

  const tarifa = 80 + cal;
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <SafeAreaView>
      <MapView
        style={{height: '100%', width: '100%'}}
        customMapStyle={map}
        initialRegion={{
          latitude: route.params.gps.lat,
          longitude: route.params.gps.lon,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: origins.latitude,
            longitude: origins.longitude,
          }}
          image={require('./rr.png')}
        />

        <Marker
          coordinate={{
            latitude: destination.latitude,
            longitude: destination.longitude,
          }}
          image={require('./rr.png')}
        />
        <MapViewDirections
          origin={origins}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          onReady={info}
          strokeWidth={4}
          strokeColor="#ffffff"
        />
      </MapView>

      <View style={styles.contaier}>
        <Text style={styles.text2}>
          <Icon name="edit" size={15} color="#ffffff" />
          {'  '}
          confirmar orden
        </Text>
      </View>
      <View style={styles.contaier2}>
        <Text style={styles.text2}>
          <Icon name="safari" size={15} color="#ffffff" />
          {'  '}
          {durationClientside} Km{' '}
        </Text>
      </View>
      <View style={styles.contaier3}>
        <Text style={styles.text2}>
          <Icon name="database" size={15} color="#ffffff" />
          {'  '}
          {tarifa}C${' '}
        </Text>
      </View>

      <Pressable style={styles.presable} onPressIn={confirmar} onPress={order}>
        <Text style={styles.text3}>
          <Icon name="check-circle-o" size={15} color="#000000" />
          {'  '}
          confirmar
        </Text>
      </Pressable>

      <Pressable style={styles.presable2} onPress={move}>
        <Text style={styles.text3}>
          <Icon name="times-circle-o" size={15} color="#000000" />
          {'  '}
          cancelar
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default P4;
