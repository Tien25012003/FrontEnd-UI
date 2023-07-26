import {View, Text} from 'react-native';
import React from 'react';
import HorizontalList from './HorizontalList';
const TechNews = ({data}: {data: any[]}) => {
  return <HorizontalList title="Tech News" data={data} />;
};

export default TechNews;
