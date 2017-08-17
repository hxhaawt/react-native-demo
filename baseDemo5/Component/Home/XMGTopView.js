
// home 中顶部可以左右滑动 组件

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    ListView,
    TouchableOpacity
} from 'react-native';

// 导入 自己的组件
import { TopListView } from './XMGTopListView'

// 导入外部 json 数据
const topMenu = require('../../LocalData/TopMenu.json');

// 导入外部系统模块，计算系统值
const Dimensions = require('Dimensions');
const {width, height} = Dimensions.get('window');



let topView = React.createClass({

    getInitialState() {
        return {
            activePage: 0
        };
    },

    render() {
        return (
            <View style={styles.container}>
                {/*  内容部分 */}
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={this.onAnimationEnd}
                >
                    {this.renderScrollItem()}
                </ScrollView>

                {/*  页码部分 */}
                <View style={styles.indicatorViewStyle}>
                    {this.renderIndicator()}
                </View>
            </View>
        );
    },


    // 内容部分 主要内容
    renderScrollItem() {
        // 组件数组
        let itemArr = [];
        // 数据数组
        let dataArr = topMenu.data;

        // 遍历创建组件
        for (let i=0; i<dataArr.length; i++){
            itemArr.push(
                <TopListView
                    key={i}
                    dataArr={dataArr[i]}
                />
            );
        }

        // 返回组件数组
        return itemArr;
    },

    // 页码部分内容--指示器
    renderIndicator() {
        // 指示器数组
        let indicatorArr = [], style;

        // 遍历创建组件
        for (let i=0; i<2; i++){
            // 设置圆点样式
            style = (i === this.state.activePage) ? {color: 'orange'} : {color: 'gray'};
            indicatorArr.push(
                <Text
                    key={i}
                    style={[{fontSize: 25}, style]}
                >
                    &bull;
                </Text>
            );
        }

        // 返回组件
        return indicatorArr;
    },

    // 处理 一帧滚动结束 设置当前页的值
    onAnimationEnd(e) {
        // 求出水平方向的偏移量
        let offsetX = e.nativeEvent.contentOffset.x;
        // 求出当前页数
        let tmpPage = Math.floor( offsetX / width );

        // 更新状态机中的 currentPage 重新绘制UI
        this.setState({
            activePage: tmpPage
        });
    },


});


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },

    // =======页码样式=======
    indicatorViewStyle: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
});

// 输出组件
// module.exports = mainView;

export {
    topView as TopView
};

