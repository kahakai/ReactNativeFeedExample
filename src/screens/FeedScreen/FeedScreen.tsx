import React from 'react';
import {FlatList, ListRenderItem, Text, View} from 'react-native';
import {styles} from './FeedScreen.styles';
import {Product} from '../../models/Product';
import {FeedItem} from './FeedItem/FeedItem';
import {Separator} from './Separator/Separator';
import {useProducts} from '../../models/hooks/useProducts';

const renderItem: ListRenderItem<Product> = ({item}) => {
  return <FeedItem product={item} />;
};

const renderItemSeparator = (): React.ReactElement => {
  return <Separator value={36} />;
};

const FeedScreen = () => {
  const {products, isLoading, errorMessage} = useProducts();

  if (!products) {
    return null;
  }

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={products}
      renderItem={renderItem}
      ItemSeparatorComponent={renderItemSeparator}
    />
  );
};

export {FeedScreen};
