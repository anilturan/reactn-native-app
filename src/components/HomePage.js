import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { localGet } from '../localStorage';
import { LOGIN } from '../constans/constans';


export default class HomePage extends Component {
  constructor() {
    super();
    // localGet(USER_TOKEN).catch = (error) => { alert(error) }
    // this.state = {
    //   myKey: ''
    // }
    // this.getKey();
  }
  // async getKey() {
  //   try {
  //     const value = await AsyncStorage.getItem('@MySuperStore:key');
  //     this.setState({ myKey: value });
  //   } catch (error) {
  //     console.log("Error retrieving data" + error);
  //   }
  // }
  render() {
    return (

      <View>
        {/* <Text style={styles.welcome}>Home Page {this.state.myKey}</Text> */}

        <Text style={styles.welcome}>Welcome ! </Text>
        {/* <Text style={styles.instructions}>To get started, edit App.js</Text> */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
