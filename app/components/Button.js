'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    PropTypes
} from 'react-native';

const Button = (props) => {
    return (
        <View style={props.buttonStyle} elevation={5}>
            <Text>{props.text}</Text>
        </View>
    );
};

Button.propTypes = {
    text: React.PropTypes.string
};

export default Button;