import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import ListItem from '../components/ListItem';
import Constants from 'expo-constants';
import axios from 'axios';
import Loading from '../components/Loading';

const URL = `http://newsapi.org/v2/top-headlines?country=kr&apiKey=${Constants.manifest.extra.newsApiKey}`;

export default HomeScreen = ({ navigation }) => {
  // const { navigation } = props;　または上のように({navigation})とする
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() =>
              navigation.navigate('Article', {
                article: item,
              })
            }
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      {loading && <Loading />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
