import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react';
import {Text, View} from 'react-native';
import {AuthContext} from '../Context/AuthContext/AuthContext';
import {RootStackParams} from '../Navigator/StackNavigator';
import {styles} from '../Theme/appTheme';
/**
 * No es la mejor manera
 */
/* interface RouteParams {
  id: number;
  name: string;
} */
interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'> {}

export const PersonScreen = ({navigation, route}: Props) => {
  //const params = route.params as RouteParams;
  const params = route.params;
  const {changeUserName} = useContext(AuthContext);
  useEffect(() => {
    navigation.setOptions({
      title: params.name,
      headerBackTitle: '',
    });
  }, []);
  useEffect(() => changeUserName(params.name), []);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
