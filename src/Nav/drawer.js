import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './user';
import screens from './screens';

const Drawer = createDrawerNavigator();

export default function Nav(props) {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen
          name="home"
          component={screens}
          options={{swipeEnabled: false}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
