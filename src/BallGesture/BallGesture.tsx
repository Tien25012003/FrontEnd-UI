import {View, Text} from 'react-native';
import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {
  GestureHandlerRootView,
  Gesture,
  GestureDetector,
} from 'react-native-gesture-handler';
const BallGesture = () => {
  const startY = useSharedValue(0);
  const position = useSharedValue(0);
  const panGesture = Gesture.Pan()
    .onStart(e => {
      startY.value = position.value;
    })
    .onUpdate(e => {
      position.value = startY.value + e.translationY;
    });
  const animatedRectStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: position.value}],
    };
  });
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Animated.View
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <GestureDetector gesture={panGesture}>
          <Animated.View
            style={[
              {width: 100, height: 100, backgroundColor: 'blue'},
              animatedRectStyle,
            ]}
          />
        </GestureDetector>
      </Animated.View>
    </GestureHandlerRootView>
  );
};

export default BallGesture;
