import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './ErrorView.styles';

const ErrorView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Failed to load</Text>
    </View>
  );
};

export {ErrorView};
