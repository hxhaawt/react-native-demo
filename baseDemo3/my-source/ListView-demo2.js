
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity
} from 'react-native';


// ==========================================================
//      ListView demo2
// ==========================================================


const Dimensions = require('Dimensions');
// 屏幕宽
const {width} = Dimensions.get('window');

// 引入json数据 这个是测试数据
let data = require('../data-ListView3.json');

// 用 ES5 写法
let demoView = React.createClass({
    // 初始化
    getInitialState() {

        let getSectionData = (dataBold, sectionID) => {
            return dataBold[sectionID];
        };
        let getRowData = (dataBlod, sectionID, rowID) => {
            return dataBlod[sectionID + ':' + rowID];
        };

        //  设置返回数据
        return {
            dataSource: new ListView.DataSource({
                getSectionData: getSectionData, // 获取组中的数据
                getRowData: getRowData,         // 获取行中的数据
                rowHasChanged: (r1, r2) => r1 !== r2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2,

            })
        };
    },

    componentDidMount() {
        this.loadDataFromJson();
    },

    // 加载 json 数据
    loadDataFromJson() {
        // 拿到 json 数据
        let jsonData = data.data;

        let dataBlod = {}
            ,sectionIDs = []
            ,rowIDs = []
            ,cars = []
            ;

        for(let i=0; i<jsonData.length; i++){

            // 1.把组号放入 sectionIDs 数组
            sectionIDs.push(i);

            //  2.把组中的内容放入 dataBlod
            dataBlod[i] = jsonData[i].title;

            // 3.取出该组中的 数据
            cars = jsonData[i].cars;

            rowIDs[i] = [];

            // 4. 遍历所有的 车数组
            for (let j=0; j<cars.length; j++){
                // 把行号放入 rowIDs
                rowIDs[i].push(j);

                // 把每一行的内容放入 dataBlod
                dataBlod[i+':'+j] = cars[j];
            }
        }

        //  更新状态
        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlod, sectionIDs, rowIDs)
        });


    },

    render() {
        return (
            <View style={styles.outerViewStyle}>
                {/* 头部*/}
                <View style={styles.headerViewStyle}>
                    <Text
                        style={{color: 'white', fontSize: 25}}
                    >
                        测试头部
                    </Text>
                </View>
                {/* 列表数据 */}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    renderSectionHeader={this.renderSectionHeader}
                />
            </View>
        );
    },

    // 每一行的数据
    renderRow(rowData, sectionID, rowID, heightLightRow) {

        return (
            <TouchableOpacity
                activeOpacity={0.5}

            >
                <View style={styles.rowStyle}>
                    {/* 左边的图片*/}
                    <Image
                        source={{uri: rowData.icon}}
                        style={styles.leftImageStyle}
                    />

                    {/* 右边的信息显示*/}
                    <View style={styles.rightViewStyle}>
                        <Text style={styles.topTitleStyle}>{rowData.name} </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    },

    //  每一组中的数据
    renderSectionHeader(sectionData, sectionID) {
        return (
            <View style={styles.sectionHeaderViewStyle}>
                <Text style={{ marginLeft: 5, color: 'white'}}>
                    { sectionData }
                </Text>
            </View>
        );
    }
});


const styles = StyleSheet.create({

    outerViewStyle: {
      flex: 1,
    },
    headerViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        backgroundColor: 'gray'
    },

    rowStyle: {
        // 设置 主轴方向
        flexDirection: 'row',
        // 侧轴 居中
        alignItems: 'center',

        padding: 10,

        borderBottomWidth: 1,
        borderBottomColor: '#e8e8e8'
    },

    leftImageStyle: {
        width: 70,
        height: 70,

    },

    rightViewStyle: {
        marginLeft: 6
    },

    sectionHeaderViewStyle: {
        justifyContent: 'center',
        height: 30,
        backgroundColor: '#1fa'
    }

});

// 导出类
// node.js 写法
// module.exports = loginView;

// ES6 写法
export { demoView  as DemoView};




