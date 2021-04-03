import React from 'react';
import {View, SafeAreaView, Pressable, Text, Alert} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {useNavigation, RouteProp, useRoute} from '@react-navigation/native';
import styles from './styles';
import Pres from './press';
import cars from '../data/cars';

import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  const route = useRoute();

  const navigation = useNavigation();

  const move = () => {
    navigation.navigate('menu');
  };

  return (
    <SafeAreaView>
      <View style={styles.view}>
        <MapView
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          style={styles.map}
          showsCompass={true}
          initialRegion={{
            latitude: route.params._W.latitude,
            longitude: route.params._W.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0621,
          }}></MapView>
      </View>
      <Pressable style={styles.menu} onPress={move}>
        <Text style={styles.text}>
          <Icon name="bars" size={30} color="#080808" />
        </Text>
      </Pressable>

      <View style={styles.viev2}>
        <Pres />
      </View>
    </SafeAreaView>
  );
};

export default Home;
