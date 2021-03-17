import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    pressable: {
          
        padding:5  , 
        borderRadius: 10 ,
        width:70,
        height:70,
        justifyContent:'center',
         marginTop:100,
        alignSelf:"center"
      },
       
    
      text:{
        color:"#ffffff" , 
        fontWeight:"bold" , 
        fontSize:15 , 
        textAlign:"center" 
      },

      view2: {
        height:500,    
        borderRadius: 20 ,
            margin:20,
            width:350,
            position:"absolute"
      },
     
      view1: {
        width:400,
        height:300,
        alignSelf:"center",
        alignItems:"center"
      }, 

      view3: {
        height:450,    
        borderRadius: 20 ,
            marginTop:80,
            width:350,
            position:"absolute"
      }  
     
});


export default styles;