'use strict';

// 这个程序不能运行 RNTesterBlock  RNTesterPage 模块不知道怎么加载

var React = require('react');
var ReactNative = require('react-native');
var {
    StyleSheet,
    Text,
    View,
} = ReactNative;
var RNTesterBlock = require('./RNTesterBlock');
var RNTesterPage = require('./RNTesterPage');

var SwitchAndroid = require('SwitchAndroid');
var ToolbarAndroid = require('ToolbarAndroid');

var ToolbarAndroidExample = React.createClass({
    statics: {
        title: '<ToolbarAndroid>',
        description: 'Examples of using the Android toolbar.'
    },
    getInitialState: function() {
        return {
            actionText: 'Example app with toolbar component',
            toolbarSwitch: false,
            colorProps: {
                titleColor: '#3b5998',
                subtitleColor: '#6a7180',
            },
        };
    },
    render: function() {
        return (
            <RNTesterPage title="<ToolbarAndroid>">
                <RNTesterBlock title="Toolbar with title/subtitle and actions">
                    <ToolbarAndroid
                        actions={toolbarActions}
                        navIcon={require('image!ic_menu_black_24dp')}
                        onActionSelected={this._onActionSelected}
                        onIconClicked={() => this.setState({actionText: 'Icon clicked'})}
                        style={styles.toolbar}
                        subtitle={this.state.actionText}
                        title="Toolbar" />
                    <Text>{this.state.actionText}</Text>
                </RNTesterBlock>
                <RNTesterBlock title="Toolbar with logo & custom title view (a View with Switch+Text)">
                    <ToolbarAndroid
                        logo={require('image!launcher_icon')}
                        style={styles.toolbar}>
                        <View style={{height: 56, flexDirection: 'row', alignItems: 'center'}}>
                            <SwitchAndroid
                                value={this.state.toolbarSwitch}
                                onValueChange={(value) => this.setState({'toolbarSwitch': value})} />
                            <Text>{'\'Tis but a switch'}</Text>
                        </View>
                    </ToolbarAndroid>
                </RNTesterBlock>
                <RNTesterBlock title="Toolbar with no icon">
                    <ToolbarAndroid
                        actions={toolbarActions}
                        style={styles.toolbar}
                        subtitle="There be no icon here" />
                </RNTesterBlock>
                <RNTesterBlock title="Toolbar with navIcon & logo, no title">
                    <ToolbarAndroid
                        actions={toolbarActions}
                        logo={require('image!launcher_icon')}
                        navIcon={require('image!ic_menu_black_24dp')}
                        style={styles.toolbar} />
                </RNTesterBlock>
                <RNTesterBlock title="Toolbar with custom title colors">
                    <ToolbarAndroid
                        navIcon={require('image!ic_menu_black_24dp')}
                        onIconClicked={() => this.setState({colorProps: {}})}
                        title="Wow, such toolbar"
                        style={styles.toolbar}
                        subtitle="Much native"
                        {...this.state.colorProps} />
                    <Text>
                        Touch the icon to reset the custom colors to the default (theme-provided) ones.
                    </Text>
                </RNTesterBlock>
                <RNTesterBlock title="Toolbar with remote logo & navIcon">
                    <ToolbarAndroid
                        actions={[{title: 'Bunny', icon: require('./bunny.png'), show: 'always'}]}
                        logo={require('./hawk.png')}
                        navIcon={require('./bunny.png')}
                        title="Bunny and Hawk"
                        style={styles.toolbar} />
                </RNTesterBlock>
                <RNTesterBlock title="Toolbar with custom overflowIcon">
                    <ToolbarAndroid
                        actions={toolbarActions}
                        overflowIcon={require('./bunny.png')}
                        style={styles.toolbar} />
                </RNTesterBlock>
            </RNTesterPage>
        );
    },
    _onActionSelected: function(position) {
        this.setState({
            actionText: 'Selected ' + toolbarActions[position].title,
        });
    },
});

var toolbarActions = [
    {title: 'Create', icon: require('image!ic_create_black_48dp'), show: 'always'},
    {title: 'Filter'},
    {title: 'Settings', icon: require('image!ic_settings_black_48dp'), show: 'always'},
];

var styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#e9eaed',
        height: 56,
    },
});



// 导出类
// node.js 写法
// module.exports = loginView;

// ES6 写法
export { ToolbarAndroidExample  as DemoView};




