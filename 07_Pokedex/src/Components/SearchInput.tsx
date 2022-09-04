import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Platform,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export const SearchInput = ({style}: Props) => {
  return (
    <View style={{...internalStyles.container, ...(style as any)}}>
      <View style={internalStyles.textBackground}>
        <TextInput
          placeholder="Buscar Pokémon"
          placeholderTextColor="grey"
          style={internalStyles.textInput}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Icon name="search-outline" color="grey" size={35} />
      </View>
    </View>
  );
};
const internalStyles = StyleSheet.create({
  container: {
    //backgroundColor: 'red',
  },
  textBackground: {
    backgroundColor: '#F3F1F3',
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    color: 'black',
    top: Platform.OS === 'ios' ? 0 : 2,
  },
});
