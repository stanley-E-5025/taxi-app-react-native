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
  const sms = () => {
    alert('fuk u ');
  };

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
        <Pressable style={[styles.info, {top: 20, left: 20}]} onLongPress={sms}>
          <View style={styles.icon2}>
            <Icon name="edit" size={20} color="#ffffff" />
          </View>
          <Text style={styles.txt2}>seleccione servicio</Text>
        </Pressable>

        <Pressable style={styles.presable2} onPress={movet}>
          <LottieView
            source={require('../../animations/FFFF.json')}
            autoPlay
            loop
            style={{height: 80, width: 90}}
          />
          <View style={styles.info2}>
            <Icon name="database" size={15} color="#ffffff" />
            <Text style={styles.txt2}>seleccionar</Text>
          </View>
        </Pressable>
        <Pressable style={[styles.info, {top: 20, left: 20}]} onLongPress={sms}>
          <View style={styles.icon2}>
            <Icon name="edit" size={20} color="#ffffff" />
          </View>
          <Text style={styles.txt2}>descripcion</Text>
        </Pressable>
        <View style={styles.list}>
          <View style={styles.icon}>
            <Icon name="eye" size={20} color="#ffffff" />
          </View>
          <Text style={styles.txt}>Monitoreo de viajes</Text>
        </View>

        <View style={styles.list}>
          <View style={styles.icon}>
            <Icon name="check-circle-o" size={20} color="#ffffff" />
          </View>
          <Text style={styles.txt}> viaje climatizado</Text>
        </View>
        <View style={styles.list}>
          <View style={styles.icon}>
            <Icon name="users" size={20} color="#ffffff" />
          </View>
          <Text style={styles.txt}> mismo precio de 1 a 4 personas </Text>
        </View>
        <View style={styles.list}>
          <View style={styles.icon}>
            <Icon name="medkit" size={20} color="#ffffff" />
          </View>
          <Text style={styles.txt}> medidas anti covid-19</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default P2;
