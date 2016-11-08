'use strict';

import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import style from './style';
import Button from './components/Button';
import TextInputWrapper from './components/TextInputWrapper';

export default class MainModule extends Component {
    render() {
        return(
            <View>
                <View style={style.headerContainer}>
                    <Text style={style.headerTitle}>Calculator</Text>
                    <Text style={style.headerSubtitle}>Standard</Text>
                </View>
                <TextInputWrapper defaultValue=""/>
                <Button buttonStyle={style.buttonStyle} text="Button text"/>
            </View>
        );
    }
}