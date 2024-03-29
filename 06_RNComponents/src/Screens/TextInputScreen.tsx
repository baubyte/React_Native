import React, {useContext} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from 'react-native';
import {HeaderTitle} from '../Components/HeaderTitle';
import {Separator} from '../Components/Separator';
import {styles} from '../Theme/appTheme';
import {useForm} from '../Hooks/useForm';
import {Spacer} from '../Components/Spacer';
import {CustomSwitch} from '../Components/CustomSwitch';
import {ThemeContext} from '../Context/themeContext/ThemeContext';

export const TextInputScreen = () => {
  const {
    theme: {colors, dividerColor},
  } = useContext(ThemeContext);
  const {form, onChange, isSubscribed} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title="Text Inputs" />
            <TextInput
              style={{
                ...internalStyles.input,
                color: colors.text,
                borderColor: dividerColor,
              }}
              placeholder="Ingrese su Nombre"
              placeholderTextColor={colors.text}
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => onChange(value, 'name')}
            />
            <Separator />
            <TextInput
              style={{
                ...internalStyles.input,
                color: colors.text,
                borderColor: dividerColor,
              }}
              placeholder="Ingrese su Email"
              placeholderTextColor={colors.text}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={value => onChange(value, 'email')}
              keyboardType="email-address"
              keyboardAppearance="dark"
            />
            <View style={internalStyles.switchRow}>
              <Text style={internalStyles.switchText}>Suscribirme</Text>
              <Spacer />
              <CustomSwitch
                isOn={isSubscribed}
                onChange={value => onChange(value, 'isSubscribed')}
              />
            </View>
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <Separator />
            <TextInput
              style={{
                ...internalStyles.input,
                color: colors.text,
                borderColor: dividerColor,
              }}
              placeholder="Ingrese su Teléfono"
              placeholderTextColor={colors.text}
              onChangeText={value => onChange(value, 'phone')}
              keyboardType="phone-pad"
            />
            <Separator height={100} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const internalStyles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0,0.3)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  switchRow: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
  },
});
