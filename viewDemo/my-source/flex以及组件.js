
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export class viewDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.innerView}>
                    <Text>
                        这是内部 View
                    </Text>
                </View>
                <View style={styles.innerView}>
                    <Text>
                        这是内部 View
                    </Text>
                </View>
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
        backgroundColor: '#f5fcff',
    },
    innerView: {
        width: 100,
        height: 100,
        margin: 10,
        backgroundColor: 'blue'
    },
});

/*==================== 第2个样式============================*/

class flexDemo1 extends Component {
    render() {
        return (
            <View style={styles1.flexTest}>
                <Text style={{backgroundColor: 'red', width: 100}}>11</Text>
                <Text style={{backgroundColor: 'blue', width: 100}}>22</Text>
                <Text style={{backgroundColor: 'green', width: 100}}>33</Text>
                <Text style={{backgroundColor: 'gray', width: 100}}>44</Text>
                <Text style={{backgroundColor: 'yellow', width: 100}}>55</Text>
            </View>
        );
    }
}

const styles1 = StyleSheet.create({
    flexTest: {
        // flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        // 显示不下的时候，换行
        flexWrap: 'wrap',
        marginTop: 10,
        backgroundColor: 'purple',
    }
});


/*==================== 第3个样式============================*/
class flexDemo2 extends Component {
    render() {
        return (
            <View style={styles2.flexTest}>
                <Text style={{backgroundColor: 'red', flex: 1, height: 60, alignSelf: 'flex-start'}}>11</Text>
                <Text style={{backgroundColor: 'blue', flex: 2, height: 70, alignSelf: 'flex-end'}}>22</Text>
                <Text style={{backgroundColor: 'green', flex: 2, height: 80}}>33</Text>
                <Text style={{backgroundColor: 'gray', flex: 1, height: 100}}>44</Text>
                <Text style={{backgroundColor: 'yellow', flex: 1, height: 90}}>55</Text>
            </View>
        );
    }
}

const styles2 = StyleSheet.create({
    flexTest: {
        // flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        // 显示不下的时候，换行
        // flexWrap: 'wrap',
        marginTop: 10,
        backgroundColor: 'purple',
    }
});

/*==================== 第4个样式============================*/
const Dimensions = require('Dimensions');
class flexDemo3 extends Component {
    render() {
        return (
            <View style={styles3.flexTest}>
                <Text>默认屏幕宽：{Dimensions.get('window').width } </Text>
                <Text>默认屏幕宽：{Dimensions.get('window').height } </Text>
                <Text>默认屏分辨率：{Dimensions.get('window').scale } </Text>
            </View>
        );
    }
}
const styles3 = StyleSheet.create({
    flexTest: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // flexDirection: 'row',
        // marginTop: 10,
        backgroundColor: 'purple',
    }
});




AppRegistry.registerComponent('viewDemo', () => flexDemo3);











