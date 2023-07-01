import React from 'react';

import {FeedScreen} from './src/screens/FeedScreen/FeedScreen';
import {RootScreen} from './src/screens/RootScreen/RootScreen';
import {NavigationContainer} from '@react-navigation/native';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <RootScreen>
        <FeedScreen />
      </RootScreen>
    </NavigationContainer>
  );
}

export default App;
