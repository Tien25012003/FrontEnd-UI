import {View, Text, Button, TextInput, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {MMKVLoader} from 'react-native-mmkv-storage';
export const MMKV = new MMKVLoader().initialize();
const MMKVStorage = () => {
  const [text, setText] = useState('');
  const [userName, setUserName] = useState('');
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
      }}>
      <ScrollView>
        <Text>MMKVStorage</Text>
        <TextInput
          defaultValue={text}
          onChangeText={setText}
          style={{borderWidth: 1, width: 200, marginBottom: 10}}
        />
        <Button
          title="Set String"
          onPress={() => {
            console.log('Set Data');
            MMKV.setString('Name', text);
          }}
        />
        <Button
          title="Get String"
          onPress={() => {
            console.log('Get Data');
            const data = MMKV.getString('Name');
            setUserName(data);
          }}
        />
        {/* <Button
          title="Set String Async"
          onPress={async () => {
            try {
              const name = await MMKV.setStringAsync('UserName', 'phuongtien');
              setUserName(name);
            } catch (e) {}
          }}
        /> */}
        <Button
          title="User Name"
          onPress={() => {
            console.log(userName);
          }}
        />
      </ScrollView>
    </View>
  );
};

export default MMKVStorage;
