import {View, Text, Image} from 'react-native';
import React from 'react';
import {GradientType} from './gradients';

const GradientLabel = ({gradient}: {gradient: GradientType}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={gradient?.image}
        style={{
          width: '100%',
          height: 48,
          borderRadius: 8,
          borderColor: 'rgb(15,23,42)',
          borderWidth: 1,
          position: 'absolute',
        }}
      />
      <Text style={{color: '#000'}}>{gradient?.name}</Text>
    </View>
  );
};

export default GradientLabel;
