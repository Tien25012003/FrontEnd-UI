import {View, Text, Button} from 'react-native';
import React from 'react';
import {increase, decrease, increaseNumber} from './Actions';
import {useSelector, useDispatch} from 'react-redux';
import fetchData from './Middleware';
const CounterScreen = () => {
  const counter = useSelector((state: any) => state.CounterReducer);
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{counter}</Text>
      <Button
        onPress={() => {
          //console.log(store.getState());
          console.log(counter);
        }}
        title="Get State"
      />
      <Button onPress={() => dispatch(increase())} title="Increase" />
      <Button onPress={() => dispatch(decrease())} title="Decrease" />
      <Button
        onPress={() => dispatch(increaseNumber(2))}
        title="Increase number"
      />
      <Button
        title="Fetch data"
        onPress={() => {
          // const a = await fetchData();
          // console.log(a.limit);
          dispatch(fetchData());
          //fetchData();
        }}
      />
    </View>
  );
};

export default CounterScreen;
