import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import CustomButton from '../components/CustomButton';

export default class JoinScreen extends Component{
  _pushLogin(){
    this.props.navigator.push({
      screen: 'yuddomack.LoginScreen',
      title: 'Login', 
      passProps: {},
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.title}>
          <Text style={{fontSize:35,paddingBottom:20}}>회원가입</Text>
          <View style={{width:"100%",borderBottomWidth:0.5,borderColor:'#444'}} />
        </View>
        <View style={styles.content}>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
            <Text style={{fontSize:15}}>아이디</Text>
            <TextInput style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
            <Text style={{fontSize:15}}>비밀번호</Text>
            <TextInput style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
            <Text style={{fontSize:15}}>비밀번호 확인</Text>
            <TextInput style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
          </View>
        </View>
        <View style={styles.footer}>
        <CustomButton
          buttonColor={'#023e73'}
          title={'가입'}
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
    backgroundColor: 'white',
  },
  header: {
    width:'100%',
    height:'5%',
    
  },
  title: {
    width:'100%',
    height:'18%',
    justifyContent: 'center',
    
  },
  content: {
    flex: 1,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:30,
   
  },
  footer: {
    width:'100%',
    height:'20%',
    
  },
});