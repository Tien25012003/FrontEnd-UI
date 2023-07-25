import {View, Text, Dimensions, Image, StatusBar} from 'react-native';
import React from 'react';
import Table from './src/TableUI/Table';
import Table2 from './src/TableUI/Table2';
import SwipeTable from './src/TableUI/SwipeTable';
import Index_Table from './src/TableUI/Index_Table';
import Index_Draggable from './src/DraggableUI/Index_Draggable';
import Chat from './src/ChatUI/Chat';
import IMessage from './src/IMessage/IMessage';
import EnglishStudy from './src/EnglishUI/EnglishStudy';
import ZustandTest from './src/ZustandTest/ZustandTest';
import MMKVStorage from './src/MMKVTest/MMKVStorage';
import OnBoarding from './src/OnBoarding/OnBoarding';
import ConcentricTransition from './src/ConcentricTransition/ConcentricTransition';
import LocationHome from './src/LocationUI/Screens/LocationHome';
const {width, height} = Dimensions.get('screen');
const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'light-content'}
        translucent
      />
      {/* <Index_Draggable /> */}
      {/* <Chat /> */}
      {/* <IMessage /> */}
      {/* <EnglishStudy /> */}
      {/* <ZustandTest /> */}
      {/* <MMKVStorage /> */}
      {/* <ConcentricTransition /> */}
      {/* <OnBoarding /> */}
      <LocationHome />
    </View>
  );
};

export default App;
