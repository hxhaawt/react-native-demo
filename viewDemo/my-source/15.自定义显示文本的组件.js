
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export class testDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <HeaderText>
                这是自定义组件
                </HeaderText>
            </View>
        );
    }
}

class HeaderText extends Component {
    render() {
        return (
           <Text style={styles.item}>
           {this.props.children}
           </Text> 
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#f5fcff',
    },

    item: {
        fontSize: 30,
        color: 'blue'
    },
});

AppRegistry.registerComponent('viewDemo', () => testDemo);











