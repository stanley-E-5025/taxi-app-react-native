import React, {useState} from 'react';
import {Text, Pressable, SafeAreaView} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/core';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const P7 = () => {
  const navigation = useNavigation();

  const move = () => {
    navigation.navigate('P1');
  };

  return (
    <SafeAreaView
      style={{backgroundColor: '#ffffff', width: '100%', height: '100%'}}>
      <Pressable style={styles.info}>
        <Text style={styles.txt2}>que ocurrio ?</Text>
      </Pressable>

      <Pressable style={styles.list} onPress={move}>
        <Text style={styles.txt}>tuve un error con el pedido</Text>
      </Pressable>
      <Pressable style={styles.list} onPress={move}>
        <Text style={styles.txt}> mi conductor cancelo la orden</Text>
      </Pressable>
      <Pressable style={styles.list} onPress={move}>
        <Text style={styles.txt}>otras razones</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default P7;
