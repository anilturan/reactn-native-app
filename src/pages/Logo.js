import React, { Component } from 'react';
import logo from '../../images/basecamp-logo.png';

export default class Logo extends Component {
    render(){
        return(
            <Image source={logo} style={styles.logo} /> 
        )
    }
};
