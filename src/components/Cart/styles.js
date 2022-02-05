import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cart: {
    backgroundColor: 'red',
    height: 50,
    width: 350,
    borderRadius: 25,
    flexDirection: 'row',
  },

  cartHeading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  cartLocation: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    flexWrap: 'nowrap',
  },
  cartItemCount: {
    flex: 1,
    alignItems: 'flex-start',
  },
  cartMiddleContent: {
    flex: 3,
    alignItems: 'center',
    paddingTop: 5,
  },
  cartIcon: {flex: 1, paddingTop: 10, paddingLeft: 15},
  cartContainer: {alignItems: 'center'},
});

export default styles;
