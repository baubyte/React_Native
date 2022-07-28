import {RootStackParams} from '../Navigation/types';
export interface MenuItem {
  name: string;
  iconName: string;
  component: component;
}
type component = keyof RootStackParams;
