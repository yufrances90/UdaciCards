import React, { Component } from 'react';
import { 
    View 
} from 'react-native';

import globalStyles from './styles/styles';

import PDeckList from './pages/PDeckList';

export default class App extends Component {
    render() {
        return (
          <View style={globalStyles.centeredContainer}>
            <PDeckList />
          </View>
        );
    }
}
