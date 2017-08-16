
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity
} from 'react-native';


// ==========================================================
//
// ==========================================================


const Dimensions = require('Dimensions');
// 屏幕宽
const {width} = Dimensions.get('window');



// 用 ES5 写法
let demoView = React.createClass({

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    mess
                </Text>
            </View>
        );
    },


});


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

// 导出类
// node.js 写法
// module.exports = loginView;

// ES6 写法
export { demoView  as MessView};





