import { Navigation } from 'react-native-navigation';

import StartScreen from './StartScreen';
import LoginScreen from './LoginScreen';
import JoinScreen from './JoinScreen';
import MenuScreen from './MenuScreen';
import ProfileScreen from './ProfileScreen';
import MainScreen from './MainScreen';
import ChattingScreen from './ChattingScreen';

export function registerScreens() {
  Navigation.registerComponent('yuddomack.StartScreen', () => StartScreen);
  Navigation.registerComponent('yuddomack.LoginScreen', () => LoginScreen);
  Navigation.registerComponent('yuddomack.JoinScreen', () => JoinScreen);
  Navigation.registerComponent('yuddomack.MenuScreen', () => MenuScreen);
  Navigation.registerComponent('yuddomack.ProfileScreen', () => ProfileScreen);
  Navigation.registerComponent('yuddomack.MainScreen', () => MainScreen);
  Navigation.registerComponent('yuddomack.ChattingScreen', () => ChattingScreen);
}
