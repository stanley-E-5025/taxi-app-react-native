import React, {useState, useEffect} from 'react';
import {Text, View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Btn = () => {
  const navigation = useNavigation();

  const move = () => {
    navigation.navigate('List');
  };
  return (
    <Pressable style={styles.history} onPress={move}>
      <Text style={{fontWeight: 'bold', marginLeft: 10, color: '#383838'}}>
        histoiral
      </Text>
    </Pressable>
  );
};

export default Btn;
