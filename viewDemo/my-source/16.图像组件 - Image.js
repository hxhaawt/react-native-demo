
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
                <Image 
                style={styles.image}
                source={{uri: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white.png'}} />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#f5f',
    },

    image: {
        width: 100,
        height: 200,
        margin: 10
    },
});

AppRegistry.registerComponent('viewDemo', () => testDemo);











