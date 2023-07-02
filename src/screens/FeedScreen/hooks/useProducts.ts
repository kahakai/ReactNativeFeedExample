import {Product} from '../../../models/Product';
import {useFetch} from '../../../network/hooks/useFetch';
import {GetProductsResponse} from '../../../network/models/products/Products.types';

interface ProductsState {
  products?: Product[];
  isLoading: boolean;
  error?: Error;
}

const useProducts = (): ProductsState => {
  const {data, isLoading, error} = useFetch<GetProductsResponse>(
    'https://dummyjson.com/products',
  );

  return {
    products: data?.products,
    isLoading,
    error,
  };
};

export {useProducts};
