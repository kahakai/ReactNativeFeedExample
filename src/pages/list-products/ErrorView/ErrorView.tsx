import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './ErrorView.styles';
import {IErrorView} from './ErrorView.types';

const ErrorView = ({message}: IErrorView) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Failed to load</Text>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

export {ErrorView};
