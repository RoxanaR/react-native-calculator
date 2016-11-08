'use strict';

import React, { Component } from 'react';
import { TextInput } from 'react-native';

const TextInputWrapper = (props) => {
    return(
        <TextInput
            defaultValue={props.defaultValue}
        />
    );
};

export const TextInputWrapper;