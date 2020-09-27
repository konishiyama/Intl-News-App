import React from 'react';

import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const Header = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.title}>Global News</Text> */}
      <View style={styles.containerHeader}>
        <View style={styles.textContainer}></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  containerHeader: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Header;
