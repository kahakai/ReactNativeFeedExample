import {Realm} from '@realm/react';
import {Product} from './models/Product';

const realmConfig: Realm.Configuration = {
  schema: [Product],
};

export {realmConfig};
