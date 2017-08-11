
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

// ScrollView  测试

const Dimensions = require('Dimensions');
// 屏幕宽
const width = Dimensions.get('window').width;

class demoView extends Component {

    constructor(props){
        super(props);
    }

    // 视图会在水平方向上排成一行
    // horizontal = {true}
    // 隐藏水平滚动条
    // showsHorizontalScrollIndicator = {false}
    // 能否滚动
    // scrollEnabled = { false }
    // 分页功能在 视图水平时可以调用
    // pagingEnabled = {true}

    render() {
        return (
            <ScrollView
                horizontal = {true}
                showsHorizontalScrollIndicator = {false}
                pagingEnabled = {true}
                scrollEnabled = {false}
            >
                {this.renderChildView()}
            </ScrollView>
        );
    }

    renderChildView() {
        let allChild = [];
        let colors = ['red', 'green', 'blue', 'yellow', 'gray', 'purple'];

        for(let i=0; i<colors.length; i++){
            allChild.push(
                <View
                    key={i}
                    style={{ backgroundColor: colors[i],
                                width: width, height: 100
                        }}
                >
                    <Text>{ i }</Text>
                </View>
            );
        }
        // 返回数据
        return allChild;
    }
}




const styles = StyleSheet.create({


});

// 导出类
// node.js 写法
// module.exports = loginView;

// ES6 写法
export { demoView  as DemoView};




