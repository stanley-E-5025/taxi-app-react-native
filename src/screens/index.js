import React from 'react';
import { Text, View , Pressable,Alert } from 'react-native';
import MapView , {PROVIDER_GOOGLE} from 'react-native-maps';
import { useNavigation} from '@react-navigation/native'
import styles from './styles'
import Pres from './press'



const  Home = () => {
const   navigation = useNavigation ();

  
 
 return (
    <View style={styles.view}>
    
    <MapView style={styles.map}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
  
  <Pres/>

    </View>


  );
}

export default  Home;
