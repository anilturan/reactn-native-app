import React, { Component } from 'react';
import Form from './src/components/Login/Form';
import { Platform, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/components/Home';
import { createStackNavigator } from 'react-navigation';
// import { NavigationView } from 'react-navigation';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
     <RootStack/>
      // <View style={styles.container}>
      //   {/* <Form /> */}
      //   {/* <HomeScreen/> */}
      //   {/* <Text style={styles.welcome}>Welcome Anıl!</Text>
      //   <Text style={styles.instructions}>To get started, edit App.js</Text>
      //   <Text style={styles.instructions}>{instructions}</Text> */}
      // </View>
    );
  }
}
// createStackNavigator
const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      // navigationOptions: { header: null }
    },
    Login: {
      screen: Form,
      navigationOptions: { header: null }
    }
  },
  {
    initialRouteName: 'Login',
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
