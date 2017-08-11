
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

const Dimensions = require('Dimensions');
// 屏幕宽
const width = Dimensions.get('window').width;
// 设置登录的圆角
const loginBorderRadius = 30;


class loginView extends Component {
    render() {
        return (
            <View style={styles.container}>

                {/* 头像 */}
                <View>
                    <Image
                        style={styles.iconTitleStyle}
                        source={require('../image/1.jpg')}
                    />
                </View>

                {/*账号输入框在这里用View包裹以便处理器样式*/}
                <View style={styles.textInputViewStyle}>
                    <TextInput
                        style={styles.textInputStyle}
                        // 去掉底边框
                        underlineColorAndroid="transparent"
                        placeholder='手机号'
                    />
                </View>

                {/*密码输入框*/}
                <View style={styles.textInputViewStyle}>
                    <TextInput
                        style={styles.textInputStyle}
                        // 去掉底边框
                        underlineColorAndroid="transparent"
                        placeholder='密码'
                        // 密文
                        secureTextEntry={true}

                    />
                </View>

                {/*设置控件可点击*/}
                <TouchableOpacity
                    activeOpacity={0.5}
                    // onPress={ this.renderPress}
                    onPressIn = { () => Alert.alert('按下') }
                    onPressOut = { () => Alert.alert('抬起') }
                    onLongPress = { () => Alert.alert('长按') }
                >
                    {/*登录按钮*/}
                    <View style={styles.textLoginViewStyle}>
                        <Text style={styles.textLoginStyle}>登录</Text>
                    </View>
                </TouchableOpacity>

                {/* 设置 */}
                <View style={styles.loginSetStyle}>
                    <Text style={styles.loginErrorStyle}>无法登录</Text>
                    <Text style={styles.newUserStyle}>新用户</Text>
                </View>

                {/* 其他登录方式 */}
                <View style={styles.otherLoginStyle}>
                    <Text>其他方式登录</Text>
                    <Image style={styles.otherLoginIconStyle} source={require('../image/2.jpg')} />
                    <Image style={styles.otherLoginIconStyle} source={require('../image/3.jpg')} />
                    <Image style={styles.otherLoginIconStyle} source={require('../image/4.jpg')} />
                </View>
            </View>
        );
    }

    // 点击事件
    renderPress() {

        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
        )
    }
}

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

    // 头像样式
    iconTitleStyle: {
        marginTop: 10,
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'white'
    },

    textInputViewStyle: {
        width: width -80,
        height: 45,

        borderRadius: loginBorderRadius,
        borderColor: 'blue',
        borderWidth: 2,

        paddingLeft: 10,
        paddingRight: 10,

        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,

        alignSelf: 'center'
    },

    //输入框样式
    textInputStyle: {

        width: width - 80,
        height: 40,

        paddingLeft: 8,

        backgroundColor: '#00000000',
        // alignSelf: 'center',
        // marginTop: 4,
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

    // 登录信息显示样式
    loginSetStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        marginTop: 10,
        width: width - 80,
        height: 20,

        // backgroundColor: 'red'
    },
    // 无法登录
    loginErrorStyle: {

    },
    // 新用户
    newUserStyle: {

    },

    // 其他方式登录
    otherLoginStyle: {
        flexDirection: 'row',
        alignItems: 'center',

        // 绝对定义
        position: 'absolute',
        bottom: 10,
        left: 20,

        // backgroundColor: 'red',
    },
    otherLoginIconStyle: {
        marginLeft: 10,

        width: 50,
        height: 50,
        borderRadius: 25,

        // borderWidth: 2,
        // borderColor: 'white'
    }

});

// 导出类
// node.js 写法
// module.exports = loginView;

// ES6 写法
export { loginView  as LoginView};



