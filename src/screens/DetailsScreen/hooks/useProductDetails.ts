import {Product} from '../../../models/Product';

interface ProductDetails {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  thumbnailURL: string;
}

const useProductDetails = (product: Product): ProductDetails => {
  const {id, title, description, price, discountPercentage, thumbnail} =
    product;

  return {
    id,
    title,
    description,
    price,
    discountPercentage,
    thumbnailURL: thumbnail,
  };
};

export {useProductDetails};
