import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MainScreen} from '@screens/MainScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={MainScreen} />
    </Drawer.Navigator>
  );
}
