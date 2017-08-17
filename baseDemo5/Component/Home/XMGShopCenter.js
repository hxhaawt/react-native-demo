// 首页中 下部分 购物中心 组件
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';

// 导入外部 自己的组件
import { BottomCommonCell } from './XMGBottomCommonCell';

// 导入外部 json 数据
const home_D5 = require('../../LocalData/XMG_Home_D5.json');

// 购物中心 内部 商场展示   --->内部组件
let ShopCenterItem = React.createClass({
    getDefaultProps() {
        return {
            shopImage: '',   // 商场 图片
            shopSale: '',   // 商场 打折之类的显示文字
            shopName: '',    // 商场 名字
            detailUrl: '',    // 数据跳转到下个页面链接
            popTopShopCenter: null
        }
    },

    render() {
        return (
            <TouchableOpacity
                onPress = { () => {this.clickItem(this.props.detailUrl)} }
            >
                <View style={styles.itemViewStyle}>
                    <Image
                        style={styles.ItemImageStyle}
                        source={{uri: this.props.shopImage}}
                    />
                    <Text
                        style={styles.ItemShopSaleStyle}
                    >
                        {this.props.shopSale}
                    </Text>
                    <Text
                        style={styles.ItemShopNameStyle}
                    >
                        {this.props.shopName}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    },

    clickItem(url) {
        if (this.props.detailUrl === null) {
            return ;
        }else {
            this.props.popTopShopCenter(url);
        }
    }

});



// 购物中心 主要 组件  将这个导出去
let shopCenterView = React.createClass({

    getDefaultProps() {
        return {
            popTopHomeView: null
        }
    },
    render() {
        return (
            <View style={styles.container}>
                {/*  上部分 */}
                <BottomCommonCell
                   leftIcon="gw"
                   leftTitle="购物中心"
                   rightTitle={home_D5.tips}
                />

                {/* 下部分 */}
                <ScrollView
                    style={styles.bottomViewStyle}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >

                    {this.renderAllItem()}

                </ScrollView>

            </View>
        );
    },

    // 返回下部分中 商店所有数据组件
    renderAllItem() {

        let itemArr = []    // 组件 数组
            ,dataArr = home_D5.data   // 取出所有数据
            ,data           // 存入单个数据
            ;

        for (let i=0; i<dataArr.length; i++) {
            data = dataArr[i];
            itemArr.push(
                <ShopCenterItem
                    key={i}
                    shopImage = {data.img}
                    shopSale = {data.showtext.text}
                    shopName = {data.name}
                    detailUrl={data.detailurl}
                    popTopShopCenter = { (url) => this.proTopHome(url)}
                />
            );
        }

        return itemArr;
    },

    proTopHome(url) {
        if (this.props.popTopHomeView === null) {
            return ;
        }else {
            this.props.popTopHomeView(url);
        }
    }

});




const styles = StyleSheet.create({
    container: {
        marginTop: 15
    },

    // 显示商家广告的样式
    // 内部图片样式
    ItemImageStyle: {

        width: 120,
        height: 100,
        borderRadius: 8
    },
    ItemShopSaleStyle: {
        // 绝对定位
        position: 'absolute',
        left: 0,
        bottom: 30,
        padding: 3,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,

        color: 'white',
        backgroundColor: "orange",

    },
    ItemShopNameStyle: {
        textAlign: 'center',
        marginTop: 5
    },

    // ======底部样式======
    // 底部整体样式
    bottomViewStyle: {
        flexDirection: 'row',
        // padding: 10,
        backgroundColor: 'white'
    },

    // 底部 单个cell 样式
    itemViewStyle: {
        margin: 8
    }



});

// 输出组件
// module.exports = mainView;

export {
    shopCenterView as ShopCenterView
};


