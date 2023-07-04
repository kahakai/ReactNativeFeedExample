import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';

import {Product} from 'entities/product';

import {useRelatedProducts} from './useRelatedProducts';
import {RelatedProductItem} from './RelatedProductItem/RelatedProductItem';
import {IRelatedProductsList} from './RelatedProductsList.types';
import {Separator} from './Separator/Separator';

const renderItem: ListRenderItem<Product> = ({item}) => {
  return <RelatedProductItem product={item} />;
};

const renderItemSeparator = (): React.ReactElement => {
  return <Separator value={16} />;
};

const RelatedProductsList = ({style, productID}: IRelatedProductsList) => {
  const products = useRelatedProducts(productID);

  return (
    <FlatList
      style={style}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={products}
      renderItem={renderItem}
      ItemSeparatorComponent={renderItemSeparator}
    />
  );
};

export {RelatedProductsList};
