import React from 'react';
import {Text} from 'react-native';
import {IFeedItem} from './FeedItem.types';

const FeedItem = ({product}: IFeedItem) => {
  const {title} = product;

  return <Text>{title}</Text>;
};

export {FeedItem};
