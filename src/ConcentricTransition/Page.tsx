import {View, Text, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './ConcentricTransition';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
interface Props {
  index: number;
  color: string;
  current: number;
}
const {width, height} = Dimensions.get('screen');
const Page = ({index, color, current}: Props) => {
  const animatedScale = useSharedValue(1);
  const animatedXNegative = useSharedValue(-50);
  const animatedXPositive = useSharedValue(50);
  useEffect(() => {
    if (current === index) {
      animatedScale.value = withTiming(2000, {
        duration: 5000,
      });
      animatedXNegative.value = -50;
      animatedXPositive.value = 50;
    } else {
      animatedScale.value = current === 0 ? 1 : withDelay(5000, withTiming(1));
      animatedXNegative.value = -50;
      animatedXPositive.value = 50;
    }
  }, [current]);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: animatedXNegative.value},
        //{translateY: 50},
        {scale: animatedScale.value},
        {translateX: animatedXPositive.value},
        //{translateY: -50},
      ],
    };
  });
  return (
    <Animated.View
      style={[styles.circle, {backgroundColor: color}, animatedStyle]}>
      <Text>{index}</Text>
    </Animated.View>
  );
};

export default Page;
