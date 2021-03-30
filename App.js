import React, {useEffect} from 'react';
import {PermissionsAndroid , Platform} from 'react-native';
import AllScreens from './src/home/index';
import 'react-native-gesture-handler';

import Geolocation from '@react-native-community/geolocation';
import p0 from './src/screens/p0';


//add rec to next step 
 
const all = () => {
  const  Permission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

useEffect(() =>  
{
if (Platform.OS == 'android'){
 Permission();

}

// IOS 
else {
   Geolocation.requestAuthorization
}

}, [])
return (
  
    <p0 />

);
}


export default all; 