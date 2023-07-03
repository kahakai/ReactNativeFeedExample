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
  const {
    products,
    isLoadingFirstTime,
    isLoading,
    isErrorFirstTime,
    error,
    queryMore,
  } = useProducts();

  if (isLoadingFirstTime) {
    return <LoadingView />;
  }

  if (isErrorFirstTime) {
    return <ErrorView />;
  }

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={products}
      renderItem={renderItem}
      ItemSeparatorComponent={renderItemSeparator}
      onEndReachedThreshold={0.8}
      onEndReached={queryMore}
    />
  );
};

export {FeedScreen};
