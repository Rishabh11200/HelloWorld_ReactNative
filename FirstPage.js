import React, {useState, Component} from 'react';
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
    this.state = {
      input: '',
      disInput: '',
      isEnabled: false,
    };
    this.onPressButton = this.onPressButton.bind(this);
    // console.log("Constructor called!");
  }
  // static getDerivedStateFromProps(props,state){
  //   console.log(props + state.input);
  //   return true
  // }

  handleChange = text => {
    this.setState({input: text});
  };
  onPressButton = text => {
    this.setState({
      disInput:
        'Hello ' + this.state.input + '!, Welcome to Hello World application.',
      isEnabled: !this.state.isEnabled,
    });
  };
  render() {
    const {input} = this.state;
    // console.log("Render is called!");
    return (
      <SafeAreaView style={styles.wholepage}>
        <View style={styles.firstcontainer}>
          <TextInput
            onChangeText={this.handleChange}
            value={input}
            style={styles.firsttextinput}
            placeholder="Enter your name here."
          />
          <Button title="Proceed" color="black" onPress={this.onPressButton} />
          {this.state.isEnabled ? (
            <Text style={styles.firsttext}>{this.state.disInput}</Text>
          ) : null}

          <View style={styles.centerview}>
            <Text style={styles.secondtext}>Hello World!</Text>
          </View>
        </View>
      </SafeAreaView>
    );
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
    color: 'cyan',
    textAlign: 'center',
    backgroundColor: 'black',
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
