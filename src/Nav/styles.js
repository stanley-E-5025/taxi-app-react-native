import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  user: {
    backgroundColor: '#E5E5E5',
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: 20,
    marginLeft: 7,
    borderRadius: 100,
  },

  text: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 20,
  },

  textn: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 12,
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
  line: {
    width: '100%',
    height: 2,
    alignSelf: 'flex-start',
    marginTop: 50,
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
  },
  history: {
    width: 260,
    height: 40,
    alignSelf: 'flex-start',
    marginTop: 40,

    justifyContent: 'center',
    borderRadius: 9,
    marginLeft: 7,
  },
  constacto: {
    width: 260,
    height: 40,
    alignSelf: 'flex-start',
    marginTop: 20,

    justifyContent: 'center',
    borderRadius: 9,
    marginLeft: 7,
  },

  view: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
  },
});

export default styles;
