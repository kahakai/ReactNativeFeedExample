import {useObject, useQuery} from '../../../../domain/context';
import {Product} from '../../../../domain/models/Product';
import {random, randomCount} from '../../../../utils/random';

const getSomeRandomProducts = (products: Realm.Results<Product>): Product[] => {
  const count = random(5, 10);
  const indexes = randomCount(0, products.length, count);

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
