import type {StyleProp, ViewStyle} from 'react-native';

interface IPricesBlock {
  style?: StyleProp<ViewStyle>;
  price: number;
  discountPercentage: number;
}

export type {IPricesBlock};
