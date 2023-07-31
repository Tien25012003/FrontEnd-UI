import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Title from './Title';
import SubTitle from './SubTitle';
import ViewMore from './ViewMore';

const FlatCard = ({
  height = 100,
  width = 100,
  borderRadius = 10,
  marginHorizontal = 10,
  marginVertical = 10,
  style,
  item = {},
}: {
  height?: number | string;
  width?: number | string;
  borderRadius?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  style?: any;
  item?: INews;
}) => {
  const {title, thumbnail, desc} = item;
  const source = !!thumbnail
    ? {uri: thumbnail}
    : require('../../LocationUI/assets/mountain.jpg');
  if (item.type === 'viewMore') {
    return <ViewMore />;
  }
  return (
    <View style={[styles.container, {marginHorizontal, marginVertical}]}>
      <Image
        defaultSource={require('../../LocationUI/assets/mountain.jpg')}
        source={source}
        style={{height: '100%', flex: 3.5}}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Title>{title}</Title>
        <SubTitle numberOfLines={3}>{desc}</SubTitle>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 10,
  },
  content: {
    flex: 6.5,
    paddingHorizontal: 10,
  },
});
export default FlatCard;
