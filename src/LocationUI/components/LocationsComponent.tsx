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
  SharedTransition,
} from 'react-native-reanimated';

const {width, height} = Dimensions.get('screen');
const ITEM_SIZE = width * 0.8;
const PADDING = (width - ITEM_SIZE) / 2;
const PADDINGTOP = (height * 0.1) / 2;
const LocationsComponent = ({
  setCurrentIndex,
  navigation,
}: {
  setCurrentIndex: Function;
  navigation: any;
}) => {
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
  const panGesture = Gesture.Pan().onEnd(e => {
    let i = Number(position.value.toFixed(0));
    if (e.translationY < 0) {
      animatedValue[i].value = withTiming(1);
    } else {
      animatedValue[i].value = withTiming(0);
    }
  });
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
  const AnimatedImageBackground =
    Animated.createAnimatedComponent(ImageBackground);
  const renderLocation = ({
    item: location,
    index,
  }: {
    item: LocationProps;
    index: number;
  }) => {
    return (
      <View
        style={{
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
              <Animated.View
                sharedTransitionTag={location.name + location.addressLine1}>
                <Text
                  style={{fontSize: 12, color: '#000', fontWeight: '600'}}
                  adjustsFontSizeToFit
                  numberOfLines={2}>
                  {location.addressLine1}
                </Text>
              </Animated.View>
              <Animated.View
                sharedTransitionTag={location.name + location.addressLine2}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontSize: 12, fontWeight: '500'}}>
                  {location.addressLine2}
                </Text>
                <StarRating stars={location.starRating} />
              </Animated.View>
              <View style={{flexDirection: 'row'}}>
                {location.reviews.map((review, index) => {
                  return (
                    <Animated.View
                      sharedTransitionTag={
                        location.name + review.username + index
                      }
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
                    </Animated.View>
                  );
                })}
              </View>
            </View>
          </Animated.View>
        </View>
        <AnimatedPressable
          onPress={() => {
            //animatedValue[index].value = withTiming(1);
            navigation.navigate('Detail', {location: location});
          }}
          style={[
            {marginHorizontal: 15, elevation: 20},
            animatedImageStyle[index],
          ]}>
          <View style={{height: height * 0.5}}>
            <Animated.Image
              sharedTransitionTag={location.urlImage.toString()}
              source={location.urlImage}
              style={{
                height: height * 0.5,
                width: ITEM_SIZE - 30,
                borderRadius: 20,
              }}
              resizeMode="cover"
            />
            <View style={{position: 'absolute', alignSelf: 'center'}}>
              <Text style={{color: '#fff', fontWeight: '700', marginTop: 10}}>
                {location.name}
              </Text>
            </View>
            <View
              style={{position: 'absolute', bottom: 0, alignSelf: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  width: ITEM_SIZE - 30,
                  paddingHorizontal: 10,
                  justifyContent: 'space-between',
                  marginBottom: 10,
                  alignItems: 'flex-end',
                }}>
                <Text style={styles.text}>{location.latitude}</Text>
                <Entypo name="location-pin" color={'#fff'} size={25} />
                <Text style={styles.text}>{location.longitude}</Text>
              </View>
            </View>
          </View>
        </AnimatedPressable>
      </View>
    );
  };
  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={panGesture}>
        <FlatList
          onScroll={e => {
            position.value = e.nativeEvent.contentOffset.x / ITEM_SIZE;
            setCurrentIndex(
              (e.nativeEvent.contentOffset.x / ITEM_SIZE).toFixed(0),
            );
          }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={LOCATIONS}
          renderItem={renderLocation}
          pagingEnabled={true}
          snapToInterval={ITEM_SIZE}
        />
      </GestureDetector>
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
