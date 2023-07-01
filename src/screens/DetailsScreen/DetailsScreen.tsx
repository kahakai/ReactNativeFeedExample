import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './DetailsScreen.styles';
import {DetailsScreenProps} from './DetailsScreen.types';
import {useProduct} from '../../models/hooks/useProduct';
import {ProgressBar} from './ProgressBar/ProgressBar';

const DetailsScreen = ({route}: DetailsScreenProps) => {
  const {
    params: {id},
  } = route;

  const product = useProduct(id);

  if (!product) {
    return null;
  }

  const {title, description, thumbnail} = product;

  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <Image
          style={styles.image}
          source={{uri: thumbnail}}
          height={256}
          width={256}
        />

        <Text style={styles.title}>{title}</Text>

        <Text style={styles.description}>{description}</Text>
      </View>

      <ProgressBar progress={0.35} />
    </View>
  );
};

export {DetailsScreen};
