
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';

// 组件生命周期 测试

const Dimensions = require('Dimensions');
// 屏幕宽
const width = Dimensions.get('window').width;
// 设置登录的圆角
const loginBorderRadius = 30;


class loginView extends Component {

    constructor(props){
        super(props);

        this._name = 'jack';

        this.state = {
            title: '测试值'
        }
    }

    render() {
        return (
            <View
                ref="topView"
                style={styles.container}>

                {/*设置控件可点击*/}
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={ () => this.renderPress('点击') }
                >
                    {/*登录按钮*/}
                    <View style={styles.textLoginViewStyle}>
                        <Text style={styles.textLoginStyle}>登录</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.megViewStyle}>
                    <Text>{this.state.title} </Text>
                    <Text>{this._name} </Text>
                    <Text>{this.props.age} </Text>
               </View>
            </View>
        );
    }

    // onPressIn = { () => Alert.alert('按下') }
    // onPressOut = { () => Alert.alert('抬起') }
    // onLongPress = { () => Alert.alert('长按') }
    // 点击事件
    renderPress(val) {
        // 更新状态机
        this.setState({title: val});

        // 拿到 DOM
        alert( this.refs.topView );
    }
}

// 设置默认值，如果父元素没有传递过来，就用默认值
loginView.defaultProps = {
    age: 28,
};



const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',
        // marginTop: 100,
        // flexDirection: 'row',
        // 换行显示
        // flexWrap: 'wrap',
        // backgroundColor: '#F5FCFF',
    },

    //登录按钮View样式
    textLoginViewStyle: {

        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: width -80,
        height: 45,

        borderRadius: loginBorderRadius,

        marginTop: 30,
        backgroundColor: '#00f',
    },

    //登录Text文本样式
    textLoginStyle: {
        fontSize: 18,
        color: 'white'
    },

    // 显示信息样式
    megViewStyle: {

        alignItems: 'center',
        marginTop: 20
    },

});

// 导出类
// node.js 写法
// module.exports = loginView;

// ES6 写法
export { loginView  as LoginView};



