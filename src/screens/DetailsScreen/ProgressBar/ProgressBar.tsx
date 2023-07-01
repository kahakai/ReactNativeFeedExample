import React, {useEffect} from 'react';
import {Animated, View, useAnimatedValue} from 'react-native';
import {styles} from './ProgressBar.styles';
import {IProgressBar} from './ProgressBar.types';

const ProgressBar = ({style, progress = 0, color}: IProgressBar) => {
  const trackColor = color ?? styles.progress.backgroundColor;
  const trackTintColor = trackColor + '61'; // 0.38 alpha in HEX.

  const animatedProgress = useAnimatedValue(0, {
    useNativeDriver: false,
  });

  const animatedStyle = {
    width: animatedProgress.interpolate({
      inputRange: [0, 1],
      outputRange: ['0%', '100%'],
      extrapolate: 'clamp',
    }),
  };

  useEffect(() => {
    Animated.timing(animatedProgress, {
      toValue: progress,
      useNativeDriver: false,
    }).start();
  }, [animatedProgress, progress]);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: trackTintColor,
        },
        style,
      ]}>
      <Animated.View
        style={[
          styles.progress,
          {
            backgroundColor: trackColor,
          },
          animatedStyle,
        ]}
      />
    </View>
  );
};

export {ProgressBar};
