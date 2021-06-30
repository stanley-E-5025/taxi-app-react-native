import React from 'react';
import {View, Image, SafeAreaView, ImageBackground} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const P0 = () => {
  const navigation = useNavigation();
  const move = () => {
    navigation.navigate('Door');
  };

  return (
    <ImageBackground
      source={require('../../animations/bg.jpg')}
      style={styles.image}>
      <View style={styles.view2}>
        <Image
          style={styles.img}
          source={require('../../animations/logo.png')}
        />
      </View>

      <LottieView
        source={require('../../animations/1.json')}
        autoPlay={true}
        loop={false}
        onAnimationFinish={move}
        style={{
          height: 0,

          width: 0,
          alignSelf: 'center',
          bottom: 0,
        }}
      />

      <View style={styles.view3}>
        <LottieView
          source={require('../../animations/1.json')}
          autoPlay={true}
          loop={true}
          style={{
            height: 50,
            width: 1,
            alignSelf: 'center',
            bottom: 0,
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default P0;
