import React from 'react';
import { Text, View , Pressable} from 'react-native';
 
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
 
    
import Geolocation from '@react-native-community/geolocation';

export const getCurrentLocation =()=> new Promise((resolve,reject)=>{
  Geolocation.getCurrentPosition(
    position => {
      const coords ={
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        
      
      };
      resolve(coords);
    },
     error => {
       reject(error.message)
     },
     {enableHighAccuracy: true , timeout:15000 , maximumAge:10000}
  )
})
//add rec tocon next step 
const info = getCurrentLocation()

 
const  p0 = () => {
  const   navigation = useNavigation ();

const move =( ) => {
  navigation.navigate('home', info)
} 
  return (
  

<Pressable style={styles.pers} onPress={move}>

</Pressable>
     
    
  );
}

export default p0;

