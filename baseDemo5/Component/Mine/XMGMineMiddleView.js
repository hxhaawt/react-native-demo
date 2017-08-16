
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

// 导入外部 middle view json 数据
const middleData = require('./MiddleViewData.json');


// 内部view，主要为4个选项用 系一的组件
let InnerView = React.createClass({

    getDefaultProps() {
        return {
            iconName: '', // 图标
            title: ''
        }
    },
    render(){
        return (
            <TouchableOpacity>
                <View
                    style={styles.itemViewStyle}
                >
                    <Image
                        style={styles.itemImageStyle}
                        source={{uri: this.props.iconName}}
                    />
                    <Text>
                        {this.props.title}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
});


let mineMiddleView = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {this.renderAllItem()}
            </View>
        );
    },

    //
    renderAllItem() {
        // 定义组件 数据
        let itemArr = [];
        // 遍历 middleData
        for (let i=0; i<middleData.length; i++){
            // 取出单独的数据
            let data = middleData[i];
            // 创建组件，装入数组
            itemArr.push(
                <InnerView
                    key = {i}
                    iconName={ data.iconName }
                    title={ data.title }
                />
            );
        }
        // 返回所有的组件
        return itemArr;
    }
});


const styles = StyleSheet.create({
    container: {
        // 主轴方向
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

        height: 60,
        paddingTop: 6,

        backgroundColor: 'white',

    },

    //  ====== InnerView 组件的样式 =====
    // 整个view 样式
    itemViewStyle: {
        alignItems: 'center'
    },

    // 图片样式
    itemImageStyle: {
        width: 30,
        height: 20
    }

});

// 输出组件
// module.exports = mainView;

export {
    mineMiddleView as MineMiddleView
};


