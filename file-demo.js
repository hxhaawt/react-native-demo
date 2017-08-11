
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class baseDemo2 extends Component {
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

AppRegistry.registerComponent('baseDemo2', () => baseDemo2);

