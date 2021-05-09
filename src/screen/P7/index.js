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

  const sms = () => {
    alert(
      've  y manten precionado  la caja de selecione su transporte la que tiene el icono  al lado uno de lista ',
    );
  };
  return (
    <SafeAreaView
      style={{backgroundColor: '#1A1A1A', width: '100%', height: '100%'}}>
      <Pressable style={styles.info} onLongPress={sms}>
        <Text style={styles.txt2}>
          <Icon name="edit" size={20} color="#ffffff" /> {'    '}que ocurrio
        </Text>
      </Pressable>

      <Pressable style={styles.list} onPress={move}>
        <Text style={styles.txt}>
          <Icon name="eye" size={20} color="#ffffff" /> {'    '}tuve un error
          con el pedido
        </Text>
      </Pressable>
      <Pressable style={styles.list} onPress={move}>
        <Text style={styles.txt}>
          {' '}
          <Icon name="eye" size={20} color="#ffffff" /> {'    '}mi conductor
          cancelo la orden
        </Text>
      </Pressable>
      <Pressable style={styles.list} onPress={move}>
        <Text style={styles.txt}>
          <Icon name="eye" size={20} color="#ffffff" /> {'    '}otras razones
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default P7;
