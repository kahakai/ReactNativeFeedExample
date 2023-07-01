import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {RootStack} from './src/navigators/RootStackNavigator/RootStackNavigator';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
