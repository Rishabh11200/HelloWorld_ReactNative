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

const FirstPage2 = props => {
  const [text, isChanged] = useState('');
  const [disText, onProceed] = useState('');
  const [textEnable, isEnabled] = useState(false);
  const onPressButton = text => {
    onProceed('Hey ' + text + '!, Welcome to Hello World application.');
    isEnabled(!textEnable);
  };
  return (
    <SafeAreaView style={styles.wholepage}>
      <View style={styles.firstcontainer}>
        <TextInput
          onChangeText={text => isChanged(text)}
          value={text}
          style={styles.firsttextinput}
          placeholder="Enter your name here."
        />
        <Button
          title="Proceed"
          color="black"
          onPress={() => onPressButton(text)}
        />
        {textEnable ? <Text style={styles.firsttext}>{disText}</Text> : null}

        <View style={styles.centerview}>
          <Text style={styles.secondtext}>Hello World!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

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

export default FirstPage2;
