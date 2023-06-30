import React from 'react';
import {ISeparator} from './Separator.types';
import {View} from 'react-native';

const Separator = ({value}: ISeparator) => {
  return <View style={{height: value}} />;
};

export {Separator};
