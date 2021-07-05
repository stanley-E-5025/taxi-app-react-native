import React from 'react';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import LottieView from 'lottie-react-native';

const Bt = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.main, {top: 20, left: 10}]}
      onPress={navigation.openDrawer}>
      <LottieView
        source={require('../../animations/menu.json')}
        autoPlay={true}
        loop={true}
        style={{
          alignSelf: 'flex-start',
          height: 100,
        }}
      />
    </Pressable>
  );
};

export default Bt;
