import React, {useState, useEffect} from 'react';
import {Text, View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';

const Bt = () => {
  const navigation = useNavigation();

  const move = () => {
    navigation.navigate('P2');
  };
  return (
    <View style={styles.viewbt}>
      <Pressable onPress={() => navigation.openDrawer()} style={styles.main}>
        <LottieView
          source={require('../../animations/menu.json')}
          autoPlay
          loop
          style={{height: 105, width: 100}}
        />
      </Pressable>
    </View>
  );
};

export default Bt;
