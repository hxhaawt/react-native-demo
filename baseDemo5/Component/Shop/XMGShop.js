// 这个是购物中心的详细页面

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform,
    Image,
    TouchableOpacity,
    WebView
} from 'react-native';


let shopView = React.createClass({
    getInitialState() {
        return {
            detailUrl: `http://i.meituan.com/topic/mingdian?ci=1&
            f=iphone&msid=48E2BB10-805D-4821-9CDD-D5C9E01BC98A2015-07-02-16-25124&
            token=p19ukJltGhla4y5Jryb1jg??CdkjsAAAAAsgAAAdhfd3UYGxaY2FlFPQXQj2
            wCyCrhhn7VVB-KpG_U3-clHlvsLM8JRrnZK35y8UU3DQ&userid=10086&utm_c
            ampaign=AgroupBgroundD100Fab_chunceshishuju__a__a___b1junglehom
            epagecatesort__b__leftflow__ab_gxhceshi__nc&utm_content=4B8C0B
            46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&utm_
            medium=iphone&utm_source=AppStore&utm_term=57&uuid=4B8C0B46F5B052
            7D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&version_name=5.7&
            lat=23.12005&lng=113.3076`
        }
    },
    render() {
        return (
            <View style={styles.container}>
                {/*  导航 */}
                {this.renderNavBar()}

                <WebView
                    automaticallyAdjustContentInsets={true}
                    source={{uri: this.state.detailUrl}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                />
            </View>
        );
    },

    renderNavBar() {
        return (
            <View style={styles.navBarStyle}>

                <TouchableOpacity
                    style={styles.leftStyle}
                    onPress={ () => {this.props.navigator.pop()}}
                >
                    <Image
                        source={{uri: 'icon_shop_local'}}
                        style={styles.navImageStyle}
                    />
                </TouchableOpacity>

                <Text style={styles.midTitleStyle}>商家</Text>

                <TouchableOpacity
                    style={styles.rightStyle}
                    onPress={ () => {alert('测试点击')}}
                >
                    <Image
                        source={{uri: 'icon_shop_search'}}
                        style={styles.navImageStyle}
                    />
                </TouchableOpacity>
            </View>
        );
    }
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },

    // 顶部整个导航条样式
    navBarStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: Platform.OS === 'ios' ? 64 : 44,
        backgroundColor: 'rgba(255, 96, 0, 1.0)'
    },

    leftStyle: {
        position: 'absolute',
        left: 10,
        bottom: 10,
    },
    // 中间文字样式
    midTitleStyle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "800"
    },
    // 导航右边样式
    rightStyle: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        // backgroundColor: 'blue'
    },
    // 右边中的图片
    navImageStyle: {

        width: Platform.OS === 'ios' ? 28 : 24,
        height: Platform.OS === 'ios' ? 28 : 24
    },

});

// 输出组件
// module.exports = mainView;

export {
    shopView as ShopView
};


