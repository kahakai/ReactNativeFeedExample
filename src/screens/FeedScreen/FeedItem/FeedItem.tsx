import React, {useCallback} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {styles} from './FeedItem.styles';
import {IFeedItem} from './FeedItem.types';

const FeedItem = ({product}: IFeedItem) => {
  const {id, title, description, thumbnail} = product;

  const navigation = useNavigation();

  const onPress = useCallback(() => {
    navigation.navigate('Details', {
      id: id,
    });
  }, [id, navigation]);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        style={styles.image}
        source={{uri: thumbnail}}
        height={128}
        width={128}
      />

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
  );
};

export {FeedItem};
