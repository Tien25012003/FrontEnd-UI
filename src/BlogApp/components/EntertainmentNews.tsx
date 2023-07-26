import React from 'react';
import VerticalList from './VerticalList';

const EntertainmentNews = ({data}: {data: any[]}) => {
  return <VerticalList title="Entertainment News" data={data} />;
};

export default EntertainmentNews;
