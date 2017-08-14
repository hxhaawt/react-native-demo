
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
//      ListView demo
// ==========================================================


const Dimensions = require('Dimensions');
// 屏幕宽
const {width} = Dimensions.get('window');

// 引入json数据 这个是数组形式
let data = require('../data-ListView.json');

// 用 ES5 写法
let demoView = React.createClass({
    // 初始化
    getInitialState() {
        // 设置数据源
        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        //  设置返回数据
        return {
            dataSource: ds.cloneWithRows(data)
        };
    },

    // initialListSize=""
    // onEndReachedThreshold=""
    // pageSize=""
    // scrollRenderAheadDistance=""
    // stickyHeaderIndices=""

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}

            />
        );
    },

    // 返回具体的 cell
    renderRow(rowData, sectionID, rowID, heightLightRow) {
        // console.log(rowData, sectionID, rowID, heightLightRow);
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={ () => alert('点击了第' + rowID + '行')}

            >
                <View style={styles.cellViewStyle}>
                    {/* 左边的图片*/}
                    <Image
                        source={{uri: rowData.icon}}
                        style={styles.leftImageStyle}
                    />
                    {/* 右边的信息显示*/}
                    <View style={styles.rightViewStyle}>
                        {/* 上边的信息 */}
                        <Text style={styles.topTitleStyle}>{rowData.title} </Text>
                        {/* 下边的信息 --价格*/}
                        <Text style={styles.bottomTitleStyle}>￥{rowData.money} </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
});


const styles = StyleSheet.create({

    container: {
        marginTop: 30,
        // alignItems: 'center'
    },

    cellViewStyle: {

        flexDirection: 'row',

        padding: 10,

        borderBottomWidth: 0.5,
        borderBottomColor: '#e8e8e8',

        backgroundColor: '#fff'
    },

    leftImageStyle: {
        marginRight: 10,
        width: 60,
        height: 60
    },

    rightViewStyle: {
        // 主轴对齐
        justifyContent: 'center'
    },

    topTitleStyle: {
        width: width * 0.7,
        marginBottom: 10,

        textAlign: 'left',
        color: 'gray',
        // backgroundColor: 'red',
        fontSize: 15,
    },
    bottomTitleStyle: {
        color: 'red',
    }

});

// 导出类
// node.js 写法
// module.exports = loginView;

// ES6 写法
export { demoView  as DemoView};




