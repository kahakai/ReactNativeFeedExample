import {useCallback, useEffect, useMemo, useState} from 'react';

import {Realm} from '@realm/react';

import {Product, productModel} from 'entities/product';
import {GetProductsResponse, useFetch} from 'shared/api';
import {useQuery, useRealm} from 'shared/db';

interface ProductsState {
  products: Realm.Results<Product>;
  isLoadingFirstTime: boolean;
  isLoading: boolean;
  isErrorFirstTime: boolean;
  error?: Error;
  queryMore: () => void;
}

const useProducts = (): ProductsState => {
  const realm = useRealm();

  const products = useQuery(Product);

  const isDomainProductsEmpty = useMemo(() => {
    return products.length === 0;
  }, [products.length]);

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

    setBatch(products.length + 30);
  }, [isDomainProductsEmpty, products.length]);

  useEffect(() => {
    const newProducts = data?.products;

    if (newProducts == null) {
      return;
    }

    productModel.addProducts(realm, newProducts);
  }, [data?.products, realm]);

  return {
    products,
    isLoadingFirstTime,
    isLoading,
    isErrorFirstTime,
    error,
    queryMore,
  };
};

export {useProducts};
