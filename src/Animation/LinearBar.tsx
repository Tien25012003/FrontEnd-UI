import {View, Text, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {Svg, Defs, Stop, Rect, LinearGradient} from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  interpolate,
  withTiming,
} from 'react-native-reanimated';
const {width} = Dimensions.get('screen');
const LinearBar = () => {
  const animatedValue = useSharedValue(0);
  const animatedWidth = useAnimatedProps(() => {
    return {
      width: interpolate(animatedValue.value, [0, 1], [0, width * 0.6]),
    };
  });
  const animatedRightWidth = useAnimatedProps(() => {
    return {
      width: interpolate(
        animatedValue.value,
        [0, 1],
        [width * 0.8, width * 0.2],
      ),
      x: interpolate(animatedValue.value, [0, 1], [0, width * 0.7]),
    };
  });
  useEffect(() => {
    animatedValue.value = withTiming(1, {duration: 2000});
  }, []);
  const AnimatedRect = Animated.createAnimatedComponent(Rect);
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      {/* <Text>LinearBar</Text> */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <Svg width={width} height={15}>
          <Defs>
            <LinearGradient id="grad" x1={0} x2={1} y1={0} y2={0}>
              <Stop offset="0.3" stopColor="#dae4f3" stopOpacity="1" />
              <Stop offset="1" stopColor="#bad5f7" stopOpacity="1" />
            </LinearGradient>
          </Defs>
          <AnimatedRect
            animatedProps={animatedWidth}
            x="0"
            y="0"
            width={width * 0.6}
            height="14"
            fill="#3fbff9"
            rx={8}
            ry={8}
          />
          <AnimatedRect
            animatedProps={animatedRightWidth}
            x={width * 0.7}
            y="0"
            width={width * 0.2}
            height="14"
            fill="url(#grad)"
            rx={8}
            ry={8}
          />
        </Svg>
      </View>
    </View>
  );
};

export default LinearBar;
