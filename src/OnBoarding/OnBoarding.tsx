import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  ScrollView,
  Animated,
  Pressable,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Svg, Defs, LinearGradient, Stop, Rect} from 'react-native-svg';
import Content from './Content';
import AntDesign from 'react-native-vector-icons/AntDesign';
const {width, height} = Dimensions.get('screen');
const CONTENTS = [
  {
    title: 'Connect people\naround the world',
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    imageUrl:
      'https://snacknation.com/wp-content/uploads/2022/08/new-employee-orientation.png',
  },
  {
    title: 'Connect people\naround the world',
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    imageUrl:
      'https://snacknation.com/wp-content/uploads/2022/08/new-employee-orientation.png',
  },
  {
    title: 'Connect people\naround the world',
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    imageUrl:
      'https://snacknation.com/wp-content/uploads/2022/08/new-employee-orientation.png',
  },
];
interface contentType {
  title: String;
  subTitle: String;
  imageUrl: String;
}
const OnBoarding = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef<FlatList>(null);
  let position = Animated.divide(scrollX, width);
  const [currentPage, setCurrentPage] = useState(0);
  const renderContent = ({
    item: content,
    index,
  }: {
    item: contentType;
    index: number;
  }) => {
    return (
      <Content
        title={content.title}
        subTitle={content.subTitle}
        imageUrl={content.imageUrl}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <View style={{flex: 1}}>
        <View style={StyleSheet.absoluteFill}>
          <Svg width={width} height={height}>
            <Defs>
              <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                <Stop offset="0.2" stopColor="#3594DD" stopOpacity="1" />
                <Stop offset="0.4" stopColor="#4563DB" stopOpacity="1" />
                <Stop offset="0.7" stopColor="#5036D5" stopOpacity="1" />
                <Stop offset="0.9" stopColor="#5B16D0" stopOpacity="1" />
              </LinearGradient>
            </Defs>
            <Rect x="0" y="0" width={width} height={height} fill="url(#grad)" />
          </Svg>
        </View>
        <ScrollView style={{height: 100}}>
          <View
            style={{
              paddingHorizontal: 30,
              paddingTop: 40,
              alignItems: 'flex-end',
            }}>
            <Text
              style={{
                color: '#fff',
                letterSpacing: 1,
                fontSize: 18,
                fontWeight: '600',
              }}
              onPress={() => {
                scrollRef?.current?.scrollToEnd();
              }}>
              Skip
            </Text>
          </View>
          <FlatList
            data={CONTENTS}
            renderItem={renderContent}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            ref={scrollRef}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      x: scrollX,
                    },
                  },
                },
              ],
              {
                useNativeDriver: false,
                listener: (e: NativeSyntheticEvent<NativeScrollEvent>) => {
                  setCurrentPage(e.nativeEvent.contentOffset.x / width);
                },
              },
            )}
            // onScrollEndDrag={e => {
            //   console.log('x', e.nativeEvent.contentOffset.x);
            //   console.log('width', width);
            //   setCurrentPage(Math.floor(e.nativeEvent.contentOffset.x / width));
            // }}
            //onScroll={e => console.log(e.nativeEvent.contentOffset.x)}
            // onScrollEndDrag={e =>
            //   console.log(e.nativeEvent.contentOffset.x / width)
            // }
          />
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'center',
              marginTop: 30,
            }}>
            {CONTENTS.map((_, index) => {
              //let position = Animated.divide(scrollX, width);
              const animatedWidth = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [15, 25, 15],
                extrapolate: 'clamp',
              });
              const opacity = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [0.2, 1, 0.2],
                extrapolate: 'clamp',
              });
              return (
                <Animated.View
                  key={index}
                  style={{
                    height: 8,
                    width: animatedWidth,
                    backgroundColor: '#fff',
                    borderRadius: 5,
                    marginHorizontal: 8,
                    opacity: opacity,
                  }}
                />
              );
            })}
          </View>
        </ScrollView>
        {currentPage < CONTENTS.length - 1 ? (
          <View
            style={{
              position: 'absolute',
              bottom: 30,
              paddingHorizontal: 30,
              right: 0,
            }}>
            <Pressable
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
              }}
              onPress={() => {
                let index = currentPage;
                scrollRef?.current?.scrollToOffset({
                  offset: (index + 1) * width,
                });
                //setCurrentPage(currentPage + 1);
              }}>
              <Text
                style={{
                  color: '#fff',
                  letterSpacing: 1,
                  fontSize: 18,
                  marginRight: 10,
                  fontWeight: '600',
                }}>
                Next
              </Text>
              <AntDesign name="arrowright" size={20} color={'#fff'} />
            </Pressable>
          </View>
        ) : (
          <View
            style={{
              position: 'absolute',
              width,
              backgroundColor: '#fff',
              paddingVertical: 20,
              alignItems: 'center',
              bottom: 0,
            }}>
            <Text
              style={{color: '#5036D5', fontSize: 20, fontWeight: 'bold'}}
              onPress={() => console.log('Get Started')}>
              Get Started
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default OnBoarding;
