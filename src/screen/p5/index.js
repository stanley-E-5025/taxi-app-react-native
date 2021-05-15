import React from 'react';
import {Text, View, Pressable} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import styles from './styles';

const P5 = () => {
  const route = useRoute();
  const navigate = useNavigation();

  const latA = route.params.origins.latitude;
  const lonA = route.params.origins.longitude;
  const latB = route.params.destination.latitude;
  const lonB = route.params.destination.longitude;

  const orden = {latA, lonA, latB, lonB, D};

  const D = route.params.sin;
  const move = () => {
    navigate.navigate('P6', {
      orden,
    });
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#252525',
      }}>
      <View style={{position: 'absolute'}}>
        <LottieView
          source={require('../../animations/dd.json')}
          autoPlay
          loop
          style={{height: 300, width: 500}}
        />

        <LottieView
          source={require('../../animations/6607-loading-drop (1).json')}
          autoPlay={true}
          loop={false}
          style={{height: 1, width: 100}}
          speed={0.4}
          onAnimationFinish={move}
        />
      </View>
      <View style={styles.view}>
        <Text style={styles.Text}>buscando conductorr !!! </Text>
      </View>
    </View>
  );
};

export default P5;
