import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Background from './Background';
import GradientPicker from './GradientPicker';
const GradientPicker_Index = () => {
  const [gradientIdx, setGradientInx] = useState(0);
  return (
    <View style={{flex: 1}}>
      <Background gradientIdx={gradientIdx} />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'stretch',
          paddingTop: 60,
        }}>
        <GradientPicker
          gradientIdx={gradientIdx}
          setGradientIdx={setGradientInx}
        />
      </View>
    </View>
  );
};

export default GradientPicker_Index;
