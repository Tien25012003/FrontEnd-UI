import {View, Text, Button} from 'react-native';
import React, {useEffect} from 'react';
import Svg, {Path} from 'react-native-svg';
import Animated, {
  withTiming,
  withRepeat,
  useAnimatedProps,
  useSharedValue,
} from 'react-native-reanimated';
const FabButton = () => {
  const animatedValueY = useSharedValue(30);
  const animatedValueX = useSharedValue(20);
  const animatedViewBox = useAnimatedProps(() => {
    return {
      transform: [
        {translateY: animatedValueY.value},
        {translateX: animatedValueX.value},
      ],
    };
  });
  const AnimatedSvg = Animated.createAnimatedComponent(Svg);
  useEffect(() => {
    animatedValueY.value = withTiming(10, {duration: 3000});
    //animatedValueX.value = withTiming(-20, {duration: 3000});
    animatedValueX.value = withRepeat(withTiming(-20), -1, false);
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text>FabButton</Text>

      <View
        style={{
          position: 'absolute',
          bottom: 30,
          right: 20,
          height: 60,
          width: 60,
          borderRadius: 100,
          backgroundColor: '#fff',
          elevation: 10,
          borderWidth: 0.5,
          borderColor: '#dbd2dc',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}>
        <AnimatedSvg
          width={100}
          height={200}
          viewBox="-4 -1 8 7"
          animatedProps={animatedViewBox}>
          <Path
            d="M 0 0 H 0 Q 1 -1 2 0 Q 3 1 4 0 V 7 L -4 7 V 0 L -4 0 Q -3 -1 -2 0 Q -1 1 0 0 Z"
            fill={'#00BFFF'}
          />
        </AnimatedSvg>
      </View>
    </View>
  );
};

export default FabButton;
