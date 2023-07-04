import {StyleSheet} from 'react-native';

const HEIGHT = 8;

const BORDER_RADIUS = HEIGHT / 2;

const styles = StyleSheet.create({
  container: {
    height: HEIGHT,
    width: '100%',
    flexDirection: 'row',
    borderRadius: BORDER_RADIUS,
  },
  progress: {
    backgroundColor: '#000000',
    borderRadius: BORDER_RADIUS,
  },
});

export {styles};
