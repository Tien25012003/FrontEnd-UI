import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import BlockCard from './BlockCard';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search here..." placeholderTextColor={'grey'} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
});
export default SearchBar;
