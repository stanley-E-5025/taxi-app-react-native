import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },

  view: {
    alignItems: 'center',
  },
  custom: {
    width: 25,
    height: 25,
    borderRadius: 100,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  text21: {
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  main: {
    width: 100,
    height: 50,
    borderRadius: 10,

    justifyContent: 'center',
    position: 'absolute',
  },

  presable: {
    backgroundColor: '#171717',

    width: 300,
    height: 50,
    borderRadius: 10,

    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    borderColor: '#000000',
    borderWidth: 0.2,
  },

  text: {
    textAlign: 'center',

    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
