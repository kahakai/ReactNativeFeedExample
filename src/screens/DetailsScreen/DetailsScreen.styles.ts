import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  productContainer: {
    gap: 8,
  },
  image: {
    height: 256,
    width: 256,
    alignSelf: 'center',
    borderRadius: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
  },
  prices: {
    marginTop: 24,
  },
});

export {styles};
