
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    Platform,
    ScrollView
} from 'react-native';

// 导入外部系统模块，计算系统值
const Dimensions = require('Dimensions');
const {width, height} = Dimensions.get('window');

// 导入外部 自己的组件
import { TopView } from './XMGTopView'
import { MiddleView } from './XMGMiddleView'
import { MiddleBottomView } from './XMGMiddleBottomView';
import { ShopCenterView } from './XMGShopCenter';
import { ShopCenterDetailView } from './XMGShopCenterDetailView'

let homeView = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/* 首页导航 */}
                {this.renderNavBar()}

                {/* 首页主要内容 */}
                <ScrollView>

                    {/*  头部 view */}
                    <TopView />

                    {/* 中间的内容 */}
                    <MiddleView />

                    {/* 中间下半部分内容*/}
                    <MiddleBottomView />

                    {/*  购物中心 */}
                    <ShopCenterView
                        popTopHomeView={ (url) => this.pushToShopCenterDetail(url)}
                    />

                </ScrollView>

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

    // 路由跳转 到 购物中心详情页
    pushToShopCenterDetail(url){
        // alert(url);
        this.props.navigator.push({
            component: ShopCenterDetailView,
            passProps: {"url": this.dealWithUrl(url)}
        });
    },

    // 处理url
    dealWithUrl(url) {
        return (
            // url.substring( url.indexOf('http') )
             url.replace('imeituan://www.meituan.com/web/?url=', "")
        );
    }
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        backgroundColor: '#e8e8e8',
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

