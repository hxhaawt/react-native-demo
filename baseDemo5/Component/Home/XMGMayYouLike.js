// 首页中的 猜你喜欢 组件 ------>首页组件直接引用这个组件
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ListView
} from 'react-native';

// 导入外部 自己组件
import { BottomCommonCell }  from './XMGBottomCommonCell'

// 导入外部 json 数据
const youLikeData = require('../../LocalData/HomeMayYouLikeData.json');

let mayYouLikeView = React.createClass({

    getDefaultProps() {
        return {
            api_url: `http://api.meituan.com/group/v2/recommend/homepage/city/20?
            userId=160495643&userid=160495643&__vhost=api.mobile.meituan.com&
            position=23.134643%2C113.373951&movieBundleVersion=100&utm_term=6.6&
            limit=40&wifi-mac=64%3A09%3A80%3A10%3A15%3A27&ci=20&__skcy=X6Jxu5SCaijU80yX5ioQuvCDKj4%3D&
            __skua=5657981d60b5e2d83e9c64b453063ada&__skts=1459731016.350255&
            wifi-name=Xiaomi_1526&client=iphone&
            uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&
            __skno=FEB757F5-6120-49EC-85B0-D1444A2C2E7B&
            utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&
            utm_source=AppStore&utm_medium=iphone&version_name=6.6&wifi-cur=0&
            wifi-strength=&offset=0&utm_campaign=AgroupBgroupD100H0&
            __skck=3c0cf64e4b039997339ed8fec4cddf05&
            msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594`
        }
    },
    getInitialState() {
        // 创建数据源
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds
        };
    },

    componentDidMount() {
        // 从网络上请求数据
        this.loadDataFromNet();
    },

    // 从网络上请求数据
    loadDataFromNet() {
        fetch(this.props.api_url)
            .then( (response) => response.json())
            .then( (response) => {
                // 更新数据源
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(response.data)
                });
            })
            .catch( (error) => {

                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(youLikeData.data)
                });
            })
        ;
    },

    render() {
        return (
            <View style={styles.container}>
                <BottomCommonCell
                    leftIcon="cnxh"
                    leftTitle="猜你喜欢"
                />

                {/* 数据列表展示 */}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        );
    },

    // ListView 中每个 item 数据显示
    renderRow(rowData) {
        return (
            <TouchableOpacity
                onPress = { () => {alert('点击')}}
            >
                <View
                    style={styles.itemViewStyle}
                >
                    {/* 左边 */}
                    <Image
                        style={styles.imageViewStyle}
                        source={{uri: this.dealImageUrl(rowData.imageUrl)}}
                    />

                    {/* 右边 */}
                    <View
                        style={styles.rightViewStyle}
                    >
                        <View style={styles.rightTopViewStyle}>
                            <Text>{rowData.title} </Text>
                            <Text>{rowData.topRightInfo} </Text>
                        </View>

                        <Text style={{color: 'gray'}}>{rowData.subTitle} </Text>

                        <View style={styles.rightBottomViewStyle}>
                            <Text style={{color: 'red'}}>{rowData.subMessage} </Text>
                            <Text>{rowData.bottomRightInfo} </Text>
                        </View>

                    </View>
                </View>
            </TouchableOpacity>
        )
    },
    // 处理图像尺寸，得到具体的图像url
    dealImageUrl(url) {
        // 返回正常图片 url
        if (url.search('w.h') === -1) {
            return url;
        }else {
            return url.replace('w.h', '120.90');
        }
    }
});


const styles = StyleSheet.create({
    container: {

        marginTop: 15
    },
    // 整个 item 样式
    itemViewStyle: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 0.6,
        borderBottomColor: '#e8e8e8',
        backgroundColor: 'white',
    },
    // 单个item 左边 图像样式
    imageViewStyle: {
        width: 120,
        height: 90
    },

    // 单个item 右边 样式
    rightViewStyle: {
        justifyContent: 'center',
        marginLeft: 8,
        width: 220
    },
    // 右边 上边文字样式
    rightTopViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 7
    },
    // 右边 下边文字样式
    rightBottomViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 7
    }



});

// 输出组件
// module.exports = MayYouLikeView;

export {
    mayYouLikeView as MayYouLikeView
};











