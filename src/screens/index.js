import React from 'react';
import { View , SafeAreaView , Pressable} from 'react-native';
import   MapView , { PROVIDER_GOOGLE , Marker , EventUserLocation } from 'react-native-maps';
import { useNavigation} from '@react-navigation/native'
import styles from './styles'
import Pres from './press'
import cars from '../data/cars'
import MapViewDirections from 'react-native-maps-directions';
 
import Geolocation from '@react-native-community/geolocation';
import RNLocation  from 'react-native-location';
import { getCurrentPosition } from 'react-native-geolocation-service';

 
 
 

const  Home = () => {
 

  
  
 
  

  
  
const   navigation = useNavigation ();
 

 
 

 return (
   
 
 
  
   
    


<View style={styles.view}  >
    

    <MapView 
    provider={PROVIDER_GOOGLE}
    showsUserLocation={true}
    style={styles.map}
    showsMyLocationButton={true}
     
    
    showsCompass={true}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >  

     {cars.map((car)=> (

<Marker

key={car.id}
  coordinate={{ latitude : car.latitude , longitude : car.longitude}}
  
  image={require('../gg.png')}
 
/>

     ))}


   
 
 
  
  </MapView>
 
     
 <Pres/>
  
    </View>
 

 
 

  );
}

export default  Home;
