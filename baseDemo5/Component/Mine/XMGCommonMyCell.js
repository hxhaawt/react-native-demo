
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform
} from 'react-native';


let myCellView = React.createClass({

    getDefaultProps() {
        return {
            leftIconName: '',
            leftTitle: '',
            rightIconName: '',
            rightTitle: ''
        }
    },

    render() {
        return (
            <TouchableOpacity
                activeOpacity={0.5}
            >
                <View style={styles.container}>
                    {/* 左边 */}
                    <View style={styles.leftViewStyle}>
                        <Image
                            style={styles.leftImageStyle}
                            source={{uri: this.props.leftIconName}}
                        />
                        <Text style={styles.leftTitleStyle}>
                            {this.props.leftTitle}
                        </Text>
                    </View>

                    {/* 右边 */}
                    <View style={styles.rightViewStyle}>
                        {this.rightSubView()}
                    </View>
                </View>
            </TouchableOpacity>
        );
    },

    // 右边 内容
    rightSubView() {
        return (
            <View style={{flexDirection: 'row', alignItems: 'center'}} >
                {this.renderRightContent()}
                {/* 箭头 */}
                <Image
                    style={styles.rightArrowStyle}
                    source={{uri: 'home_arrow'}}
                />
            </View>
        );
    },

    // 右边 选择性的内容：是文字 还是图片 还是什么都没有
    renderRightContent() {
        // 没有图片
        if (this.props.rightIconName.length === 0){
            return (
                <Text style={{color: 'gray'}} >
                    {this.props.rightTitle}
                </Text>
            );
        }else {
            // 返回图片
            return (
                <Image
                    style={{width: 24, height: 13}}
                    source={{uri: this.props.rightIconName}}
                />
            );
        }
    }
});


const styles = StyleSheet.create({
    // 整体样式
    container: {
        flexDirection: 'row',
        // 主轴对齐方式
        justifyContent: 'space-between',
        // 侧轴对齐
        alignItems: 'center',

        height: Platform.OS === 'ios'? 40 : 36,
        // 下边框
        borderBottomWidth: Platform.OS === 'ios'? 0.5 : 0.7,
        borderBottomColor: '#e8e8e8',

        backgroundColor: 'white'
    },

    // ====== 左边样式======
    // 外部整体样式
    leftViewStyle: {
        flexDirection: 'row',
        // 侧轴对齐方式
        alignItems: 'center',

        marginLeft: 8
    },
    // 左边图片样式
    leftImageStyle: {
        width: 24,
        height: 24,
        marginRight: 6,

        borderRadius: 12
    },
    // 左边 文字样式
    leftTitleStyle: {
        fontSize: 16
    },

    // ======= 右边样式 ======
    rightViewStyle: {

    },

    // 右边 箭头样式
    rightArrowStyle: {
        marginRight: 8,
        width: 8,
        height: 14,
        marginLeft: 6
    }

});

// 输出组件
// module.exports = mainView;

export {
    myCellView as MyCellView
};

