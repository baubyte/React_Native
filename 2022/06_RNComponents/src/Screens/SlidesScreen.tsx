import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import {ThemeContext} from '../Context/themeContext/ThemeContext';
import {useAnimation} from '../Hooks/useAnimation';
import {RootStackParams} from '../Navigation/types';

const {width: screenWidth} = Dimensions.get('window');
interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];
interface Props extends StackScreenProps<RootStackParams, 'SlidesScreen'> {}

export const SlidesScreen = ({navigation}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const isVisible = useRef(false);
  const {opacity, fadeIn} = useAnimation();
  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          ...internalStyles.containerItem,
          backgroundColor: colors.background,
        }}>
        <Image source={item.img} style={internalStyles.image} />
        <Text style={{...internalStyles.title, color: colors.primary}}>
          {item.title}
        </Text>
        <Text style={{...internalStyles.subTitle, color: colors.text}}>
          {item.desc}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={internalStyles.container}>
      <Carousel
        data={items}
        renderItem={({item}) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout={'default'}
        onSnapToItem={index => {
          setActiveIndex(index);
          if (index === 2) {
            isVisible.current = true;
            fadeIn();
          }
        }}
      />

      <View style={internalStyles.buttonContainer}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            ...internalStyles.dotStyle,
            backgroundColor: colors.primary,
          }}
        />
        <Animated.View style={{opacity}}>
          <TouchableOpacity
            style={{
              ...internalStyles.buttonEnter,
              backgroundColor: colors.primary,
            }}
            activeOpacity={0.9}
            onPress={() => {
              if (isVisible.current) {
                navigation.navigate('HomeScreen');
              }
            }}>
            <Text style={internalStyles.buttonEnterText}>Entrar</Text>
            <Icon name="chevron-forward-outline" color="white" size={30} />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};
const internalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  containerItem: {
    flex: 1,
    borderRadius: 5,
    padding: 40,
    justifyContent: 'center',
  },
  image: {
    width: '70%',
    height: '80%',
    resizeMode: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856D6',
  },
  subTitle: {
    fontSize: 16,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  buttonEnter: {
    flexDirection: 'row',
    width: 140,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonEnterText: {
    fontSize: 25,
    color: 'white',
  },
});
