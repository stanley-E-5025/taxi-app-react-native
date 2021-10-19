import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
  },
  textInput: {
    padding: 10,

    marginVertical: 5,
    marginLeft: 20,
    backgroundColor: '#ffffff',
    height: 40,
    borderRadius: 5,
    color: '#000000',

    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 13},

    marginBottom: 400,
  },

  textInput3: {
    position: 'absolute',
    padding: 10,
    top: 113,
    marginVertical: 5,
    marginLeft: 32,
    backgroundColor: '#ffffff',
    height: 40,
    borderRadius: 5,
    color: '#000000',

    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 13},
    width: '90%',
  },

  textInput2: {
    padding: 10,

    marginVertical: 5,
    marginLeft: 20,
    backgroundColor: '#ffffff',
    height: 40,
    borderRadius: 5,
    color: '#000000',

    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 13},
    marginBottom: 60,
  },
  separator: {
    height: 1,
  },
  listView: {
    position: 'absolute',
    top: 105,
  },

  listView2: {
    position: 'absolute',
    top: 105,

    marginTop: 60,
  },
  autocompleteContainer: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
  },

  autocompleteContainer2: {
    position: 'absolute',

    left: 10,
    right: 10,
    marginTop: 60,
  },

  autocompleteContainer3: {
    position: 'absolute',

    left: 10,
    right: 10,

    marginTop: 5,

    height: 300,
    display: 'flex',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 0,
    backgroundColor: '#fff',
    height: 38,
    borderRadius: 10,
  },
  iconContainer: {
    backgroundColor: '#fff',
    padding: 4,
    borderRadius: 50,
    marginRight: 15,
  },
  locationText: {
    color: '#171717',
  },

  circle: {
    width: 20,
    height: 20,
    backgroundColor: 'black',
    position: 'absolute',
    top: 15,
    left: 6,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: 1,
    height: 25,
    backgroundColor: '#171717',
    position: 'absolute',
    top: 43,
    left: 17,
  },

  line2: {
    width: 1,
    height: 25,
    backgroundColor: '#171717',
    position: 'absolute',
    top: 100,
    left: 17,
  },
  square: {
    width: 20,
    height: 20,
    backgroundColor: 'black',
    position: 'absolute',
    top: 75,
    left: 6,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square2: {
    width: 20,
    height: 20,
    backgroundColor: 'black',
    position: 'absolute',
    top: 130,
    left: 6,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  square3: {
    width: 20,
    height: 20,
    backgroundColor: 'black',
    position: 'absolute',
    top: 130,
    left: 6,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drivertxt: {
    height: 40,
    borderRadius: 5,
    color: '#ffffff',
    position: 'absolute',
    paddingLeft: 10,
    width: '80%',
    color: '#000000',
    bottom: 10,
    alignSelf: 'center',
    borderBottomColor: '#373737',
    borderBottomWidth: 0.5,
    left: 10,
    borderColor: '#373737',
  },

  info: {
    width: 100,
    height: 30,
    borderRadius: 7,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    top: 400,
    position: 'absolute',
    marginLeft: 20,
  },
  save: {
    width: 150,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  txt: {
    fontWeight: 'bold',
    color: '#D3D3D3',
  },
  txt2: {
    fontWeight: 'bold',
    color: '#171717',
  },

  input: {
    width: 45,
    height: 45,
    backgroundColor: '#171717',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 130,
    right: 10,
  },

  infoView: {
    width: '100%',
    height: 155,
    backgroundColor: '#fff',

    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  bottomBar: {
    position: 'absolute',
    width: '100%',
    height: 30,
    bottom: 0,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 35,
  },

  step: {
    width: 25,
    height: 25,
    backgroundColor: '#fff',

    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },

  arrow: {
    position: 'absolute',

    top: 5,
    right: 10,
  },
  note: {
    bottom: 15,
    left: 30,
    width: 45,
    height: 45,
    backgroundColor: '#171717',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  destino: {
    top: 0,
    left: 10,
    width: '80%',
    height: 100,
    color: '#000',
  },

  title: {color: '#000', fontWeight: 'bold', margin: 10, fontSize: 19},

  driverNote: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    position: 'absolute',
  },

  save: {
    width: '80%',
    height: 40,
    backgroundColor: '#000',
    bottom: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 10,
  },

  note: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  notetxt: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  noteTxt: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },

  noteTxtTitle: {
    position: 'absolute',
    top: 10,
    left: 10,
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export default styles;
