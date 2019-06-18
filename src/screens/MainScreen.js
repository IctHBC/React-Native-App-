import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class MainScreen extends Component {
  _pushChatting(){
    this.props.navigator.push({
      screen: 'yuddomack.ChattingScreen', 
      title: 'Chatting', 
      passProps: {}, 
    });
  }
  render() {
    return (
      <View style={styles.container}> 
          <View style={styles.header}></View>
          <Image 
          style={styles.avatar}
           source={require('TestProject/images/profile.jpg')}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Byung Chan</Text>
              <Text style={styles.info}>Myongji University / Data Technology</Text>
              <Text style={styles.description}>할 일이 아무것도 없는 것은 즐겁지 않다. 할 일이 많은데 안 하고 있는 것이 즐거운 것이다.           메리 윌슨 리틀</Text>
              <TouchableOpacity onPressOut={this._pushChatting.bind(this)}
              style={styles.buttonContainer}>
                <Text>Chatting</Text>  
                
              </TouchableOpacity>                     
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});