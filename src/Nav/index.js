import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './user'
 
import Main from './drawer'
 const Drawer = createDrawerNavigator();
 
  
const Nav = (props) => {
  return (
    <NavigationContainer>
        <Drawer.Navigator  drawerContent={(props) => <CustomDrawer {...props} />}>

        <Drawer.Screen name="P1" component={Main} />
         
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default Nav