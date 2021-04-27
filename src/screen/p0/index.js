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
    navigation.navigate('P1', {
      lat,
      lon,
    });
  };

  return (
    <View style={styles.vvv}>
      <LottieView
        source={require('../../animations/ggg.json')}
        autoPlay={true}
        loop={false}
       onAnimationFinish={movet}
       speed={0.13}
        style={{
          height: 300,
          width: 100,
          alignSelf: 'center',
          justifyContent: 'center',
          marginTop: 100,
        }}
      />
        <LottieView
        source={require('../../animations/6607-loading-drop (1).json')}
        autoPlay={true}
        loop={true}
      
        style={{
          height: 50,
          width:10,
          alignSelf: 'center',
        
      
        }}
      />
    </View>
  );
};

export default P0;
