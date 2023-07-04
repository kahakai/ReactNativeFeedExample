import React, {useCallback} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {RootStackNavigationProp} from '../../../../shared/routes';
import {IRelatedProductItem} from './RelatedProductItem.types';
import {styles} from './RelatedProductItem.styles';

const RelatedProductItem = ({product}: IRelatedProductItem) => {
  const {id, title, thumbnail} = product;

  const navigation = useNavigation<RootStackNavigationProp<'Details'>>();

  const onPress = useCallback(() => {
    navigation.push('Details', {
      productID: id,
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

      <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export {RelatedProductItem};
