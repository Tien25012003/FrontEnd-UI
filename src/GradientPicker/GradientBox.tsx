import {View, Text} from 'react-native';
import React from 'react';
import Animated, {
  Extrapolate,
  Extrapolation,
  SharedValue,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {ViewStyle} from 'react-native';
import {GRADIENT_BOX_HEIGHT} from './GradientPicker';
import {width} from './Background';
interface Props {
  children: React.ReactNode;
  pickerOpen: SharedValue<number>;
  currentOffset: SharedValue<number>;
  style?: ViewStyle;
  index: number;
}
const GradientBox = ({children, pickerOpen, currentOffset, index}: Props) => {
  const animatedStyle = useAnimatedStyle(() => {
    const distance = Math.abs(
      currentOffset.value - index * GRADIENT_BOX_HEIGHT,
    );
    const isSelected = distance < GRADIENT_BOX_HEIGHT / 2;
    const highlight = interpolateColor(
      currentOffset.value - index * GRADIENT_BOX_HEIGHT,
      [-GRADIENT_BOX_HEIGHT, 0, GRADIENT_BOX_HEIGHT],
      ['#ffffff00', '#ffffffaa', '#ffffff00'],
    );
    const falloffOpacity = 1 - distance / 500;
    const scaleItem = interpolate(
      currentOffset.value - index * GRADIENT_BOX_HEIGHT,
      [-GRADIENT_BOX_HEIGHT, 0, GRADIENT_BOX_HEIGHT],
      [0.8, 1, 0.8],
    );
    return {
      backgroundColor: interpolateColor(
        pickerOpen.value,
        [0, 1, 1.7, 2],
        ['#ffffff00', highlight, highlight, '#fffff00'],
      ),
      //zIndex: pickerOpen.value < 1 ? -Math.round(distance * 10) : 0,
      opacity: isSelected
        ? 1
        : interpolate(
            pickerOpen.value,
            [0, 1],
            [0, falloffOpacity],
            Extrapolate.CLAMP,
          ),
      transform: [
        {
          translateY: interpolate(
            pickerOpen.value,
            [1, 0],
            [0, currentOffset.value - index * GRADIENT_BOX_HEIGHT],
            Extrapolation.CLAMP,
          ),
        },
        {
          scale: isSelected
            ? 1
            : interpolate(
                currentOffset.value - index * GRADIENT_BOX_HEIGHT,
                [-GRADIENT_BOX_HEIGHT, 0, GRADIENT_BOX_HEIGHT],
                [0.9, 1, 0.9],
              ),
        },
      ],
    };
  });
  return (
    <Animated.View
      style={[
        {
          borderRadius: 12,
          height: GRADIENT_BOX_HEIGHT,
          width: width - 20,
          //borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
          //position: 'absolute',
        },
        animatedStyle,
      ]}
      pointerEvents={'none'}>
      {children}
    </Animated.View>
  );
};

export default GradientBox;
