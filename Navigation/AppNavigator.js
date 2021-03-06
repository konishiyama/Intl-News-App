import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import TopTabs from '../Navigation/TopTabNavigator';
import ArticleScreen from '../screens/ArticleScreen';
import ClipScreen from '../screens/ClipScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerBackTitleVisible: false, headerTitle: false }}
    >
      <Stack.Screen
        name="Home"
        component={TopTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  );
};

const ClipStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerBackTitleVisible: false, headerTitle: false }}
    >
      <Stack.Screen name="Clip" component={ClipScreen} />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  );
};

const screenOption = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName;
    switch (route.name) {
      case 'Home':
        iconName = 'home';
        break;
      case 'Clip':
        iconName = 'bookmark';
        break;
    }
    return <FontAwesome name={iconName} size={size} color={color} />;
  },
});

export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOption}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Clip" component={ClipStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
