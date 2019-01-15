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
            <View style={globalStyles.centeredContainer}>
                <View>
                    <Text style={styles.deckTitle}>
                        {selectedDeck.title}
                    </Text>
                    <Text style={styles.deckDetail}>
                        {selectedDeck.qids.length} cards
                    </Text>
                </View>
                <View>
                    <TouchableOpacity 
                        style={styles.startBtn}
                        onPress={this.handleStartQuiz.bind(this)}
                    >
                        <Text style={styles.startBtnText}>
                            Start Quiz
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.addBtn}
                        onPress={this.handleAddNewQuestion.bind(this)}
                    >
                        <Text style={styles.addBtnText}>
                            Add New Question
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    deckTitle: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    deckDetail: {
        fontSize: 12,
        color: '#8d8d8d',
        textAlign: 'center'
    },
    startBtn: {
        ...globalStyles.button,
        marginTop: 40,
        borderColor: '#006666'
    },
    startBtnText: {
        ...globalStyles.buttonText,
        color: '#006666'
    },
    addBtn: {
        ...globalStyles.button,
        marginTop: 10,
        borderColor: '#ff0000'
    },
    addBtnText: {
        ...globalStyles.buttonText,
        color: '#ff0000'
    }
});