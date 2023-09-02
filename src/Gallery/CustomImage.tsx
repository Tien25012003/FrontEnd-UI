import {
  Pressable,
  Image,
  Dimensions,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {BottomSheetProps} from './BottomSheet';
import {styles} from './BottomSheet';
import {ImageType} from './Gallery';
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
interface CustomImageProps extends BottomSheetProps {
  index: number;
  image: ImageType;
  imgLeft: number;
  animatedValue: Animated.SharedValue<number>;
  isCompleted: boolean;
}
const {width, height} = Dimensions.get('screen');
const CustomImage = ({
  imageSize,
  containerSize,
  selectImage,
  index,
  image,
  imgLeft,
  animatedValue,
  isCompleted,
}: CustomImageProps) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      left: interpolate(
        animatedValue.value,
        [height * 0.02, -height * 0.48],
        [index * containerSize, 0],
        Extrapolate.CLAMP,
      ),
      top: interpolate(
        animatedValue.value,
        [height * 0.02, -height * 0.48],
        [0, index * containerSize],
        Extrapolate.CLAMP,
      ),
    };
  });
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
  return (
    <AnimatedPressable
      onPress={() => selectImage(index)}
      style={[
        styles.img_container,
        {
          height: containerSize,
          //flexDirection: isCompleted ? 'row' : 'column',
          //borderWidth: 1,
          //paddingHorizontal: isCompleted ? 10 : 0,
        },
        animatedStyle,
      ]}>
      <View
        style={{
          flexDirection: isCompleted ? 'row' : 'column',
          width: isCompleted ? width - 10 : containerSize,
          height: containerSize - 10,
          alignItems: 'center',
          justifyContent: isCompleted ? 'flex-start' : 'center',
          borderWidth: isCompleted ? 2 : 0,
          borderRadius: 10,
          borderColor: 'grey',
          alignSelf: 'center',
          marginHorizontal: isCompleted ? 5 : 0,
          paddingHorizontal: isCompleted ? 5 : 0,
        }}>
        <Image
          source={image.img}
          style={{width: imageSize, height: imageSize, borderRadius: 10}}
        />
        {isCompleted && (
          <View style={{marginLeft: 20}}>
            <Text style={textStyle.title}>{image.title}</Text>
            <Text>{image.artistName}</Text>
          </View>
        )}
      </View>
    </AnimatedPressable>
  );
};
const textStyle = StyleSheet.create({
  title: {
    color: '#000',
    fontSize: 20,
    fontWeight: '700',
  },
  name: {
    color: 'grey',
    fontSize: 15,
    fontWeight: '600',
  },
});
export default CustomImage;
