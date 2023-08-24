import {ParamListBase, Route, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export interface ScreenProps {
  navigation: StackNavigationProp<ParamListBase>;
  route: Route<string, any>;
}
