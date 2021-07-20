import React, {useEffect} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';

import Nav from './src/Nav/drawer';
import 'react-native-gesture-handler';
import Amplify from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure(config);
// using hermes to first test on android
const all = () => {
  const Permission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {}
  };

  useEffect(() => {
    if (Platform.OS == 'android') {
      Permission();
    }

    // IOS
    else {
      Geolocation.requestAuthorization;
    }
  }, []);

  return <Nav />;
};

export default all;
