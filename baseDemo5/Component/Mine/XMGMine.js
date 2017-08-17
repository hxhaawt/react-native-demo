
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

// 导入外部组件
import { MyCellView } from './XMGCommonMyCell';
import { MineMiddleView } from './XMGMineMiddleView' ;
import { MineHeaderView } from './XMGMineHeaderView' ;


let mineView = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.scrollViewStyle}
                    contentInset={{top: -200}}
                    contentOffset={{y: 200}}
                >
                    {/* 头部 view */}
                    <MineHeaderView />

                    <View >
                        <MyCellView
                            leftIconName={"collect"}
                            leftTitle="我的订单"
                            rightTitle="查看全部订单"
                        />

                        < MineMiddleView />

                    </View>

                    <View style={{marginTop: 20}}>
                        <MyCellView
                            leftIconName={"draft"}
                            leftTitle="小码哥钱包"
                            rightTitle="帐户余额:￥100"

                        />

                        <MyCellView
                            leftIconName={"like"}
                            leftTitle="抵用券"
                            rightTitle="10 "

                        />
                </View>

                    <View style={{marginTop: 20}}>
                        <MyCellView
                            leftIconName={"card"}
                            leftTitle="积分商城"
                        />
                    </View>


                    <View style={{marginTop: 20}}>
                        <MyCellView
                            leftIconName={"new_friend"}
                            leftTitle="今日推荐"
                            rightIconName="me_new"
                        />
                    </View>

                    <View style={{marginTop: 20}}>
                        <MyCellView
                            leftIconName={"pay"}
                            leftTitle="我要合作"
                            rightTitle="轻松开店，招财进宝"
                        />
                    </View>

                </ScrollView>

            </View>
        );
    }
});


const styles = StyleSheet.create({
    scrollViewStyle: {
        backgroundColor: '#e8e8e8'
    }

});

// 输出组件
// module.exports = mainView;

export {
    mineView as MineView
};

