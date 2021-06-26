import React, {useState} from 'react';
import {Text, View, Pressable, SafeAreaView} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './styles';
const GOOGLE_MAPS_APIKEY = 'AIzaSyDC5YeK0OuXzBkkpcdYF71wTjtIGVV4NgE';
import Icon from 'react-native-vector-icons/FontAwesome';

// constantes para las coordenadas  de punto A y B
const P8 = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const origins = {
    latitude: route.params.originPlace.details.geometry.location.lat,
    longitude: route.params.originPlace.details.geometry.location.lng,
  };
  const move = () => {
    navigation.navigate('P3');
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <SafeAreaView>
      <MapView
        style={{height: '100%', width: '100%'}}
        initialRegion={{
          latitude: origins.latitude,
          longitude: origins.longitude,
          latitudeDelta: 0.0,
          longitudeDelta: 0.12,
        }}></MapView>

      <Pressable style={styles.presable}>
        <Text style={styles.text3}>
          <Icon name="check-circle-o" size={15} color="#ffffff" />
          {'  '}
          Listo
        </Text>
      </Pressable>

      <Pressable style={styles.presable2} onPress={move}>
        <Text style={styles.text3}>
          <Icon name="close" size={25} color="#000000" />
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default P8;
