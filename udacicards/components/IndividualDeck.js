import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity
} from 'react-native';

import globalStyles from '../styles/styles';

export default class IndividualDeck extends Component {
    render() {

        const {
            selectedDeck,
            handleStartQuiz,
            handleAddNewQuestion
        } = this.props;

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
                        onPress={handleStartQuiz}
                    >
                        <Text style={styles.startBtnText}>
                            Start Quiz
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.addBtn}
                        onPress={handleAddNewQuestion}
                    >
                        <Text style={styles.addBtnText}>
                            Add New Question
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
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

