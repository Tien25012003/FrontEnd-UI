import {View, Image, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
  withTiming,
  withDelay,
  withRepeat,
} from 'react-native-reanimated';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('screen');
const Arrow = ({
  isShooting,
  setIsShooting,
}: {
  isShooting: boolean;
  setIsShooting: (value: boolean) => void;
}) => {
  const currentPositionX = useSharedValue(0);
  const currentPositionY = useSharedValue(0);
  const arrowAnimatedValueX = useSharedValue(0);
  const arrowAnimatedValueY = useSharedValue(0);
  const pan = Gesture.Pan()
    .onStart(() => {
      //   arrowAnimatedValueX.value = withSpring(0);
      //   arrowAnimatedValueY.value = withSpring(0);
      if (isShooting) {
        runOnJS(setIsShooting)(true);
      }
    })
    .onUpdate(e => {
      if (e.translationX < 0 && e.translationY > 0) {
        currentPositionX.value = e.translationX;
        currentPositionY.value = e.translationY;
      }
    })
    .onEnd(() => {
      currentPositionX.value = withSpring(0);
      currentPositionY.value = withSpring(0);
    })
    .onFinalize(() => {
      runOnJS(setIsShooting)(true);
      arrowAnimatedValueX.value = withSpring(width + 130);
      arrowAnimatedValueY.value = withSpring(
        -(height - 100) * 0.01,
        {},
        finish => {
          if (finish) {
            //arrowAnimatedValueX.value = withTiming(width, {duration: 1000});
            arrowAnimatedValueY.value = withDelay(
              1000,
              withTiming(height * 0.5, {
                duration: 2000,
              }),
            );
          }
        },
      );
    });

  const animatedTranslateStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: currentPositionX.value},
        {translateY: currentPositionY.value},
        {rotate: '-60deg'},
      ],
    };
  });
  const arrowAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {rotate: '30deg'},
        {translateX: arrowAnimatedValueX.value},
        {translateY: arrowAnimatedValueY.value},
      ],
    };
  });
  useEffect(() => {
    currentPositionY.value = withRepeat(
      withTiming(-100, {duration: 1000}),
      4,
      true,
    );
  }, []);
  return (
    <View style={{position: 'absolute', bottom: 100, left: 100}}>
      <GestureDetector gesture={pan}>
        <Animated.View style={animatedTranslateStyle}>
          <Animated.View
            style={[
              {
                position: 'absolute',
              },
              arrowAnimatedStyle,
            ]}>
            <Image
              source={require('../assets/gift/arrow.png')}
              style={{width: 100, height: 100}}
              resizeMode="contain"
            />
          </Animated.View>
          <Image
            source={require('../assets/gift/cupic.jpg')}
            style={{width: 100, height: 100}}
          />
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

export default Arrow;
