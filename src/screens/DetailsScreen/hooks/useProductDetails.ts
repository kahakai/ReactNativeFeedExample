import {Product} from '../../../models/Product';

interface ProductDetails {
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  thumbnailURL: string;
}

const useProductDetails = (product: Product): ProductDetails => {
  const {title, description, price, discountPercentage, thumbnail} = product;

  return {
    title,
    description,
    price,
    discountPercentage,
    thumbnailURL: thumbnail,
  };
};

export {useProductDetails};
