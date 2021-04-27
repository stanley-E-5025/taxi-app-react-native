import React from 'react';
import {SafeAreaView, View, Pressable, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Pres from './press';
import styles from './styles';
import Bt from './main';
import {useRoute, useNavigation} from '@react-navigation/core';
import { withAuthenticator } from 'aws-amplify-react-native'
import Icon from 'react-native-vector-icons/FontAwesome';



const P1 = () => {
  const route = useRoute();
  const  lat = route.params.lat
  const lon = route.params.lon


  const navigation = useNavigation();
  const move = () => {
    navigation.navigate('P2',{
      lat,
      lon
    });
  };
  
  
   
  return (
    <SafeAreaView>
      <View style={styles.view}>
        <MapView
          style={{height: '100%', width: '100%'}}
          provider={PROVIDER_GOOGLE}
          showsMyLocationButton={true}
          showsUserLocation={true}
          showsCompass={false}
          initialRegion={{
            latitude: route.params.lat,
            longitude: route.params.lon,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,


            
          }}>

<Marker
  coordinate={{ latitude : route.params.lat, longitude : route.params.lon }}
  image={require('./f.png')}
/>

          </MapView>
        <Bt />
        <Pressable onPress={move} style={styles.presable}>
      <Text style={styles.text}>
        <Icon name="map" size={25} color="#ffffff" /> pedir
      </Text>
    </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default withAuthenticator (P1);
