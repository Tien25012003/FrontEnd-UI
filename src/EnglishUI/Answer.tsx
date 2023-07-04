import {View, Text, Pressable, Button, Dimensions} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {
  GestureHandlerRootView,
  GestureDetector,
  Gesture,
} from 'react-native-gesture-handler';
interface Props {
  words: String[];
}
const {width, height} = Dimensions.get('screen');
const W = width - 50;
const Answer = ({words}: Props) => {
  const sum = useSharedValue(0);
  const [layout, setLayout] = useState<number[]>([]);
  const animatedValue = words.map((d, i) => useSharedValue(0));
  const animatedValueY = words.map((d, i) => useSharedValue(0));
  const tap = Gesture.Tap()
    .onBegin(e => {})
    .onStart(e => {
      //console.log('tap');
      //console.log(e.absoluteX);
      //console.log(e.absoluteX);
    });
  //console.log(layout);
  const animatedStyle = animatedValue.map((w, i) =>
    useAnimatedStyle(() => {
      return {
        transform: [
          {translateX: animatedValue[i].value},
          {translateY: animatedValueY[i].value},
        ],
      };
    }),
  );

  const onPress = (i: number) => {
    //console.log('press');
    let tmpX = 0;
    let tmpY = -185;
    let j = 0;
    let positionOverSize = 100;
    for (j = 0; j < i; j++) {
      tmpX += layout[j];
      if (tmpX + layout[j] >= W && sum.value <= W) {
        if (positionOverSize > j) positionOverSize = j;
      }
    }
    if (sum.value <= W && tmpX + layout[j] > W) {
      //console.log('1');
      for (let k = positionOverSize; k >= 0; k--) {
        tmpX -= layout[k];
      }
      console.log(tmpX);
      //tmpX = 0;
      tmpY = -252;
    } else if (sum.value > W) {
      tmpY = -185;
      console.log('2');
    }
    //console.log('tmpX', tmpX);
    //console.log('W', W);
    //console.log('sum', sum.value);
    animatedValueY[i].value = withTiming(tmpY);
    animatedValue[i].value = withTiming(sum.value - tmpX);
    sum.value += layout[i];
    // if (sum.value >= W) {
    //   sum.value = 0;
    // }
  };
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View>
        <View style={{paddingHorizontal: 20}}>
          {[...new Array(2)].map((e, i) => {
            return (
              <View
                key={i}
                style={{
                  height: 67,
                  borderBottomWidth: 2,
                  borderColor: '#e2dfdb',
                  justifyContent: 'center',
                }}></View>
            );
          })}
        </View>
        <GestureDetector gesture={tap}>
          <Animated.View
            style={{
              marginTop: 50,
              paddingHorizontal: 20,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {words.map((word, i) => {
              return (
                <View
                  //onPress={() => onPress(i)}
                  //onPress={() => console.log('press')}
                  key={i}
                  onLayout={e => {
                    setLayout([...layout, e.nativeEvent.layout.width]);
                  }}
                  style={[
                    {
                      //paddingHorizontal: 5,
                      //paddingVertical: 5,
                      borderWidth: 1,
                    },
                    //animatedStyle[i],
                  ]}>
                  <AnimatedPressable
                    onPress={() => onPress(i)}
                    style={[
                      {
                        height: 55,
                        borderRadius: 15,
                        backgroundColor: '#e2dfdb',
                        paddingHorizontal: 2,
                        paddingTop: 2,
                        marginHorizontal: 5,
                        marginVertical: 5,
                      },
                      animatedStyle[i],
                    ]}>
                    <View
                      style={{
                        height: 48,
                        borderRadius: 12,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#fff',
                        paddingHorizontal: 10,
                      }}>
                      <Text style={{color: '#000'}} adjustsFontSizeToFit>
                        {word}
                      </Text>
                    </View>
                  </AnimatedPressable>
                </View>
              );
            })}
          </Animated.View>
        </GestureDetector>
      </View>
      {/* <Button title="AA" onPress={() => console.log(tapIndex.value)} /> */}
    </GestureHandlerRootView>
  );
};

export default Answer;
