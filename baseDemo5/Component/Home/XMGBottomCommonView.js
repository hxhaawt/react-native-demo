// 首页中 下部分 通用 组件


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';


let shopCenterView = React.createClass({
    render() {
        return (
            <View style={styles.container}>

            </View>
        );
    }
});


const styles = StyleSheet.create({
    container: {
        marginTop: 15
    },

});

// 输出组件
// module.exports = mainView;

export {
    shopCenterView as ShopCenterView
};


