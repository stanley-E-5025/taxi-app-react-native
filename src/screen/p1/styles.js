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
    width: 30,
    height: 30,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
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
    backgroundColor: '#286EFA',

    width: 340,
    height: 47,
    borderRadius: 8,

    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    borderColor: '#000000',
    borderWidth: 0.2,
    bottom: 15,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 13},
  },

  text: {
    textAlign: 'center',

    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  historial: {
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 13},
    backgroundColor: '#ffffff',

    width: 50,
    height: 50,
    borderRadius: 100,

    justifyContent: 'center',
    position: 'absolute',
    bottom: 159,
    right: 10,
    alignItems: 'center',
    borderColor: '#000000',
    borderWidth: 0.1,
  },

  mainCont: {
    backgroundColor: '#fff',
    width: 45,
    height: 45,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 100,

    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 13},
  },
});

export default styles;
