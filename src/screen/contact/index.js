import React from 'react';
import {Text, View, Pressable, Linking} from 'react-native';
import styles from './styles';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

const Contact = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>contactanos</Text>

      <View style={styles.line}></View>

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
