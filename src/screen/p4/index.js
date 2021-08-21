import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useNavigation, useRoute} from '@react-navigation/native';
import MapViewDirections from 'react-native-maps-directions';
import styles from './styles';
const GOOGLE_MAPS_APIKEY = 'AIzaSyDC5YeK0OuXzBkkpcdYF71wTjtIGVV4NgE';
import {createOrder} from '../../graphql/mutations';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import Icon from 'react-native-vector-icons/Ionicons';

const P4 = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const [allinfo, setAllinfo] = useState({
    distance: 10,
    duration: 1000,
  });
  const [tarifa, setTarifa] = useState(70);
  const date = new Date();

  useEffect(() => {
    const time = date.getHours();
    if (time === 20) {
      setTarifa(80);
      console.log(tarifa);
    }

    if (time === 6) {
      setTarifa(70);
      console.log(tarifa);
    }
  });

  const origins = {
    latitude: route.params.originPlace.details.geometry.location.lat,
    longitude: route.params.originPlace.details.geometry.location.lng,
  };

  const text1 = route.params.destinationPlace.details.name;
  const text2 = route.params.destinationPlace.details.formatted_address;

  const place = text1 + ',' + text2;

  const destination = {
    latitude: route.params.destinationPlace.details.geometry.location.lat,
    longitude: route.params.destinationPlace.details.geometry.location.lng,
  };

  const order = async () => {
    try {
      const userInfo = await Auth.currentAuthenticatedUser();

      const date = new Date();

      const input = {
        createdAt: date.toISOString(),
        type: userInfo.username,
        originLatitude: route.params.originPlace.details.geometry.location.lat,
        originLongitude: route.params.originPlace.details.geometry.location.lng,
        distance: distance,
        duration: duration,
        cost: orderPrice,
        place: place,
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
    } catch (e) {}
  };

  const info = (event) => {
    setAllinfo({
      distance: event.distance,
      duration: event.duration,
    });
  };

  const distance = allinfo.distance.toFixed(1);
  const duration = allinfo.duration.toFixed(1);
  const cal = distance * 13;

  const price = tarifa + cal;

  // 14 km 80 arranque   > 9pm

  const orderPrice = price.toFixed(0);

  const MyCustomMarkerView = (marker) => {
    return (
      <View style={styles.custom}>
        <Text style={styles.text21}>A</Text>
      </View>
    );
  };
  const MyCustomMarkerViewB = (marker) => {
    return (
      <View style={styles.custom}>
        <Text style={styles.text21}>B</Text>
      </View>
    );
  };

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
          coordinate={{
            latitude: route.params.gps.lat,
            longitude: route.params.gps.lon,
          }}>
          <MyCustomMarkerView {...MyCustomMarkerView} />
        </Marker>
        <Marker
          coordinate={{
            latitude: destination.latitude,
            longitude: destination.longitude,
          }}>
          <MyCustomMarkerViewB {...MyCustomMarkerViewB} />
        </Marker>

        <MapViewDirections
          origin={origins}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          onReady={info}
          strokeWidth={4}
          strokeColor="#171717"
        />
      </MapView>
      <View style={styles.infoView}>
        {/* arrow */}
        <TouchableOpacity style={styles.price}>
          <Text style={{color: '#fff'}}>{orderPrice} NIO</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.arrow}
          onPressIn={() =>
            navigation.navigate('P5', {
              destination,
              origins,
              orderPrice,
            })
          }
          onPress={order}>
          <Icon name="md-arrow-forward-sharp" size={30} color="#ffffff" />
        </TouchableOpacity>

        {/* info  */}

        <View style={styles.destino}>
          <Text style={styles.title}>{text1}</Text>

          <Text style={{color: '#fff'}}>{text2}</Text>
        </View>
        {/* bottom bar  */}
      </View>
      <Pressable
        style={styles.presable2}
        onPress={() => navigation.navigate('P3')}>
        <Text style={styles.text3}>
          <Icon name="ios-chevron-back-outline" size={30} color="#000" />
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default P4;
