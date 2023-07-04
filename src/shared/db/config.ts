import {Realm} from '@realm/react';

import {Product} from 'entities/product';

const realmConfig: Realm.Configuration = {
  schema: [Product],
};

export {realmConfig};
