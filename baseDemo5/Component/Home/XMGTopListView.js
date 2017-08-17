
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    Platform,
    TouchableOpacity
} from 'react-native';

// 导入外部系统模块，计算系统值
const Dimensions = require('Dimensions');
const {width, height} = Dimensions.get('window');

// 全局变量
let cols = 5;   // 列数
// 每个 cell 的宽高
let cellWidth = Platform.OS === 'ios' ? 70: 60;
let cellHeight = 70;

// 每个 cell 间的 margin-left
let vMargin = (width - cols * cellWidth) / (cols + 1);


let topListView = React.createClass({

    getDefaultProps() {
        return {
            dataArr: []
        }
    },
    getInitialState() {
        // 创建数据源
        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        return {
            dataSource: ds.cloneWithRows(this.props.dataArr)
        };
    },
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.contentViewStyle}
                scrollEnabled={false}
            />
        );
    },

    // 具体 cell 实现， 函数的参数上部会自动传递过来
    renderRow(rowData) {
        return (
            <TouchableOpacity
                onPress={ () => {alert("点击")}}
            >
                <View style={styles.ItemViewStyle}>
                    <Image
                        source={{uri: rowData.image}}
                        style={styles.itemImageStyle}
                    />
                    <Text style={styles.itemTitleStyle}>
                        {rowData.title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    },


});


const styles = StyleSheet.create({

    // 设置 listView 的样式
    contentViewStyle: {
        flexDirection: 'row',
        //
        flexWrap: 'wrap',

        width: width
    },

    // 设置 listView 每个 item 的样式
    ItemViewStyle: {
        width: cellWidth,
        height: cellHeight,
        // 水平和垂直居中
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: vMargin,
        // backgroundColor: 'red'
    },

    // 每个item 中图片的样式
    itemImageStyle: {
        width: 52,
        height: 52
    },
    itemTitleStyle: {
        fontSize: Platform.OS === 'ios' ? 14: 12,
        color: 'gray'
    }

});

// 输出组件
// module.exports = mainView;

export {
    topListView as TopListView
};


