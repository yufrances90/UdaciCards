import React, { Component } from 'react';
import { 
    StyleSheet, 
    View 
} from 'react-native';

import NewQuestion from './pages/NewQuestion';

export default class App extends Component {
    render() {
        return (
          <View style={styles.container}>
            <NewQuestion />
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
