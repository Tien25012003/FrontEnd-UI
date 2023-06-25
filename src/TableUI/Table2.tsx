import {View, Text, Dimensions} from 'react-native';
import React, {useState} from 'react';
const {width, height} = Dimensions.get('screen');
interface Props {
  tableHead: Array<string>;
  tableTitle: Array<string>;
  tableData: Array<Array<string>>;
}
const Table2 = ({tableHead, tableData, tableTitle}: Props) => {
  const TotalItem = tableHead.length;
  return (
    <View style={{width, marginTop: 10}}>
      <Text>Table2</Text>
      <View style={{width, flexDirection: 'row'}}>
        {tableHead.map((t, i) => {
          return (
            <View
              key={i}
              style={{
                width: width / TotalItem,
                borderTopWidth: 1,
                borderLeftWidth: i === 0 ? 1 : 0,
                borderRightWidth: 1,
                paddingVertical: 10,
                paddingHorizontal: 5,
                backgroundColor: '#f1f8ff',
                borderColor: '#0d99ff',
                borderBottomWidth: 1,
              }}>
              <Text style={{fontSize: 15, color: '#000'}}>{t}</Text>
            </View>
          );
        })}
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{width: width / TotalItem}}>
          {tableTitle.map((title, i) => {
            return (
              <View
                key={i}
                style={{
                  width: width / TotalItem,
                  paddingVertical: 10,
                  borderLeftWidth: 1,
                  borderColor: '#0d99ff',
                  borderBottomWidth: 1,
                }}>
                <Text style={{color: '#000', fontSize: 15}}>{title}</Text>
              </View>
            );
          })}
        </View>
        <View style={{width: width - width / TotalItem}}>
          <View style={{width: '100%'}}>
            {tableData.map((data, index) => {
              return (
                <View
                  key={index}
                  style={{
                    backgroundColor: 'white',
                    flexDirection: 'row',
                  }}>
                  {data.map((d, i) => {
                    return (
                      <View
                        style={{
                          width: width / TotalItem,
                          borderRightWidth: 1,
                          paddingVertical: 10,
                          borderColor: '#0d99ff',
                          borderLeftWidth: i === 0 ? 1 : 0,
                          borderBottomWidth: 1,
                        }}
                        key={i}>
                        <Text style={{color: '#000', fontSize: 15}}>{d}</Text>
                      </View>
                    );
                  })}
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Table2;
