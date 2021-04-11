import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Screens from '../side-bar/index';

const Drawer = createDrawerNavigator();

export default function Nav() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="home" component={Screens} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
