import React from 'react';
import {Image, Text, View} from 'react-native';
import {IFeedItem} from './FeedItem.types';
import {styles} from './FeedItem.styles';

const FeedItem = ({product}: IFeedItem) => {
  const {title, description, thumbnail} = product;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: thumbnail}}
        height={128}
        width={128}
      />

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export {FeedItem};
