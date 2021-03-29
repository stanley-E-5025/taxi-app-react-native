import React from 'react';
import { Text, View , SafeAreaView , Pressable} from 'react-native';
 import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';

const menu = () => {




  const  logear = () =>{
    console.log("dddd")
  }
  
  return (
 <SafeAreaView>
        <View style={styles.view1}>
        <Icon name="user-o" size={40} color="#ffffff"  />
      

       </View>

       <View style={styles.infot}> 
<Text style={styles.text}> <Icon name="user-o" size={20} color="#000000"  />  stanley gordon</Text>
       </View>

       <View style={styles.view2}> 
       <View style={styles.info}>
        
<View style={styles.numero}> 
<Text style={styles.text2}>+505</Text>
</View>
<Text style={styles.text2}>87328394</Text>
  </View>
  <View style={styles.infop}>

</View>
<View style={styles.infos}>
<Pressable style={styles.social} onPress={logear}><Icon name="instagram" size={20} color="#ffffff"  /></Pressable>
<Pressable style={styles.social}><Icon name="facebook" size={20} color="#ffffff"  /></Pressable>
<Pressable style={styles.social}><Icon name="whatsapp" size={20} color="#ffffff"  /></Pressable>
 
</View>
  </View>
 </SafeAreaView>
  );
}

export default menu;