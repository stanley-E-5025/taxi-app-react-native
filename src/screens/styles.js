import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   
   map:{
    width:1000 
    , height:1000
   },


   view:{
    flex: 1,   alignItems: "center" , backgroundColor:"#838383"
   },
    presable:{
        
     
    backgroundColor:"#033683" , 
    position:"absolute" , 
     width:250 ,
      height:  50,
       borderRadius: 70,
        marginTop: 700
    },


    text:{textAlign:"center" ,
    marginTop:13,
     color:"#ffffff" , 
     fontSize: 20 ,
      fontWeight:"bold"}
});


export default styles;