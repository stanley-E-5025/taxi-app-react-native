import React, {useState, useEffect} from 'react';
import {Text, View, Pressable, SafeAreaView, Alert} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation, useRoute} from '@react-navigation/native';
import LottieView from 'lottie-react-native';

import Geolocation from '@react-native-community/geolocation';

const P2 = () => {
  const route = useRoute();
  console.log(route.params);

  const lat = route.params.lat;
  const lon = route.params.lon;

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
      <View style={styles.colors}>
        <Pressable style={styles.presable} onPress={move}>
          <Text style={styles.Text}>
            <Icon name="angle-left" size={39} color="#ffffff" />
          </Text>
        </Pressable>
        <View style={styles.info}>
          <View style={styles.icon2}>
            <Icon name="edit" size={20} color="#ffffff" />
          </View>
          <Text style={styles.txt2}>seleccione su transporte</Text>
        </View>

        <Pressable style={styles.presable2} onPress={movet}>
          <LottieView
            source={require('../../animations/FFFF.json')}
            autoPlay
            loop
            style={{height: 80, width: 90}}
          />
          <View style={styles.info2}>
            <Icon name="database" size={20} color="#ffffff" />
            <Text style={styles.txt2}>80C$</Text>
          </View>
        </Pressable>

        <View style={styles.list}>
          <View style={styles.icon}>
            <Icon name="thermometer-half" size={20} color="#ffffff" />
          </View>
          <Text style={styles.txt}>aire acondicionado </Text>
        </View>
        <View style={styles.list}>
          <View style={styles.icon}>
            <Icon name="clock-o" size={20} color="#ffffff" />
          </View>
          <Text style={styles.txt}>transporte rapido </Text>
        </View>
        <View style={styles.list}>
          <View style={styles.icon}>
            <Icon name="heart" size={20} color="#ffffff" />
          </View>
          <Text style={styles.txt}>un viaje seguro </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default P2;
