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


let shopCenterDetailView = React.createClass({
    getInitialState() {
        return {
            detailUrl: this.props.url + `?uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DF
            C717E10FC0B4271&utm_term=6.6&utm_source=AppStore&utm_content=
            5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271
            &version_name=6.6&userid=160495643&utm_medium=iphone&lat=23.134694
            &utm_campaign=AgroupBgroupD100Ghomepage_topic1_7486H0
            &token=b81UqRVf6pTL4UPLLBU7onkvyQoAAAAAAQIAACQVmmlv_Qf_xR-hBJVMtIlq7nYgStcv
            RiK_CHFmZ5Gf70DR47KP2VSP1Fu5Fc1ndA&lng=113.373928&f=iphone&ci=20
            &msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594`
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
                        source={{uri: 'icon_camera_back_normal'}}
                        style={styles.navImageStyle}
                    />
                </TouchableOpacity>

                <Text style={styles.midTitleStyle}>购物中心详情</Text>

                <TouchableOpacity
                    style={styles.rightStyle}
                    onPress={ () => {alert('测试点击')}}
                >
                    <Image
                        source={{uri: 'icon_mine_setting'}}
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
    shopCenterDetailView as ShopCenterDetailView
};


