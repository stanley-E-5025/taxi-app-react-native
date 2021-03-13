import React from 'react';
import { Text, View , Image , Pressable, SafeAreaView} from 'react-native';
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';

const P3 = () => {
   

  return (
     
<SafeAreaView>
<View style={styles.view2}>
    
    <View style={styles.car}>
     <Text><Icon name="taxi" size={50} color="#222222" /></Text>
    </View>
    
    <View style={styles.des}>
    <Text style={styles.textdes}>taxi estandar,      descripcion*,descripcion*   </Text>
    </View>
    
    
    <View style={styles.view1}>
    <Pressable>
      <Text style={styles.text}>
      <Icon name="angle-right" size={50} color="#222222" />
      </Text>
    </Pressable>
    </View>
    
    </View>
</SafeAreaView>
     
  );
}

export default P3;