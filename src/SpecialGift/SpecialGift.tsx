import {View, Text, Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
import HeartList from './HeartList';
import Arrow from './Arrow';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  interpolate,
  interpolateColor,
} from 'react-native-reanimated';
import Sun from './Sun';
import Cloud from './Cloud';
import {SENTENCES} from './data_sentences';
const {width: w, height} = Dimensions.get('screen');
const width = w;
const SpecialGift = () => {
  const [isShooting, setIsShooting] = useState(false);
  const [currentPage, setCurrentPage] = useState(-1);
  const animatedColor = useSharedValue(0);
  const animatedValue = useSharedValue(0);

  const animatedTranslateXStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animatedValue.value}],
      backgroundColor: interpolateColor(
        animatedColor.value,
        [0, 1],
        ['#fff', '#1f2021'],
      ),
    };
  });
  useEffect(() => {
    if (isShooting) {
      animatedValue.value = withTiming(-width);
    }
  }, [isShooting]);
  useEffect(() => {
    if (currentPage === SENTENCES.length - 1) {
      animatedColor.value = withDelay(500, withTiming(1, {duration: 800}));
    }
  }, [currentPage]);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Animated.View
        style={[
          {
            flex: 1,
            justifyContent: 'center',
            width: width * 2,
            alignItems: 'flex-end',
            backgroundColor: '#fff',
          },
          animatedTranslateXStyle,
        ]}>
        <View
          style={{position: 'absolute', top: height * 0.1, left: width * 0.35}}>
          <Sun shineWidth={width * 0.3} />
        </View>
        <View style={{position: 'absolute', top: height * 0.12, left: 0}}>
          <Cloud />
        </View>
        <HeartList
          width={width}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <Arrow isShooting={isShooting} setIsShooting={setIsShooting} />
      </Animated.View>
    </GestureHandlerRootView>
  );
};

export default SpecialGift;
