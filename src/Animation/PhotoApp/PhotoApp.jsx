import {View, Text, Dimensions, ScrollView, Button} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
} from 'react-native-reanimated';
import Camera from './Camera';
import Avatar from './Avatar';
const {width} = Dimensions.get('screen');
export const PHOTOS = [
  {avt: require('../../assets/photos/avt1.jpg'), name: 'Lisa'},
  {avt: require('../../assets/photos/avt2.png'), name: 'Jennie'},
  {avt: require('../../assets/photos/avt3.jpg'), name: 'Thảo'},
  {avt: require('../../assets/photos/avt4.jpg'), name: 'Tiên'},
  {avt: require('../../assets/photos/avt5.png'), name: 'Jisoo'},
  {avt: require('../../assets/photos/avt6.jpg'), name: 'Rose'},
  {avt: require('../../assets/photos/avt7.jpg'), name: 'Sarah'},
  {avt: require('../../assets/photos/avt8.jpg'), name: 'Khang khùng'},
];
const ITEM_SIZE = 100;
const PhotoApp = () => {
  const animatedValue = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(e => {
    animatedValue.value = e.contentOffset.x / ITEM_SIZE;
  });
  const [isPullDown, setIsPullDown] = useState(false);
  const [isTaking, setIsTaking] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
  const [enableScroll, setEnableScroll] = useState(true);
  //console.log(enableScrollView.current);
  return (
    <View style={{flex: 1, backgroundColor: '#ffff1d'}}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Camera isTaking={isTaking} isFinish={isFinish} />
        {isPullDown && (
          <View style={{position: 'absolute', alignSelf: 'center', bottom: 0}}>
            <Text style={{color: '#000', fontWeight: '700', fontSize: 16}}>
              {!isFinish ? `Flick to Flip Camera` : `FINISH`}
            </Text>
          </View>
        )}
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 30,
        }}>
        <Animated.ScrollView
          horizontal
          scrollEnabled={enableScroll}
          //showsHorizontalScrollIndicator={false}
          snapToInterval={ITEM_SIZE}
          onScroll={scrollHandler}>
          {PHOTOS.map((photo, index) => {
            const animatedStyle = useAnimatedStyle(() => {
              return {
                transform: [
                  {
                    scale: interpolate(
                      animatedValue.value,
                      [index - 2, index - 1, index, index + 1, index + 2],
                      [0.6, 0.8, 1, 0.8, 0.6],
                    ),
                  },
                ],
              };
            });
            return (
              <Avatar
                index={index}
                key={index}
                photo={photo}
                animatedScaleStyle={animatedStyle}
                size={ITEM_SIZE}
                isTaking={isTaking}
                setIsPullDown={setIsPullDown}
                setIsTaking={setIsTaking}
                setIsFinish={setIsFinish}
                setEnableScroll={setEnableScroll}
              />
            );
          })}
        </Animated.ScrollView>
      </View>
    </View>
  );
};

export default PhotoApp;
