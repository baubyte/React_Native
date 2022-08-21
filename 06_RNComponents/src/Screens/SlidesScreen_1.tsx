import React, {useState} from 'react';
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
import {useAnimation} from '../Hooks/useAnimation';

const {height: screenHeight, width: screenWidth} = Dimensions.get('window');
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
export const SlidesScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const {opacity, fadeIn} = useAnimation();
  const renderItem = (item: Slide) => {
    return (
      <View style={internalStyles.containerItem}>
        <Image source={item.img} style={internalStyles.image} />
        <Text style={internalStyles.title}>{item.title}</Text>
        <Text style={internalStyles.subTitle}>{item.desc}</Text>
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
            setIsVisible(true);
            fadeIn();
          }
        }}
      />

      <View style={internalStyles.buttonContainer}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={internalStyles.dotStyle}
        />
        {isVisible && (
          <Animated.View style={{opacity}}>
            <TouchableOpacity
              style={internalStyles.buttonEnter}
              activeOpacity={0.9}
              onPress={() => console.log('Click')}>
              <Text style={internalStyles.buttonEnterText}>Entrar</Text>
              <Icon name="chevron-forward-outline" color="white" size={30} />
            </TouchableOpacity>
          </Animated.View>
        )}
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
    backgroundColor: 'white',
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
    backgroundColor: '#5856D6',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  buttonEnter: {
    flexDirection: 'row',
    backgroundColor: '#5856D6',
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
