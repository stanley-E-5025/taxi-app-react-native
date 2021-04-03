import React, {useState, useEffect} from 'react';
import {Text, View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

import Geolocation from '@react-native-community/geolocation';

export const getCurrentLocation = () =>
  new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      (position) => {
        const coords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        resolve(coords);
      },
      (error) => {
        reject(error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  });
//add rec tocon next step
const info = getCurrentLocation();

const Pres = () => {
  const navigation = useNavigation();
  const tes = (props) => {
    const [on, off] = useState(true);
    console.log('uuuu');
  };

  const move = () => {
    navigation.navigate('p3', info);
  };
  return (
    <Pressable onPress={move} style={styles.presable}>
      <Text style={styles.text}>
        <Icon name="map" size={25} color="#ffffff" /> pedir
      </Text>
    </Pressable>
  );
};

export default Pres;
