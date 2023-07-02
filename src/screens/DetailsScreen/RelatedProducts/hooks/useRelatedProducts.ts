import {Product} from '../../../../models/Product';
import {useProducts} from '../../../../models/hooks/useProducts';
import {random} from '../../../../utils/random';

const useRelatedProducts = (productID: number): Product[] => {
  const allProducts = useProducts();

  const remainingProducts = allProducts.filter(product => {
    return product.id !== productID;
  });

  // Not truly random, better use Fisher-Yates algorithm or its optimized version Durstenfeld shuffle.
  const shuffledRemainingProducts = [...remainingProducts].sort(() => {
    return 0.5 - Math.random();
  });

  const count = random(5, 10);
  const relatedProducts = shuffledRemainingProducts.slice(0, count);

  return relatedProducts;
};

export {useRelatedProducts};
