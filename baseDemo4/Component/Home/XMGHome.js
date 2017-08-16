
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    Platform
} from 'react-native';

const Dimensions = require('Dimensions');
const {width, height} = Dimensions.get('window');


let homeView = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/* 首页导航 */}
                {this.renderNavBar()}

                <Text>
                    这是--home
                </Text>
            </View>
        );
    },

    // 首页导航
    renderNavBar() {
        return (
            <View style={styles.navBarStyle}>
                {/* 左边 */}
                <TouchableOpacity
                    onPress={ () => {this.pushToDetail()}}
                >
                    <Text style={styles.leftViewStyle}>
                        广州
                    </Text>
                </TouchableOpacity>

                {/* 中间 */}
                <TextInput
                    placeholder={"输入商家，品类，商圈"}
                    underlineColorAndroid="transparent"
                    style={styles.topInputStyle}
                />

                {/* 右边 */}
                <View style={styles.rightNavViewStyle}>
                    <TouchableOpacity
                        onPress={ () => {alert('点击右边')}}
                    >
                        <Image source={{uri: "icon_homepage_message"}} style={styles.rightNavImgStyle}/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={ () => {alert('点击右边')}}
                    >
                        <Image source={{uri: "icon_homepage_scan"}} style={styles.rightNavImgStyle} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    },

    // 路由跳转
    pushToDetail(){

    }
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    //  顶部样式
    //  整个导航条样式
    navBarStyle: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: Platform.OS === 'ios' ? 64 : 44,
        backgroundColor: 'rgba(255, 96, 0, 1.0)'
    },
    // 左边样式
    leftViewStyle: {
        color: 'white'
    },
    // 中间输入框
    topInputStyle: {
        marginTop: Platform.OS === 'ios' ? 18 : 0,
        borderRadius: 17,
        width: width * 0.71,
        height: Platform.OS === 'ios' ? 35 : 30,
        backgroundColor: 'white',

        paddingLeft: 10
    },
    // 整个右边
    rightNavViewStyle: {
        flexDirection: "row",
        height: 64,
        alignItems: 'center',
        // backgroundColor: 'blue'
    },
    // 右边显示图片
    rightNavImgStyle: {
        width: Platform.OS === 'ios' ? 28 : 24,
        height: Platform.OS === 'ios' ? 28 : 24
    }



});

// 输出组件
// module.exports = mainView;

export {
    homeView as HomeView
};

