import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './DetailsScreen.styles';
import {DetailsScreenProps} from './DetailsScreen.types';

const DetailsScreen = ({route}: DetailsScreenProps) => {
  const {
    params: {id},
  } = route;

  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>Product ID: {id}</Text>
    </View>
  );
};

export {DetailsScreen};
