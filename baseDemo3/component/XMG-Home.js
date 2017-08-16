
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
//  这个程序没有完成，后面的网络请求数据没有写
// ==========================================================


const Dimensions = require('Dimensions');
// 屏幕宽
const {width} = Dimensions.get('window');



// 用 ES5 写法
let demoView = React.createClass({

    getDefaultProps() {
        return {
            // 需要自己处理 网络 路径
            url_api: "https://xxx.xxx.xxx/xxx",
            key_word: "xxx"
        }
    },
    getInitialState() {
        return {
            // 头部数据源
            headerDataArr: [],

            // cell 数据源
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        }
    },

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    home
                </Text>
            </View>
        );
    },

    // 组件加载完成处理
    componentDidMount() {
        this.loadDataFromNet();
    },

    // 请求网络数据
    loadDataFromNet() {
        fetch(this.props.url_api)
            .then( (response) => response.json() )
            .then( (responseData) => {
                // 处理转换后的 json 数据

                // 拿到所有数据
                let dataJson = responseData[this.props.key_word];

            } )
            .catch( (error) => {
                //  异常处理
                if (error) {

                }
            })
    }


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
export { demoView  as HomeView};






