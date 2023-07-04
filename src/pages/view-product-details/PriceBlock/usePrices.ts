import {lib} from 'shared/lib';

interface Prices {
  fullPrice: string;
  discount: string;
  finalPrice: string;
  fullPriceProgress: number;
  discountProgress: number;
  finalPriceProgress: number;
}

const usePrices = (finalPrice: number, discountPercentage: number): Prices => {
  const fullPrice = Math.floor(
    lib.math.fullValue(finalPrice, discountPercentage),
  );
  const fullPriceString = `$${fullPrice}`;

  const discountString = `${discountPercentage.toFixed(2)}%`;

  const finalPriceString = `$${finalPrice}`;

  const fullPriceProgress = 1.0;

  const discountProgress = lib.math.scale(discountPercentage, [0, 100], [0, 1]);

  const finalPriceProgress = lib.math.scale(finalPrice, [0, fullPrice], [0, 1]);

  return {
    fullPrice: fullPriceString,
    discount: discountString,
    finalPrice: finalPriceString,
    fullPriceProgress,
    discountProgress,
    finalPriceProgress,
  };
};

export {usePrices};
