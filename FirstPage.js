import React, { useState,Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  View,
  Text,
  Alert,
} from 'react-native';

export default class FirstPage extends React.Component {

   constructor(props) {  
        super(props);  
        this.state = {input: ''};
        this.state = {disInput: ''};  
    }  

    handleChange = (text) => {
      this.setState({ input : text })
    }
    onPressButton = (text) => {
      this.setState({ disInput: this.state.input + ', Welcome to Hello World application.' })
        
    }
    render(){
      const {input} = this.state
      return (
        <SafeAreaView style={styles.wholepage}>
          <View style={styles.firstcontainer}>  
          <TextInput
            onChangeText={this.handleChange}
            value={input}
            style={styles.firsttextinput}
            placeholder="Enter your name here."
            />
            <Button
            title = "Proceed"
            color = "black"
            onPress={ this.onPressButton }
            />
            <Text style={styles.firsttext}>
              {this.state.disInput}
            </Text>
            <View style={styles.centerview}>
              <Text style={styles.secondtext}>
              Hello World!
              </Text>
            </View>
            
          </View>
        </SafeAreaView>
      )
    }
}


const styles = StyleSheet.create({
  wholepage: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  firstcontainer: {
    height: '100%',
    paddingTop: 24,
  },
  firsttextinput: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
  },
  firsttext: {
    marginTop: 10,
    fontSize: 20,
    color: '#3700B3',
    textAlign: 'center',
  },
  centerview: {
    justifyContent: 'center',
    alignItem: 'center',
    margin: 120,
  },
  secondtext: {
    fontSize: 25,
    color: 'black',
  },
});
