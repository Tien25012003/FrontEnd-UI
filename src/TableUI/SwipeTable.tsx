import {View, Text, Dimensions, ScrollView} from 'react-native';
import React from 'react';
interface Props {
  tableHead: string[];
  widthArr: number[];
  tableData: string[][];
  height: number;
}
const {width, height} = Dimensions.get('screen');
const SwipeTable = ({tableHead, widthArr, tableData, height}: Props) => {
  const TABLE_HEIGHT = tableData.length * 30;
  return (
    <View style={{width, borderBottomWidth: 1, borderColor: '#d0d1d6'}}>
      <ScrollView horizontal>
        <View>
          <View style={{flexDirection: 'row'}}>
            {tableHead.map((head, index) => {
              return (
                <View
                  key={index}
                  style={{
                    //paddingHorizontal: 10,
                    //paddingVertical: 10,
                    backgroundColor: '#0d99ff',
                    borderLeftWidth: index === 0 ? 1 : 0,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                    width: widthArr[index],
                    alignItems: 'center',
                    height: 50,
                    borderColor: '#d0d1d6',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: '#000'}}>{head}</Text>
                </View>
              );
            })}
          </View>
          <ScrollView style={{height: height - 50}}>
            {tableData.map((table, index) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: index % 2 === 0 ? '#f7f7e7' : '#e2dfdb',
                  }}
                  key={index}>
                  {table.map((t, i) => {
                    return (
                      <View
                        style={{
                          width: widthArr[i],
                          borderBottomWidth: 1,
                          paddingVertical: 10,
                          borderRightWidth: 1,
                          borderLeftWidth: i === 0 ? 1 : 0,
                          borderColor: '#d0d1d6',
                          alignItems: 'center',
                        }}
                        key={i}>
                        <Text style={{color: '#000'}}>{t}</Text>
                      </View>
                    );
                  })}
                </View>
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default SwipeTable;
