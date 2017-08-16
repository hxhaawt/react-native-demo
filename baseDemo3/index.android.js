
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';

// 导入测试不同的功能

// 模板 9 宫格式
// import { DemoView } from './my-source/ListView-9gongge';

// import { DemoView } from './my-source/ListView-demo2';

// import { DemoView } from './my-source/TabBar-andriod-demo';



import { MainView } from './component/XMG-Main'

export default class baseDemo3 extends Component {
    render() {
        return (
            <MainView/>
        );
    }
}

AppRegistry.registerComponent('baseDemo2', () => baseDemo3);

