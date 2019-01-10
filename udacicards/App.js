import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View 
} from 'react-native';
import NewDeck from './NewDeck';

export default class App extends Component {
    render() {
        return (
          <View style={styles.container}>
            <NewDeck />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
