import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
interface Props {
  title: String;
  subTitle: String;
  imageUrl: String;
}
const {width, height} = Dimensions.get('screen');
const Content = ({title, subTitle, imageUrl}: Props) => {
  return (
    <View style={{width}}>
      <View style={{marginTop: 30}}>
        <Image
          source={{
            uri: imageUrl.toString(),
          }}
          style={{width: width, height: 400}}
          resizeMode={'contain'}
        />
      </View>
      <View style={{paddingHorizontal: 20}}>
        <Text
          style={{
            color: '#fff',
            fontSize: 22,
            letterSpacing: 1,
            lineHeight: 30,
          }}>
          {title}
        </Text>
        <Text
          style={{
            color: '#fff',
            fontSize: 15,
            opacity: 0.5,
            lineHeight: 20,
            marginTop: 10,
          }}>
          {subTitle}
        </Text>
      </View>
    </View>
  );
};

export default Content;
