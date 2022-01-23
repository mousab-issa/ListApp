import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  textInput: {
    backgroundColor: '#FAFAFA',
    borderRadius: 15,
    borderColor: 'grey',
    borderWidth: 1.5,
    height: 60,
    width: '100%',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 30,
    height: 70,
    width: '100%',
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  startColumn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});
