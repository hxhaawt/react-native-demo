﻿
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

class demoView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    这是 react-native demo!
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});
// baseDemo2 改为自己的项目名称
AppRegistry.registerComponent('baseDemo2', () => demoView);

