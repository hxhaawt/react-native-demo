/**
 * Created by hxh on 2017/8/14.
 *  模板 9 宫格式
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';

// 导入测试 json 数据
let data = require('../data-ListView2.json');

let Dimensions = require('Dimensions');
let {width} = Dimensions.get('window');
// 列数
let cols = 3;
// 每个cell 的宽度
let cellWidth = 100;
let vMargin = (width - cellWidth * cols) / ( cols + 1);
let hMargin = 25;

// ES5 写法
let baseDemo3 = React.createClass({

    // 设置默认和固定值
    getDefaultProps(){

    },

    // 初始化一些可以变化的值
    getInitialState(){
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows(data)
        };
    },

    render(){
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={ this.renderRow}
                contentContainerStyle={styles.ListViewStyle}
            />
        );
    },

    // 单独的cell,就是每个view的结构
    renderRow(rowData, sectionID, rowID, heightLightRow){
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={ () => alert(rowID)}
            >
                <View style={styles.innerViewStyle}>
                    <Image
                        style={styles.iconStyle}
                        source={{uri: rowData.icon}}
                    />
                    <Text>
                        {rowData.title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }


});

const styles = StyleSheet.create({

    ListViewStyle:{
        // flex: 1,
        flexDirection: 'row',
        // 自动 换行
        flexWrap: 'wrap'
    },

    iconStyle: {
        width: 80,
        height: 80
    },

    innerViewStyle: {
        width: cellWidth,
        height: cellWidth,
        marginLeft: vMargin,
        marginTop: hMargin,

        //  居中
        alignItems: 'center'
    }
});


export {baseDemo3 as DemoView};


























