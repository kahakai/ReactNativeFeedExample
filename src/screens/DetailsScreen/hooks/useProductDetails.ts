import {Product} from '../../../models/Product';
import {fullValue} from '../../../utils/fullValue';
import {scale} from '../../../utils/scale';

interface ProductDetails {
  title: string;
  description: string;
  fullPrice: string;
  discount: string;
  finalPrice: string;
  thumbnailURL: string;
  fullPriceProgress: number;
  discountProgress: number;
  finalPriceProgress: number;
}

const useProductDetails = (product: Product): ProductDetails => {
  const {title, description, price, discountPercentage, thumbnail} = product;

  const fullPrice = Math.floor(fullValue(price, discountPercentage));
  const fullPriceString = `$${fullPrice}`;

  const discountString = `${discountPercentage}%`;

  const finalPriceString = `$${price}`;

  const fullPriceProgress = 1.0;

  const discountProgress = scale(discountPercentage, [0, 100], [0, 1]);

  const finalPriceProgress = scale(price, [0, fullPrice], [0, 1]);

  return {
    title,
    description,
    fullPrice: fullPriceString,
    discount: discountString,
    finalPrice: finalPriceString,
    thumbnailURL: thumbnail,
    fullPriceProgress,
    discountProgress,
    finalPriceProgress,
  };
};

export {useProductDetails};
