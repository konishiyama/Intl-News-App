import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, SafeAreaView, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Japan from '../screens/Japan';
import Korea from '../screens/Korea';
import China from '../screens/China';
import US from '../screens/US';
import HomeScreen from '../screens/HomeScreen';
import Header from '../components/Header';

const TopTab = createMaterialTopTabNavigator();

export default TopTabs = () => {
  return (
    <>
      <View style={styles.header}>
        <Header />
      </View>
      <TopTab.Navigator>
        <TopTab.Screen name="Korea" component={HomeScreen} />
        <TopTab.Screen name="Japan" component={Japan} />
        <TopTab.Screen name="China" component={China} />
        <TopTab.Screen name="US" component={US} />
      </TopTab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: 'black',
    width: '100%',
    height: '12%',
    // marginTop: 10,
  },
});
