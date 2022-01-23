import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

export interface Props {
  navigation: NativeStackNavigationProp<any, any>;
  route: RouteProp<{params: {item: any}}, 'params'>;
}
