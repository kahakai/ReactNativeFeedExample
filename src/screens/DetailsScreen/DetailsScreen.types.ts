import {Product} from '../../models/Product';
import type {RootStackScreenProps} from '../../navigators/RootStackNavigator/RootStackNavigator.types';

type DetailsScreenProps = RootStackScreenProps<'Details'>;

interface IDetailsScreen {
  product: Product;
}

export type {DetailsScreenProps, IDetailsScreen};
