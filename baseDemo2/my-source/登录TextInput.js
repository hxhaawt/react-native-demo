
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

const Dimensions = require('Dimensions');
// 屏幕宽
const width = Dimensions.get('window').width;
// 设置登录的圆角
const loginBorderRadius = 30;


export default class baseDemo2 extends Component {
    render() {
        return (
            <View style={styles.container}>

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
                <TouchableOpacity onPress={ this._renderLogin}>
                    {/*登录按钮*/}
                    <View style={styles.textLoginViewStyle}>
                        <Text style={styles.textLoginStyle}>登录</Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }

    _renderLogin() {

        alert('登录成功');
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        marginTop: 100,
        // flexDirection: 'row',
        // 换行显示
        // flexWrap: 'wrap',
        // backgroundColor: '#F5FCFF',
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
    }

});

AppRegistry.registerComponent('baseDemo2', () => baseDemo2);

