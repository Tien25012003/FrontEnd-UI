import {Image, Dimensions} from 'react-native';
import React from 'react';
const {width: w} = Dimensions.get('screen');
interface Props {
  imgSrc: any;
  width?: number;
  marginTop?: number;
}
const ImageComponent = ({imgSrc, width = w / 2, marginTop = 50}: Props) => {
  return (
    <Image
      source={imgSrc}
      style={{width, height: 200, marginTop, borderRadius: 100}}
      resizeMode="contain"
    />
  );
};

export default ImageComponent;
