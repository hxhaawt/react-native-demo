// home 主页  中间部分 组件
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
    TouchableOpacity
} from 'react-native';


// 导入 外部 自己的组件
import { CommonView } from './XMGMiddleCommonView';

// 导入外部 josn 数据
const topMiddleData = require('../../LocalData/HomeTopMiddleLeft.json');

// 导入外部系统模块，计算系统值
const Dimensions = require('Dimensions');
const {width, height} = Dimensions.get('window');


let middleView = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/* 左边 */}
                {this.renderLeftView()}
                {/* 右边 */}
                <View>
                    {this.renderRightView()}
                </View>
            </View>
        );
    },

    // 左边 view
    renderLeftView() {

        // 取具体数据
        let data = topMiddleData.dataLeft[0];

        return (
            <TouchableOpacity
                onPress={ () => {alert("点击")}}
            >
                <View style={styles.leftViewStyle}>
                    <Image
                        style={styles.leftImageStyle}
                        source={{uri: data.img1}}
                    />
                    <Image
                        style={styles.leftImageStyle}
                        source={{uri: data.img2}}
                    />
                    <Text style={{color: 'gray'}}> {data.title} </Text>
                    <View style={styles.subTitleViewStyle}>
                        <Text style={styles.priceStyle}> {data.price} </Text>
                        <Text style={styles.saleStyle}> {data.sale} </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    },

    // 右边 view
    renderRightView() {
        // 数组 数组
        let itemArr = [];
        // 取具体数据
        let rightData = topMiddleData.dataRight;

        for (let i=0; i<rightData.length; i++){
            // 单个数据
            let data = rightData[i];

            itemArr.push(
                <CommonView
                    key={i}
                    title={data.title}
                    subTitle={data.subTitle}
                    rightIcon={data.rightImage}
                    titleColor={data.titleColor}

                />
            );
        }

        return itemArr;
    },

});


const styles = StyleSheet.create({
    container: {
        // 改变主轴方向
        flexDirection: 'row',

        marginTop: 15
    },
    // 左边整体样式
    leftViewStyle: {
        // 垂直和水平居中
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.5,
        height: 119,
        backgroundColor: 'white',
        marginRight: 1
    },
    // 左边内部 图片样式
    leftImageStyle: {
        width: 80,
        height: 30,

        // 内容模式
        resizeMode: 'contain'
    },

    // 左边内部 文字 样式
    subTitleViewStyle: {
        flexDirection: 'row',
        margin: 5
    },
    priceStyle: {
        color: 'gray',
        marginRight: 5
    },
    saleStyle: {
        color: 'orange',
        backgroundColor:"yellow"
    }




});

// 输出组件
// module.exports = mainView;

export {
    middleView as MiddleView
};


