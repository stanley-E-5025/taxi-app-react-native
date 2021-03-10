import React from 'react';
import { Text, View ,TextInput, SafeAreaView , Pressable  , Alert} from 'react-native';
import { useNavigation} from '@react-navigation/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';




const P2 = () => {
 
    const   navigation = useNavigation ();

    const move =( ) => {
      navigation.navigate('p3')
    } 
 

  return (
      
<View style={{   height:500 , margin:10, borderRadius: 20 ,    }}>


<GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyDC5YeK0OuXzBkkpcdYF71wTjtIGVV4NgE',
        language: 'en',
      }}
    />

</View>
 
        
   
  );
}

export default  P2;