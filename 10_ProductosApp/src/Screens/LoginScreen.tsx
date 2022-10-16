import React from 'react';
import {Platform, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Background} from '../Components/Background';
import {WhiteLogo} from '../Components/WhiteLogo';
import {loginStyles} from '../Theme/loginTheme';

export const LoginScreen = () => {
  return (
    <>
      {/* Background */}
      <Background />
      <View style={loginStyles.formContainer}>
        {/* Keyboard avoid view */}
        <WhiteLogo />
        <Text style={loginStyles.title}>Login</Text>
        <Text style={loginStyles.label}>Email:</Text>
        <TextInput
          placeholder="Ingrese su Email"
          placeholderTextColor="rgba(255,255,255,0.4)"
          keyboardType="email-address"
          underlineColorAndroid="white"
          style={[
            loginStyles.inputField,
            Platform.OS === 'ios' && loginStyles.inputFieldIOS,
          ]}
          selectionColor="white"
          // TODO  onChange, value
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Text style={loginStyles.label}>Contraseña:</Text>
        <TextInput
          placeholder="***********"
          placeholderTextColor="rgba(255,255,255,0.4)"
          underlineColorAndroid="white"
          style={[
            loginStyles.inputField,
            Platform.OS === 'ios' && loginStyles.inputFieldIOS,
          ]}
          selectionColor="white"
          // TODO  onChange, value
          autoCapitalize="none"
          autoCorrect={false}
        />
        {/* Botones */}
        <View style={loginStyles.buttonContainer}>
          <TouchableOpacity activeOpacity={0.8} style={loginStyles.button}>
            <Text style={loginStyles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        {/* Crear Nueva Cuenta */}
        <View style={loginStyles.newUserContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => console.log('registro')}>
            <Text style={loginStyles.buttonText}>Crear Cuenta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
