import React from 'react';
import {Text, View, Pressable, Linking} from 'react-native';
import styles from './styles';
import {useRoute, useNavigation} from '@react-navigation/core';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

const Contact = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Pressable onPress={() => navigation.navigate('P1')}>
        <Text style={styles.title}>
          {' '}
          <Icon name="arrow-left" size={20} color="#000" /> {'  '} regresar
        </Text>
      </Pressable>

      <Pressable
        style={styles.item}
        onPress={() =>
          Linking.openURL(
            'https://www.instagram.com/taxis_losprimos_mga/?hl=es-la',
          )
        }>
        <Text>
          {' '}
          <Icon name="social-instagram" size={25} color="#000000" />
        </Text>
      </Pressable>
      <Pressable
        style={styles.item}
        onPress={() =>
          Linking.openURL('https://www.facebook.com/taxislosprimos/')
        }>
        <Text>
          {' '}
          <Icon name="social-facebook" size={25} color="#000000" />
        </Text>
      </Pressable>
    </View>
  );
};

export default Contact;
