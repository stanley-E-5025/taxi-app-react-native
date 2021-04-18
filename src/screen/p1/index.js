import React from 'react';
import {SafeAreaView, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Pres from './press';
import styles from './styles';
import Bt from './main';
import {useRoute} from '@react-navigation/core';

const P1 = () => {
  const route = useRoute();
  console.log(route.params);

  const lat = route.params.lat;
  const lon = route.params.lon;
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
            latitude: lat,
            longitude: lon,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}></MapView>
        <Bt />
        <Pres />
      </View>
    </SafeAreaView>
  );
};

export default P1;
