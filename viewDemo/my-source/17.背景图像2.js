
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
            <Image 
            style={styles.backgroundImage}
            source={{uri: 'http://imgsrc.baidu.com/imgad/pic/item/267f9e2f07082838b5168c32b299a9014c08f1f9.jpg'}} 
            >

            </Image>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#eae7ff',
    },

    backgroundImage: {

        alignItems:'center',
        justifyContent:'center',
        width: null,
        height: null,
        flex: 1,
        backgroundColor:'rgba(0,0,0,0)',

    },
});

AppRegistry.registerComponent('viewDemo', () => testDemo);











