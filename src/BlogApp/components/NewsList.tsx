import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React from 'react';

const NewsList = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.categoryTitle}>Category</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#4e4d4d',
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#fff',
  },
});
export default NewsList;
