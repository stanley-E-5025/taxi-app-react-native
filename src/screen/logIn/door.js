import React, {useState} from 'react';
import {View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const Pass = () => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  const navigation = useNavigation();

  if (lat === 0) {
    console.log('espera');
  } else {
    navigation.navigate('P1', {
      lat,
      lon,
    });
  }

  const loc = (event) => {
    const lat = event.nativeEvent.coordinate.latitude;
    const lon = event.nativeEvent.coordinate.longitude;
    setLat(lat);
    setLon(lon);
  };

  return (
    <View>
      <MapView
        style={{height: 0, width: 0}}
        provider={PROVIDER_GOOGLE}
        onUserLocationChange={loc}
        showsUserLocation={true}
        showsCompass={false}
        initialRegion={{
          latitude: 0,
          longitude: 0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}></MapView>
    </View>
  );
};

export default Pass;
