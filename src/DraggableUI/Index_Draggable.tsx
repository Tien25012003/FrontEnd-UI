import {View, Text} from 'react-native';
import React, {useState} from 'react';
import DraggableCustom from './DraggableCustom';
const Index_Draggable = () => {
  const [data, setData] = useState([
    {color: '#0080fe', number: 1},
    {color: '#1b63e2', number: 2},
    {color: '#3847c6', number: 3},
    {color: '#8d0d71', number: 4},
    {color: '#a92954', number: 5},
  ]);
  return (
    <View>
      <DraggableCustom data={data} setData={setData} />
    </View>
  );
};

export default Index_Draggable;
