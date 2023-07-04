import {View, Text, Button} from 'react-native';
import React from 'react';
import {useBearStore} from './BearStore';

const ZustandTest = () => {
  const count = useBearStore(state => state.count);
  const increment = useBearStore(state => state.increment);
  const incrementByNumber = useBearStore(state => state.incrementByNumber);
  const arrayCount = useBearStore(state => state.arrayCount);
  const stateStore = useBearStore.getState();
  const dataAPI = useBearStore(state => state.dataAPI);
  const fetchAPI = useBearStore(state => state.fetchAPI);
  const nested = useBearStore(state => state.nested);
  const immerFunction = useBearStore(state => state.immerFunction);
  const immerZustand = useBearStore(state => state.immerZustand);
  //console.log(nested);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{count}</Text>
      <Button title="Increase" onPress={increment} />
      <Button title="Increase by number" onPress={() => incrementByNumber(2)} />
      <Button
        title="Fetch API"
        onPress={() => fetchAPI('https://dummyjson.com/products')}
      />
      <Text>{nested.nestValue.nestCount}</Text>
      <Button title="Immer" onPress={immerFunction} />
      <Button title="Immmer with Zustand" onPress={immerZustand} />
    </View>
  );
};

export default ZustandTest;
function compare(oldTreats: number, newTreats: number): boolean {
  throw new Error('Function not implemented.');
}
