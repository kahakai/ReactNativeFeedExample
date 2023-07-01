import React from 'react';
import {Text, View} from 'react-native';

import {IPricesBlock} from './PricesBlock.types';
import {ProgressBar} from '../ProgressBar/ProgressBar';
import {usePrices} from './hooks/usePrices';
import {
  DISCOUNT_COLOR,
  FINAL_PRICE_COLOR,
  FULL_PRICE_COLOR,
  styles,
} from './PricesBlock.styles';

const PricesBlock = ({style, price, discountPercentage}: IPricesBlock) => {
  const {
    fullPrice,
    discount,
    finalPrice,
    fullPriceProgress,
    discountProgress,
    finalPriceProgress,
  } = usePrices(price, discountPercentage);

  return (
    <View style={style}>
      <Text>{fullPrice}</Text>

      <ProgressBar
        style={styles.scale}
        progress={fullPriceProgress}
        color={FULL_PRICE_COLOR}
      />

      <Text style={styles.price}>{discount}</Text>

      <ProgressBar
        style={styles.scale}
        progress={discountProgress}
        color={DISCOUNT_COLOR}
      />

      <Text style={styles.price}>{finalPrice}</Text>

      <ProgressBar
        style={styles.scale}
        progress={finalPriceProgress}
        color={FINAL_PRICE_COLOR}
      />
    </View>
  );
};

export {PricesBlock};
