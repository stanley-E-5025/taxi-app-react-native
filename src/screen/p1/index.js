import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Pressable, Text, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import styles from './styles';
import Bt from './main';
import {useRoute, useNavigation} from '@react-navigation/core';
import {withAuthenticator} from 'aws-amplify-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import map from '../map-style';

import {API, graphqlOperation} from 'aws-amplify';
import {listCars} from '../../graphql/queries';

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

  const getImage = (type) => {
    if (type === 'taxi1') {
      return require('./car.png');
    }
    if (type === 'taxi') {
      return require('./car.png');
    }
    return require('./car.png');
  };
  return (
    <SafeAreaView>
      <View style={styles.view}>
        <MapView
          style={{height: '100%', width: '100%'}}
          provider={PROVIDER_GOOGLE}
          onUserLocationChange={gps}
          showsMyLocationButton={true}
          customMapStyle={map}
          showsUserLocation={true}
          showsCompass={false}
          initialRegion={{
            latitude: route.params.lat,
            longitude: route.params.lon,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
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
        <Bt />
        <Pressable onPress={move} style={[styles.presable, {bottom: 30}]}>
          <Text style={styles.text}>
            <Icon name="map" size={25} color="#ffffff" /> pedir
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default withAuthenticator(P1);
