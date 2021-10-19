import React, {useState} from 'react';
import {Text, View, Pressable, SafeAreaView} from 'react-native';
import MapView from 'react-native-maps';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Entypo';

// constantes para las coordenadas  de punto A y B
const P8 = () => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const route = useRoute();
  const navigation = useNavigation();

  const origins = {
    latitude: route.params.originPlace.details.geometry.location.lat,
    longitude: route.params.originPlace.details.geometry.location.lng,
  };

  const destination = {
    latitude: lat,
    longitude: lon,
  };

  const txt = {
    nota: route.params.text,
  };

  const move = () => {
    navigation.navigate('P3');
  };

  const movet = () => {
    navigation.navigate('P44', {
      origins,
      destination,
      txt,
    });
  };
  const loc = (Region) => {
    const lat = Region.latitude;
    const lon = Region.longitude;
    setLat(lat);
    setLon(lon);
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <SafeAreaView>
      <MapView
        style={{height: '100%', width: '100%'}}
        onRegionChange={loc}
        initialRegion={{
          latitude: origins.latitude,
          longitude: origins.longitude,
          latitudeDelta: 0.0,
          longitudeDelta: 0.12,
        }}></MapView>

      <View style={styles.custom}>
        <View style={styles.custom2}>
          <Text>
            <Icon name="triangle-down" size={35} color="#2962D5" />
          </Text>
        </View>
      </View>

      <Pressable style={styles.presable} onPress={movet}>
        <Text style={styles.text3}>Listo</Text>
      </Pressable>

      <Pressable style={styles.presable2} onPress={move}>
        <Text style={styles.text3}>
          <Icon name="chevron-thin-left" size={20} color="#000000" />
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default P8;
