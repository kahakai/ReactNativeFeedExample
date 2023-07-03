import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {RealmProvider} from './src/domain/context';
import {RootStack} from './src/navigators/RootStackNavigator/RootStackNavigator';

function App(): JSX.Element {
  return (
    <RealmProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </RealmProvider>
  );
}

export default App;
