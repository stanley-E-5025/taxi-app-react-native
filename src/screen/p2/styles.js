import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  view1: {
  
    height: 40,
    width: 60,

    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  info: {
    marginLeft: 10,
  },

  Text: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#000000',
  },

  text2: {
    color: '#000000',
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 18,
  },

  view2: {
    backgroundColor: '#cccccc',
    width: 200,
    height: 40,

    marginTop: 70,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },

  presable: {
    width: 150,
    height: 50,
    backgroundColor: '#033683',
    alignSelf: 'center',
    marginTop: 400,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  presablecont: {
    height: 50,
    width: 350,

    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },

  presable2: {
    height: 100,
    width: 350,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 50,
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default styles;
