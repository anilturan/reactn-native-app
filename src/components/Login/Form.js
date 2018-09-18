import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Button, AsyncStorage } from 'react-native';
import UserInput from './UserInput';
import usernameImg from '../../images/username.png';
import passwordImg from '../../images/password.png';
import logo from '../../images/basecamp-logo.png';
import eyeImg from '../../images/eye_black.png';
// import CustomButton from './ButtonSubmit';
import { get } from '../../httpRequest';
// import { localAdd, localGet } from '../../localStorage';
// import { LOGIN } from '../../constans/constans';
// import { bindActionCreators } from 'redux';
import { updateUser } from '../../actions/users-actions';
// import user from '../../reducers/user/UserReducer';
import { connect } from 'react-redux';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPass: true,
            press: false,
            password: '',
            name: '',
            isLogin: false,
            data: ''
        }
        this.showPass = this.showPass.bind(this);
        this.onPress = this.onPress.bind(this);
    }
    // async componentDidMount() {
    //     const intervalMillis = 3000;

    //     //save something first
    //     await AsyncStorage.setItem("test1", 'true');

    //     setInterval(async () => {
    //         console.log("Inside setInterval");
    //         const value = await AsyncStorage.getItem('test1').then(value => this.setState({ isLogin: value }));
    //         console.log(value);
    //     }, intervalMillis);
    // }

    showPass() {
        this.state.press === false
            ? this.setState({ showPass: false, press: true })
            : this.setState({ showPass: true, press: false });

    }
 
    // saveData(userName, password) {
    //     const asd = {
    //         name: userName,
    //         password: password
    //     }
    //     localAdd('login', 'anil')
    //     console.log(userName, password);
    //     localGet('login')
    // }
    signUp(result) {
        if (result.Result.EMail == this.state.name && result.Result.Password == this.state.password) {
            // this.saveData(result.Result.EMail, result.Result.Password)
            // this.props.updateUser('aa','123');
            this.setState({
                isLogin: true,
                name: '',
                password: '',
            })
            this.onLogin(this.state.isLogin);
        }
    }
    onLogin(isLogin) {
        console.log(isLogin, 'isLogin');
        isLogin ? this.props.navigation.navigate('Home') : this.props.navigation.navigate('Login');
    }
    response = (result, error) => {
        if (result.Result !== null) {
            this.signUp(result)
        }
        else if (error != null) {
            console.log(error);
        }
        else {
            alert('Kullanıcı adı veya şifre yanlış')
        }
    }
    bind = () => {
        get(`url`, this.response)
    }
    onPress() {
        this.bind();
    }
    onBlur(e) {

        switch (e.target.name) {
            case 'name': this.setState({ name: e.target.value }); break;
            case 'password': this.setState({ password: e.target.value }); break;
        }
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


// const mapStateToProps = (state, props) => {
//     return {
//         name: state.userReducer.userName,
//         password: state.userReducer.password
//     }
// }

const mapStateToProps = (state) => {
    console.log('Mapstateprps', state);
    return state;
}

const mapDispatchToProps = (dispatch) => {
    console.log(dispatch, updateUser, 'mapDispatch');
    return {
        updateUser
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form);



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
    },
    btnEye: {
        position: 'absolute',
        zIndex: 99,
        width: 25,
        height: 25,
        right: 50,
        top: 180,
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