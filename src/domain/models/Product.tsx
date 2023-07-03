import {Realm} from '@realm/react';

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
  };
}

export {Product};
