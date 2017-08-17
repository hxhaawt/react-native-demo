
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';

// 引入外部模块
// import { MainView } from './Component/Main/XMGMain';
import { LaunchView } from './Component/Main/XMGLaunchImage';

class demoView extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{name: "启动页", component: LaunchView}}
                configureScene={ () => {
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route, navigator) =>
                    {
                        let Component = route.component;
                        return <Component {...route.passProps} navigator={navigator}  />
                    }
                }
            />
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

AppRegistry.registerComponent('baseDemo4', () => demoView);

