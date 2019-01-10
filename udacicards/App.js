import React, { Component } from 'react';
import { 
    View 
} from 'react-native';

import globalStyles from './styles/styles';

import PDeckList from './pages/PDeckList';

import { generateAndSaveInitialData } from './utils/utility';

export default class App extends Component {

    componentDidMount() {
        generateAndSaveInitialData();
    }
    
    render() {
        return (
          <View style={globalStyles.centeredContainer}>
            <PDeckList />
          </View>
        );
    }
}
