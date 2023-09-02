import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
const CenterImage = ({
  width,
  height,
  imgSrc,
  label,
  subLabel,
}: {
  width: number;
  height: number;
  imgSrc: any;
  label: string;
  subLabel: string;
}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image source={imgSrc} style={{width, height, borderRadius: 20}} />
      <View style={[styles.label, {width: width - 50}]}>
        <Text style={styles.txt}>{label}</Text>
      </View>
      <View style={[styles.label, {width: width - 90, paddingVertical: 10}]}>
        <Text style={styles.txt} adjustsFontSizeToFit numberOfLines={1}>
          {subLabel}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  label: {
    backgroundColor: '#fff',
    marginTop: 20,
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    color: '#000',
    fontWeight: '700',
    fontSize: 18,
  },
});
export default CenterImage;
