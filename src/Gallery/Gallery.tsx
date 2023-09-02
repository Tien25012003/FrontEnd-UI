import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useTransition} from 'react';
import CenterImage from './CenterImage';
import {IMAGES} from './data_image';
import BottomSheet from './BottomSheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
export const {width, height} = Dimensions.get('screen');
export interface ImageType {
  img: any;
  title: string;
  artistName: string;
}
const IMAGE_SIZE = 80;
const CONTAIN_SIZE = 100;
const Gallery = () => {
  const [presentImage, setPresentImage] = useState<ImageType>(IMAGES[0]);
  const [isPending, startTransition] = useTransition();

  function selectImage(index: number) {
    startTransition(() => {
      setPresentImage(IMAGES[index]);
    });
  }
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={{alignItems: 'center', flex: 1}}>
        {isPending ? (
          <ActivityIndicator />
        ) : (
          <Image
            source={presentImage.img}
            style={[
              StyleSheet.absoluteFill,
              {height, width, alignSelf: 'center'},
            ]}
            resizeMode="cover"
            blurRadius={3}
          />
        )}

        <View style={{marginTop: height * 0.1}}>
          <CenterImage
            width={width * 0.8}
            height={height * 0.3}
            imgSrc={presentImage.img}
            label={presentImage.title}
            subLabel={presentImage.artistName}
          />
        </View>

        <BottomSheet
          imageSize={IMAGE_SIZE}
          containerSize={CONTAIN_SIZE}
          selectImage={selectImage}
        />
      </View>
    </GestureHandlerRootView>
  );
};

export default Gallery;
