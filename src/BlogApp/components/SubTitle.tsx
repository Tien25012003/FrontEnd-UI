import {View, Text} from 'react-native';
import React, {Component, ReactNode} from 'react';

const SubTitle = ({
  children,
  numberOfLines = 2,
  size = 15,
}: {
  children?: ReactNode;
  numberOfLines?: number;
  size?: number;
}) => {
  return (
    <Text numberOfLines={numberOfLines} style={{fontSize: size}}>
      {children}
    </Text>
  );
};

export default SubTitle;
