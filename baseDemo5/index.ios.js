
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';

// 引入外部模块
import { MainView } from './Component/Main/XMGMain';
// import { LaunchView } from './Component/Main/XMGLaunchImage';

class demoView extends Component {
    render() {
        return (
            <MainView/>
        );
    }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('baseDemo4', () => demoView);

