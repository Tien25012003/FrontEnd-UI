import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import BoxChat from './BoxChat';
const MESSAGES = [
  {
    side: 'left',
    avartar:
      'https://st3.depositphotos.com/1037987/15097/i/600/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg',
    image: '',
    text: 'That is good to hear',
    time: 'October 13, 2014 11:13:00',
    emoji: '',
  },
  {
    side: 'left',
    avartar:
      'https://st3.depositphotos.com/1037987/15097/i/600/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg',
    image: '',
    text: 'Check out that cool picture I took',
    time: 'October 13, 2014 11:13:01',
    emoji: '',
  },
  {
    side: 'right',
    avartar: '',
    image:
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    text: '',
    time: 'October 13, 2014 11:13:03',
    emoji: '',
  },
  {
    side: 'right',
    avartar: '',
    image: '',
    text: 'That sounds exciting! Where are you going?',
    time: 'October 13, 2014 11:13:05',
    emoji: '',
  },
];

const Chat = () => {
  const [itemPress, setItemPress] = useState(-1);
  const [arrayInfo, setArrayInfo] = useState([...MESSAGES]);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 50,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Entypo name="chevron-small-left" size={30} color={'#0096FF'} />
          <Text style={[styles.text, {color: '#0096FF'}]}>Animations</Text>
        </View>
        <Text style={[styles.text, {marginLeft: 20}]}>Messages</Text>
      </View>
      <ScrollView style={{flex: 1}}>
        {MESSAGES.map((m, i) => {
          return (
            <BoxChat
              text={m.text}
              key={i}
              side={m.side}
              avatar={m.avartar}
              image={m.image}
              index={i}
              itemPress={itemPress}
              setItemPress={setItemPress}
              arrayInfo={arrayInfo}
              setArrayInfo={setArrayInfo}
              emoji={m.emoji}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontSize: 16,
  },
});
export default Chat;
