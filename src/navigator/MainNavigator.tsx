import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen} from '@screens/MainScreen';

const Main = createNativeStackNavigator();

export function MainNavigator() {
  return (
    <Main.Navigator>
      <Main.Screen name="Home" component={MainScreen} />
    </Main.Navigator>
  );
}
