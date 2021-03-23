import React from 'react';
import { Text, View, Pressable} from 'react-native';
import { useNavigation} from '@react-navigation/native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';


const Pres = () => {
    const   navigation = useNavigation ();

    const move =( ) => {
        navigation.navigate('p3')
      } 
  return (

 
      
<Pressable onPress={move }
          style={styles.presable} >
    <Text style={styles.text}><Icon name="map" size={25} color="#ffffff"  /> pedir</Text>
</Pressable>
  );
}

export default Pres;