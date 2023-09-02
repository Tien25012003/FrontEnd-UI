import {View, Text, Dimensions, Image} from 'react-native';
import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  runOnJS,
} from 'react-native-reanimated';
import {PHOTOS} from './PhotoApp';
import {
  GestureHandlerRootView,
  Gesture,
  GestureDetector,
} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('screen');
interface Photo {
  avt: any;
  name: string;
}
const Avatar = ({
  photo,
  index,
  size,
  animatedScaleStyle,
  isTaking,
  setIsTaking,
  setIsPullDown,
  setIsFinish,
  setEnableScroll,
}: {
  photo: Photo;
  index: number;
  size: number;
  animatedScaleStyle: any;
  isTaking: boolean;
  setIsPullDown: (value: boolean) => void;
  setIsTaking: (value: boolean) => void;
  setIsFinish: (value: boolean) => void;
  setEnableScroll: (value: boolean) => void;
}) => {
  const startPosition = useSharedValue(0);
  const currentPosition = useSharedValue(0);
  const isUp = useSharedValue(false);
  const panGesture = Gesture.Pan()
    .onStart(e => {
      startPosition.value = currentPosition.value;
      runOnJS(setIsPullDown)(true);
      runOnJS(setEnableScroll)(false);
    })
    .onUpdate(e => {
      //console.log(e.translationY);
      if (startPosition.value + e.translationY >= 0) {
        currentPosition.value = startPosition.value + e.translationY;
      }
      if (startPosition.value + e.translationY >= height / 2 - 300) {
        if (!isTaking) {
          runOnJS(setIsTaking)(true);
        }
      } else {
        if (isTaking) {
          isUp.value = true;
        }
      }
      if (startPosition.value + e.translationY >= height / 2 - 400) {
        if (isUp.value) {
          runOnJS(setIsFinish)(true);
        }
      }
    })
    .onEnd(e => {
      currentPosition.value = withTiming(0, {
        duration: 500,
        easing: Easing.bounce,
      });
      runOnJS(setEnableScroll)(true);
    })
    .onFinalize(() => {
      isUp.value = false;
      runOnJS(setIsFinish)(false);
      runOnJS(setIsPullDown)(false);
      runOnJS(setIsTaking)(false);
    });
  const animatedTranslateYStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: currentPosition.value}],
    };
  });
  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={panGesture}>
        <View
          style={{
            alignItems: 'center',
            //borderWidth: 1,
            width: size,
            marginLeft: index === 0 ? (width - size) / 2 : 0,
            marginRight: index === PHOTOS.length - 1 ? (width - size) / 2 : 0,
          }}>
          <Animated.View
            style={[
              {
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 20,
              },
              animatedScaleStyle,
              animatedTranslateYStyle,
            ]}>
            <Image
              source={photo.avt}
              style={{width: 100, height: 100, borderRadius: 100}}
            />
            <Text style={{color: '#000', marginTop: 20}}>{photo.name}</Text>
          </Animated.View>
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default Avatar;
