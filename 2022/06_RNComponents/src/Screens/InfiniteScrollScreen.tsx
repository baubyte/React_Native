import React, {useContext, useState} from 'react';
import {StyleSheet, View, FlatList, ActivityIndicator} from 'react-native';
import {FadeInImage} from '../Components/FadeInImage';
import {HeaderTitle} from '../Components/HeaderTitle';
import {ThemeContext} from '../Context/themeContext/ThemeContext';
import {styles} from '../Theme/appTheme';

export const InfiniteScrollScreen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5, 6]);
  const renderItem = (item: number) => {
    //return <Text style={internalStyles.textItem}>{item}</Text>;
    return (
      <FadeInImage
        uri={`https://picsum.photos/id/${item}/500/400`}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{width: '100%', height: 400}}
      />
    );
    /* <Image
        source={{uri: `https://picsum.photos/id/${item}/500/400`}}
        style={internalStyles.imageItem}
      /> */
  };
  /**
   *
   */
  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 6; i++) {
      newArray[i] = numbers.length + i;
      setTimeout(() => {
        setNumbers([...numbers, ...newArray]);
      }, 1500);
    }
  };
  return (
    <View style={internalStyles.container}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={() => (
          <View style={styles.globalMargin}>
            <HeaderTitle title="Infinite Scroll" />
          </View>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View style={internalStyles.activityIndicator}>
            <ActivityIndicator size={25} color={colors.primary} />
          </View>
        )}
      />
    </View>
  );
};
const internalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textItem: {
    backgroundColor: 'green',
    height: 150,
  },
  imageItem: {
    width: '100%',
    height: 400,
  },
  activityIndicator: {
    height: 150,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
