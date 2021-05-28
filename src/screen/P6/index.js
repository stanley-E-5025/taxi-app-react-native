import React, {useState} from 'react';
import {Text, View, Pressable, SafeAreaView, Share} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import map from '../map-style';
import MapViewDirections from 'react-native-maps-directions';

import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './styles';
import {updateCarInfo} from '../../graphql/mutations';
import {API, graphqlOperation, Auth} from 'aws-amplify';

const P6 = () => {
  const navigation = useNavigation();
  const move = () => {
    navigation.navigate('P7');
  };
  const GOOGLE_MAPS_APIKEY = 'AIzaSyDC5YeK0OuXzBkkpcdYF71wTjtIGVV4NgE';

  const route = useRoute();

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

  return (
    <SafeAreaView>
      <View style={styles.view}>
        <MapView
          style={{height: '100%', width: '100%'}}
          provider={PROVIDER_GOOGLE}
          showsMyLocationButton={true}
          customMapStyle={map}
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
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={4}
            strokeColor="#ffffff"
          />
        </MapView>

        <Pressable style={styles.pres} onPress={move} onPressIn={order}>
          <Text style={styles.Text}>cancelar</Text>
        </Pressable>
        <Pressable style={styles.pres2}>
          <Text style={styles.Text}>conductor : {data.type}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default P6;
