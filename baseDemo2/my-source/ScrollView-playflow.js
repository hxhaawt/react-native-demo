
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Alert
} from 'react-native';

import TimerMixin from 'react-timer-mixin';

// 引入计时器类库
// var TimerMixin = require('react-timer-mixin');

// 引入json数据
var imageData = require('../data.json');


// ==========================================================
//      ScrollView  轮播图 有一个BUG就是拖拽时定时器出错
// ==========================================================


const Dimensions = require('Dimensions');
// 屏幕宽
const {width} = Dimensions.get('window');


class demoView extends Component {

    constructor(props){
        super(props);

        this.state = {
            // 当前页码
            currentPage: 0
        };

        // this.mixins = [TimerMixin];
    }

    // 开始拖拽
    // onScrollBeginDrag
    // 停止拖拽
    // onScrollEndDrag

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    ref="scrollImage"
                    horizontal={true}
                    showsHorizontalScrollIndicator = {false}
                    pagingEnabled = {true}
                    onMomentumScrollEnd={(e) => this.onAnimationEnd(e) }
                    onScrollBeginDrag={this.onScrollBeginDrag}
                    onScrollEndDrag={this.onScrollEndDrag}
                >
                    {this.renderAllImage()}
                </ScrollView>

                {/* 返回指示器 */}
                <View style={styles.pageViewStyle}>
                    {/* 返回显示圆点 */}
                    {this.renderPageCircle()}
                </View>
            </View>
        );
    }

    // 实现一些复杂的操作 在组件加载完成是调用这个函数
    componentDidMount() {
        // 开启定时器
        this.startTimer();
    }

    // 卸载组件时 系统 自动调用
    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }

    // 定时滚动图片
    startTimer() {
        // 拿到滚动图片 组件
        let scrollView = this.refs.scrollImage;
        let _this = this;

        this.timer = setInterval(function () {
            // 设置圆点
            let activePage = 0;
            // 图片总数
            let imageCount = imageData.data.length;

            if ( (_this.state.currentPage + 1) >= imageCount){
                activePage = 0;
            }else {
                activePage = _this.state.currentPage+1;
            }

            // 更新状态机
            _this.setState({
                currentPage: activePage
            });

            // 让图片 自动滚动
            let offsetX = activePage * width;
            scrollView.scrollTo({
                x: offsetX,
                y: 0,
                animated: true
            });

        }, this.props.duration);
    }


    // 处理开始拖拽事件
    onScrollBeginDrag() {
        // 停止定时器
        this.timer && clearTimeout(this.timer);
    }

    // 处理停止拖拽 事件
    onScrollEndDrag() {
        // 开启定时器
        this.startTimer();
    }

    // 返回所有图像 的组件
    renderAllImage() {

        // 保存返回的组件
        let allImage = [];
        // 拿到图像数据
        let imageArr = imageData.data;

        for(let i=0; i<imageArr.length; i++){
            // 取出单个对像数据
            let imageItem = imageArr[i];

            // 创建组件并放入数组
            allImage.push(
                <Image key={i} source={{uri: imageItem.icon }}
                       style={{ width: width, height: 150}}
                >
                </Image>
            );
        }

        return allImage;
    }

    // 返回图像下边的圆点
    renderPageCircle() {
        // 保存所有圆点
        let allIcon = [];
        let style;
        // 拿到图像数据
        let imageArr = imageData.data;

        for(let i=0; i<imageArr.length; i++){

            style = (i == this.state.currentPage) ? {color: 'orange'} : {color: '#fff'} ;
            // 创建组件并放入数组
            allIcon.push(
                <Text key={i} style={[{fontSize: 30}, style]}>&bull;</Text>
            );
        }

        return allIcon;
    }

    // 处理 一帧滚动结束 设置当前页的值
    onAnimationEnd(e) {
        // 求出水平方向的偏移量
        let offsetX = e.nativeEvent.contentOffset.x;
        // 求出当前页数
        let tmpPage = Math.floor( offsetX / width );

        // 更新状态机中的 currentPage 重新绘制UI
        this.setState({
            currentPage: tmpPage
        });
    }
}

// 设置默认值，如果父元素没有传递过来，就用默认值
demoView.defaultProps = {
    // 图片滚动 间隔 时间
    duration: 2000,
};


const styles = StyleSheet.create({

    container: {
        marginTop: 30,
        // alignItems: 'center'
    },

    pageViewStyle: {

        flexDirection: 'row',
        alignItems: 'center',

        position: 'absolute',
        bottom: 0,

        width: width,
        height: 25,
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
    }

});

// 导出类
// node.js 写法
// module.exports = loginView;

// ES6 写法
export { demoView  as DemoView};




