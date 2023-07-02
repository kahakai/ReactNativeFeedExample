import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './DetailsScreen.styles';
import {DetailsScreenProps, IDetailsScreen} from './DetailsScreen.types';
import {useProduct} from '../../models/hooks/useProduct';
import {useProductDetails} from './hooks/useProductDetails';
import {PricesBlock} from './PriceBlock/PricesBlock';
import {RelatedProductsList} from './RelatedProducts/RelatedProductsList';

const DetailsScreenSafe = ({product}: IDetailsScreen) => {
  const {id, title, description, price, discountPercentage, thumbnailURL} =
    useProductDetails(product);

  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <Image style={styles.image} source={{uri: thumbnailURL}} />

        <Text style={styles.title}>{title}</Text>

        <Text style={styles.description}>{description}</Text>
      </View>

      <PricesBlock
        style={styles.prices}
        price={price}
        discountPercentage={discountPercentage}
      />

      <RelatedProductsList style={styles.relatedProducts} productID={id} />
    </View>
  );
};

const DetailsScreen = ({route}: DetailsScreenProps) => {
  const {
    params: {id},
  } = route;

  const product = useProduct(id);

  if (!product) {
    return null;
  }

  return <DetailsScreenSafe product={product} />;
};

export {DetailsScreen};
