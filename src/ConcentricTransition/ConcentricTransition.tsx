import {
  View,
  Text,
  StatusBar,
  Dimensions,
  StyleSheet,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Page from './Page';
const {width, height} = Dimensions.get('screen');
export const DATA = [
  {
    image: './assets/Saly-1.png',
    color: '#3fbff9',
  },
  {
    image: './assets/Saly-2.png',
    color: '#ff1888',
  },
  {
    image: './assets/Saly-3.png',
    color: '#41ff94',
  },
];
const ConcentricTransition = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const onPress = () => {
    if (currentPage >= 2) {
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent
      />
      {DATA.map((data, index) => {
        return (
          <Page
            index={index}
            color={data.color}
            key={index}
            current={currentPage}
          />
        );
      })}
      <Pressable
        style={[
          styles.circle,
          {
            backgroundColor:
              currentPage === 2 ? DATA[0].color : DATA[currentPage + 1].color,
          },
        ]}
        onPress={onPress}>
        <Entypo name="chevron-right" color={'grey'} size={40} />
      </Pressable>
    </View>
  );
};
export const styles = StyleSheet.create({
  circle: {
    position: 'absolute',
    bottom: height * 0.2,
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ConcentricTransition;
