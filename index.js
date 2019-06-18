import {name as appName} from './app.json';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './src/screens';
import { registerComponents } from './src/components';

registerScreens();
registerComponents();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'yuddomack.StartScreen', // unique ID registered with Navigation.registerScreen
    title: 'Welcome', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {
      navBarHidden: false,
    }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },
  drawer: {
    right: {
      screen: 'yuddomack.MenuScreen'
    }
  }
});