import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import {styles} from './LoadingFooterView.styles';

const LoadingFooterView = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
};

export {LoadingFooterView};
