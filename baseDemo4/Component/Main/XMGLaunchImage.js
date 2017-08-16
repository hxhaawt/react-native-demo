
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

// 导入外部组件
import { MainView } from './XMGMain'


let launchView = React.createClass({
    render() {
        return (
            <Image
                source={{uri: 'launchimage'}}
                style={styles.container}
            />
        );
    },

    componentDidMount() {
        // 定时 隔2s切换到 主页
        setTimeout( () => {
            // 页面的切换
            this.props.navigator.replace({
                component: MainView     // 具体路由组件
            });
        }, 1000 );
    }
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});

// 输出组件
// module.exports = mainView;

export {
    launchView as LaunchView
};


