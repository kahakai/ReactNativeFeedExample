import {createRealmContext} from '@realm/react';

import {realmConfig} from './config';

const {RealmProvider, useRealm, useObject, useQuery} =
  createRealmContext(realmConfig);

export {RealmProvider, useRealm, useObject, useQuery};
