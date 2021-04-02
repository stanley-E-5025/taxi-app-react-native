import React from 'react';
import { Text, View , Pressable,Alert,Image } from 'react-native';
import MapView , {PROVIDER_GOOGLE , Marker} from 'react-native-maps';
import { useNavigation , useRoute} from '@react-navigation/native'
import MapViewDirections from 'react-native-maps-directions';
 
 


const GOOGLE_MAPS_APIKEY = 'AIzaSyDC5YeK0OuXzBkkpcdYF71wTjtIGVV4NgE'

const  p4 = () => {


  const route = useRoute();
const origins ={
  latitude: route.params.originPlace.details.geometry.location.lat ,
  longitude:  route.params.originPlace.details.geometry.location.lng,
 
}


 const destination ={
  
  latitude:route.params.destinationPlace.details.geometry.location.lat,
  longitude:route.params.destinationPlace.details.geometry.location.lng,
 
} 

   console.log(route.params.cc)

   
 
  
  
const   navigation = useNavigation ();

  

 return (
     
 

  <MapView
  
  style={{height:"100%",width:"100%"}}

  initialRegion={{
    latitude: route.params.cc.latitude,
      longitude: route.params.cc.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
  }}
  >
  <MapViewDirections
    origin={origins}
    destination={destination}
    apikey={GOOGLE_MAPS_APIKEY}
    strokeWidth={4}
    strokeColor="#033683"
  />
</MapView>


 

  

   


  );
}

export default  p4;