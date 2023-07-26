import {View, Text} from 'react-native';
import React from 'react';
import BlockCard from './BlockCard';
import WidthScreen from '../constant/WidthScreen';
const FeaturedNews = ({item}: {item: Item}) => {
  return (
    <BlockCard
      height={200}
      width={WidthScreen - 20}
      marginHorizontal={0}
      style={{alignSelf: 'center'}}
      item={item}
    />
  );
};

export default FeaturedNews;
