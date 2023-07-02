import {useCallback, useEffect, useMemo, useState} from 'react';
import {Product} from '../../../models/Product';
import {useFetch} from '../../../network/hooks/useFetch';
import {GetProductsResponse} from '../../../network/models/products/Products.types';

interface ProductsState {
  products?: Product[];
  isLoading: boolean;
  error?: Error;
  fetchMore: () => void;
}

const useProducts = (): ProductsState => {
  const [batch, setBatch] = useState<number>();

  const url = useMemo(() => {
    if (batch == null) {
      return undefined;
    }

    return `https://dummyjson.com/products?skip=${batch}`;
  }, [batch]);

  const {data, isLoading, error} = useFetch<GetProductsResponse>(url);

  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    const newProducts = data?.products;

    if (newProducts == null) {
      return;
    }

    setProducts(prevProducts => {
      if (prevProducts == null) {
        return newProducts;
      }

      return prevProducts.concat(newProducts);
    });
  }, [data?.products]);

  const fetchMore = useCallback(() => {
    setBatch(prevBatch => {
      if (prevBatch == null) {
        return 0;
      }

      const newBatch = 30;
      return prevBatch + newBatch;
    });
  }, []);

  return {
    products,
    isLoading,
    error,
    fetchMore,
  };
};

export {useProducts};
