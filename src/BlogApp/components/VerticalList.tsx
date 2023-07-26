import {View, StyleSheet} from 'react-native';
import React from 'react';
import Title from './Title';
import FlatCard from './FlatCard';

const VerticalList = ({title, data}: {title: string; data: any[]}) => {
  return (
    <View style={styles.container}>
      <Title style={{marginLeft: 10}}>{title}</Title>
      {data.map(item => (
        <FlatCard item={item} key={item.id} />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
});
export default VerticalList;
