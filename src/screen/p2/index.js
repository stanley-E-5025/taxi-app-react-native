import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Pressable,
  SafeAreaView,
  Alert,
  ScrollView,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation, useRoute} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const P2 = () => {
  const route = useRoute();

  const lat = route.params.lat;
  const lon = route.params.lon;

  const navigation = useNavigation();

  const move = () => {
    navigation.navigate('P3', {
      lat,
      lon,
    });
  };
  const movet = () => {
    navigation.navigate('P1');
  };

  const MyCustomMarkerView = (marker) => {
    return (
      <View style={styles.custom}>
        <Text style={styles.text21}>
          <Icon name="map-marker" size={30} color="#171717" />
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <MapView
        style={{height: '100%', width: '100%'}}
        provider={PROVIDER_GOOGLE}
        showsCompass={false}
        initialRegion={{
          latitude: lat,
          longitude: lon,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker coordinate={{latitude: lat, longitude: lon}}>
          <MyCustomMarkerView {...MyCustomMarkerView} />
        </Marker>
      </MapView>

      <Pressable
        onPress={movet}
        style={[styles.presable2, {top: 20, left: 10}]}>
        <Text style={styles.text21}>
          <Icon name="angle-left" size={30} color="#ffffff" />
        </Text>
      </Pressable>
      <Pressable
        onPress={move}
        style={[styles.presable1, {bottom: 200, left: 10}]}>
        <Text style={styles.text21}>
          <Icon name="edit" size={15} color="#ffffff" />
          {'  '}
          seleccione servicio
        </Text>
      </Pressable>

      <ScrollView style={styles.scrollView}>
        <Pressable style={styles.presable}>
          <View style={styles.Ani}>
            <LottieView
              source={require('../../animations/FFFF.json')}
              autoPlay
              loop
              style={{height: 80, width: 90}}
            />
          </View>
        </Pressable>
        <Pressable style={styles.info2} onPress={move}>
          <Text style={styles.txt2}>seleccionar</Text>
        </Pressable>

        <Text style={styles.textd}>descripcion</Text>
        <Text style={styles.text22}>
          <Icon name="eye" size={15} color="#ffffff" />
          {'  '}
          Monitoreo de viajes
        </Text>
        <Text style={styles.text22}>
          {' '}
          <Icon name="check-circle-o" size={15} color="#ffffff" />
          {'  '}
          viaje climatizado
        </Text>
        <Text style={styles.text22}>
          {' '}
          <Icon name="users" size={15} color="#ffffff" />
          {'  '}
          mismo precio de 1 a 4 personas
        </Text>
        <Text style={styles.text22}>
          {' '}
          <Icon name="medkit" size={15} color="#ffffff" />
          {'  '} medidas anti covid-19
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default P2;
