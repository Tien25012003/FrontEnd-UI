import {View, Text, Image, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import ImageComponent from './ImageComponent';
import {SlideInUp, withTiming, FadeIn} from 'react-native-reanimated';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
const Camera = ({
  isTaking,
  isFinish,
}: {
  isTaking: boolean;
  isFinish: boolean;
}) => {
  const rotateValue = useSharedValue(0);
  useEffect(() => {
    if (isFinish) {
      rotateValue.value = withTiming(180);
    } else {
      rotateValue.value = withTiming(0);
    }
  }, [isFinish]);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateX: `-${rotateValue.value}deg`,
        },
      ],
    };
  });
  if (isTaking)
    return (
      <Animated.View
        style={{paddingTop: 100, flex: 1}}
        entering={SlideInUp.duration(500)}>
        <View>
          <Animated.View
            style={[animatedStyle, {backfaceVisibility: 'hidden'}]}>
            <ImageComponent
              imgSrc={require('../../assets/photos/camera.jpg')}
            />
          </Animated.View>
          {isFinish && (
            <Animated.View
              style={{position: 'absolute'}}
              entering={FadeIn.delay(200)}>
              <ImageComponent
                imgSrc={require('../../assets/photos/finish.jpg')}
              />
            </Animated.View>
          )}
        </View>
      </Animated.View>
    );
  return (
    <View style={{paddingTop: 100, flex: 1}}>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>Pull down to reveal the camera</Text>
        <ImageComponent imgSrc={require('../../assets/photos/arrowdown.png')} />
      </View>
    </View>
  );
};

export default Camera;
