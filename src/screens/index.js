import React from 'react';
import { View } from 'react-native';
import   MapView , { PROVIDER_GOOGLE , Marker ,  } from 'react-native-maps';
import { useNavigation} from '@react-navigation/native'
import styles from './styles'
import Pres from './press'
import cars from '../data/cars'




const  Home = () => {


 
const   navigation = useNavigation ();
    

 
 

 return (
   
 
<View style={styles.view}>
    
      
    <MapView 
    provider={PROVIDER_GOOGLE}
    showsUserLocation={true}
    style={styles.map}
   
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
