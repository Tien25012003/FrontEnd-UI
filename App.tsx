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
import StackNavigation from './src/LocationUI/LocationNavigation/StackNavigation';
import Home from './src/BlogApp/Home';
import FabButton from './src/FabButton/FabButton';
import GradientPicker from './src/GradientPicker/GradientPicker';
import GradientPicker_Index from './src/GradientPicker/GradientPicker_Index';
import CounterScreen from './src/ReduxCore/Counter/CounterScreen';
import {Provider} from 'react-redux';
import {store} from './src/ReduxCore/Counter/Store/store';
import LinearBar from './src/Animation/LinearBar';
import PhotoApp from './src/Animation/PhotoApp/PhotoApp';
import BallGesture from './src/BallGesture/BallGesture';
import SpecialGift from './src/SpecialGift/SpecialGift';
import Gallery from './src/Gallery/Gallery';

const {width, height} = Dimensions.get('screen');
const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <StatusBar
          backgroundColor={'transparent'}
          barStyle={'dark-content'}
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
        {/* <StackNavigation /> */}
        {/* <Home /> */}
        {/* <FabButton /> */}
        {/* <GradientPicker /> */}
        {/* <GradientPicker_Index /> */}
        {/* <CounterScreen /> */}
        {/* <LinearBar /> */}
        {/* <PhotoApp /> */}
        {/* <BallGesture /> */}
        {/* <Gallery /> */}
        <SpecialGift />
      </View>
    </Provider>
  );
};

export default App;
