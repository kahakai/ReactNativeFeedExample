import React from 'react';
import {ISeparator} from './Separator.types';
import {View} from 'react-native';
import {styles} from './Separator.styles';

const Separator = ({value}: ISeparator) => {
  return (
    <View style={[styles.container, {height: value}]}>
      <View style={styles.separator} />
    </View>
  );
};

export {Separator};
