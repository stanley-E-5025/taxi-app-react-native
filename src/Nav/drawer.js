import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import P0 from '../screen/p0/index';
import P1 from '../screen/p1/index';
import P2 from '../screen/p2/index';
import P3 from '../screen/p3/index';
import P4 from '../screen/p4/index';
import P5 from '../screen/p5/index';
import P6 from '../screen/P6/index';
import CustomDrawer from './user';
import P7 from '../screen/P7';
const Drawer = createDrawerNavigator();

export default function Nav(props) {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        edgeWidth={300}>
        <Drawer.Screen
          name={'P0'}
          component={P0}
          options={{
            swipeEnabled: false,
          }}
        />

        <Drawer.Screen name={'P1'} component={P1} />
        <Drawer.Screen
          name={'P2'}
          component={P2}
          options={{
            swipeEnabled: false,
          }}
        />
        <Drawer.Screen
          name={'P3'}
          component={P3}
          options={{
            swipeEnabled: false,
          }}
        />
        <Drawer.Screen
          name={'P4'}
          component={P4}
          options={{
            swipeEnabled: false,
          }}
        />
        <Drawer.Screen
          name={'P5'}
          component={P5}
          options={{
            swipeEnabled: false,
          }}
        />
        <Drawer.Screen
          name={'P6'}
          component={P6}
          options={{
            swipeEnabled: false,
          }}
        />
        <Drawer.Screen
          name={'P7'}
          component={P7}
          options={{
            swipeEnabled: false,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
