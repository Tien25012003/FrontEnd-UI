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
const W = width - 40;
const Answer = ({words}: Props) => {
  const sum = useSharedValue(0);
  const sumY = useSharedValue(-241);
  const [layout, setLayout] = useState<number[]>([]);
  const [layoutY, setLayoutY] = useState<number[]>([]);
  const animatedValueX = words.map((d, i) => useSharedValue(0));
  const animatedValueY = words.map((d, i) => useSharedValue(0));
  const animatedStyle = animatedValueX.map((w, i) =>
    useAnimatedStyle(() => {
      return {
        transform: [
          {translateX: animatedValueX[i].value},
          {translateY: animatedValueY[i].value},
        ],
      };
    }),
  );
  const onPress = (i: number, e: any) => {
    let presentX = 0;
    let limitLeft = e.nativeEvent.pageX - 20;
    for (let j = i - 1; j >= 0; j--) {
      if (presentX > limitLeft - layout[i]) {
        break;
      }
      presentX += layout[j];
    }
    animatedValueX[i].value = withTiming(sum.value - presentX);
    animatedValueY[i].value = withTiming(sumY.value);
    if (layoutY[i] < 60) {
      animatedValueY[i].value = withTiming(sumY.value);
    } else if (layoutY[i] > 60 && layoutY[i] < 120) {
      animatedValueY[i].value = withTiming(sumY.value - 61);
    } else {
      animatedValueY[i].value = withTiming(sumY.value - 61 * 2);
    }
    sum.value += layout[i];
    if (sum.value + layout[i] + layout[i + 1] > W) {
      sum.value = 0;
      sumY.value += 64;
    }
  };
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View>
        <View style={{paddingHorizontal: 20}}>
          {[...new Array(3)].map((e, i) => {
            return (
              <View
                key={i}
                style={{
                  height: 64,
                  borderBottomWidth: 2,
                  borderColor: '#e2dfdb',
                  justifyContent: 'center',
                }}></View>
            );
          })}
        </View>

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
                key={i}
                onLayout={e => {
                  setLayout([...layout, e.nativeEvent.layout.width]);
                  setLayoutY([...layoutY, e.nativeEvent.layout.y]);
                  //console.log(e.nativeEvent.layout.y);
                }}>
                <AnimatedPressable
                  onPress={e => onPress(i, e)}
                  //onPress={e => console.log(e.nativeEvent.pageX - 20)}
                  style={[animatedStyle[i], {borderWidth: 0}]}>
                  <View
                    //onPress={e => console.log(e.nativeEvent.pageX)}
                    style={[
                      {
                        height: 50,
                        borderRadius: 15,
                        backgroundColor: '#e2dfdb',
                        paddingHorizontal: 2,
                        paddingTop: 2,
                        marginHorizontal: 5,
                        marginVertical: 5,
                      },
                    ]}>
                    <View
                      style={{
                        height: 43,
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
                  </View>
                </AnimatedPressable>
              </View>
            );
          })}
        </Animated.View>
      </View>
    </GestureHandlerRootView>
  );
};

export default Answer;
