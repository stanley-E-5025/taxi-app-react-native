import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },

  view: {
    alignItems: 'center',
  },

  viewbt: {
    backgroundColor: '#ffffff10',

    width: 80,
    height: 600,
    position: 'absolute',
    alignSelf: 'flex-start',
  },

  main: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
    position: 'absolute',
    marginLeft: 20,
  },

  presable: {
    backgroundColor: '#171717',

    width: 250,
    height: 50,
    borderRadius: 70,
    marginTop: 700,
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
  },

  text: {
    textAlign: 'center',

    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  viev2: {
    position: 'absolute',
    alignSelf: 'center',
  },

  menu: {
    height: 30,
    width: 60,

    position: 'absolute',
    borderRadius: 10,
    margin: 20,
  },

  aa: {
    width: 100,
    height: 100,
    backgroundColor: '#000000',
  },
});

export default styles;
