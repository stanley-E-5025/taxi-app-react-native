import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import styles from './styles';
const Greetings = (props) => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.navigate('P1', {
      lat,
      lon,
    });
  });

  const loc = (event) => {
    const lat = event.nativeEvent.coordinate.latitude;
    const lon = event.nativeEvent.coordinate.longitude;
    setLat(lat);
    setLon(lon);
  };

  if (props.authState === 'signedIn')
    return (
      <View style={styles.container}>
        <MapView
          style={{height: 10, width: 10}}
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
  else return <></>;
};

export default Greetings;
