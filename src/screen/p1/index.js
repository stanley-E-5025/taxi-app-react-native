import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Pressable,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import styles from './styles';
import Bt from './main';
import {useRoute, useNavigation} from '@react-navigation/core';
import Icon from 'react-native-vector-icons/FontAwesome';
import {API, Auth, graphqlOperation} from 'aws-amplify';
import {listCars, listOrders, listCarInfos} from '../../graphql/queries';

import {onUpdateCar} from '../../graphql/subscriptions';

const P1 = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const lat = route.params.lat;
  const lon = route.params.lon;
  const [cars, setCars] = useState([]);
  const [orders, setOrders] = useState([]);
  const [Users, setUsers] = useState([]);
  const [CarInfoId, setCaInfoId] = useState([]);

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
    checkOrder();
  }, []);

  const checkOrder = async () => {
    // fetch Orders
    try {
      const userInfo = await Auth.currentAuthenticatedUser();
      const User = userInfo.username;
      setUsers(User);
      const response = await API.graphql(
        graphqlOperation(listOrders, {filter: {type: {eq: Users}}}),
      );
      setOrders(response.data.listOrders.items);
      if (response.data.listOrders.items[0] === undefined) {
        console.log('no orders on background');
      }
    } catch (e) {
      console.error(e);
    }
  };

  if (orders !== []) {
    // check if order is ongoing state
    orders.map((data) => {
      if (data.status === 'ongoing') {
        // get information about lost order and car to re take order
        const getcars = async () => {
          try {
            const carData = await API.graphql(
              graphqlOperation(listCarInfos, {filter: {place: {eq: data.id}}}),
            );

            const drivers = carData.data.listCarInfos.items;
            if (drivers !== []) {
              const latA = route.params.lat;
              const lonA = route.params.lon;

              const cost = data.cost;
              const orden = {latA, lonA};

              console.log(orden);
              navigation.navigate('P6', {
                orden,
                drivers,
                cost,
              });
            }
          } catch (e) {
            console.error(e);
          }
        };

        getcars();
      }
    });
  }

  return (
    <SafeAreaView>
      <View style={styles.view}>
        <MapView
          style={{height: '100%', width: '100%'}}
          provider={PROVIDER_GOOGLE}
          showsCompass={false}
          onMapReady={checkOrder}
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
              <View style={styles.custom}>
                <Text>
                  <Icon name="taxi" size={15} color="#171717" />
                </Text>
              </View>
            </Marker>
          ))}
        </MapView>

        <Bt />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('P3', {
              lat,
              lon,
            })
          }
          onPressIn={checkOrder}
          style={styles.presable}>
          <Text style={styles.text}>reservar</Text>
        </TouchableOpacity>

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
