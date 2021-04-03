import React, {Component} from 'react';
import {Pressable} from 'react-native';

import styles from './styles';
import {useNavigation} from '@react-navigation/native';

import Geolocation from '@react-native-community/geolocation';
import firestore from '@react-native-firebase/firestore';

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


getInfo = async () => {
  const userDocument = firestore()
    .collection('user')
    .doc('bHcA20cdqTrNTIRqQVm6');
};
console.log(getInfo);

const p0 = () => {
  
 

 
  const navigation = useNavigation();

  const move = () => {
    navigation.navigate('home', info);
  };
  return <Pressable style={styles.pers} onPress={move}></Pressable>;
};

export default p0;
