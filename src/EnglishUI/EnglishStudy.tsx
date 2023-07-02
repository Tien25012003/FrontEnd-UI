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
const {width, height} = Dimensions.get('screen');
const EnglishStudy = () => {
  const [sentence, setSentence] = useState('Hello! How are you today?');
  const [words, setWords] = useState<String[]>([]);
  let animatedValue = [];
  useEffect(() => {
    setWords(sentence.split(' '));
  }, [sentence]);

  const tap = Gesture.Tap().onStart(e => {
    console.log('tap');
    //console.log(e.absoluteX);
  });

  //const animatedValue = [...new Array(6)].map((w, _) => useSharedValue(0));
  //let position = words.map((d, i) => useSharedValue(0));
  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor: '#fff'}}>
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
                Hello! How are you today?
              </Text>
            </Svg>
          </View>
        </View>
        <View style={{paddingHorizontal: 20}}>
          {[...new Array(2)].map((e, i) => {
            return (
              <View
                key={i}
                style={{
                  height: 55,
                  borderBottomWidth: 2.5,
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
                  key={i}
                  style={{
                    height: 55,
                    borderRadius: 15,
                    backgroundColor: '#e2dfdb',
                    paddingHorizontal: 2,
                    paddingTop: 2,
                    //paddingBottom: 8,
                    marginHorizontal: 5,
                    marginVertical: 5,
                  }}>
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
                </View>
              );
            })}
          </Animated.View>
        </GestureDetector>
      </ScrollView>
    </GestureHandlerRootView>
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
