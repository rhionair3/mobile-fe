import { createStackNavigator } from 'react-navigation';
import Intro from './Intro';
import Login from './Login';
import HomeScreen from '.././App';
import Registrasi from './Registrasi'; 

const AppNavigator = createStackNavigator({
  Intro: { screen: Intro },
  Login: { screen: Login },
  Registrasi: { screen: Registrasi },
  HomeScreen: { screen: HomeScreen }
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 });

export default AppNavigator;