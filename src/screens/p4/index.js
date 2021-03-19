import React from 'react';
import { Text, View , Pressable,Alert,Image } from 'react-native';
import MapView , {PROVIDER_GOOGLE , Marker} from 'react-native-maps';
import { useNavigation} from '@react-navigation/native'
import MapViewDirections from 'react-native-maps-directions';
 
 


const GOOGLE_MAPS_APIKEY = 'AIzaSyDC5YeK0OuXzBkkpcdYF71wTjtIGVV4NgE'

const  Home = () => {
const   navigation = useNavigation ();

  const origin ={
    latitude: 12.139568192856526,
      longitude:-86.22920703809714
  };
  const destination ={
    latitude:  12.153102831450843,  
      longitude:-86.22988338908118,
  };


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
    strokeWidth={5}
    strokeColor="black"
  />
</MapView>


 

  

   


  );
}

export default  Home;