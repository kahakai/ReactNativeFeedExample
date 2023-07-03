import {useCallback, useEffect, useMemo, useState} from 'react';
import {Product} from '../../../models/Product';
import {useFetch} from '../../../network/hooks/useFetch';
import {GetProductsResponse} from '../../../network/models/products/Products.types';
import {useQuery, useRealm} from '../../../domain/context';
import {Product as DomainProduct} from '../../../domain/models/Product';
import {Results} from 'realm';

interface ProductsState {
  products: Results<Product>;
  isLoadingFirstTime: boolean;
  isLoading: boolean;
  isErrorFirstTime: boolean;
  error?: Error;
  queryMore: () => void;
}

const useProducts = (): ProductsState => {
  const realm = useRealm();

  const domainProducts = useQuery(DomainProduct);

  const isDomainProductsEmpty = useMemo(() => {
    return domainProducts.length === 0;
  }, [domainProducts.length]);

  const [batch, setBatch] = useState<number>();

  const url = useMemo(() => {
    if (batch == null) {
      return undefined;
    }

    return `https://dummyjson.com/products?skip=${batch}`;
  }, [batch]);

  const {data, isLoading, error} = useFetch<GetProductsResponse>(url);

  const isLoadingFirstTime = useMemo(() => {
    return isLoading && isDomainProductsEmpty;
  }, [isDomainProductsEmpty, isLoading]);

  const isErrorFirstTime = useMemo(() => {
    return error != null && isDomainProductsEmpty;
  }, [error, isDomainProductsEmpty]);

  const queryMore = useCallback(() => {
    if (isDomainProductsEmpty) {
      setBatch(0);
      return;
    }

    setBatch(domainProducts.length + 30);
  }, [domainProducts.length, isDomainProductsEmpty]);

  const addProducts = useCallback(
    (products: Product[]) => {
      realm.write(() => {
        products.forEach(product => {
          realm.create('Product', {
            ...product,
          });
        });
      });
    },
    [realm],
  );

  useEffect(() => {
    const newProducts = data?.products;

    if (newProducts == null) {
      return;
    }

    addProducts(newProducts);
  }, [addProducts, data?.products]);

  return {
    products: domainProducts,
    isLoadingFirstTime,
    isLoading,
    isErrorFirstTime,
    error,
    queryMore,
  };
};

export {useProducts};
