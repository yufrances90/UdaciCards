import React, { Component } from 'react';
import { 
    View 
} from 'react-native';

import globalStyles from './styles/styles';

import NewDeck from './pages/NewDeck';

export default class App extends Component {
    render() {
        return (
          <View style={globalStyles.centeredContainer}>
            <NewDeck />
          </View>
        );
    }
}
