
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

const Dimensions = require('Dimensions');
const {width} = Dimensions.get('window');

let mineHeaderView = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*  上部分 */}
                {this.renderTopView()}

                {/*  下部分 */}
                {this.renderBottomView()}
            </View>
        );
    },

    // 上部分 view
    renderTopView() {
        return (
            <View style={styles.topViewStyle}>
                {/* 左边图片 */}
                <Image
                    source={{uri: 'see'}}
                    style={styles.topLeftImageStyle}
                />

                {/* 中间内容 */}
                <View style={styles.topContentStyle}>
                    <Text
                        style={styles.topMiddleTitleStyle}
                    >
                        小码哥电商
                    </Text>
                    <Image
                        source={{uri: 'avatar_vip'}}
                        style={styles.topMiddleImageStyle}
                    />
                </View>

                {/*  右边箭头 */}
                <Image
                    source={{uri: 'icon_cell_rightarrow'}}
                    style={styles.topRightImageStyle}
                />
            </View>
        );
    },

    // 下部分 view
    renderBottomView() {
        return (
            <View style={styles.bottomViewStyle}>
                {this.renderBottomItem()}
            </View>
        );
    },
    renderBottomItem() {
        // 数组
        let itemArr = [];
        let data = [
                {'number': '100', 'title': '码哥券'},
                {'number': '12', 'title': '评价'},
                {'number': '50', 'title': '收藏'}
                ];

        for (let i=0; i<data.length; i++){
            let item = data[i];
            itemArr.push(
                <TouchableOpacity key={i}>
                    <View
                        style={styles.bottomItemStyle}
                    >
                        <Text style={{color: 'white'}}> { item.number } </Text>
                        <Text style={{color: 'white'}}> { item.title } </Text>
                    </View>
                </TouchableOpacity>
            );
        }

        return itemArr;
    }
});


const styles = StyleSheet.create({

    container: {
        height: 200,

        backgroundColor: 'rgba(255, 96, 0, 1.0)',
    },

    //  ===== 顶部 上边样式 ======
    topViewStyle: {
        flexDirection: 'row',
        marginTop: 80,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    // 上边 左图片样式
    topLeftImageStyle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 3,
        borderColor: 'rgba(0, 0, 0, 0.2)'
    },
    // 上边 中间内容样式
    topContentStyle: {
        flexDirection: 'row',
        width: width * 0.60
    },
    topMiddleTitleStyle: {
        fontSize: 18,
        color: 'white',
        fontWeight: '800'
    },
    topMiddleImageStyle: {
        width: 18,
        height: 18
    },
    topRightImageStyle: {
        width: 8,
        height: 14,
        marginRight: 8
    },

    // 下部样式
    bottomViewStyle: {
        flexDirection: 'row',

        // 定位
        position: 'absolute',
        bottom: 0
    },
    bottomItemStyle: {
        justifyContent: 'center',
        alignItems: 'center',

        width: (width / 3) + 1,
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',

        borderRightWidth: 1,
        borderRightColor: 'white'
    }

});

// 输出组件
// module.exports = mainView;

export {
    mineHeaderView as MineHeaderView
};


