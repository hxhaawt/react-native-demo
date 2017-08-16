// 这是个仿 饿了么
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Platform,   // 用来判断系统的 android or IOS
    Navigator
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
// 导入外部组件
import {HomeView} from '../Home/XMGHome'
import {ShopView} from '../Shop/XMGShop'
import {MoreView} from '../More/XMGMore'
import {MineView} from '../Mine/XMGMine'

let mainView = React.createClass({

    getInitialState() {
      return ({
          selectedTab: 'home'
      });
    },

    // renderIcon --> 默认图标
    // renderSelectedIcon --> 选中时的图标

    render() {
        return (
            <TabNavigator >
                {/* 首页 */}
                {this.renderTabBarItem(
                    "首页",
                    "icon_tabbar_homepage",
                    "icon_tabbar_homepage_selected",
                    "home",
                    "首页",
                    HomeView
                )}

                {/* 商家 */}
                {this.renderTabBarItem(
                    "商家",
                    "icon_tabbar_merchant_normal",
                    "icon_tabbar_merchant_selected",
                    "shop",
                    "商家",
                    ShopView
                )}

                {/* 我的 */}
                {this.renderTabBarItem(
                    "我的",
                    "icon_tabbar_mine",
                    "icon_tabbar_mine_selected",
                    "mine",
                    "我的",
                    MineView
                )}

                {/* 更多 */}
                {this.renderTabBarItem(
                    "更多",
                    "icon_tabbar_misc",
                    "icon_tabbar_misc_selected",
                    "more",
                    "更多",
                    MoreView
                )}

            </TabNavigator>
        );
    },

    // 每一个 TabBarItem 封装成函数
    renderTabBarItem(title, iconName, iconNameSelected, selectedTab, componentName, component, badgeText) {

        return (
            <TabNavigator.Item
                title={title}   // 传递变量要加大括号
                renderIcon={() => <Image source={{uri: iconName}} style={styles.iconStyle} />}
                renderSelectedIcon={() => <Image source={{uri: iconNameSelected}} style={styles.iconStyle} />}
                onPress={() => this.setState({ selectedTab: selectedTab })}
                selected={this.state.selectedTab === selectedTab}
                selectedTitleStyle={styles.itemSelectedTitleStyle}
                badgeText={badgeText}
            >
                <Navigator
                    initialRoute={{name: componentName, component: component}}
                    configureScene={ () => {
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route, navigator) =>
                        {
                            let Component = route.component;
                            return <Component {...route.passProps} navigator={navigator}  />
                        }
                    }
                />
            </TabNavigator.Item>
        );
    }

});


const styles = StyleSheet.create({
    iconStyle: {
        width: Platform.OS === 'ios'? 30 : 25,
        height: Platform.OS === 'ios'? 30 : 25
    },
    itemSelectedTitleStyle: {
        color: 'orange'
    }

});

// 输出组件
// module.exports = mainView;

export {
    mainView as MainView
};
