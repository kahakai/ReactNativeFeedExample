import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';

import {Product} from '../../../models/Product';
import {RelatedProductItem} from './RelatedProductItem/RelatedProductItem';
import {IRelatedProductsList} from './RelatedProductsList.types';
import {useRelatedProducts} from './hooks/useRelatedProducts';
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
