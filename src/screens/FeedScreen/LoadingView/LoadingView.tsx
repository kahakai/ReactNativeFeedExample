import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './LoadingView.styles';

const LoadingView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export {LoadingView};
