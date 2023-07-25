import {View, Pressable} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
const TABS = [
  {
    icon_type: Entypo,
    icon: 'location-pin',
  },
  {
    icon_type: MaterialCommunityIcons,
    icon: 'map-marker-plus',
  },
  {
    icon_type: Ionicons,
    icon: 'person-outline',
  },
];
const BottomTab = () => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        paddingVertical: 20,
        flexDirection: 'row',
      }}>
      {TABS.map((tab, index) => {
        return (
          <Pressable
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            key={index}
            hitSlop={30}
            android_ripple={{
              color: 'grey',
              borderless: true,
              radius: 30,
              foreground: false,
            }}>
            <tab.icon_type name={tab.icon} size={30} color={'#fff'} />
          </Pressable>
        );
      })}
    </View>
  );
};

export default BottomTab;
