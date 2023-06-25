import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import Table from './src/TableUI/Table';
import Table2 from './src/TableUI/Table2';
import SwipeTable from './src/TableUI/SwipeTable';
import Index_Table from './src/TableUI/Index_Table';
import CustomPractice from './src/CustomPractice';
import Index_Draggable from './src/DraggableUI/Index_Draggable';
import Chat from './src/ChatUI/Chat';
const {width, height} = Dimensions.get('screen');
const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <Index_Draggable /> */}
      <Chat />
    </View>
  );
};

export default App;
