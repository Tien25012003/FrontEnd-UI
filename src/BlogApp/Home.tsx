import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import newApi from './api/newApi';
import SearchBar from './components/SearchBar';
import BreakingNews from './components/BreakingNews';
import FeaturedNews from './components/FeaturedNews';
import data from './data/fakeData';
import TechNews from './components/TechNews';
import PoliticalNews from './components/PoliticalNews';
import EntertainmentNews from './components/EntertainmentNews';
import NewsDetail from './components/NewsDetail';
import NewsList from './components/NewsList';
const Home = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [featuredNews, setFeaturedNews] = useState({});
  // const [breakingNews, setBreakingNews] = useState<INews[]>([]);
  // const [politicalNews, setPoliticalNews] = useState<INews[]>([]);
  // const [techNews, setTechNews] = useState<INews[]>([]);
  // const [entertainmentNews, setEntertainmentNews] = useState<INews[]>([]);
  // const qty = 5;
  // const filterFeatured = (data: INews[]) => {
  //   return [...data].filter(item => item.featured === 'on').reverse()[0];
  // };
  // const filterByCategory = (data: INews[], category: string) => {
  //   const result = [...data]
  //     .filter(item => item.category === category)
  //     .reverse()
  //     .splice(0, qty);
  //   if (result.length) {
  //     result.push({type: 'viewMore', category: category, id: category});
  //   }
  //   //aconsole.log(result);
  //   return result;
  // };
  // const filterMultipleNews = async () => {
  //   const allNews = await newApi.getAll();
  //   setFeaturedNews(filterFeatured(allNews));
  //   setBreakingNews(filterByCategory(allNews, 'breaking-news'));
  //   setPoliticalNews(filterByCategory(allNews, 'political'));
  //   setEntertainmentNews(filterByCategory(allNews, 'entertainment'));
  //   setTechNews(filterByCategory(allNews, 'tech'));
  // };
  // useEffect(() => {
  //   // call back end server;
  //   filterMultipleNews().then(() => {
  //     setIsLoading(false);
  //   });
  // }, []);
  // return (
  //   <View style={{flex: 1, backgroundColor: '#f7f3f3'}}>
  //     {isLoading ? (
  //       <Image
  //         source={require('../BlogApp/assets/splash.png')}
  //         style={{width: '100%', height: '100%'}}
  //         resizeMode="contain"
  //       />
  //     ) : (
  //       <View style={{paddingTop: 30}}>
  //         <ScrollView>
  //           <SearchBar />
  //           <FeaturedNews item={featuredNews} />
  //           <BreakingNews data={breakingNews} />
  //           <PoliticalNews data={politicalNews} />
  //           <TechNews data={techNews} />
  //           <EntertainmentNews data={entertainmentNews} />
  //         </ScrollView>
  //       </View>
  //     )}
  //   </View>
  // );
  // return <NewsDetail />;
  return <NewsList />;
};

export default Home;
