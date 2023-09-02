import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
const TitleHeader = ({iconName}: {iconName: string}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTxt}>Popular Nature Photos</Text>
      <AntDesign name={iconName} size={20} color={'#000'} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  headerTxt: {
    color: '#000',
    fontWeight: '700',
    fontSize: 18,
  },
});
export default TitleHeader;
