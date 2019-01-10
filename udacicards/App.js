import React, { Component } from 'react';
import { 
    View 
} from 'react-native';

import globalStyles from './styles/styles';

import PIndividualDeck from './pages/PIndividualDeck';

export default class App extends Component {
    render() {
        return (
          <View style={globalStyles.centeredContainer}>
            <PIndividualDeck />
          </View>
        );
    }
}
