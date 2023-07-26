import React from 'react';
import VerticalList from './VerticalList';

const PoliticalNews = ({data}: {data: any[]}) => {
  return <VerticalList title="Political News" data={data} />;
};

export default PoliticalNews;
