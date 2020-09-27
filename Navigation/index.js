import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Tweets from '../screens/Tweets';
import TweetNReplies from '../screens/TweetNReplies';
import Media from '../screens/Media';
import Likes from '../screens/Likes';
import Header from '../components/Header';

const TabNavigator = createMaterialTopTabNavigator(
  {
    Tweets: {
      screen: Tweets,
    },
    TweetsNReplies: {
      screen: TweetNReplies,
    },
    Media: {
      screen: Media,
    },
    Likes: {
      screen: Likes,
    },
  },
  {
    tabBarComponent: Header,
    tabBarOptions: {
      activeTintColor: '#1BA1F3',
      inactiveTintColor: '#000',
    },
    initialRouteName: 'Tweets',
  }
);

const Navigation = createAppContainer(TabNavigator);

export default Navigation;
