import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation} from '@react-navigation/native'

const P3 = () => {

    const   navigation = useNavigation ();

 const move =( ) => {
   navigation.navigate('p2')
 } 

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      
    </View>
  );
}

export default P3;