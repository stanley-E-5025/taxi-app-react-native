import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  view: {
    height: '100%',
    width: '100%',
    backgroundColor: '#ffffff',
  },
  presable: {
    width: 200,
    height: 30,
    borderRadius: 10,
    alignSelf: 'center',
    margin: 20,
    alignItems: 'center',
  },

  title: {
    width: '100%',
    height: 20,

    borderRadius: 10,

    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: 100,
  },

  titleText: {
    color: '#171717',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
  input: {
    height: 40,
    margin: 12,

    borderRadius: 10,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
  },

  numberinput: {
    height: 40,
    width: 200,

    borderRadius: 10,
    backgroundColor: '#ffffff',
    marginRight: 10,
    paddingLeft: 10,
  },
  bottom: {
    width: '100%',
    height: 40,

    top: 150,
    flexDirection: 'row',

    justifyContent: 'center',
  },

  bottomtext: {
    fontWeight: 'bold',
  },
  infotext: {
    marginLeft: 10,
    fontSize: 12,
  },

  infotext2: {
    marginLeft: 45,
    fontSize: 10,
    color: '#898989',
  },

  numberinputview: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 10,
  },

  number: {
    marginLeft: 20,
    textAlign: 'center',
    fontSize: 17,
  },

  numberview: {
    width: 100,
    height: '100%',

    justifyContent: 'center',
  },

  bt: {
    width: 350,
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    alignSelf: 'center',

    alignItems: 'center',
    justifyContent: 'center',
    top: 100,
    borderColor: '#171717',
    borderWidth: 0.2,
  },
  img: {
    width: '100%',
    height: 200,
  },

  error: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 200,
  },
});

export default styles;
