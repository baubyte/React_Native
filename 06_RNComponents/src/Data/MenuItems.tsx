import {MenuItem} from '../Interfaces/appInterfaces';
export const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    iconName: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    iconName: 'albums-outline',
    component: 'Animation102Screen',
  },
  {
    name: 'Switches',
    iconName: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    iconName: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'Text inputs',
    iconName: 'document-text-outline',
    component: 'TextInputScreen',
  },
  {
    name: 'Pull To Refresh',
    iconName: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    iconName: 'list-outline',
    component: 'CustomSectionListScreen',
  },
  {
    name: 'Modal',
    iconName: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    name: 'Infinite Scroll',
    iconName: 'download-outline',
    component: 'InfiniteScrollScreen',
  },
];
