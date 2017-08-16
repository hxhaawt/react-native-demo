
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TabBarIOS,
    NavigatorIOS

} from 'react-native';

// 引入外部组件
import { MineView } from  './XMG-Mine'
import { FindView } from  './XMG-Find'
import { MessView } from  './XMG-Mess'
import { HomeView } from  './XMG-Home'

// ==========================================================
//  用的时候要 用到正确的图片，这里是测试图片，没有效果
// ==========================================================


// 用 ES5 写法
let mainView = React.createClass({

    getInitialState() {
        return ({
            // 设置选中 标志
            selectedItem: 'home'
        });
    },

    render() {
        return (
            <TabBarIOS
                tintColor= "orange"
            >
                {/* 首页 */}
                <TabBarIOS.Item
                    icon = {require('p1')}
                    title="首页"
                    selected = {this.state.selectedItem === "home"}
                    onPress = { () => this.setState({selectedItem: "home"}) }
                >

                    <NavigatorIOS
                        tintColor= "orange"
                        style={{ flex: 1}}
                        initialRoute={
                            {
                                component: HomeView,
                                title: '首页',
                                leftButtonIcon: require('p5'),
                                rightButtonIcon: require('p6')
                            }
                        }
                    />

                </TabBarIOS.Item>

                {/* 消息 */}
                <TabBarIOS.Item
                    icon = {require('p2')}
                    title="消息"
                    selected = {this.state.selectedItem === "message"}
                    onPress = { () => this.setState({selectedItem: "message"}) }
                >

                    <NavigatorIOS
                        style={{ flex: 1}}
                        initialRoute={
                            {
                                component: MessView,
                                title: '消息'
                            }
                        }
                    />

                </TabBarIOS.Item>

                {/* 发现 */}
                <TabBarIOS.Item
                    icon = {require('p3')}
                    title="发现"
                    selected = {this.state.selectedItem === "find"}
                    onPress = { () => this.setState({selectedItem: "find"}) }
                >

                    <NavigatorIOS
                        style={{ flex: 1}}
                        initialRoute={
                            {
                                component: FindView,
                                title: '发现'
                            }
                        }
                    />

                </TabBarIOS.Item>

                {/* 我的 */}
                <TabBarIOS.Item
                    icon = {require('p4')}
                    title="我的"
                    selected = {this.state.selectedItem === "mine"}
                    onPress = { () => this.setState({selectedItem: "mine"}) }
                >

                    <NavigatorIOS
                        style={{ flex: 1}}
                        initialRoute={
                            {
                                component: MineView,
                                title: '我的'
                            }
                        }
                    />

                </TabBarIOS.Item>

            </TabBarIOS>
        );
    },


});


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

// 导出类
// node.js 写法
// module.exports = loginView;

// ES6 写法
export { mainView  as MainView};





