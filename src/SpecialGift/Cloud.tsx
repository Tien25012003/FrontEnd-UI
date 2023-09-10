import {View, Text, Dimensions, Image} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
} from 'react-native-reanimated';
const {width, height} = Dimensions.get('screen');
const Cloud = () => {
  const valueX = useSharedValue(0);
  const leftCloud = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: interpolate(valueX.value, [0, 1], [0, -width * 0.3])},
      ],
    };
  });
  const rightCloud = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: interpolate(valueX.value, [0, 1], [0, width * 0.25])},
      ],
    };
  });
  useEffect(() => {
    valueX.value = withTiming(1, {duration: 2000});
  }, []);
  return (
    <View
      style={{
        width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Animated.View
        style={[{position: 'absolute', top: 20, left: width * 0.3}, leftCloud]}>
        <Image
          source={require('../assets/gift/cloud.png')}
          style={{
            width: width * 0.4,
            height: 100,
          }}
          resizeMode="stretch"
        />
      </Animated.View>
      <Animated.View style={rightCloud}>
        <Image
          source={require('../assets/gift/cloud2.png')}
          style={{width: width * 0.5, height: 150}}
          resizeMode="stretch"
        />
      </Animated.View>
    </View>
  );
};

export default Cloud;
