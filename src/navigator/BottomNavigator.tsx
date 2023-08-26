import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {ChapterScreen} from 'src/screens/ChapterScreen';
import {ContentScreen} from 'src/screens/ContentScreen';

const BottomTab = createBottomTabNavigator();

export function BottomNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarIcon: () => null,
        tabBarItemStyle: {
          alignSelf: 'center',
        },
      }}>
      <BottomTab.Screen name="Content" component={ContentScreen} />
      <BottomTab.Screen name="Chapter" component={ChapterScreen} />
    </BottomTab.Navigator>
  );
}
