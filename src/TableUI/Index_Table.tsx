import {View, Text, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import SwipeTable from './SwipeTable';
const {height} = Dimensions.get('screen');
const Index_Table = () => {
  const [tableData, setTableData] = useState<string[][]>([]);
  useEffect(() => {
    const getArray = () => {
      const tmp = [];
      for (let i = 0; i < 30; i += 1) {
        const rowData = [];
        for (let j = 0; j < 9; j += 1) {
          rowData.push(`${i}${j}`);
        }
        tmp.push(rowData);
      }
      setTableData(tmp);
    };
    getArray();
  }, []);
  //console.log(tableData[0]);
  return (
    <View>
      <SwipeTable
        tableHead={[
          'Head',
          'Head2',
          'Head3',
          'Head4',
          'Head5',
          'Head6',
          'Head7',
          'Head8',
          'Head9',
        ]}
        widthArr={[40, 60, 80, 100, 120, 140, 160, 180, 200]}
        tableData={tableData}
        height={400}
        // tableData={[
        //   ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
        //   ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
        // ]}
      />
    </View>
  );
};

export default Index_Table;
