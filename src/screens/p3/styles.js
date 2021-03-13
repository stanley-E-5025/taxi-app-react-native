import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   
 view1:{
      
    width:40, 
    height: 100, 
    borderRadius: 100 , 
    alignItems:"center",
    justifyContent:"center",
    alignContent:"center",
      
    
     
    
  },

 car:{
   
    width:60, 
    height: 100 , 
    borderRadius: 20 , 
     justifyContent:'center'
    
 },
    
 des:{
     
  width:250, 
  height: 100 , 
  borderRadius: 20 , 
  alignItems:"center",
  justifyContent:"center"
 },


    view2:{
       flexDirection:"row",
      justifyContent:"space-between",
       margin:10,
       marginTop:50

        
    },


    text:{

      textAlign:"left"
    },


    textdes:{
fontSize:20,
fontWeight:"600",
 
    }
   
});


export default styles;