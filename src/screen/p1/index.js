import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Pressable,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import styles from './styles';
import Bt from './main';
import {useRoute, useNavigation} from '@react-navigation/core';
import {withAuthenticator} from 'aws-amplify-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import map from '../map-style';

import {API, graphqlOperation, Auth} from 'aws-amplify';
import {listCars, listTodos} from '../../graphql/queries';

const P1 = () => {
  const route = useRoute();

  const [lat, setLat] = useState(route.params.lat);
  const [lon, setLon] = useState(route.params.lon);
  const [cars, setCars] = useState([]);
  /////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await API.graphql(graphqlOperation(listCars));
        setCars(response.data.listCars.items);
        console.log(cars);
      } catch (e) {
        console.error(e);
      }
    };
    fetchCars();
  }, []);
  /////////////////////////////////////////////////////////////////////////////
  const navigation = useNavigation();
  /////////////////////////////////////////////////////////////////////////////
  const move = () => {
    navigation.navigate('P2', {
      lat,
      lon,
    });
  };

  const gps = (event) => {
    const lat = event.nativeEvent.coordinate.latitude;
    const lon = event.nativeEvent.coordinate.longitude;
    setLat(lat);
    setLon(lon);
  };

  const infouser = Auth.currentAuthenticatedUser({bypassCache: true});

  console.log(infouser);

  const data = API.graphql(
    graphqlOperation(listTodos, {
      username: Auth.currentAuthenticatedUser,
    }),
  );
  console.log(data);

  const getImage = (type) => {
    if (type === 'taxi1') {
      return require('./car.png');
    }
    if (type === 'taxi') {
      return require('./car.png');
    }
    return require('./car.png');
  };

  if (route.params.lat === 0) {
    alert('asegurarte de que el gps esta activado');
  }

  const MyCustomMarkerView = (marker) => {
    return (
      <View style={styles.custom}>
        <Text style={styles.text21}>tu</Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View style={styles.view}>
        <MapView
          style={{height: '100%', width: '100%'}}
          provider={PROVIDER_GOOGLE}
          showsCompass={false}
          initialRegion={{
            latitude: route.params.lat,
            longitude: route.params.lon,
            latitudeDelta: 0.0,
            longitudeDelta: 0.11,
          }}>
          <Marker
            coordinate={{
              latitude: route.params.lat,
              longitude: route.params.lon,
            }}>
            <MyCustomMarkerView {...MyCustomMarkerView} />
          </Marker>

          {cars.map((car) => (
            <Marker
              key={car.id}
              coordinate={{
                latitude: car.latitude,
                longitude: car.longitude,
              }}>
              <Image
                style={{width: 50, height: 50, resizeMode: 'contain'}}
                source={getImage(car.type)}
              />
            </Marker>
          ))}
        </MapView>

        <View>
          <MapView
            style={{height: 0, width: 0}}
            provider={PROVIDER_GOOGLE}
            onUserLocationChange={gps}
            showsUserLocation={true}
            showsCompass={false}
            initialRegion={{
              latitude: route.params.lat,
              longitude: route.params.lon,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}></MapView>
        </View>
        <Bt />
        <Pressable onPress={move} style={[styles.presable, {bottom: 15}]}>
          <Text style={styles.text}>
            <Icon name="map" size={20} color="#ffffff" /> pedir
          </Text>
        </Pressable>

        <Pressable
          style={styles.historial}
          onPress={() => navigation.navigate('List')}>
          <Text>
            <Icon name="clock-o" size={25} color="#000000" />
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default P1;
