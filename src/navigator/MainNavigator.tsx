import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';

const Main = createNativeStackNavigator();

export function MainNavigator() {
  return (
    <Main.Navigator>
      <Main.Screen name="DrawerNavigator" component={DrawerNavigator} />
      {/* <Main.Screen name="DrawerNavigator" component={DrawerNavigator} /> */}
    </Main.Navigator>
  );
}
