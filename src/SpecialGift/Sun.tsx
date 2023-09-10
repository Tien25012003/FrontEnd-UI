import {View} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  interpolate,
} from 'react-native-reanimated';
export const Shine = ({
  size,
  color = '#fdd922',
}: {
  size: number;
  color?: string;
}) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        height: size,
        width: 10,

        justifyContent: 'space-between',
      }}>
      {[...new Array(2)].map((_, index) => (
        <View
          style={{
            backgroundColor: color,
            height: size / 5,
            width: 10,
            borderRadius: 20,
          }}
          key={index}
        />
      ))}
    </View>
  );
};
const Sun = ({shineWidth}: {shineWidth: number}) => {
  const animatedValue = useSharedValue(0);
  const calcAngle = useCallback((index: number) => {
    return index * 45;
  }, []);

  useEffect(() => {
    animatedValue.value = withRepeat(withTiming(1, {duration: 3000}), -1);
  }, []);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      //opacity: interpolate(animatedValue.value, [0, 1], [0.5, 1]),
      transform: [
        {
          rotate: `${interpolate(animatedValue.value, [0, 1], [180, 0])}deg`,
        },
      ],
    };
  });
  return (
    <Animated.View
      style={[
        {
          height: shineWidth,
          width: shineWidth,
          alignItems: 'center',
          justifyContent: 'center',
        },
        animatedStyle,
      ]}>
      {[...new Array(4)].map((shine, index) => {
        return (
          <View
            style={{
              position: 'absolute',
              transform: [{rotate: `${calcAngle(index)}deg`}],
            }}
            key={index}>
            <Shine size={shineWidth} />
          </View>
        );
      })}
      <View
        style={{
          width: shineWidth / 2,
          height: shineWidth / 2,
          backgroundColor: '#fdd922',
          borderRadius: 100,
        }}
      />
    </Animated.View>
  );
};

export default Sun;
