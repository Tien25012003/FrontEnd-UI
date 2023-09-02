import {View, StyleSheet, Dimensions, Text} from 'react-native';
import React, {useMemo, useState, useCallback} from 'react';
import DropShadow from 'react-native-drop-shadow';
import {IMAGES} from './data_image';
import TitleHeader from './TitleHeader';
import CustomImage from './CustomImage';
import {
  GestureHandlerRootView,
  GestureDetector,
  Gesture,
  ScrollView,
} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
  interpolate,
} from 'react-native-reanimated';
const {width, height} = Dimensions.get('screen');
export interface BottomSheetProps {
  imageSize: number;
  containerSize: number;
  selectImage: (index: number) => void;
}
const BottomSheet = ({
  imageSize,
  containerSize,
  selectImage,
}: BottomSheetProps) => {
  const startY = useSharedValue(0);
  const currentY = useSharedValue(height * 0.02);
  const [isCompleted, setIsCompleted] = useState(false);
  const imgLeft = useCallback((index: number) => {
    return containerSize * index;
  }, []);
  const containerWidth = useMemo(
    () => IMAGES.length * containerSize,
    [IMAGES.length],
  );

  const pan = useMemo(
    () =>
      Gesture.Pan()
        .onStart(() => {
          startY.value = currentY.value;
          //animatedValue.value = 0;
          runOnJS(setIsCompleted)(false);
        })
        .onUpdate(e => {
          if (startY.value + e.translationY < 0) {
            if (startY.value + e.translationY > -height * 0.48) {
              currentY.value = startY.value + e.translationY;
            }
          } else {
            currentY.value = startY.value + e.translationY;
          }
        })
        .onEnd(e => {
          if (e.translationY < 0) {
            currentY.value = withTiming(-height * 0.48);
            runOnJS(setIsCompleted)(true);
          } else {
            currentY.value = withTiming(height * 0.02);
            runOnJS(setIsCompleted)(false);
          }
        }),
    [],
  );

  const AnimatedDropShadow = Animated.createAnimatedComponent(DropShadow);
  const animatedHeightStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: currentY.value,
        },
      ],
    };
  });

  return (
    <GestureDetector gesture={pan}>
      <AnimatedDropShadow
        style={[
          {
            shadowColor: '#fff',
            shadowOffset: {
              width: 0,
              height: -8,
            },
            shadowOpacity: 1,
            shadowRadius: 8,
            position: 'absolute',
            bottom: height * 0.2,
            width: '100%',
            overflow: 'hidden',
            height: 20,
          },
          animatedHeightStyle,
        ]}>
        <View style={[styles.container, {height: height * 0.72}]}>
          <View style={styles.title_container}>
            <TitleHeader iconName={isCompleted ? 'arrowup' : 'arrowdown'} />
          </View>
          <View style={[{height: height * 0.63}, styles.horizonal_container]}>
            <ScrollView
              horizontal={isCompleted ? false : true}
              renderToHardwareTextureAndroid
              removeClippedSubviews>
              <View style={{width: containerWidth, height: containerWidth}}>
                {IMAGES.map((image, index) => {
                  return (
                    <CustomImage
                      index={index}
                      imageSize={imageSize}
                      containerSize={containerSize}
                      selectImage={selectImage}
                      key={index}
                      image={image}
                      imgLeft={imgLeft(index)}
                      animatedValue={currentY}
                      isCompleted={isCompleted}
                    />
                  );
                })}
              </View>
            </ScrollView>
          </View>
        </View>
      </AnimatedDropShadow>
    </GestureDetector>
  );
};
export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    //height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
  },
  title_container: {
    position: 'absolute',
    left: 0,
    top: 20,
    width: '100%',
  },
  img_container: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizonal_container: {
    position: 'absolute',
    left: 0,
    top: 60,
  },
});
export default BottomSheet;
