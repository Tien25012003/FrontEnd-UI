import {View, Text, Image, Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  GestureDetector,
  Gesture,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  runOnJS,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
const IMAGES = [
  'https://images.unsplash.com/photo-1541410965313-d53b3c16ef17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=368&q=80',
  'https://images.unsplash.com/photo-1616055192765-47087ac542b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1574848507684-c669d9f6a535?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1627026963727-31e7fb14428d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
];
const {width, height} = Dimensions.get('screen');
const IMessage = () => {
  const [scaleArray, setScaleArray] = useState<number[]>([]);
  const [imageArray, setImageArray] = useState(IMAGES);
  const startX = useSharedValue(0);
  useEffect(() => {
    let tmp = [...scaleArray];
    let i = 1;
    IMAGES.forEach((value, index) => {
      i = i - 0.03;
      tmp.push(i);
    });
    setScaleArray([...tmp.reverse()]);
  }, [imageArray]);
  const animatedValue = useSharedValue(0);
  const animatedScale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: animatedValue.value},
        {scale: animatedScale.value},
      ],
    };
  });
  const panGesture = Gesture.Pan()
    .onUpdate(e => {
      animatedValue.value = e.translationX + startX.value;
      animatedScale.value = withTiming(0.7);
      //   if (animatedValue.value > width / 2 - 100) {
      //     animatedValue.value = width / 2 - 100;
      //   }
      //console.log(animatedValue.value);
    })
    .onStart(e => (startX.value = animatedValue.value))
    .onFinalize(
      e => ((animatedValue.value = 0), (animatedScale.value = withTiming(1))),
    )
    .onEnd(e => {
      //console.log('final');
      runOnJS(onChangeImage)();
    });
  function onChangeImage() {
    const tmp = [...imageArray];
    const tmpValue = imageArray[imageArray.length - 1];
    tmp.splice(imageArray.length - 1, 1);
    tmp.unshift(tmpValue);
    setImageArray([...tmp]);
  }
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
        }}>
        {imageArray.map((image, index) => {
          if (index !== IMAGES.length - 1)
            return (
              <View
                key={index}
                style={{
                  position: 'absolute',
                  transform: [
                    {translateY: 130},
                    {rotate: `${(IMAGES.length - 1 - index) * 3}deg`},
                    {translateY: -130},
                    //{scale: scaleArray[index]},
                    {translateX: (IMAGES.length - 1 - index) * 5},
                  ],
                }}>
                <Image
                  source={{uri: image}}
                  resizeMode="stretch"
                  style={{width: 200, height: 260, borderRadius: 20}}
                  //blurRadius={3}
                />
              </View>
            );
          else
            return (
              <GestureDetector gesture={panGesture} key={index}>
                <Animated.View
                  style={[
                    {
                      position: 'absolute',
                      transform: [
                        {translateY: 130},
                        {rotate: `${(imageArray.length - 1 - index) * 3}deg`},
                        {translateY: -130},
                        //{scale: scaleArray[index]},
                      ],
                    },
                    animatedStyle,
                  ]}>
                  <Image
                    source={{uri: image}}
                    resizeMode="stretch"
                    style={{width: 200, height: 260, borderRadius: 20}}
                    //blurRadius={3}
                  />
                </Animated.View>
              </GestureDetector>
            );
        })}
        {/* <Image/> */}
      </View>
    </GestureHandlerRootView>
  );
};

export default IMessage;
