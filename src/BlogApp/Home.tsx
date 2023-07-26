import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import SearchBar from './components/SearchBar';
import BreakingNews from './components/BreakingNews';
import FeaturedNews from './components/FeaturedNews';
import data from './data/fakeData';
import TechNews from './components/TechNews';
import PoliticalNews from './components/PoliticalNews';
import EntertainmentNews from './components/EntertainmentNews';
const Home = () => {
  const breakingNews = data.filter(item => item.category === 'breaking-news');
  const techNews = data.filter(item => item.category === 'tech');
  const politicalNews = data.filter(item => item.category === 'political');
  const entertainmentNews = data.filter(
    item => item.category === 'entertainment',
  );
  return (
    <View style={{flex: 1, backgroundColor: '#f7f3f3', paddingTop: 40}}>
      <ScrollView>
        <SearchBar />
        <FeaturedNews item={breakingNews[0]} />
        <BreakingNews data={breakingNews} />
        <PoliticalNews data={politicalNews} />
        <TechNews data={techNews} />
        <EntertainmentNews data={entertainmentNews} />
      </ScrollView>
    </View>
  );
};

export default Home;
