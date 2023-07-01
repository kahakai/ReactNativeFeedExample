import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList} from './RootStackNavigator.types';
import {DetailsScreen} from '../../screens/DetailsScreen/DetailsScreen';
import {FeedScreen} from '../../screens/FeedScreen/FeedScreen';

const RootStackNavigator = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <RootStackNavigator.Navigator initialRouteName="Feed">
      <RootStackNavigator.Screen name="Feed" component={FeedScreen} />
      <RootStackNavigator.Screen name="Details" component={DetailsScreen} />
    </RootStackNavigator.Navigator>
  );
};

export {RootStack};
