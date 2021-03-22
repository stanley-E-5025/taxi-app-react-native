import React from 'react';
import { Text, View , Pressable,Alert,Image,SafeAreaView } from 'react-native';
import MapView , {PROVIDER_GOOGLE , Marker} from 'react-native-maps';
import { useNavigation} from '@react-navigation/native'
import styles from './styles'
import Pres from './press'
import cars from '../data/cars'




const  Home = () => {
const   navigation = useNavigation ();

  
 
 return (
   
 
<View style={styles.view}>
    
      
    <MapView 
    
    showsUserLocation={true}
    style={styles.map}
    
    
    initialRegion={{
      latitude:  12.153102831450843,  
      longitude: -86.22988338908118,  
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
