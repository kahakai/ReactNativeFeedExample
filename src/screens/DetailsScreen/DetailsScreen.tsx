import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './DetailsScreen.styles';
import {DetailsScreenProps, IDetailsScreen} from './DetailsScreen.types';
import {useProduct} from '../../models/hooks/useProduct';
import {ProgressBar} from './ProgressBar/ProgressBar';
import {useProductDetails} from './hooks/useProductDetails';

const DetailsScreenSafe = ({product}: IDetailsScreen) => {
  const {
    title,
    description,
    fullPrice,
    discount,
    finalPrice,
    thumbnailURL,
    fullPriceProgress,
    discountProgress,
    finalPriceProgress,
  } = useProductDetails(product!);

  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <Image style={styles.image} source={{uri: thumbnailURL}} />

        <Text style={styles.title}>{title}</Text>

        <Text style={styles.description}>{description}</Text>
      </View>

      <Text>{fullPrice}</Text>

      <ProgressBar progress={fullPriceProgress} />

      <Text>{discount}</Text>

      <ProgressBar progress={discountProgress} />

      <Text>{finalPrice}</Text>

      <ProgressBar progress={finalPriceProgress} />
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
