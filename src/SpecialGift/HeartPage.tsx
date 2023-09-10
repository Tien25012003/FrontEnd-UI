import {View, Dimensions, Pressable, ImageBackground} from 'react-native';
import React, {useEffect} from 'react';
const {height} = Dimensions.get('screen');
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import AnimationSentence from './AnimationSentence';
interface HeaderPageProps {
  width: number;
  sentence: string;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  currentIndex: number;
}
const HeartPage = ({
  width,
  sentence,
  currentPage,
  setCurrentPage,
  currentIndex,
}: HeaderPageProps) => {
  const animatedValue = useSharedValue(0);
  const rotateStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: (-width * 0.95) / 2},
        {
          rotateY: `-${animatedValue.value}deg`,
        },
        {translateX: (width * 0.95) / 2},
      ],
    };
  });
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
  const handleOnPress = () => {
    if (animatedValue.value === 0) {
      animatedValue.value = withTiming(180, {duration: 2000}, isFinish => {
        if (isFinish) {
          runOnJS(setCurrentPage)(currentIndex + 1);
        }
      });
      //setCurrentPage(currentIndex + 1);
    } else {
      animatedValue.value = withTiming(0, {duration: 1000});
    }
  };
  return (
    <AnimatedPressable
      style={[
        {
          height: height * 0.5,
          width: width,
          position: 'absolute',
        },
        rotateStyle,
      ]}
      onPress={handleOnPress}>
      <ImageBackground
        source={require('../assets/gift/heart.png')}
        style={{height: height * 0.5, width}}
        resizeMode="contain">
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}>
          <AnimationSentence
            sentence={sentence}
            currentPage={currentPage}
            currentIndex={currentIndex}
          />
          {/* <Text>{sentence}</Text> */}
          {/* <Text>AA</Text> */}
        </View>
      </ImageBackground>
    </AnimatedPressable>
  );
};

export default HeartPage;
