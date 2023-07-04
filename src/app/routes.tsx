import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList} from 'shared/routes';

import {FeedScreen} from 'pages/list-products';
import {DetailsScreen} from 'pages/view-product-details';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Routing = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Feed">
        <RootStack.Screen name="Feed" component={FeedScreen} />
        <RootStack.Screen name="Details" component={DetailsScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export {Routing};
