import {View, Text} from 'react-native';
import React from 'react';
import HorizontalList from './HorizontalList';

const BreakingNews = ({data}: {data: any[]}) => {
  return <HorizontalList title="Breaking News" data={data} />;
};

export default BreakingNews;
