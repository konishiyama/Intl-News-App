import React, { useState, useEffect, useCallback } from 'react';
import {
  RefreshControl,
  StyleSheet,
  FlatList,
  SafeAreaView,
  View,
} from 'react-native';
import ListItem from '../components/ListItem';
import Constants from 'expo-constants';
import axios from 'axios';
import Loading from '../components/Loading';
import Header from '../components/Header';

const URLUS = `http://newsapi.org/v2/top-headlines?sources=cnn&apiKey=${Constants.manifest.extra.newsApiKey}`;

export default Japan = ({ navigation }) => {
  // const { navigation } = props;　または上のように({navigation})とする。要するに分割代入で、渡ってきたオブジェクトが（）に入れた段階で変数として定義される。この理屈についてはUdemyJavascriptのレッスン48の4：30あたりを見る
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchArticles();
  }, [refreshing]);

  const fetchArticles = async () => {
    // setLoading(true);
    try {
      const response = await axios.get(URLUS);
      // console.error(response);
      setArticles(response.data.articles);
    } catch (error) {
      console.error(error);
    }
    // setLoading(false);
  };

  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() =>
              navigation.navigate('Article', {
                article: item, //このarticle:itemがNavigate先のArticleスクリーンにroute.paramsで渡される
              })
            }
          />
        )}
        style={styles.news}
        keyExtractor={(item, index) => index.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      {loading && <Loading />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
