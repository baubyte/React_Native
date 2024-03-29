import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#5856D6',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  subTitle: {
    marginVertical: 20,
    fontSize: 20,
    marginBottom: 10,
  },
  buttonsPersons: {
    flexDirection: 'row',
  },
  buttonLarge: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  buttonLargeText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    margin: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  menuContainer: {
    marginVertical: 50,
    marginHorizontal: 50,
    alignItems: 'center',
  },
  menuButton: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  menuText: {
    fontSize: 20,
  },
});
