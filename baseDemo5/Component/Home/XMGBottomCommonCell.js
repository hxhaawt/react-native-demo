// 首页中 下部分 通用 组件
// 如 购物中心的头部调用/ 猜你喜欢头部

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';


let bottomCommonCell = React.createClass({
    getDefaultProps() {
        return {
            leftIcon: '',   // 左边图标
            leftTitle: '',  // 左边文字
            rightTitle: ''  // 右边文字
        }
    },
    render() {
        return (
            <TouchableOpacity onPress={
                () => {alert('点击')}
            }>
                <View style={styles.container}>
                    {/* 左边 */}
                    <View style={styles.leftViewStyle}>
                        <Image
                            style={styles.leftImageStyle}
                            source={{uri: this.props.leftIcon}} />
                        <Text style={styles.leftTitleStyle}> {this.props.leftTitle} </Text>
                    </View>

                    {/* 右边 */}
                    <View style={styles.rightViewStyle}>
                        <Text style={styles.rightTitleStyle}> {this.props.rightTitle} </Text>
                        <Image
                            style={styles.rightImageStyle}
                            source={{uri: 'icon_cell_rightArrow'}}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
});


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 44,

        borderBottomWidth: 1,
        borderBottomColor: '#e8e8e8',

        backgroundColor: 'white'
    },

    // =======左边样式=====
    leftViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',

        marginLeft: 8
    },
    leftImageStyle: {
        width: 23,
        height: 23,
        marginLeft: 5
    },
    leftTitleStyle: {
        fontSize: 17
    },

    // =====右边样式=====
    rightViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightImageStyle: {
        marginLeft: 5,
        marginRight: 8,
        width: 8,
        height: 14
    },
    rightTitleStyle: {
        color: 'gray'
    }

});

// 输出组件
// module.exports = mainView;

export {
    bottomCommonCell as BottomCommonCell
};


