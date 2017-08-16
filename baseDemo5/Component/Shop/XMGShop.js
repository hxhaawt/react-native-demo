
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';


let shopView = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    这是--shop
                </Text>
            </View>
        );
    }
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});

// 输出组件
// module.exports = mainView;

export {
    shopView as ShopView
};

