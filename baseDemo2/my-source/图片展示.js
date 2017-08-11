
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

// 导入json数据
let data = require('./data.json');
// 处理屏幕尺寸
const Dimensions = require('Dimensions');
const {width} = Dimensions.get('window');

// 定义全局变量
// 列数
const cols = 3;
const boxWidth = 100;
const vMargin = (width - cols * boxWidth) / ( cols + 1);
const hMargin = 20;

export default class baseDemo2 extends Component {
    render() {
        return (
            <View style={styles.container}>
                { this.renderAllData() }
            </View>
        );
    }

    // 返回所有的图片和内容
    renderAllData(){
        //保存所有的子组件
        let allData = [];
        // 遍历json数据
        for(let i=0; i<data.data.length; i++){
            // 取出单独的数据对象
            let item = data.data[i];
            // 直接存入数组
            allData.push(
                <View key={i} style={styles.outView}>
                    <Image
                        source={{uri: item.icon }}
                        style={styles.image} />
                    <Text style={styles.mainTitle}>
                        {item.title}
                    </Text>
                </View>
            );
        }

        // 返回数据
        return allData;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        // 换行显示
        flexWrap: 'wrap',
        // backgroundColor: '#F5FCFF',
    },
    outView: {
        // 侧轴对齐方式
        alignItems: 'center',
        width: boxWidth,
        height: boxWidth+10,
        marginLeft: vMargin,
        marginTop: hMargin,
        paddingTop: 10,
        backgroundColor: 'gray',
    },
    image: {
        width: 80,
        height: 80
    },
    mainTitle: {

    },

});

AppRegistry.registerComponent('baseDemo2', () => baseDemo2);

