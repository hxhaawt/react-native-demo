
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
                style={styles.backgroundImage}
                source={{uri: 'http://imgsrc.baidu.com/imgad/pic/item/267f9e2f07082838b5168c32b299a9014c08f1f9.jpg'}} 
                >
                    <View style={styles.overlay}>
                        <Text style={styles.overlayHeader}>
                        图片欣赏
                        </Text>
                        <Text style={styles.overlaySubHeader}>
                        picture--good!
                        </Text>
                    </View>
                </Image>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'blue',
        borderStyle: 'dashed'
    },
    overlayHeader: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '200',
        color: '#eae7ff',
        fontSize: 34,
        padding: 10
    },
    overlaySubHeader: {
        fontFamily: 'Helvetica Neue',
        fontWeight: '200',
        color: '#eae7ff',
        fontSize: 16,
        padding: 10
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#f5f',
    },

    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
});

AppRegistry.registerComponent('viewDemo', () => testDemo);











