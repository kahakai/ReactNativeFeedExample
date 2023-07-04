import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';

import {Product} from 'entities/product';

import {useProducts} from './useProducts';
import {styles} from './FeedScreen.styles';
import {FeedItem} from './FeedItem/FeedItem';
import {Separator} from './Separator/Separator';
import {LoadingView} from './LoadingView/LoadingView';
import {LoadingFooterView} from './LoadingFooterView/LoadingFooterView';
import {ErrorView} from './ErrorView/ErrorView';

const renderItem: ListRenderItem<Product> = ({item}) => {
  return <FeedItem product={item} />;
};

const renderItemSeparator = (): React.ReactElement => {
  return <Separator value={36} />;
};

const renderFooter = (isLoading: boolean): React.ReactElement | null => {
  if (!isLoading) {
    return null;
  }

  return <LoadingFooterView />;
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
    return <ErrorView message={error?.message} />;
  }

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={products}
      renderItem={renderItem}
      ItemSeparatorComponent={renderItemSeparator}
      ListFooterComponent={() => renderFooter(isLoading)}
      onEndReachedThreshold={0.8}
      onEndReached={queryMore}
    />
  );
};

export {FeedScreen};
