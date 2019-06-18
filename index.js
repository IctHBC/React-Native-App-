import {name as appName} from './app.json';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './src/screens';
import { registerComponents } from './src/components';

registerScreens();
registerComponents();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'yuddomack.StartScreen', 
    title: 'Welcome', 
    navigatorStyle: {
      navBarHidden: false,
    },
    navigatorButtons: {} 
  },
  drawer: {
    right: {
      screen: 'yuddomack.MenuScreen'
    }
  }
});