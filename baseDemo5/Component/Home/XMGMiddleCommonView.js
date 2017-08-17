// 首页 中 公共组件
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

// 导入外部系统模块，计算系统值
const Dimensions = require('Dimensions');
const {width, height} = Dimensions.get('window');


let commonView = React.createClass({

    getDefaultProps() {
        return {
            title: '',      // 标题
            subTitle: '',  // 下标题
            rightIcon: '',  // 右边图片
            titleColor: ''  // 标题颜色
        }
    },
    render() {
        return (
            <TouchableOpacity
                onPress={ () => {alert("点击")}}
            >
                <View style={styles.container}>
                    {/* 左边 */}
                    <View>
                        <Text style={[{color: this.props.titleColor,} ,styles.leftTitleStyle]}> {this.props.title} </Text>
                        <Text style={styles.leftSubTitleStyle}> {this.props.subTitle} </Text>
                    </View>

                    {/* 右边 */}
                    <Image
                        style={styles.rightImageStyle}
                        source={{uri: this.props.rightIcon}}/>
                </View>
            </TouchableOpacity>
        );
    }
});


const styles = StyleSheet.create({
    container: {
        // 改变主轴方向
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',

        backgroundColor: 'white',
        width: width * 0.5 -1,
        height: 59,
        marginBottom: 1,
        marginRight: 1
    },

    //  左边title 样式
    leftTitleStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    // 左边下标题样式
    leftSubTitleStyle: {
        color: 'gray'
    },

    // 右边 图片样式
    rightImageStyle: {
        width: 64,
        height: 43,
        resizeMode: 'contain'
    }

});

// 输出组件
// module.exports = mainView;

export {
    commonView as CommonView
};

