import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

import {styles} from './LoadingView.styles';

const LoadingView = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export {LoadingView};
