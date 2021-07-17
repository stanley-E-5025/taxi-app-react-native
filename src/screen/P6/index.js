import React, {useState, useEffect} from 'react';
import {Text, View, Pressable, SafeAreaView, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './styles';
import {updateCarInfo, updateOrder} from '../../graphql/mutations';
import {listCars, getOrder} from '../../graphql/queries';
import {onUpdateCar, onUpdateOrder} from '../../graphql/subscriptions';
import {API, graphqlOperation} from 'aws-amplify';

const P6 = () => {
  const [allinfo, setAllinfo] = useState({
    distance: 10,
    duration: 1000,
  });
  const [cars, setCars] = useState([]);
  const [state, setStatus] = useState();
  const navigation = useNavigation();
  const move = () => {
    navigation.navigate('P7');
  };
  const GOOGLE_MAPS_APIKEY = 'AIzaSyDC5YeK0OuXzBkkpcdYF71wTjtIGVV4NgE';

  const route = useRoute();
  const end = route.params.drivers;
  const data = end[0];
  const lat = data.originLatitude;
  const lon = data.originLongitude;
  const origins = {
    latitude: route.params.orden.latA,
    longitude: route.params.orden.lonA,
  };

  const destination = {
    latitude: lat,
    longitude: lon,
  };

  if (state === 'updated') {
    navigation.navigate('Stars', {
      state,
      carId: data.id,
    });
  }
  const cancel = async () => {
    try {
      const input = {
        id: data.place,
        status: 'cancelled',
      };

      const response = await API.graphql(
        graphqlOperation(updateOrder, {
          input,
        }),
      );
    } catch (e) {
      console.error(e);
    }
  };
  const info = (event) => {
    setAllinfo({
      distance: event.distance,
      duration: event.duration,
    });
  };
  const timeout = allinfo.duration;
  const time = timeout.toFixed(0);
  const order = async () => {
    try {
      const input = {
        id: data.id,
        status: 'updated',
      };

      const response = await API.graphql(
        graphqlOperation(updateCarInfo, {
          input,
        }),
      );
    } catch (e) {
      console.error(e);
    }
  };
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

    try {
      const input = {
        id: data.id,
        status: 'updated',
      };

      const response = API.graphql(
        graphqlOperation(updateCarInfo, {
          input,
        }),
      );
    } catch (e) {
      console.error(e);
    }

    const onUpdate = API.graphql(graphqlOperation(onUpdateCar)).subscribe({
      next: (data) => {
        fetchCars();
      },
    });

    try {
      const input = {
        id: data.place,
        carId: data.id,
      };

      const response = API.graphql(
        graphqlOperation(updateOrder, {
          input,
        }),
      );
    } catch (e) {
      console.error(e);
    }

    fetchCars();
  }, []);

  const updateUsercar = async () => {
    const getCardata = await API.graphql(
      graphqlOperation(getOrder, {
        id: data.place,
      }),
    );

    setStatus(getCardata.data.getOrder.status);
  };

  useEffect(() => {
    updateUsercar();
  }, []);
  const realTime = API.graphql(graphqlOperation(onUpdateOrder)).subscribe({
    next: (data) => {
      updateUsercar();
    },
  });

  console.log(state);
  return (
    <SafeAreaView>
      <View style={styles.view}>
        <MapView
          style={{height: '100%', width: '100%'}}
          provider={PROVIDER_GOOGLE}
          showsMyLocationButton={true}
          showsUserLocation={true}
          showsCompass={false}
          initialRegion={{
            latitude: route.params.orden.latA,
            longitude: route.params.orden.lonA,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <MapViewDirections
            origin={origins}
            onReady={info}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={4}
            strokeColor="#000000"
          />

          {cars.map((car) => (
            <Marker
              key={car.id}
              coordinate={{
                latitude: car.latitude,
                longitude: car.longitude,
              }}>
              <Image
                style={{width: 35, height: 35, resizeMode: 'contain'}}
                source={require('./car.png')}
              />
            </Marker>
          ))}
        </MapView>

        <Pressable
          style={styles.pres}
          onPress={() => navigation.navigate('P7')}
          onPressIn={cancel}>
          <Text style={styles.Text}>cancelar</Text>
        </Pressable>
        {state === 'rejected' && (
          <Pressable style={styles.press2} onPress={move} onPressIn={order}>
            <Text style={{color: '#ffffff', fontWeight: 'bold'}}>
              tu orden fue rechazada{' '}
            </Text>
          </Pressable>
        )}
        <View style={styles.pres2}>
          <View style={styles.carN}>
            <Image style={styles.Image} source={require('./ICON.png')} />
          </View>
          <View style={styles.total}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>total</Text>
          </View>
          <View style={styles.price}>
            <Text>{route.params.cost}</Text>
            <Text style={{fontWeight: 'bold'}}> NIO </Text>
          </View>
          <View style={styles.name}>
            <Text style={{fontSize: 18}}>
              {' '}
              <Icon name="user" size={15} color="#171717" />
              {'  '}
              {data.type}
            </Text>
          </View>
          <View style={styles.time}>
            <Text style={{fontWeight: 'bold', fontSize: 13}}>
              tiempo aproximado
            </Text>
          </View>
          <View style={styles.timeitem}>
            <Text>{time} min</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default P6;
