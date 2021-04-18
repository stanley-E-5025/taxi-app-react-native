import React, {useState} from 'react';
import {Text, View, Pressable, Alert} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';

import Geolocation from '@react-native-community/geolocation';

const P0 = () => {
  const [lat, setLat] = useState();
  const [lon, setLont] = useState();

  Geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      setLat(lat);
      setLont(lon);
    },
    (error) => Alert.alert('Error', JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 9000000, maximumAge: 0},
  );

  const navigation = useNavigation();

  const movet = () => {
    navigation.navigate('P', {
      lat,
      lon,
    });
  };

  return (
    <View>
      <LottieView
        source={require('../../animations/ggg.json')}
        autoPlay
        loop
        style={{
          height: 200,
          width: 100,
          alignSelf: 'center',
          justifyContent: 'center',
          marginTop: 100,
        }}
      />

      <Pressable style={styles.presabale} onPress={movet}>
        <Text style={styles.Text}>empezemos</Text>
      </Pressable>
    </View>
  );
};

export default P0;
