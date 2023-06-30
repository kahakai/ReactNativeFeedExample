import React from 'react';
import {SafeAreaView} from 'react-native';
import {IRootScreen} from './RootScreen.types';
import {styles} from './RootScreen.styles';

const RootScreen = ({children}: IRootScreen) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export {RootScreen};
