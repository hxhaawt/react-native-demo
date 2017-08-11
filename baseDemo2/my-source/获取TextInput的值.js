import React, { Component } from 'react';
import { AppRegistry, View, TextInput } from 'react-native';

class UselessTextInput extends Component {
    render() {
        return (
            <TextInput

                {...this.props} // 将父组件传递来的所有props传递给TextInput;比如下面的multiline和numberOfLines
                editable = {true}
                maxLength = {40}
            />
        );
    }
}

class baseDemo2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '请输入颜色',
        };
    }

    // 你可以试着输入一种颜色，比如red，那么这个red就会作用到View的背景色样式上
    render() {
        return (
            <View
                style={{
                    backgroundColor: this.state.text,
                }}
            >
                <UselessTextInput
                    multiline = {true}
                    numberOfLines = {4}
                    onChangeText={(text) => this.setState({text})}
                    placeholder={this.state.text}
                    // value={this.state.text}
                />
            </View>
        );
    }
}

// App registration and rendering
AppRegistry.registerComponent(
    'baseDemo2',
    () => baseDemo2
);