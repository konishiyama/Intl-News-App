import { combineReducers } from 'redux';
import { createStore } from 'redux';
import userReducer from './reducers/user';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';

const rootReducer = combineReducers({
  user: userReducer,
  //この中に他の保持したい情報のReducerをツリーとして定義していく。
});

//persistはstateの保存をスマホのストレージに行うためのもの

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'], //whitelistはstoreのうち保存するものを指定するためのもの
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools());
//composeWithDevToolsを第2引数に渡すことでDebugger使えるようにしている。
export const persistor = persistStore(store);
export default store;
