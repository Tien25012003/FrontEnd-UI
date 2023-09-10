import React, {useState} from 'react';
import {SENTENCES} from './data_sentences';
import HeartPage from './HeartPage';
import {Text, View, Dimensions} from 'react-native';
import Firework from './Firework';
const {height} = Dimensions.get('screen');
export interface HeartListProps {
  width: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}
const HeartList = ({width, currentPage, setCurrentPage}: HeartListProps) => {
  return (
    <>
      <View
        style={{
          position: 'absolute',
          top: 40,
          width: width,
          height: height * 0.26,
          alignItems: 'center',
        }}>
        <Firework
          width={width / 2}
          height={height * 0.26}
          page={currentPage}
          color="#b46ef8"
        />
      </View>
      {SENTENCES.map((sentence, index) => {
        return (
          <HeartPage
            width={width * 0.8}
            key={index}
            sentence={sentence}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            currentIndex={index}
          />
        );
      }).reverse()}
    </>
  );
};

export default HeartList;
