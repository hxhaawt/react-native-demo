
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform,
    Switch
} from 'react-native';


let commonView = React.createClass({
    getDefaultProps() {
        return (
            {
                title: "默认",  // 标题
                isSwitch: false, // 开关状态
                rightTitle: ''
            }
        );
    },
    getInitialState() {
        return {
            isOn: false
        }
    },
    render() {
        return (
            <TouchableOpacity onPress={ () => {alert('点击')}}>
                <View style={ styles.container }>
                    {/* 左边 */}
                    <Text style={styles.leftViewStyle} >
                        { this.props.title }
                    </Text>

                    {/* 右边 */}
                    {this.renderRightView()}
                </View>
            </TouchableOpacity>
        );
    },

    // 右边 view 内容
    renderRightView() {
        if (this.props.isSwitch) {
            return (
                <Switch
                    value={this.state.isOn}
                    onValueChange={ () => {this.setState({
                        isOn: !this.state.isOn
                    })}}
                    style={{marginRight: 8}} />
            );
        }else {
            return (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {this.rightTitleView()}
                    <Image
                        style={styles.rightViewStyle}
                        source={{uri: 'home_arrow'}}
                    />
                </View>
            );
        }
    },

    // 处理右边的文字是否显示
    rightTitleView() {
        if (this.props.rightTitle.length > 0) {
            return (
                <Text style={{color: 'gray', marginRight: 3}}>
                    {this.props.rightTitle}
                </Text>
            );
        }
    }
});


const styles = StyleSheet.create({

    container: {
        // 主轴方向和对齐方式
        flexDirection: 'row',
        justifyContent: 'space-between',
        // 垂直居中
        alignItems: 'center',
        height: Platform.OS === 'ios' ? 40: 34,
        backgroundColor: 'white',
        borderBottomWidth: Platform.OS === 'ios' ? 0.5: 0.7,
        borderBottomColor: '#ddd'
    },

    // 左边样式
    leftViewStyle: {
        marginLeft: 8
    },
    // 右边图片样式
    rightViewStyle: {
        marginRight: 8,
        width: 8,
        height: 14
    }
});

// 输出组件
// module.exports = mainView;

export {
    commonView as CommonView
};


