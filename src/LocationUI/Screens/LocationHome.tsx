import {
  View,
  Text,
  Button,
  Image,
  Pressable,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import LocationsComponent from '../components/LocationsComponent';
import BottomTab from '../components/BottomTab';
import Header from '../components/Header';
import {LOCATIONS} from '../data/Locations';
import {StackParams} from '../LocationNavigation/StackNavigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import Animated, {SharedTransition} from 'react-native-reanimated';
type Props = NativeStackScreenProps<StackParams, 'Home'>;
const LocationHome = ({navigation}: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const AnimatedImageBackground =
    Animated.createAnimatedComponent(ImageBackground);
  return (
    <View style={{flex: 1, backgroundColor: '#495c6e', paddingTop: 40}}>
      <Header />
      <View>
        <LocationsComponent
          setCurrentIndex={setCurrentIndex}
          navigation={navigation}
        />
      </View>
      <Text style={{color: '#fff', textAlign: 'center', marginTop: 20}}>
        {+currentIndex + 1}/{LOCATIONS.length}
      </Text>

      <BottomTab />
    </View>
  );
};

export default LocationHome;
