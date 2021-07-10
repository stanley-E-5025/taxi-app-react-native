import React from 'react';
import {Text, View, Pressable, SafeAreaView, ScrollView} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation, useRoute} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const P2 = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const lat = route.params.lat;
  const lon = route.params.lon;

  return (
    <SafeAreaView>
      <MapView
        style={{height: '100%', width: '100%'}}
        provider={PROVIDER_GOOGLE}
        showsCompass={false}
        initialRegion={{
          latitude: lat,
          longitude: lon,
          latitudeDelta: 0.0,
          longitudeDelta: 0.012,
        }}></MapView>

      <Pressable
        onPress={() => navigation.navigate('P1')}
        style={[styles.presable2, {top: 20, left: 10}]}>
        <Text style={styles.text21}>
          <Icon name="angle-left" size={30} color="#000000" />
        </Text>
      </Pressable>
      <Pressable style={[styles.presable1, {bottom: 250, left: 10}]}>
        <Text style={styles.text21}>
          <Icon name="edit" size={15} color="#000000" />
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
        <Pressable
          style={styles.info2}
          onPress={() =>
            navigation.navigate('P3', {
              lat,
              lon,
            })
          }>
          <Text style={styles.txt2}>fijar destino ahora </Text>
        </Pressable>

        <Text style={styles.textd}>descripción</Text>
        <Text style={styles.text22}>
          {' '}
          <Icon name="eye" size={15} color="#ffffff" />
          {'  '}
          Monitoreo del viaje
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
