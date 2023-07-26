import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Title from './Title';
import SubTitle from './SubTitle';

const BlockCard = ({
  image = require('../../LocationUI/assets/mountain.jpg'),
  height = 100,
  width = 100,
  borderRadius = 10,
  marginHorizontal = 10,
  marginVertical = 10,
  style,
  item = {},
}: {
  image?: any;
  height?: number | string;
  width?: number | string;
  borderRadius?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  style?: any;
  item?: Item;
}) => {
  const {title, thumbnail, desc} = item;
  const source = !!thumbnail
    ? {uri: thumbnail}
    : require('../../LocationUI/assets/mountain.jpg');
  return (
    <View
      style={[
        styles.container,
        {borderRadius, marginHorizontal, marginVertical, width},
        style,
      ]}>
      <Image
        defaultSource={require('../../LocationUI/assets/mountain.jpg')}
        source={source}
        style={{width: '100%', height}}
        resizeMode="cover"
      />
      <View style={{padding: 5}}>
        <Title>{title}</Title>
        <SubTitle numberOfLines={3}>{desc}</SubTitle>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
});
export default BlockCard;
