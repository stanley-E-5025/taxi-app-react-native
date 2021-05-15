import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  user: {
    backgroundColor: '#000000',
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 100,
  },

  text: {
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },

  textn: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 15,
  },

  viewsocial: {
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',

    marginTop: 400,
  },

  pres: {
    marginRight: 80,
    height: 20,
    width: 30,
  },

  history: {
    width: 260,
    height: 40,
    alignSelf: 'flex-start',
    marginTop: 100,

    backgroundColor: '#E8E8E8',
    justifyContent: 'center',
    borderRadius: 9,
    marginLeft: 7,
  },

  view: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
