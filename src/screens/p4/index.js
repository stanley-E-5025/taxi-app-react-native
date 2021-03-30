import React from 'react';
import { Text, View , Pressable,Alert,Image } from 'react-native';
import MapView , {PROVIDER_GOOGLE , Marker} from 'react-native-maps';
import { useNavigation , useRoute} from '@react-navigation/native';
import MapViewDirections from 'react-native-maps-directions';
 
 


const GOOGLE_MAPS_APIKEY = 'AIzaSyDC5YeK0OuXzBkkpcdYF71wTjtIGVV4NgE'

const  p4 = () => {


  const route = useRoute();
const origin ={
  latitude: route.params.originPlace.details.geometry.location.lat ,
  longitude:  route.params.originPlace.details.geometry.location.lng,
 
}


 const destination ={
  
  latitude:route.params.destinationPlace.details.geometry.location.lat,
  longitude:route.params.destinationPlace.details.geometry.location.lng,
 
} 

   
  console.log(route.params.destinationPlace.details.geometry.location.lat, route.params.destinationPlace.details.geometry.location.lng)
 
  
  
const navigation = useNavigation ();

  

 return (

  <MapView
  
  style={{height:1000,width:1000}}

  initialRegion={{
    latitude: 12.139568192856526,
      longitude:-86.22920703809714,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
  }}
  >
  <MapViewDirections
    origin={origin}
    destination={destination}
    apikey={GOOGLE_MAPS_APIKEY}
    strokeWidth={4}
    strokeColor="#033683"
  />
</MapView>

  );
}

export default  p4;