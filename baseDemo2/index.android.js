
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';

// 导入测试不同的功能
// import { LoginView } from './my-source/QQ-Login-View';

// import { LoginView } from './my-source/component-lifecycle';

// const LoginView = require('./my-source/QQ-Login-View');

// import { DemoView } from './my-source/ScrollView-demo';

import { DemoView } from './my-source/ScrollView-playflow';


export default class baseDemo2 extends Component {
    render() {
        return (
            <DemoView />
        );
    }
}

AppRegistry.registerComponent('baseDemo2', () => baseDemo2);

