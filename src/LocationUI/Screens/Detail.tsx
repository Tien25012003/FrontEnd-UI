import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  Dimensions,
  Pressable,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {StackParams} from '../LocationNavigation/StackNavigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Animated, {SharedTransition} from 'react-native-reanimated';
import StarRating from '../components/StarRating';

const {width, height} = Dimensions.get('screen');
type Props = NativeStackScreenProps<StackParams, 'Detail'>;
const Detail = ({navigation, route}: Props) => {
  const AnimatedImageBackground =
    Animated.createAnimatedComponent(ImageBackground);
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Animated.Image
        sharedTransitionTag={route.params?.location.urlImage.toString()}
        source={route.params?.location.urlImage}
        style={{height: height * 0.3, width}}
      />
      <View style={{position: 'absolute'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width,
            paddingTop: 40,
            paddingHorizontal: 20,
            justifyContent: 'space-between',
          }}>
          <Pressable>
            <FontAwesome name="search" size={20} color={'#fff'} />
          </Pressable>
          <Text style={{color: '#fff', fontSize: 20, fontWeight: '600'}}>
            INTERESTS
          </Text>
          <Pressable onPress={() => navigation.goBack()}>
            <Feather name="x" size={25} color={'#fff'} />
          </Pressable>
        </View>
      </View>
      <View style={{paddingHorizontal: 20, paddingTop: 10}}>
        <Animated.View
          sharedTransitionTag={`${route.params?.location.name}${route.params?.location.addressLine1}`}>
          <Text style={{color: '#000', fontSize: 12, fontWeight: '600'}}>
            {route.params?.location.addressLine1}
          </Text>
        </Animated.View>
        <Animated.View
          sharedTransitionTag={`${route.params?.location.name}${route.params?.location.addressLine2}`}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 5,
          }}>
          <Text style={{fontSize: 12, fontWeight: '500'}}>
            {route.params?.location.addressLine2}
          </Text>
          <StarRating stars={Number(route.params?.location.starRating)} />
        </Animated.View>
      </View>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingHorizontal: 20, marginTop: 30}}>
        {route.params?.location.reviews.map((review, index) => {
          return (
            <View
              key={index}
              style={{
                marginVertical: 5,
                paddingBottom: 10,
                borderBottomWidth: 0.5,
                borderBottomColor: 'grey',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <View style={[styles.row, {marginRight: 50}]}>
                  <Animated.View
                    sharedTransitionTag={
                      route.params?.location.name + review.username + index
                    }
                    style={{
                      width: 25,
                      height: 25,
                      borderRadius: 20,
                      backgroundColor: '#edd6d8',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={review.urlImage}
                      style={{width: 20, height: 20}}
                    />
                  </Animated.View>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 14,
                      fontWeight: '600',
                      marginLeft: 10,
                    }}
                    adjustsFontSizeToFit>
                    {review.username}
                  </Text>
                </View>
                <View style={[styles.row, {justifyContent: 'space-between'}]}>
                  <Text style={{color: '#000', fontSize: 13}}>
                    {review.date}
                  </Text>
                  <AntDesign name="like2" color={'#000'} size={25} />
                </View>
              </View>
              <Text
                style={{
                  marginTop: 20,
                  color: 'grey',
                  fontSize: 13,
                  letterSpacing: 0.4,
                  lineHeight: 20,
                  textAlign: 'justify',
                }}>
                {review.description}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
});
export default Detail;
