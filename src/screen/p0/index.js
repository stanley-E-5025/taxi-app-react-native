import React, {useState} from 'react';
import {Text, View, Pressable, Alert, Image, StatusBar} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';

import RNLocation from 'react-native-location';

const P0 = () => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  const gps = () => {
    RNLocation.configure({
      distanceFilter: 5.0,
    });

    RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse',
      },
    }).then((granted) => {
      if (granted) {
        const all = RNLocation.subscribeToLocationUpdates((locations) => {
          let lat = locations[0].latitude;
          let lon = locations[0].longitude;
          setLat(lat);
          setLon(lon);
        });
      }
    });
  };
  const navigation = useNavigation();

  const movet = () => {
    navigation.navigate('P1', {
      lat,
      lon,
    });
  };

  return (
    <View style={styles.vvv}>
      <StatusBar hidden={true} />
      <Image style={styles.img} source={require('../../animations/logo.png')} />
      <LottieView
        source={require('../../animations/ggg.json')}
        autoPlay={true}
        loop={false}
        onAnimationFinish={movet}
        speed={0.9}
        style={{
          height: 1,
          width: 1,
          alignSelf: 'center',
          bottom: 10,
        }}
      />

      <LottieView
        source={require('../../animations/6607-loading-drop (1).json')}
        autoPlay={true}
        loop={false}
        onAnimationFinish={gps}
        style={{
          height: 1,
          width: 1,
          alignSelf: 'center',
          marginTop: 50,
        }}
      />
      <LottieView
        source={require('../../animations/6607-loading-drop (1).json')}
        autoPlay={true}
        loop={true}
        style={{
          height: 70,
          width: 10,
          alignSelf: 'center',
          top: 100,
        }}
      />
    </View>
  );
};

export default P0;
