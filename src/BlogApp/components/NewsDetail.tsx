import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';
import WidthScreen from '../constant/WidthScreen';
import HeightScreen from '../constant/HeightScreen';

const NewsDetail = () => {
  return (
    <ScrollView>
      <Image source={require('../assets/splash.png')} style={styles.image} />
      <View style={{paddingHorizontal: 10}}>
        <Text style={styles.title}>News Detail</Text>
        <Text style={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quod
          perferendis, itaque veritatis sunt eos dolores dolor fugit hic aperiam
          harum debitis ipsam sit pariatur dignissimos reprehenderit a
          distinctio fuga.
        </Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  image: {
    width: WidthScreen,
    height: HeightScreen * 0.4,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: '#4e4d4d',
  },
});
export default NewsDetail;
