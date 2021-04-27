import React, {useState, useEffect} from 'react';
import {Text, View, Pressable, SafeAreaView, Alert} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation, useRoute} from '@react-navigation/native';
import LottieView from 'lottie-react-native';

import Geolocation from '@react-native-community/geolocation';

const P2 = () => {

const route = useRoute();
  console.log(route.params)

  const lat = route.params.lat
  const lon = route.params.lon

  const navigation = useNavigation();
  const move = () => {
    navigation.navigate('P1');
  };
  const movet = () => {
    navigation.navigate('P3', {
      lat,
      lon,
    });
  };

  return (
    <SafeAreaView>
      <Pressable style={styles.view1} onPress={move}>
        <Icon name="arrow-left" size={20} color="#000000" />
      </Pressable>

      <Pressable style={styles.view2}>
        <Text style={styles.Text}>
          <Icon name="edit" size={20} color="#000000" /> seliciona un veiculo
        </Text>
      </Pressable>

      <Pressable style={styles.presable2} onPress={movet}>
        <View style={styles.info}>
          <LottieView
            source={require('../../animations/car.json')}
            autoPlay
            loop
            style={{height: 80, width: 800}}
          />
        </View>
        <Text style={styles.text2}>
          {'     '}
          aproximado 90 C${'  '}
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default P2;
