import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';
import {MainScreen} from '@screens/MainScreen';

const Main = createNativeStackNavigator();

export function MainNavigator() {
  return (
    <Main.Navigator>
      <Main.Screen name="MainScreen" component={MainScreen} />
      {/* <Main.Screen name="DrawerNavigator" component={DrawerNavigator} /> */}
    </Main.Navigator>
  );
}
