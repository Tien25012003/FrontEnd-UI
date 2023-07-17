import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Pressable,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {Svg, Path} from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {
  GestureHandlerRootView,
  GestureDetector,
  Gesture,
} from 'react-native-gesture-handler';
import Answer from './Answer';
const {width, height} = Dimensions.get('screen');

const EnglishStudy = () => {
  const [sentence, setSentence] = useState(
    'Hello! How are you this morning? I am happy to see you.',
  );
  const [words, setWords] = useState<String[]>(sentence.split(' '));
  //let animatedValue = [];

  // useEffect(() => {
  //   setWords(sentence.split(' '));
  // }, [sentence]);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} />
      <ScrollView style={{flex: 1}}>
        <View style={styles.row}>
          <Pressable>
            <Feather name="x" size={30} color={'#c0c0c0'} />
          </Pressable>
          <View
            style={{
              width: '80%',
              height: 15,
              backgroundColor: '#d0d1d6',
              marginLeft: 20,
              borderRadius: 20,
            }}>
            <View
              style={{
                position: 'absolute',
                height: 15,
                backgroundColor: '#74c200',
                width: '60%',
                borderRadius: 20,
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 4,
                  width: '70%',
                  borderRadius: 20,
                  backgroundColor: '#fff',
                  marginTop: 3,
                  opacity: 0.2,
                }}
              />
            </View>
          </View>
        </View>
        <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#000',
              letterSpacing: 0.5,
            }}>
            Dịch câu này
          </Text>
        </View>
        <View style={styles.row}>
          <Image
            source={{
              uri: 'https://duoplanet.com/wp-content/uploads/2022/04/Duolingo-Eddy-1-640x1024.png',
            }}
            style={{width: 120, height: 220}}
            resizeMode="contain"
          />
          <View
            style={{
              marginLeft: 20,
              paddingTop: 5,
              transform: [{translateX: -20}, {translateY: -20}],
            }}>
            <Svg
              width={width * 0.55}
              height={100}
              viewBox={`0 -0.5 ${width * 0.02} 6`}>
              <Path
                //d="M 1 0 H 5 Q 6 0 6 1 V 4 Q 6 5 5 5 H 1 Q 0 5 0 4 V 3 H -1 L 0 2 V 1 Q 0 0 1 0"
                d={`M 1 0 H ${width * 0.02} Q ${width * 0.02 + 1} 0 ${
                  width * 0.02 + 1
                } 1 V 4 Q ${width * 0.02 + 1} 5 ${
                  width * 0.02
                } 5 H 1 Q 0 5 0 4 V 3 H -1 L 0 2 V 1 Q 0 0 1 0`}
                strokeWidth={0.1}
                fill={'none'}
                stroke={'grey'}
              />
              <Text
                style={{
                  marginLeft: 48,
                  marginRight: 28,
                  marginVertical: 15,
                  color: '#000',
                  letterSpacing: 0.5,
                }}
                adjustsFontSizeToFit>
                Hello! How are you this morning? I am happy to see you.
              </Text>
            </Svg>
          </View>
        </View>

        <Answer words={words} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
});
export default EnglishStudy;
