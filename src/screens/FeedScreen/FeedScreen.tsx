import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {styles} from './FeedScreen.styles';
import productsJSON from '../../models/stubs/products.json';
import {Product} from '../../models/Product';
import {FeedItem} from './FeedItem/FeedItem';
import {Separator} from './Separator/Separator';

const renderItem: ListRenderItem<Product> = ({item}) => {
  return <FeedItem product={item} />;
};

const renderItemSeparator = (): React.ReactElement => {
  return <Separator value={36} />;
};

const FeedScreen = () => {
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={productsJSON.products}
      renderItem={renderItem}
      ItemSeparatorComponent={renderItemSeparator}
    />
  );
};

export {FeedScreen};
