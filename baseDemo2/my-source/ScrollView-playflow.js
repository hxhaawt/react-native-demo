
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Alert
} from 'react-native';

// import TimerMixin from 'react-timer-mixin';

// 引入计时器类库
// var TimerMixin = require('react-timer-mixin');

// 引入json数据
// var imageData = require('../data.json');


// ===============================================
//      ScrollView  轮播图
// ===============================================


const Dimensions = require('Dimensions');
// 屏幕宽
const width = Dimensions.get('window').width;


class demoView extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <View>

                <Text>233</Text>
                <ScrollView>
                    {this.renderAllImage()}
                </ScrollView>
            </View>
        );
    }

    renderAllImage() {

    }
}


const styles = StyleSheet.create({

    container: {
        alignItems: 'center'
    }

});

// 导出类
// node.js 写法
// module.exports = loginView;

// ES6 写法
export { demoView  as DemoView};




