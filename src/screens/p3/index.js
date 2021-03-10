import React from 'react';
import { Text, View , Image , Pressable} from 'react-native';
 

const P3 = () => {
 
 

  return (
     
    <View>
    
          <View style={{backgroundColor:"#CDCDCD" , width:150, height: 100 , marginTop:120, borderRadius: 20 , marginLeft:10 , flexDirection:"row"   }} >
     <Image style={{height:100, width:200 , borderRadius:20 }}
     
     source={require('../p3/')} />

<View style={{alignContent:"center"  , marginTop:20, marginRight:10}}> 
    <Text style={{ fontSize:15 , fontWeight:"bold" ,    }}>
        *descripcion del veiculo*
    </Text>
</View>

<Pressable  
style={{backgroundColor:"#525252" , height:30  , borderRadius: 10 , alignContent:"center" , marginTop:20 , width: 50}}>
<Text style={{color:"#ffffff" , fontWeight:"bold" , fontSize:15 , textAlign:"center" ,  marginTop:4  }}>  listo </Text>
</Pressable>
 

      </View>
     </View>
     
  );
}

export default P3;