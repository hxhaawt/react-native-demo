// 首页 中间 下半部分 组件
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

// 导入 外部 自己的组件
import { CommonView } from './XMGMiddleCommonView';

// 导入外部 json 数据
const home_D4 = require('../../LocalData/XMG_Home_D4.json');


let middleBottomView = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/* 上部分 */}
                <View style={styles.topViewStyle}>

                </View>

                {/* 下部分 */}
                <View style={styles.bottomViewStyle}>
                    {this.renderBottomItem()}
                </View>
            </View>
        );
    },

    // 下部分的 所有子组件
    renderBottomItem() {
        // 组件 数组
        let itemArr = [];

        // 拿到子组件数据
        let dataArr = home_D4.data, data;

        for (let i=0; i<dataArr.length; i++) {
            // 取出单个数据
            data = dataArr[i];

            itemArr.push(
                <CommonView
                    key={i}
                    title={data.maintitle}
                    subTitle={data.deputytitle}
                    rightIcon={this.dealImageUrl(data.imageurl)}
                    titleColor={data.typeface_color}

                />
            );
        }

        return itemArr;
    },

    // 处理图像尺寸，得到具体的图像url
    dealImageUrl(url) {
        // 返回正常图片 url
        if (url.search('w.h') === -1) {
            return url;
        }else {
            return url.replace('w.h', '120.90');
        }
    }
});


const styles = StyleSheet.create({
    container: {
        marginTop: 15
    },

    // 上部分 样式
    topViewStyle: {

    },

    // 下部分样式
    bottomViewStyle: {
        //  主轴方向
        flexDirection: 'row',
        flexWrap: 'wrap'
    }

});

// 输出组件
// module.exports = mainView;

export {
    middleBottomView as MiddleBottomView
};

