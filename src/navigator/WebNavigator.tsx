import React from 'react';
import {BottomNavigator} from './BottomNavigator';
import {NavigationContainer} from '@react-navigation/native';

export function WebNavigator() {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
}
