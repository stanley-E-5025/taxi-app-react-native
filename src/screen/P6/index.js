import React from 'react';
import {Text, View, Pressable, SafeAreaView , Share} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import map from '../map-style';
import MapViewDirections from 'react-native-maps-directions';

import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './styles';

const P6 = () => {

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:""+origins.latitude + origins.longitude
 
            
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

    const navigation = useNavigation();
  const move = () => {
    navigation.navigate('P7');
  };
  const GOOGLE_MAPS_APIKEY = 'AIzaSyDC5YeK0OuXzBkkpcdYF71wTjtIGVV4NgE';

  const route = useRoute();
  
  const origins = {
    latitude: route.params.orden.latA,
    longitude: route.params.orden.lonA,
  };

  

  const destination = {
    latitude: route.params.orden.latB,
    longitude: route.params.orden.lonB,
  };
  return (
    <SafeAreaView>
      <View style={styles.view}>
        <MapView
          style={{height: '100%', width: '100%'}}
          provider={PROVIDER_GOOGLE}
          showsMyLocationButton={true}
          customMapStyle={map}
          showsUserLocation={true}
          showsCompass={false}
          initialRegion={{
            latitude: route.params.orden.latA,
            longitude: route.params.orden.lonA,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} >
          <MapViewDirections
            origin={origins}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={4}
            strokeColor="#ffffff"
          />
        </MapView>

        <Pressable style={styles.pres} onPress={move}>
          <Text style={styles.Text}>cancelar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default P6;
