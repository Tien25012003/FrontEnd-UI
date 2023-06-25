import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import Animated, {FadeInDown, BounceInDown} from 'react-native-reanimated';
interface Info {
  side: string;
  avartar: string;
  image: string;
  text: string;
  time: string;
  emoji: string;
}
interface Props {
  text: string;
  avatar: string;
  side: string;
  image: string;
  index: number;
  itemPress: number;
  setItemPress: Function;
  arrayInfo: Info[];
  setArrayInfo: Function;
  emoji: string;
}

const EMOJI = [
  '\uD83D\uDE00',
  '\u2764',
  '\uD83D\uDC4D',
  '\uD83D\uDE02',
  '\uD83D\uDE0D',
  '\uD83D\uDE24',
];
export default function BoxChat({
  text,
  avatar,
  side,
  image,
  index,
  itemPress,
  setItemPress,
  arrayInfo,
  setArrayInfo,
  emoji,
}: Props) {
  const onPress = () => {
    setItemPress(index);
  };
  const onChooseEmoji = (emoji: string) => {
    setItemPress(-1);
    const tmp = [...arrayInfo];
    tmp[index].emoji = emoji;
    setArrayInfo([...tmp]);
  };
  const removeEmoji = () => {
    const tmp = [...arrayInfo];
    tmp[index].emoji = '';
    setArrayInfo([...tmp]);
  };
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: emoji === '' ? 10 : 20,
        justifyContent: side === 'left' ? 'flex-start' : 'flex-end',
      }}>
      {avatar !== '' && (
        <Image
          style={{width: 20, height: 20, borderRadius: 50, marginRight: 10}}
          source={{
            uri: avatar,
          }}
        />
      )}
      <Pressable onLongPress={onPress}>
        {image === '' ? (
          <View
            style={{
              backgroundColor: side === 'left' ? '#d0d1d6' : '#0080fe',
              paddingHorizontal: 10,
              paddingVertical: 8,
              borderRadius: 15,
            }}>
            <Text style={{color: side === 'left' ? 'black' : '#fff'}}>
              {text}
            </Text>
          </View>
        ) : (
          <Image
            source={{uri: image}}
            style={{width: 140, height: 180, borderRadius: 20}}
          />
        )}
        {emoji !== '' && (
          <Pressable
            style={{
              position: 'absolute',
              bottom: -20,
              backgroundColor: '#e2dfdb',
              padding: 6,
              borderRadius: 100,
              right: 0,
            }}
            onPress={removeEmoji}>
            <Text style={{fontSize: 10, color: '#000'}}>{emoji}</Text>
          </Pressable>
        )}
      </Pressable>

      {index === itemPress && (
        <View
          style={{
            position: 'absolute',
            bottom: 25,
            marginLeft: side === 'left' ? 30 : 0,
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              paddingHorizontal: 10,
              paddingVertical: 5,
              flexDirection: 'row',
              borderRadius: 20,
              elevation: 10,
            }}>
            {EMOJI.map((e, i) => {
              return (
                <AnimatedPressable
                  key={i}
                  onPress={() => onChooseEmoji(e)}
                  entering={FadeInDown.delay(i * 100)}>
                  <Text
                    style={{marginHorizontal: 5, fontSize: 20, color: '#000'}}>
                    {e}
                  </Text>
                </AnimatedPressable>
              );
            })}
          </View>
        </View>
      )}
    </View>
  );
}
