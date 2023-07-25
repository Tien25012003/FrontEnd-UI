import {
  View,
  Text,
  Pressable,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import LocationsComponent from '../components/LocationsComponent';
import BottomTab from '../components/BottomTab';
import Header from '../components/Header';
import {LOCATIONS} from '../data/Locations';
const {width, height} = Dimensions.get('screen');
const LocationHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <View style={{flex: 1, backgroundColor: '#495c6e', paddingTop: 40}}>
      <Header />
      <View>
        <LocationsComponent setCurrentIndex={setCurrentIndex} />
      </View>
      <Text style={{color: '#fff', textAlign: 'center', marginTop: 20}}>
        {+currentIndex + 1}/{LOCATIONS.length}
      </Text>
      <BottomTab />
    </View>
  );
};

export default LocationHome;
