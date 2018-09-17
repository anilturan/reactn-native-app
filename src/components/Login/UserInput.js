import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import { StyleSheet, View, TextInput, Image } from 'react-native';

export default class UserInput extends Component {
    render() {
         const {  ...otherProps } = this.props
        return (
            <View style={styles.inputWrapper} >
                <Image source={this.props.source} style={styles.inlineImg} />
                <TextInput
                    style={styles.input}
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.secureTextEntry}
                    autoCorrect={this.props.autoCorrect}
                    autoCapitalize={this.props.autoCapitalize}
                    returnKeyType={this.props.returnKeyType}
                    placeholderTextColor="white"
                    underlineColorAndroid="transparent"
                    {...otherProps}
                />
                 {/* <Image source={this.props.source} style={styles.rightImg} /> */}
            </View>
        );
    }
}

UserInput.propTypes = {
    source: PropTypes.number.isRequired,
    placeholder: PropTypes.string.isRequired,
    secureTextEntry: PropTypes.bool,
    autoCorrect: PropTypes.bool,
    autoCapitalize: PropTypes.string,
    placeholderTextColor: PropTypes.string,
    returnKeyType: PropTypes.string
}

const DEVICE_WIDTH = Dimensions.get('window').width;
// const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    input: {

        backgroundColor: '#ddd',

        height: 40,

        paddingLeft: 45,
        borderRadius: 20,
        color: '#ffffff'
    },
    inputWrapper: {
        marginBottom: 10,
        width: DEVICE_WIDTH - 40,
        height: 40
    },
    inlineImg: {
        position: 'absolute',
        zIndex: 99,
        width: 22,
        height: 22,
        left: 10,
        top: 9,
    },
  
});
