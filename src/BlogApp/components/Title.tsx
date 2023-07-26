import {View, Text} from 'react-native';
import React, {Component, ReactNode} from 'react';

const Title = ({
  children,
  numberOfLines = 2,
  size = 18,
  style,
}: {
  children?: ReactNode;
  numberOfLines?: number;
  size?: number;
  style?: any;
}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[{fontWeight: '600', fontSize: size, color: '#000'}, style]}>
      {children}
    </Text>
  );
};

export default Title;
