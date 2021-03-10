import React from 'react';
import { Text, View ,TextInput, SafeAreaView , Pressable  , Alert ,} from 'react-native';
import { useNavigation} from '@react-navigation/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import P3 from '../p3';




const P2 = () => {
 
    const   navigation = useNavigation ();

    const move =( ) => {
      navigation.navigate('p3')
    } 
 

  return (
      
<View style={{   height:400 , margin:10, borderRadius: 20 ,      }}>


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
 
<Pressable onPress={move}
style={{backgroundColor:"#525252" , padding:5  , borderRadius: 10 , }}>
<Text style={{color:"#ffffff" , fontWeight:"bold" , fontSize:15 , textAlign:"center"  }}>  listo </Text>
</Pressable>
</View>
  
   
        
   
  );
}

export default  P2;