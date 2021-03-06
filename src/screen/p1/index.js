import React from 'react';
import {View, SafeAreaView, Pressable, Text, Alert} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import Pres from './press';

import Icon from 'react-native-vector-icons/FontAwesome';

const P1 = () => {
  /* const navigation = useNavigation();

  const move = () => {
    navigation.navigate('P2');
  }; */

  return (
    <SafeAreaView>
      <View style={styles.view}>
        <MapView
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          style={styles.map}
          showsCompass={true}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0621,
          }}></MapView>
      </View>
      {/*  <Pressable style={styles.menu} onPress={move}>
        <Text style={styles.text}>
          <Icon name="bars" size={30} color="#ffffff" />
        </Text>
      </Pressable>
 */}
      <View style={styles.viev2}>
        <Pres />
      </View>
    </SafeAreaView>
  );
};

export default P1;
