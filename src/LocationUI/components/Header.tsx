import {View, Text, Pressable, Dimensions} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
const Header = () => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
      }}>
      <AntDesign name="search1" color={'#fff'} size={20} />
      <Text style={{color: '#fff', fontSize: 20}}>INTERESTS</Text>
      <Pressable onPress={() => {}} hitSlop={30}>
        <Feather name="x" color={'#fff'} size={25} />
      </Pressable>
    </View>
  );
};

export default Header;
