import {Product} from 'entities/product';
import type {RootStackScreenProps} from '../../shared/routes';

type DetailsScreenProps = RootStackScreenProps<'Details'>;

interface IDetailsScreen {
  product: Product;
}

export type {DetailsScreenProps, IDetailsScreen};
