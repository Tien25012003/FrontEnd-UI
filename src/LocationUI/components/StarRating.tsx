import {View, Text} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const StarRating = ({stars}: {stars: number}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {[...new Array(stars)].map((star, index) => {
        return (
          <View key={index}>
            <FontAwesome
              name="star"
              color={'#495c6e'}
              size={15}
              style={{marginLeft: 8}}
            />
          </View>
        );
      })}
    </View>
  );
};

export default StarRating;
