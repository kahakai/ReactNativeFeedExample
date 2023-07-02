import {useFetch} from '../../network/hooks/useFetch';
import {GetProductsResponse} from '../../network/models/products/Products.types';
import {Product} from '../Product';

interface ProductsState {
  products?: Product[];
  isLoading: boolean;
  errorMessage?: string;
}

const useProducts = (): ProductsState => {
  const {data, isLoading, error} = useFetch<GetProductsResponse>(
    'https://dummyjson.com/products',
  );

  return {
    products: data?.products,
    isLoading,
    errorMessage: error?.message,
  };
};

export {useProducts};
