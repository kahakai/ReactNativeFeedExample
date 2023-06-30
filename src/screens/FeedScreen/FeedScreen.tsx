import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {styles} from './FeedScreen.styles';
import productsJSON from '../../models/stubs/products.json';
import {Product} from '../../models/Product';
import {FeedItem} from './FeedItem/FeedItem';

const renderItem: ListRenderItem<Product> = ({item}) => {
  return <FeedItem product={item} />;
};

const FeedScreen = () => {
  return (
    <FlatList
      style={styles.container}
      data={productsJSON.products}
      renderItem={renderItem}
    />
  );
};

export {FeedScreen};
