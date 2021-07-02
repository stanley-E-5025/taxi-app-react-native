import React, {useState, useEffect} from 'react';
import {Text, View, Pressable, SafeAreaView, Share, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import map from '../map-style';
import MapViewDirections from 'react-native-maps-directions';
import Icon from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';

import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './styles';
import {updateCarInfo} from '../../graphql/mutations';
import {listCars, listTodos} from '../../graphql/queries';
import {onUpdateCar} from '../../graphql/subscriptions';

import {API, graphqlOperation, Auth} from 'aws-amplify';

const P6 = () => {
  const [allinfo, setAllinfo] = useState({
    distance: 10,
    duration: 1000,
  });
  const [cars, setCars] = useState([]);

  const navigation = useNavigation();
  const move = () => {
    navigation.navigate('P7');
  };
  const GOOGLE_MAPS_APIKEY = 'AIzaSyDC5YeK0OuXzBkkpcdYF71wTjtIGVV4NgE';

  const route = useRoute();
  console.log(route.params.cost);
  const end = route.params.drivers;
  const data = end[0];

  console.log(data.id);

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
      console.log(response);
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
  console.log(time);
  const getImage = (type) => {
    if (type === 'taxi1') {
      return require('./car.png');
    }
    if (type === 'taxi') {
      return require('./car.png');
    }
    return require('./car.png');
  };

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

    const onUpdate = API.graphql(graphqlOperation(onUpdateCar)).subscribe({
      next: (data) => {
        fetchCars();
      },
    });
    fetchCars();
  }, []);

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
                style={{width: 50, height: 50, resizeMode: 'contain'}}
                source={getImage(car.type)}
              />
            </Marker>
          ))}
        </MapView>
        <LottieView
          source={require('../../animations/1.json')}
          autoPlay={true}
          loop={false}
          onAnimationFinish={order}
          style={{
            height: 0,
            width: 0,
            alignSelf: 'center',
            bottom: 0,
          }}
        />

        <Pressable style={styles.pres} onPress={move}>
          <Text style={styles.Text}>cancelar</Text>
        </Pressable>
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
