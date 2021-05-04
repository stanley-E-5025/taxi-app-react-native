import React, {useState} from 'react';
import {Text, View, Alert, Pressable} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const P0 = () => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  const pp = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        setLat(lat);
        setLon(lon);
      },
      (error) => {
        Alert.alert(error.message.toString());
      },
      {
        showLocationDialog: true,
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0,
      },
    );

    Geolocation.watchPosition(
      (position) => {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        setLat(lat);
        setLon(lon);
      },
      (error) => {
        console.log(error);
      },
      {
        showLocationDialog: true,
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0,
        distanceFilter: 0,
      },
    );
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Pressable
        style={{width: 100, height: 100, backgroundColor: '#000000'}}
        onPress={pp}></Pressable>
      <Text>{lat}</Text>

      <Text>{lon}</Text>
    </View>
  );
};

export default P0;
