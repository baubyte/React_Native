import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../Theme/appTheme';

export const Page2Screen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: '',
    });
  }, []);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page2Screen</Text>
      <Button
        title="Ir Pagina 3"
        onPress={() => navigation.navigate('Page3Screen')}
      />
    </View>
  );
};
