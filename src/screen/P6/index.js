import React from 'react';
import {Text, View, Pressable} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './styles';

const P6 = () => {
  const route = useRoute();
  console.log(route.params);

  return (
    <View style={styles.map}>
      <Text>
        en esta pantalla sera monstrado el auto aproximandose al cliente ya que
        toda la logica de informacion fue establesida esta es la puerta de
        salida par los datos de la orden {route.params.orden.lonA}{' '}
        {route.params.orden.latA} {route.params.orden.lonB}{' '}
        {route.params.orden.latB}
      </Text>
    </View>
  );
};

export default P6;
