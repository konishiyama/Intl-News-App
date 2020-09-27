import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, SafeAreaView, View } from 'react-native';
import AppNavigator from './Navigation/AppNavigator';
import { Provider } from 'react-redux';
import store, { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
  //ProviderはReduxのstoreを使えるようにするもの
}
