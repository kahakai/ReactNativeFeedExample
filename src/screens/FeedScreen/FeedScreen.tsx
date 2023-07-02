import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';

import {Product} from '../../models/Product';
import {useProducts} from './hooks/useProducts';
import {styles} from './FeedScreen.styles';
import {FeedItem} from './FeedItem/FeedItem';
import {Separator} from './Separator/Separator';
import {LoadingView} from './LoadingView/LoadingView';
import {ErrorView} from './ErrorView/ErrorView';

const renderItem: ListRenderItem<Product> = ({item}) => {
  return <FeedItem product={item} />;
};

const renderItemSeparator = (): React.ReactElement => {
  return <Separator value={36} />;
};

const FeedScreen = () => {
  const {products, isLoading, error} = useProducts();

  if (isLoading) {
    return <LoadingView />;
  }

  if (error) {
    return <ErrorView />;
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
