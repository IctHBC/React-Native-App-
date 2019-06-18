import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import CustomButton from '../components/CustomButton';

export default class StartScreen extends Component {
  _pushJoin(){
    this.props.navigator.push({
      screen: 'yuddomack.JoinScreen', // unique ID registered with Navigation.registerScreen
      title: 'Sign Up', // navigation bar title of the pushed screen (optional)
      passProps: {}, // Object that will be passed as props to the pushed screen (optional)
    });
  }

  _pushLogin(){
    this.props.navigator.push({
      screen: 'yuddomack.LoginScreen', // unique ID registered with Navigation.registerScreen
      title: 'Login', // navigation bar title of the pushed screen (optional)
      passProps: {}, // Object that will be passed as props to the pushed screen (optional)
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.title}>
          <Text style={{fontSize:35,color:'white'}}>Meeting app,{'\n'}새로운 사람과의 만남</Text>
        </View>
        <View style={styles.content}>
          <Image
            style={{height:'100%',width:'100%',resizeMode:'contain'}}
            source={require('TestProject/images/img.jpg')}/>
        </View>
        <View style={styles.footer}>
          <CustomButton
            buttonColor={'#444'}
            title={'회원가입'}
            onPress={this._pushJoin.bind(this)}/>
          <CustomButton
          buttonColor={'#023e73'}
          title={'로그인'}
          onPress={this._pushLogin.bind(this)}/>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'black',
  },
  header: {
    width:'100%',
    height:'5%',
    //backgroundColor: '#ff9a9a',
  },
  title: {
    width:'100%',
    height:'18%',
    justifyContent: 'center',
    //backgroundColor: '#9aa9ff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:30,
    //backgroundColor: '#d6ca1a',
  },
  footer: {
    width:'100%',
    height:'20%',
    //backgroundColor: '#1ad657',
  },
});