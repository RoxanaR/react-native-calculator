/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MainModule from './app/index';

export default class Calculator extends Component {
  render() {
    return (
      <MainModule/>
    );
  }
}

AppRegistry.registerComponent('Calculator', () => Calculator);
