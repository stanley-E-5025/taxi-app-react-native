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
  },

  separator: {
    height: 1,
  },
  listView: {
    position: 'absolute',
    top: 105,
  },
  autocompleteContainer: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 0,
    backgroundColor: '#fff',
    height: 40,
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

  drivertxt: {
    height: 40,
    borderRadius: 5,
    color: '#ffffff',
    position: 'absolute',
    paddingLeft: 10,
    width: '95%',
    color: '#000000',
    top: 90,
    alignSelf: 'center',
    borderBottomColor: '#000',
    borderBottomWidth: 0.5,
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
    width: '95%',
    height: 160,
    backgroundColor: '#171717',
    borderRadius: 5,
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
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
  },

  title: {color: '#fff', fontWeight: 'bold', margin: 10, fontSize: 19},

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
});

export default styles;
