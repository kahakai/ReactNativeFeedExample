import {Product} from 'entities/product';
import {useObject, useQuery} from 'shared/db';
import {lib} from 'shared/lib';

const getSomeRandomProducts = (products: Realm.Results<Product>): Product[] => {
  const count = lib.random.randomInRange(5, 10);
  const indexes = lib.random.randomCountInRange(0, products.length, count);

  return indexes.map(index => products[index]);
};

const useRelatedProducts = (productID: number): Product[] => {
  const products = useQuery(Product);

  const product = useObject(Product, productID);

  if (product == null) {
    return getSomeRandomProducts(products);
  }

  const productCategory = product.category;
  const productsSameCategory = products.filtered(
    'category == $0',
    productCategory,
  );

  return getSomeRandomProducts(productsSameCategory);
};

export {useRelatedProducts};
