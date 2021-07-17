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
    width: 350,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#000000',
    position: 'absolute',
    bottom: 10,
  },
  drawer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  txt: {
    color: '#fff',
  },
});

export default styles;
