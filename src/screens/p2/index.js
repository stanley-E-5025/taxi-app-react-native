import React from 'react';
import { Text, View ,TextInput, SafeAreaView , Pressable  , Alert, ListView ,} from 'react-native';
import { CurrentRenderContext, useNavigation} from '@react-navigation/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import  styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';


navigator.geolocation = require('react-native-geolocation-service');

navigator.geolocation = require('@react-native-community/geolocation');
// constantes para la funcion del boton o pressable

const P2 = () => {
  const   navigation = useNavigation ();
  const move =( ) => 
  {
    navigation.navigate('p3')
  } 
   
  // barra de auto completado con google 
    return (
  <SafeAreaView>
          
   
     
     <View style={styles.view1}>
     <View style={styles.view2}>
     <GooglePlacesAutocomplete
           placeholder='Search'
           currentLocation={true}
           currentLocationLabel='Current location'
           renderDescription={(data)=> data.description || data.vicinity}
           styles={
            {
              listView: {
                top: 60,
              }
            }
            
 
             }
           onPress={(data, details = null) => {
             // 'details' is provided when fetchDetails = true 
            console.log(data, details); }}
            
           query={{key: 'AIzaSyDC5YeK0OuXzBkkpcdYF71wTjtIGVV4NgE', language: 'en',}}
         />
     </View>
         

  
     <View style={styles.view3}>
     <GooglePlacesAutocomplete
           placeholder='were'
            
           onPress={(data, details = null) => {
             // 'details' is provided when fetchDetails = true 
            console.log(data, details);}}

            
          
           query={{key: 'AIzaSyDC5YeK0OuXzBkkpcdYF71wTjtIGVV4NgE', language: 'en',}}

         />
     </View>
     </View>


     <Pressable onPress={move}
     style={styles.pressable}>
     <Text style={styles.text}> 
     <Icon name="angle-right" size={50} color="#000000" />
       </Text>
     </Pressable>
      
  </SafeAreaView>
  );
}

export default  P2;