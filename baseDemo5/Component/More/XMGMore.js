
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform,
    ScrollView
} from 'react-native';

// 导入外部组件
import { CommonView } from './XMGCommonCell';

let moreView = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/* 导航条 */}
                {this.renderNavBar()}

                <ScrollView>
                    <View style={styles.scrollItemStyle}>
                        <CommonView title="扫一扫" />
                    </View>

                    <View style={styles.scrollItemStyle}>
                        <CommonView
                            title="省流量模式"
                            isSwitch={true}
                        />

                        <CommonView title="消息提醒" />
                        <CommonView title="邀请好友使用码团" />
                        <CommonView
                            title="清空缓存"
                            rightTitle="1.99M"
                        />
                    </View>

                    <View style={styles.scrollItemStyle}>

                        <CommonView title="问卷调查" />
                        <CommonView title="支付帮助" />
                        <CommonView title="网络诊断" />
                        <CommonView title="关于码团" />
                        <CommonView title="我要应聘" />
                    </View>

                    <View style={styles.scrollItemStyle}>

                        <CommonView title="精品应用" />
                    </View>
                </ScrollView>
            </View>
        );
    },

    // 导航条
    renderNavBar() {
        return (
            <View style={styles.navBarStyle}>
                <Text style={styles.midTitleStyle}>更多</Text>

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
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#e8e8e8',
    },

    // 顶部整个导航条样式
    navBarStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: Platform.OS === 'ios' ? 64 : 44,
        backgroundColor: 'rgba(255, 96, 0, 1.0)'
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

    //  下面的 scrollview item 样式

    scrollItemStyle: {
        marginTop: 20
    },

});

// 输出组件
// module.exports = mainView;

export {
    moreView as MoreView
};

