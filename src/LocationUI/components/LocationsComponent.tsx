import {
  View,
  Text,
  ImageBackground,
  Pressable,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import {LOCATIONS} from '../data/Locations';
import {LocationProps} from '../data/Locations';
import {Dimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import StarRating from './StarRating';
import {
  GestureDetector,
  GestureHandlerRootView,
  Gesture,
  FlatList,
} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
} from 'react-native-reanimated';
const {width, height} = Dimensions.get('screen');
const ITEM_SIZE = width * 0.8;
const PADDING = (width - ITEM_SIZE) / 2;
const PADDINGTOP = (height * 0.1) / 2;
const LocationsComponent = ({setCurrentIndex}: {setCurrentIndex: Function}) => {
  const position = useSharedValue(0);
  const animatedValue = LOCATIONS.map(() => useSharedValue(0));
  const animatedImageStyle = LOCATIONS.map((_, index) =>
    useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateY: interpolate(
              animatedValue[index].value,
              [0, 1],
              [0, -PADDINGTOP],
            ),
          },
        ],
      };
    }),
  );
  const animatedBackStyle = LOCATIONS.map((_, index) =>
    useAnimatedStyle(() => {
      return {
        width: interpolate(
          animatedValue[index].value,
          [0, 1],
          [ITEM_SIZE - 40, ITEM_SIZE - 20],
        ),
        bottom: interpolate(
          animatedValue[index].value,
          [0, 1],
          [0, -PADDINGTOP * 2],
        ),
      };
    }),
  );

  const renderLocation = ({
    item: location,
    index,
  }: {
    item: LocationProps;
    index: number;
  }) => {
    const panGesture = Gesture.Pan().onEnd(e => {
      let i = Number(position.value.toFixed(0));
      if (e.translationY < 0) {
        animatedValue[i].value = withTiming(1);
      } else {
        animatedValue[i].value = withTiming(0);
      }
    });

    return (
      <View
        style={{
          //borderWidth: 1,
          height: height * 0.6,
          width: ITEM_SIZE,
          justifyContent: 'center',
          marginRight: index === LOCATIONS.length - 1 ? PADDING : 0,
          marginLeft: index === 0 ? PADDING : 0,
        }}>
        <View style={{position: 'absolute', alignSelf: 'center'}}>
          <Animated.View
            style={[
              {
                backgroundColor: '#fff',
                height: height * 0.4,
                width: ITEM_SIZE - 30,
                justifyContent: 'flex-end',
                borderRadius: 10,
              },
              animatedBackStyle[index],
            ]}>
            <View style={{paddingHorizontal: 8, paddingBottom: 10}}>
              <Text
                style={{fontSize: 15, color: '#000', fontWeight: '600'}}
                adjustsFontSizeToFit
                numberOfLines={1}>
                {location.addressLine1}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontSize: 12, fontWeight: '500'}}>
                  {location.addressLine2}
                </Text>
                <StarRating stars={location.starRating} />
              </View>
              <View style={{flexDirection: 'row'}}>
                {location.reviews.map((review, index) => {
                  return (
                    <View
                      style={{
                        width: 25,
                        height: 25,
                        borderRadius: 20,
                        backgroundColor: '#edd6d8',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 8,
                      }}
                      key={index}>
                      <Image
                        source={review.urlImage}
                        style={{width: 20, height: 20}}
                      />
                    </View>
                  );
                })}
              </View>
            </View>
          </Animated.View>
        </View>
        <GestureDetector gesture={panGesture}>
          <Animated.View
            style={[
              {marginHorizontal: 15, elevation: 20},
              animatedImageStyle[index],
            ]}>
            <ImageBackground
              source={location.urlImage}
              imageStyle={{borderRadius: 20}}
              style={{height: height * 0.5}}>
              <View
                style={{
                  justifyContent: 'space-between',
                  height: height * 0.5,
                  alignItems: 'center',
                }}>
                <Text style={{color: '#fff', fontWeight: '700', marginTop: 10}}>
                  {location.name}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '90%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 10,
                  }}>
                  <Text style={styles.text}>{location.latitude}</Text>
                  <Entypo name="location-pin" color={'#fff'} size={25} />
                  <Text style={styles.text}>{location.longitude}</Text>
                </View>
              </View>
            </ImageBackground>
          </Animated.View>
        </GestureDetector>
      </View>
    );
  };
  return (
    <GestureHandlerRootView>
      <FlatList
        onScroll={e => {
          position.value = e.nativeEvent.contentOffset.x / ITEM_SIZE;
          setCurrentIndex(
            (e.nativeEvent.contentOffset.x / ITEM_SIZE).toFixed(0),
          );
        }}
        //onScrollEndDrag={() => setCurrentIndex(position.value.toFixed(0))}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={LOCATIONS}
        renderItem={renderLocation}
        pagingEnabled={true}
        snapToInterval={ITEM_SIZE}
      />
    </GestureHandlerRootView>
  );
};
const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 12,
    opacity: 0.6,
  },
});
export default LocationsComponent;
