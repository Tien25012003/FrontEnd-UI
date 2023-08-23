import {Text, View} from 'react-native';
import React from 'react';
import {
  GestureDetector,
  Gesture,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  withTiming,
  useSharedValue,
  Easing,
  useFrameCallback,
  runOnJS,
} from 'react-native-reanimated';
import {gradients} from './gradients';
import GradientBox from './GradientBox';
import GradientLabel from './GradientLabel';
export const GRADIENT_BOX_HEIGHT = 80;
export const DURATION_AND_EASING = {
  duration: 400,
  easing: Easing.out(Easing.exp),
};
const GradientPicker = ({
  gradientIdx,
  setGradientIdx,
}: {
  gradientIdx: number;
  setGradientIdx: (idx: number) => void;
}) => {
  const pickerOpen = useSharedValue(0);
  const currentOffset = useSharedValue(0);
  const initialOffset = useSharedValue(0);
  const gesture = Gesture.Pan()
    .shouldCancelWhenOutside(false)
    .onBegin(() => {
      pickerOpen.value = withTiming(1);
      initialOffset.value = gradientIdx * GRADIENT_BOX_HEIGHT;
    })
    .onChange(e => {
      currentOffset.value = Math.max(
        0,
        Math.min(
          initialOffset.value + e.translationY,
          GRADIENT_BOX_HEIGHT * (gradients.length - 1),
        ),
      );
    })
    .onFinalize(() => {
      pickerOpen.value = withTiming(0, {
        duration: 300,
        easing: Easing.out(Easing.cubic),
      });
    });

  useFrameCallback(() => {
    'worklet';
    const computedIndex = Math.round(currentOffset.value / GRADIENT_BOX_HEIGHT);
    if (computedIndex !== gradientIdx) {
      runOnJS(setGradientIdx)(computedIndex);
    }
  });
  return (
    <GestureHandlerRootView style={{flex: 1, alignItems: 'center'}}>
      <GestureDetector gesture={gesture}>
        {/* <Animated.View
          style={{
            height: GRADIENT_BOX_HEIGHT,
            width: '100%',
            zIndex: 1000,
            backgroundColor: 'red',
          }}>
          <Text>AA</Text>
        </Animated.View> */}
        <Animated.View>
          {gradients.map((gradient, index) => {
            return (
              <GradientBox
                key={index}
                currentOffset={currentOffset}
                index={index}
                pickerOpen={pickerOpen}>
                <GradientLabel gradient={gradient} />
              </GradientBox>
            );
          })}
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default GradientPicker;
