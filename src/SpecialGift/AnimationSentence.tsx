import {Text, StyleSheet} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';

const AnimationSentence = ({
  sentence,
  currentPage,
  currentIndex,
}: {
  sentence: string;
  currentPage: number;
  currentIndex: number;
}) => {
  let txtArray = useMemo(
    () => (sentence.includes(' ') ? sentence.split(' ') : sentence.split('')),
    [sentence],
  );
  const [finalSentence, setFinalSentence] = useState<string[]>([]);
  const [index, setIndex] = useState(-1);
  const handleTxt = () => {
    setTimeout(() => {
      if (index < txtArray.length && index >= 0) {
        setFinalSentence(prev => [...prev, txtArray[index]]);
        setIndex(index + 1);
      }
    }, 100);
  };
  useEffect(() => {
    handleTxt();
  }, [index]);

  useEffect(() => {
    if (currentPage === currentIndex) {
      setIndex(0);
    }
  }, [currentPage]);

  return <Text style={styles.txt}>{finalSentence.join(' ')}</Text>;
};
const styles = StyleSheet.create({
  txt: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 30,
    textAlign: 'center',
    letterSpacing: 1,
    lineHeight: 30,
  },
});
export default AnimationSentence;
