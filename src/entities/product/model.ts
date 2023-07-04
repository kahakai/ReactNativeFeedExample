import {Realm} from '@realm/react';

import {Product as DataProduct} from 'shared/api';

class Product extends Realm.Object<Product> {
  id!: number;
  title!: string;
  description!: string;
  price!: number;
  discountPercentage!: number;
  rating!: number;
  stock!: number;
  brand!: string;
  category!: string;
  thumbnail!: string;
  images!: string[];

  static schema = {
    name: 'Product',
    properties: {
      id: 'int',
      title: 'string',
      description: 'string',
      price: 'int',
      discountPercentage: 'float',
      rating: 'float',
      stock: 'int',
      brand: 'string',
      category: 'string',
      thumbnail: 'string',
      images: 'string[]',
    },
    primaryKey: 'id',
  };
}

const addProduct = (realm: Realm, product: DataProduct[]) => {
  realm.write(() => {
    realm.create(Product, {
      ...product,
    });
  });
};

const addProducts = (realm: Realm, products: DataProduct[]) => {
  realm.write(() => {
    products.forEach(product => {
      realm.create(Product, {
        ...product,
      });
    });
  });
};

const productModel = {
  addProduct,
  addProducts,
};

export {Product, productModel};
