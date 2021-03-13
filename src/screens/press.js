import React from 'react';
import { Text, View, Pressable} from 'react-native';
import { useNavigation} from '@react-navigation/native'
import styles from './styles'
const Pres = () => {
    const   navigation = useNavigation ();

    const move =( ) => {
        navigation.navigate('p2')
      } 
  return (

 
      
<Pressable onPress={move }
          style={styles.presable} >
    <Text style={styles.text}>pedir</Text>
</Pressable>
  );
}

export default Pres;