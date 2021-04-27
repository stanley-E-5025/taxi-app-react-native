import 'react-native-gesture-handler';
import React from 'react';
 
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './user'
import P1 from '../screen/p1/index'

 const Drawer = createDrawerNavigator();
 
  
const La = (props) => {
  return (
    
        <Drawer.Navigator  drawerContent={(props) => <CustomDrawer {...props} />}>

        <Drawer.Screen name="P1" component={P1} />
         
      </Drawer.Navigator>
    
  );
}
export default La