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
       <Pressable style={styles.main}>
      <Icon name="bars" size={30} color="#080808" /> 

      </Pressable>
   );
};

export default Bt;
