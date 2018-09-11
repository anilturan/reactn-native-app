import React, { Component } from 'react';
import Logo from './Logo';
import Form from '../components/Login/Form';

export default class Login extends Component {
    render() {
        return (
            <View behavior="padding" style={styles.container}>
              <Logo/>
                <Form/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent:'center'
    },
    btnEye: {
        position: 'relative',
        // top: 55,
        // right: 28,
    },
    iconEye: {
        width: 25,
        height: 25,
        tintColor: 'rgba(0,0,0,0.2)'
    },
    logo: {
        // alignItems: 'center',
        width: 100,
        height: 80,
        marginLeft: 100,
        marginTop: 20,
        marginBottom: 20
        // backgroundColor: 'red'

    }
});