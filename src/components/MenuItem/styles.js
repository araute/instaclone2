import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Row: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    marginVertical: 5,
    backgroundColor: '#fff',
    flexWrap: 'wrap',
    height: 125,
    fontSize: 25,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  Title: {
    fontFamily: 'System',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    alignSelf: 'flex-start',
    lineHeight: 25,
  },
  Subtitle: {
    fontFamily: 'System',
    fontSize: 16,
    alignSelf: 'flex-start',
    width: '65%',
    lineHeight: 25,
    flexWrap: 'wrap',
  },
  Container: {
    flex: 1,
    flexDirection: 'row',
    fontFamily: 'System',
    fontSize: 16,
    alignSelf: 'flex-start',
    width: '65%',
  },
  Distance: {
    color: '#000',
    fontSize: 16,
    marginRight: 10,
    lineHeight: 25,
  },
  Phone: {
    color: '#1e90ff',
    fontSize: 16,
    lineHeight: 25,
  },
  ButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: 60,
    height: 60,
    marginVertical: 20,
    marginHorizontal: 55,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  image: {borderRadius: 10},
});

export default styles;
