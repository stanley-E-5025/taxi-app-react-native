import React from 'react';
import {Text, View, Pressable} from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native'
import styles from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const P = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const movet = () => {
    navigation.navigate('P1', {
      lat,
      lon,
    });
  };

  const lat = route.params.lat;
  const lon = route.params.lon;
  console.log(lat, lon);
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
        <Text style={styles.Text}>{lat}</Text>
        <Text style={styles.Text}>{lon}</Text>
      </Pressable>
    </View>
  );
};

export default P;
