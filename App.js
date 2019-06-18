import React from 'react';

import ChattingScreen from './components/ChattingScreen';

import {
    Router,
    Scene, 
} from 'react-native-router-flux';

import {
    Platform
} from 'react-native';

class App extends React.Component{
    render(){
         return(
            <Router>
                <Scene key="root" style={{paddingTop: Platform.OS == 'android' ? 64 : 54 }}>
                    <Scene key="chat" component={ChattingScreen} title='Chat'/>
                </Scene>
            </Router>
         )
    }
}

export default App;