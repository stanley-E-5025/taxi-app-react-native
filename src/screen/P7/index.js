import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View, Pressable} from 'react-native';
import RNLocation from 'react-native-location';

const P7 = () => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  console.log(lat, lon);

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

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Pressable
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#000000',
          borderRadius: 10,
        }}
        onPress={gps}></Pressable>

      <Text>{lat}</Text>
      <Text>{lon}</Text>
    </View>
  );
};

export default P7;
