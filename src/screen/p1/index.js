import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Pressable, Text, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import styles from './styles';
import Bt from './main';
import {useRoute, useNavigation} from '@react-navigation/core';
import {withAuthenticator} from 'aws-amplify-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {API, graphqlOperation} from 'aws-amplify';
import {listCars} from '../../graphql/queries';
import {onUpdateCar} from '../../graphql/subscriptions';

const P1 = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const lat = route.params.lat;
  const lon = route.params.lon;
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await API.graphql(
          graphqlOperation(listCars, {filter: {type: {eq: 'taxi'}}}),
        );
        setCars(response.data.listCars.items);
      } catch (e) {
        console.error(e);
      }
    };

    const onUpdate = API.graphql(graphqlOperation(onUpdateCar)).subscribe({
      next: (data) => {
        fetchCars();
      },
    });

    fetchCars();
  }, []);

  const getImage = (type) => {
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
          showsCompass={false}
          initialRegion={{
            latitude: route.params.lat,
            longitude: route.params.lon,
            latitudeDelta: 0.0,
            longitudeDelta: 0.11,
          }}>
          {cars.map((car) => (
            <Marker
              key={car.id}
              coordinate={{
                latitude: car.latitude,
                longitude: car.longitude,
              }}>
              <Image
                style={{width: 35, height: 35, resizeMode: 'contain'}}
                source={getImage(car.type)}
              />
            </Marker>
          ))}
        </MapView>

        <Bt />
        <Pressable
          onPress={() =>
            navigation.navigate('P2', {
              lat,
              lon,
            })
          }
          style={styles.presable}>
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

export default withAuthenticator(P1);
