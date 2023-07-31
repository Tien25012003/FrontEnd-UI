import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const ViewMore = ({style}: {style?: any}) => {
  return (
    <Pressable style={[styles.container, style]} onPress={() => {}}>
      <Text style={styles.text}>ViewMore</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    //width: '100%',
    height: 50,
    backgroundColor: '#fff',
    marginHorizontal: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#7a74e0',
  },
});
export default ViewMore;
