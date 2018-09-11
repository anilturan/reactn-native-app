import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class VirtualPos extends Component {
  render() {
    return (

      <View>
        <Text style={styles.welcome}>Sanal Pos</Text>
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
