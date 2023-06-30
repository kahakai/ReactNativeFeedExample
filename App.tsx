import React from 'react';

import {FeedScreen} from './src/screens/FeedScreen/FeedScreen';
import {RootScreen} from './src/screens/RootScreen/RootScreen';

function App(): JSX.Element {
  return (
    <RootScreen>
      <FeedScreen />
    </RootScreen>
  );
}

export default App;
