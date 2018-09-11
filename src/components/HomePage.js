import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class HomePage extends Component {
  render() {
    return (

      <View>
        <Text style={styles.welcome}>Home Page</Text>
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
