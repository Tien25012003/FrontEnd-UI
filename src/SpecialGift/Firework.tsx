import {View} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  withDelay,
  withRepeat,
} from 'react-native-reanimated';
import {SENTENCES} from './data_sentences';

const Firework = ({
  width,
  height,
  page,
  color,
}: {
  width: number;
  height: number;
  page: number;
  color: string;
}) => {
  const barValue = useSharedValue(0);
  const opacityValue = useSharedValue(0);
  const barAnimatedStyle1 = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(barValue.value, [0, 1], [0, -height / 4]),
        },
      ],
    };
  });
  const barAnimatedStyle2 = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(barValue.value, [0, 1], [0, height / 4]),
        },
      ],
    };
  });
  useEffect(() => {
    if (page === SENTENCES.length - 1) {
      barValue.value = withDelay(1200, withTiming(1, {duration: 1000}));
      opacityValue.value = withDelay(500, withTiming(1));
    }
  }, [page]);
  const calcAngle = useCallback((index: number) => {
    return index * 45;
  }, []);
  const opacityStyle = useAnimatedStyle(() => {
    return {
      opacity: opacityValue.value,
    };
  });
  return (
    <Animated.View
      style={[{width, height, alignItems: 'center'}, opacityStyle]}>
      {[...new Array(4)].map((shine, index) => {
        return (
          <View
            style={{
              position: 'absolute',
              transform: [{rotate: `${calcAngle(index)}deg`}],
            }}
            key={index}>
            <View
              style={{
                backgroundColor: 'transparent',
                height,
                width: 10,
                justifyContent: 'center',
              }}>
              {[...new Array(2)].map((_, index) => (
                <Animated.View
                  style={[
                    {
                      backgroundColor: color,
                      height: height / 4,
                      width: 10,
                    },
                    index === 0 ? barAnimatedStyle1 : barAnimatedStyle2,
                  ]}
                  key={index}
                />
              ))}
            </View>
          </View>
        );
      })}
    </Animated.View>
  );
};

export default Firework;
