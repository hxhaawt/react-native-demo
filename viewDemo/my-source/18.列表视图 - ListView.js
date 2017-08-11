
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView
} from 'react-native';

export class testDemo extends Component {
    constructor(props) {
        super(props);
        let movies = [
            {title: '肖申克的救赎'},
            {title: '这个杀手不太冷'},
            {title: '阿甘正传'},
        ];

        let dataSource = new ListView.DataSource({
            rowHasChange: (row1, row2) => row1 !== row2
        });

        this.state = {
            movies: dataSource.cloneWithRows(movies);
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource = {this.state.moves}
                    randerRow={
                        movie => <Text>{movie.title}</Text>
                    }
                />
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

});

AppRegistry.registerComponent('viewDemo', () => testDemo);











