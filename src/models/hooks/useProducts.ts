import {Product} from '../Product';
import productsJSON from '../stubs/products.json';

const useProducts = (): Product[] => {
  return productsJSON.products;
};

export {useProducts};
