import {NavigationContainer} from '@react-navigation/native';
import {MainNavigator} from './MainNavigator';

export const Navigator = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};
