import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView, View, TouchableOpacity, Image, Button, TextInput } from 'react-native';
import UserInput from './UserInput';
import usernameImg from '../../images/username.png';
import passwordImg from '../../images/password.png';
import logo from '../../images/basecamp-logo.png';
import eyeImg from '../../images/eye_black.png';
// import CustomButton from './ButtonSubmit';
import { get } from '../../httpRequest';


export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPass: true,
            press: false,
            password: '',
            name: '',
            isLogin: false,
        }
        this.showPass = this.showPass.bind(this);
        this.onPress = this.onPress.bind(this);
        this.textClear = this.textClear.bind(this);
        // this.isLoginControl = this.isLoginControl.bind(this);

    }

    showPass() {
        this.state.press === false
            ? this.setState({ showPass: false, press: true })
            : this.setState({ showPass: true, press: false });
    }
    textClear = () => {
        // this.refs.usernameRef.nodeValue=''
        // this.usernameRef.clear();
        let textInputusername = this.refs["textInputusername"];
        textInputusername.clear;
    }
    response = (result, error) => {
        if (result != null) {
            console.log(result.Result);
            if (result.Result.EMail == this.state.name && result.Result.Password == this.state.password) {
                this.setState({
                    isLogin: true,
                    name: '',
                    password: '',
                });
                if (this.state.isLogin) {
                    this.props.navigation.navigate('Home')
                }
                else {
                    this.props.navigation.navigate('Login')
                }
            }
            else {
                alert('Kullanıcı adı veya şifre yanlış')
            }
        }
        else if (error != null) {
            console.log(error);
        }
        else {
            console.log('Bir hata oluştu.');
        }
    }
    bind = () => {
        get(`http://b2bapi.telpa.com/api/GmAssistant/Login?eMail=${this.state.name}&password=${this.state.password}&culture=tr_TR`, this.response)
    }
    onPress() {
        // const islogin = this.state.password == '123' && this.state.name == 'anil'
        // islogin ? this.props.navigation.navigate('Home') : this.props.navigation.navigate('Login');
        this.bind();
        // if (this.state.isLogin) {
        //     this.props.navigation.navigate('Home')
        //     this.setState({
        //         name: '',
        //         password: '',
        //     });
        // }
        // else {
        //     this.props.navigation.navigate('Login')
        // }


    }

    // func = () => {

    //     if (this.state.isLogin) {
    //         this.props.navigation.navigate('Home')
    //         this.setState({
    //             name: '',
    //             password: '',
    //         });
    //     }
    //     else {
    //         this.props.navigation.navigate('Login')
    //     }
    // }
    // isLoginControl() {
    //     alert(isLogin, "control")
    //     // isLogin ? this.props.navigation.navigate('Home') : this.props.navigation.navigate('Login');
    //     if (isLogin) {
    //         this.props.navigation.navigate('Home')
    //         this.setState({
    //             name: '',
    //             password: '',
    //         });
    //         alert(this.state.password)
    //     }
    //     else {
    //         alert(this.state.password)

    //         this.props.navigation.navigate('Login')
    //     }
    // }
    onBlur(e) {

        switch (e.target.name) {
            case 'name': this.setState({ name: e.target.value }); break;
            case 'password': this.setState({ password: e.target.value }); break;
        }
    }
    componentWillUnmount() {
        this.setState({
            name: '',
            password: '',
        });
        // alert(this.state.password)
    }
    render() {
        const { name, password } = this.state
        const { isLoading, onSignupLinkPress, onLoginPress } = this.props
        const isValid = name !== '' && password !== ''
        return (
            <View behavior="padding" style={styles.container}>
                <Image source={logo} style={styles.logo} />
                <UserInput
                    source={usernameImg}
                    placeholder="Name"
                    autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false}
                    value={this.state.name}
                    onChangeText={(value) => this.setState({ name: value })
                    }
                />
                <UserInput
                    source={passwordImg}
                    secureTextEntry={this.state.showPass}
                    placeholder="Password"
                    returnKeyType={'done'}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    value={this.state.password}
                    onChangeText={(value) => this.setState({ password: value })}
                />
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.btnEye}
                    onPress={this.showPass}>
                    <Image source={eyeImg} style={styles.iconEye} />
                </TouchableOpacity>
                <Button
                    title={'Login'}
                    onPress={this.bind}
                />
                {/* <CustomButton
                    onPress={() => onLoginPress(name, password)}
                    isEnabled={isValid}
                    isLoading={isLoading}
                    buttonStyle={styles.loginButton}
                    textStyle={styles.loginButtonText}
                    text={'Log In'}
                /> */}
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
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