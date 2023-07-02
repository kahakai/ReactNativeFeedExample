import {Product} from '../Product';
import productsJSON from '../stubs/products.json';

const useProductsStub = (): Product[] => {
  return productsJSON.products;
};

export {useProductsStub};
