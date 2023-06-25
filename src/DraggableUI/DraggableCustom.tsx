import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Button,
} from 'react-native';
import React from 'react';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  GestureDetector,
  Gesture,
} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  withTiming,
  useAnimatedStyle,
  runOnJS,
} from 'react-native-reanimated';
const {width} = Dimensions.get('screen');
interface DataColor {
  color: string;
  number: number;
}
interface Props {
  data: DataColor[];
  setData: Function;
}
const DraggableCustom = ({data, setData}: Props) => {
  const H = 100;
  const startX = useSharedValue(0);
  const pos = useSharedValue(0);
  let position = data.map((d, i) => useSharedValue(0));
  const panGesture = Gesture.Pan()
    .onUpdate(e => {
      position[pos.value].value = startX.value + e.translationY;
    })
    .onStart(e => {
      pos.value = Math.floor(e.absoluteY / H);
      startX.value = position[pos.value].value;
    })
    .onEnd(e => {
      const temp = Math.floor(e.absoluteY / H);
      const tmpVal = data[pos.value];
      runOnJS(onChangeElement)(temp);
    })
    .onFinalize(e => {
      position[pos.value].value = 0;
    });

  const animatedStyle = data.map((_, i) =>
    useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateY: position[i].value,
          },
        ],
      };
    }),
  );

  function onChangeElement(temp: number) {
    const tmpArray = [...data];
    tmpArray.splice(pos.value, 1);
    tmpArray.splice(temp, 0, data[pos.value]);
    setData([...tmpArray]);
  }
  const renderColor = ({item, index}: {item: DataColor; index: number}) => {
    return (
      <GestureDetector gesture={panGesture}>
        <Animated.View
          key={index}
          style={[
            {
              width,
              backgroundColor: item.color,
              alignItems: 'center',
              justifyContent: 'center',
              height: 100,
            },
            //animatedStyle[index],
            {
              transform: [
                {
                  translateY: position[index],
                },
              ],
            },
          ]}>
          <Text style={{color: '#000', fontSize: 20}}>{item.number}</Text>
        </Animated.View>
      </GestureDetector>
    );
  };
  return (
    <GestureHandlerRootView>
      <FlatList data={data} renderItem={renderColor} />
      {/* <Button
        onPress={() => {
          const tmp = [...data];
          const tmpV = data[0];
          tmp.splice(0, 1);
          tmp.push(tmpV);
          setData([...tmp]);
        }}
        title="press"
      /> */}
    </GestureHandlerRootView>
  );
};

export default DraggableCustom;
