import React, {useContext, useState} from 'react';
import {ScrollView, View, RefreshControl} from 'react-native';
import {HeaderTitle} from '../Components/HeaderTitle';
import {styles} from '../Theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../Context/themeContext/ThemeContext';

export const PullToRefreshScreen = () => {
  const {top: marginTop} = useSafeAreaInsets(); //IOS
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('Terminamos');
      setRefreshing(false);
      setData('Hola Mundo');
    }, 3500);
  };
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <ScrollView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{marginTop: refreshing ? marginTop : 0}} //IOS
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor={colors.primary}
          colors={['white', 'red', 'orange']}
          style={{backgroundColor: colors.primary}} // iOS
          titleColor={colors.text} // iOS
          title="Loading..." // iOS
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull To Refresh" />
        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};
