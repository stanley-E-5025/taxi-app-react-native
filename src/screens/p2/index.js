import React from 'react';
import { Text, View ,TextInput, SafeAreaView , Pressable  , Alert ,} from 'react-native';
import { useNavigation} from '@react-navigation/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import  styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';


// constantes para la funcion del boton o pressable
const P2 = () => {
const   navigation = useNavigation ();
const move =( ) => 
{
  navigation.navigate('p3')
} 
 
// barra de auto completado con google 
  return (
      
<View style={styles.view}>
<GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true 
       console.log(data, details);}}
      query={{key: 'AIzaSyDC5YeK0OuXzBkkpcdYF71wTjtIGVV4NgE', language: 'en',}}
    />
    
<Pressable onPress={move}
style={styles.pressable}>
<Text style={styles.text}> 
<Icon name="angle-right" size={50} color="#000000" />
  </Text>
</Pressable>
</View>  
  );
}

export default  P2;