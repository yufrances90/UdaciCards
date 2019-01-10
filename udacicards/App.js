import React, { Component } from 'react';
import { 
    View 
} from 'react-native';

import globalStyles from './styles/styles';

import PDeckList from './pages/PDeckList';

import { generateAndSaveInitialData } from './utils/utility';

export default class App extends Component {

    state = {
        decks: {},
        questions: {}
    }

    componentDidMount() {

        const { decks, questions } = generateAndSaveInitialData();

        this.setState({
            decks,
            questions
        })
    }
    
    render() {

        const { decks, questions } = this.state;

        return (
          <View style={globalStyles.centeredContainer}>
            <PDeckList decks={decks} questions={questions} />
          </View>
        );
    }
}
