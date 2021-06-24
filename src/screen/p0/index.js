import React from 'react';
import {View, Image, SafeAreaView} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const P0 = () => {
  const navigation = useNavigation();
  const move = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView>
      <View style={styles.view}>
        <View style={styles.view2}></View>

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
      </View>
    </SafeAreaView>
  );
};

export default P0;
