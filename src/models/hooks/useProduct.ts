import {Product} from '../Product';
import productsJSON from '../stubs/products.json';

const useProduct = (id: number): Product | undefined => {
  return productsJSON.products.find(product => product.id === id);
};

export {useProduct};
