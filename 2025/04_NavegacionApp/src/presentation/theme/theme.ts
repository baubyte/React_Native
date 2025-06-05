import { StyleSheet } from 'react-native';
export const globalColors = {
  primary: '#6200ee',
  secondary: '#03dac6',
  background: '#f5f5f5',
  surface: '#ffffff',
  error: '#b00020',
};

export const globalStyles =  StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});
