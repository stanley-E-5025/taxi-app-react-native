import React from 'react';
import { Text, View , Pressable} from 'react-native';
 
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import RNLocation from 'react-native-location';


RNLocation.requestPermission({
  ios: 'whenInUse', // or 'always'
  android: {
    detail: 'coarse', // or 'fine'
    rationale: {
      title: "We need to access your location",
      message: "We use your location to show where you are on the map",
      buttonPositive: "OK",
      buttonNegative: "Cancel"
    }
  }
});



RNLocation.checkPermission({
  ios: 'whenInUse', // or 'always'
  android: {
    detail: 'coarse' // or 'fine'
  }
});



RNLocation.getCurrentPermission()
  .then(currentPermission => {
    
  })
const  p0 = () => {
  const   navigation = useNavigation ();

const move =( ) => {
  navigation.navigate('home')
} 
  return (
  

<Pressable style={styles.pers} onPress={move}>

</Pressable>
     
    
  );
}

export default p0;

