import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Menu from './DrawerScreen/DrawerScreen';
// import { connect } from 'react-redux';
// import { updateUser } from '../actions/users-actions';
// import { createStore } from 'redux';

reducer = () => {
  return 'state';
}

// const store = createStore(reducer)

 export default class Home extends Component {
  // constructor(props) {
  //   super(props);

  // }
  // onUpdateUser() {
  //   this.props.dispatch(updateUser('Anıl Turan'))
  //   // console.log();
  // }
  render() {
    return (
      <Menu />
      // <View>
      //   <Text style={styles.welcome}>Welcome {this.props.name}! </Text>
      //   <Text style={styles.instructions}>To get started, edit App.js</Text>


      //   <Button
      //     onPress={() => this.onUpdateUser}
      //     title="Log out"
      //   />
      // </View>
    );
  }
}


// mapStateToProps = (state) => {
//   return {
//     name: state.name
//   }
// }



//  export default connect(mapStateToProps)(Home);





const styles = StyleSheet.create({
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
