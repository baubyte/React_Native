export type RootStackParams = {
  HomeScreen: undefined;
  Animation101Screen: undefined;
  Animation102Screen: undefined;
};
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParams {}
  }
}
