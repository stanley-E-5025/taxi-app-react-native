import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  icon: {
    width: 35,
    height: 35,
    margin: 5,
  },

  container: {
    width: 300,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
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
  drawer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  txt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default styles;
