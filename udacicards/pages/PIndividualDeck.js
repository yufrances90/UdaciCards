import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity,
    ActivityIndicator,
    AlertIOS
} from 'react-native';

import globalStyles from '../styles/styles';
import IndividualDeck from '../components/IndividualDeck';

export default class PIndividualDeck extends Component {

    state = {
        selectedDeck: null
    }

    componentDidMount() {

        const { navigation } = this.props;

        const selectedDeck = navigation.getParam('deck', null);

        console.log("Selected Deck: ", selectedDeck);

        this.setState({
            selectedDeck
        });
    }

    handleStartQuiz() {

        const { selectedDeck } = this.state;

        AlertIOS.alert(
            'Quiz Start',
            'Are you sure?',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {
                text: 'Continue',
                onPress: () => this.props.navigation.navigate('QuizV', {
                    qids: selectedDeck.qids,
                    deck: selectedDeck.title
                }),
              },
            ],
        );
    }

    handleAddNewQuestion() {
        this.props.navigation.navigate('NQuestion', {
            deckTitle: this.state.selectedDeck.title
        });
    }

    render() {

        const { selectedDeck } = this.state;

        if (!selectedDeck) {
           return <ActivityIndicator />
        }

        return (
            <IndividualDeck
                selectedDeck={selectedDeck}
                handleStartQuiz={this.handleStartQuiz.bind(this)}
                handleAddNewQuestion={this.handleAddNewQuestion.bind(this)} 
            />
        );
    }
}

const styles = StyleSheet.create({
});