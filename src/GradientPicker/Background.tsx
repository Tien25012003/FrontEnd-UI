import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';
import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';
import {gradients} from './gradients';

export const {width, height} = Dimensions.get('screen');
const Background = ({gradientIdx}: {gradientIdx: number}) => {
  const offset = useSharedValue({x: 0, y: 0});
  const imageStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(offset.value.x, {
            easing: Easing.bezier(0.5, 0.05, 0.25, 1),
            duration: 500,
          }),
        },
        {
          translateY: withTiming(offset.value.y, {
            easing: Easing.bezier(0.3, 0.01, 0.01, 0.98),
            duration: 500,
          }),
        },
        {
          translateX: withRepeat(
            withSequence(
              withTiming(Math.random() * 140 - 70, {
                duration: 3000,
                easing: Easing.cubic,
              }),
              withTiming(Math.random() * 140 - 70, {
                duration: 3000,
                easing: Easing.cubic,
              }),
            ),
            1000,
            true,
          ),
        },
        {
          translateY: withRepeat(
            withSequence(
              withTiming(Math.random() * 70 - 35, {
                duration: 3000,
                easing: Easing.cubic,
              }),
              withTiming(Math.random() * 70 - 35, {
                duration: 3000,
                easing: Easing.cubic,
              }),
            ),
            1000,
            true,
          ),
        },
        // {
        //   rotateY:
        //     Math.round(
        //       withRepeat(
        //         withSequence(
        //           withTiming((Math.random() - 0.5) * 100, {
        //             duration: 4500,
        //             easing: Easing.cubic,
        //           }),
        //           withTiming((Math.random() - 0.5) * 100, {
        //             duration: 4500,
        //             easing: Easing.cubic,
        //           }),
        //         ),
        //         30,
        //         true,
        //       ),
        //     ) + 'deg',
        // },
        {
          scale: 1.5,
        },
      ],
    };
  });
  return (
    <Animated.View
      style={[
        {
          width: height,
          height,
          position: 'absolute',
          left: (width - height) / 2,
          right: 0,
        },
        imageStyles,
      ]}>
      <Image
        style={{width, height}}
        source={gradients[gradientIdx].image}
        //resizeMode="stretch"
        onLoad={() => {
          offset.value = {
            x: (height - width) / 2 + 100,
            y: Math.random() * 100 - 50,
          };
        }}
      />
    </Animated.View>
  );
};

export default Background;
