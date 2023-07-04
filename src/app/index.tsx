import React from 'react';

import {RealmProvider} from 'shared/db';

import {Routing} from './routes';

const App = () => {
  return (
    <RealmProvider>
      <Routing />
    </RealmProvider>
  );
};

export default App;
