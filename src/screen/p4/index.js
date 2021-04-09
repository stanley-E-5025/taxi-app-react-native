import React from 'react';
import {Text, View, Pressable, SafeAreaView} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {useNavigation, useRoute} from '@react-navigation/native';
import MapViewDirections from 'react-native-maps-directions';
import styles from './styles';
const GOOGLE_MAPS_APIKEY = 'AIzaSyDC5YeK0OuXzBkkpcdYF71wTjtIGVV4NgE';
import Icon from 'react-native-vector-icons/FontAwesome';

const P4 = () => {
  const route = useRoute();
  const origins = {
    latitude: route.params.originPlace.details.geometry.location.lat,
    longitude: route.params.originPlace.details.geometry.location.lng,
  };

  const destination = {
    latitude: route.params.destinationPlace.details.geometry.location.lat,
    longitude: route.params.destinationPlace.details.geometry.location.lng,
  };

  const navigation = useNavigation();

  const move = () => {
    navigation.navigate('P1');
  };
  /* const confirmar = () => {
    navigation.navigate(console.log('ffffffffffff'));
  };
 */
  return (
    <SafeAreaView>
      <MapView
        style={{height: '100%', width: '100%'}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <MapViewDirections
          origin={origins}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={4}
          strokeColor="#033683"
        />
      </MapView>
      <View style={styles.contaier}>
        <Text style={styles.Text}>
          {' '}
          <Icon name="edit" size={20} color="#ffffff" /> quieres confirmar la
          orden con esta ubicasion ?
        </Text>

        <View style={styles.op}>
          <Pressable style={styles.presable}>
            <Text style={styles.text2}>
              <Icon name="check-circle-o" size={20} color="#080808" /> confirmar
            </Text>
          </Pressable>

          <Pressable style={styles.presable}>
            <Text style={styles.text2} onPress={move}>
              <Icon name="times-circle-o" size={20} color="#080808" /> cancelar
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default P4;
