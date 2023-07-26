import {View, FlatList, Text, Dimensions} from 'react-native';
import React from 'react';
import Title from './Title';
import BlockCard from './BlockCard';
const {width, height} = Dimensions.get('screen');
const HorizontalList = ({title, data}: {title?: string; data: any[]}) => {
  return (
    <View>
      <Title size={20} style={{marginLeft: 10}}>
        {title}
      </Title>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        renderItem={({item, index}) => {
          return <BlockCard width={width / 2} item={item} />;
        }}
      />
    </View>
  );
};

export default HorizontalList;
