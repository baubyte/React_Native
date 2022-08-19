import React, {useState} from 'react';
import {StyleSheet, View, FlatList, ActivityIndicator} from 'react-native';
import {FadeInImage} from '../Components/FadeInImage';
import {HeaderTitle} from '../Components/HeaderTitle';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5, 6]);
  const renderItem = (item: number) => {
    //return <Text style={internalStyles.textItem}>{item}</Text>;
    return <FadeInImage uri={`https://picsum.photos/id/${item}/500/400`} />;
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
        ListHeaderComponent={<HeaderTitle title="Infinite Scroll" />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View style={internalStyles.activityIndicator}>
            <ActivityIndicator size={25} color="#5856D6" />
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
