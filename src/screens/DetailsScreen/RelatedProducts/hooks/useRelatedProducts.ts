import {Product} from '../../../../models/Product';
import {useProductsStub} from '../../../../models/hooks/useProductsStub';
import {removeElementAt, shuffle} from '../../../../utils/array';
import {random} from '../../../../utils/random';

const getSomeShuffledProducts = (products: Product[]): Product[] => {
  return shuffle(products).slice(0, random(5, 10));
};

const useRelatedProducts = (productID: number): Product[] => {
  const allProducts = useProductsStub();

  const productIndex = allProducts.findIndex(product => {
    return product.id === productID;
  });

  if (productIndex === -1) {
    return getSomeShuffledProducts(allProducts);
  }

  const productCategory = allProducts[productIndex].category;

  const remainingProducts = removeElementAt(allProducts, productIndex);

  const remainingProductsSameCategory = remainingProducts.filter(product => {
    return product.category === productCategory;
  });

  return getSomeShuffledProducts(remainingProductsSameCategory);
};

export {useRelatedProducts};
