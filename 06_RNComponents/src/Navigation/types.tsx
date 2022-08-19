export type RootStackParams = {
  HomeScreen: undefined;
  Animation101Screen: undefined;
  Animation102Screen: undefined;
  SwitchScreen: undefined;
  AlertScreen: undefined;
  TextInputScreen: undefined;
  PullToRefreshScreen: undefined;
  CustomSectionListScreen: undefined;
  ModalScreen: undefined;
  InfiniteScrollScreen: undefined;
};
export type ComponentItem = keyof RootStackParams;
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParams {}
  }
}
